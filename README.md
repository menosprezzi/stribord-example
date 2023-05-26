# Uma Plataforma para o desenvolvimento de Aplicações *Web* extensíveis baseada em *Micro-Frontends* 

<!-- Header da unisinos TCC (pegar da pesquisa do Marcelo Bonamigo) -->

# Iniciando

## O que é MicroFrontEnd e que problema ele resolve?

# Exemplo onde há problema

# Desafio

Como resolver? instigar aqui

## Stribord
Oque ele faz

### Roteiro/Indice do tutorial

### Setup

```bash
cd apps/app
```

```bash
yarn add -D @stribord/cli
```

```json
// Arquivo apps/app/package.json
{
  "scripts": {
      "postinstall": "stribord sync"
  }
}
```

```bash
yarn add @stribord/react-client @stribord/core-client
```

Do diretório da app
```bash
yarn exec stribord init
```
Domain: stribord-examples
Id: @stribord-examples/app
Ext type: app
Which framework will be used? · @stribord/react-client
Sync: N

### Setup de código

```tsx
// Arquivo app.tsx

const stribordConfig: HostConfig = {
  backend: new LocalBackend(),
  loader: new WebpackLoader(),
  appManifest: manifest
};

function App() {
  return (
    <StribordHost config={stribordConfig}>
      <StribordDeployment>
      {/* ... */}
      </StribordDeployment>
    </StribordHost>
  );
}
```


### Criando pontos de extensão

Do diretório da app
```bash
yarn exec stribord extension-point
```
Id: dashboard-card
type: Slot
Path: extension-points

Adicionando descrição a um ponto de extensão
> no futuro vai ter web para ver
```ts
/**
 * @stribordExtensionPoint 'dashboard-card'
 * @description Add a new card to Home Dashboard
 */
export type DashboardCardSlot = Slot<DashboardCardSlotProps>;
```

#### Instalando ponto de Extensão

```ts
// Arquivo src/components/dashboard-card-page.tsx
import { useSlot } from "@stribord/react-client";
import { DashboardCardSlot } from '../extension-points/dashboard-card-extension';

// ...
export const DashboardPage = () => {
  // ...
  const DashboardCardSlot = useSlot<DashboardCardSlot>('dashboard-card', true);
  // ...
}
```

```tsx
// Arquivo src/components/dashboard-card-page.tsx
// ...
          <IonCol size="12" sizeMd="4">
            <DashboardCard title={"Sales in " + filterBy}>
              <BarChart
                width={300}
                height={360}
                data={filterBy === FilterBy.YTD ? salesYtd : salesMtd}
              >
                <Bar dataKey="value" fill="#8884d8" />
                <XAxis dataKey="date" />
                <Legend />
              </BarChart>
            </DashboardCard>
          </IonCol>
          
          <Suspense fallback={<IonLoading />}>
            <DashboardCardSlot />
          </Suspense>
// ...
}
```

#### Publicando Extendable

Do diretório da app
```bash
yarn exec stribord publish --local
```

#### Extendendo um ponto de extensão
Uma vez publicado localmente, precisa fazer o link

Do diretório da extension
```bash
yarn link /project/home/menosprezzi/workspace/apps/app/.stribord
yarn add app-stribord-typings@workspace:^
```
SOMENTE UMA VEZ POR APP

FAZER OS DEMAIS PASSOS NO EXTENSION
@stribord-examples/extension

Do diretório da extension
```bash
yarn exec stribord extend
```
✔ Which Extendable you want to extend? · app
✔ Which Extendable you want to extend? · dashboard-card
✔ Which name you want to gave to this implementation? · leads
✔ Where the implementation will be stored? (from source dir) · implementations

editar o arquivo gerado

##### Testando o Componente

colocar o componente no app
```bash
yarn run start:extension
```

##### Publicando Extensão

Do diretório extension
```bash
yarn exec stribord publish --local
```
✔ Remote entry url (eg. https://my.site.com/remoteEntry.js) · URL LOCAL 3002


##### Como carregar extensões

Do diretório app
```bash
yarn exec stribord deployment
```
Id: @stribord-examples/app:my-client
Habilitar extensões:
@stribord-examples/extension

Restart na aplicação

```tsx
// Arquivo apps/app/src/app.tsx
      <StribordDeployment id="@stribord-examples/app:my-client">
        <IonReactRouter>
          <IonApp>
            <AppLayout>
              <IonRouterOutlet style={{ marginTop: 64 }}>
                <AppRoutes />
              </IonRouterOutlet>
            </AppLayout>
          </IonApp>
        </IonReactRouter>
      </StribordDeployment>
```

Rodar extension
O LocalBackend vai consultar as infos
```
yarn run start:extension
```

Refresh na aplicação


#### Definindo o contrato do ponto de Extensão

Compartilhando dados

```ts
// Arquivo apps/app/src/extension-points/dashboard-card-extension.tsx

// ...
import React from "react";

import { DashboardCardProps } from "../components/dashboard-card";
import { FilterBy } from "../types/filters";

interface DashboardCardSlotProps {
  wrapper: React.ComponentType<DashboardCardProps>;
  filterBy: FilterBy;
}

// ...
```

```ts
// Arquivo apps/app/src/components/dashboard-page.tsx

// ...

const DashboardCardSlotWrapper = (props: DashboardCardProps) => <IonCol size="12" sizeMd="4"><DashboardCard {...props} /></IonCol>;

export const DashboardPage = () => {
  // ...
          <Suspense fallback={<IonLoading />}>
            <DashboardCardSlot filterBy={filterBy} wrapper={DashboardCardSlotWrapper} />
          </Suspense>
  // ...
}
```

Publicar app novamente

> Em um cenário real, deve atualizar a versão do pacote

#### Respeitar o novo contrato

```ts
// Arquivo apps/extension/src/implementations/leads-dashboard-card.tsx

import { DashboardCardSlot } from "@stribord-examples/app-stribord-typings";
import React from "react";
import { Line, LineChart, Legend, XAxis } from "recharts";

import { leadsMtd, leadsYtd } from "../mock-data/leads";

/**
 * @stribordImplementation '@stribord-examples/app:dashboard-card'
 */
export const LeadsDashboardCard: DashboardCardSlot = ({
  wrapper: Wrapper,
  filterBy,
}) => {
  return (
    <Wrapper title={"New Leads " + filterBy}>
      <LineChart
        width={300}
        height={360}
        data={filterBy === "YTD" ? leadsYtd : leadsMtd}
      >
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <Legend />
        <XAxis dataKey="date" />
      </LineChart>
    </Wrapper>
  );
};

```

salve e olhe o app 3001

Testar os itens no filtro, veja se responde

### Testar extensão localmente

Habilitar app
```js
// Arquivo apps/app/webpack.config.js
  plugins: [
    // ...
    new ModuleFederationPlugin({
      name: "StribordExamplesExtension",
      filename: "./remoteEntry.js",
      exposes: {
        "./app": "./src/app"
      },
      // ...
    }
    //...
  ]
```

ela deve ser algo como https://5nqscy-3001.csb.app/
```bash
# Arquivo apps/extension/.env

REMOTE_URL='<url do app>/remoteEntry.js'
```

```js
  plugins: [
    // ...
    new ModuleFederationPlugin({
      remotes: {
        '@stribord-examples/app': [`StribordExamplesApp@${process.env.REMOTE_URL}`],
      },
      // ...
    })
  ]
```

```ts
// Arquivo apps/extension/src/bootstrap.tsx

import { Overrides, StribordOverrides } from '@stribord/react-client';
import RemoteApp from '@stribord-examples/app/app';
import React from 'react';
import ReactDOM from 'react-dom';

import manifest from './manifest';

const overrides: Overrides = {
  '@stribord-examples/extension': manifest
};

ReactDOM.render(
  <StribordOverrides value={overrides}>
    <RemoteApp />
  </StribordOverrides>,
  document.getElementById('root')
);
```

teste na 3002

### Extendendo ainda mais

#### Utilizando de pontos de extensão para adicionar rotas

> Sobre o Factory type

Do diretório app
```bash
yarn exec stribord extension-point
```
Id: routes
Type: Factory
Where: extension-points

```ts
import { Factory } from "@stribord/core-client";
import { ReactElement } from "react";

/**
 * @stribordExtensionPoint 'routes'
 * @description Add new routes to the app
 */
export type RoutesFactory = Factory<void, ReactElement[]>;
```

```tsx
// Arquivo apps/app/src/routes.tsx

import { IonRoute } from "@ionic/react";
import { useFactory } from "@stribord/react-client";
import React, { useMemo } from "react";

import { DashboardPage } from "./components/dashboard-page";
import { RoutesFactory } from "./extension-points/routes-extension";

export const AppRoutes = React.memo(() => {
  const externalRoutesFn = useFactory<RoutesFactory>("routes", true);
  const externalRoutes = useMemo(
    () => externalRoutesFn().reduce((acc, route) => acc.concat(route), []),
    [externalRoutesFn]
  );

  return (
    <>
      <IonRoute render={() => <DashboardPage />} path="/" exact />
      {externalRoutes}
    </>
  );
});

```

Publish novamente

##### Implementando novas rotas com o ponto de extensão Criado

No diretório extension, extenda

```bash
yarn exec stribord extend
```

✔ Which Extendable you want to extend? · @stribord-examples/app
✔ Which Extendable you want to extend? · routes
✔ Which name you want to gave to this implementation? · leads
✔ Where the implementation will be stored? (from source dir) · implementations
Extension Implementation created successfully! Open /src/implementations/leads-routes.tsx to code it.


crie uma nova pagina através do componente em /components/leads-details-page.tsx

```tsx
import { IonContent, IonButton, IonRouterLink } from "@ionic/react";
import React from "react";

export const LeadsDetailsPage = () => {
  return (
    <IonContent className="ion-padding">
      <h1 style={{ fontWeight: "bold" }}>Leads</h1>
      <p>This is a new Page!</p>
      <IonRouterLink routerLink={"/"}>
        <IonButton fill="clear">Back to Home</IonButton>
      </IonRouterLink>
    </IonContent>
  );
};

```

adiocione a rota no ponto implementado

```tsx
// Arquivo implementations/leads-routes.tsx

import { IonRoute } from "@ionic/react";
import { RoutesFactory } from "@stribord-examples/app-stribord-typings";
import React from "react";

import { LeadsDetailsPage } from "../components/leads-details-page";

/**
 * @stribordImplementation '@stribord-examples/app:routes'
 */
export const LeadsRoutes: RoutesFactory = () => {
  return [
    <IonRoute key="leads" render={() => <LeadsDetailsPage />} path="/leads" />,
  ];
};

```

Agora basta adicionar um link para sua nova página, vamos utilizar um botão no card adicionado anteriormente

```tsx
import { IonButton, IonRouterLink } from "@ionic/react";

//...

export const LeadsDashboardCard: DashboardCardSlot = ({ wrapper: Wrapper, filterBy }) => {
  return (
    <Wrapper
      title={"New Leads " + filterBy}
      cardButtons={[
        <IonRouterLink routerLink={"leads"} key="leads">
          <IonButton fill="clear">View Details</IonButton>
        </IonRouterLink>,
      ]}
    >
    {/* ... */}
    </Wrapper>
  );
}
```

Teste na 3002

um botão deve aparecer no seu card