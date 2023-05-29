# Uma Plataforma para o desenvolvimento de Aplicações *Web* extensíveis baseada em *Micro-Frontends* 

Olá ✨!

Você que é dev FrontEnd, já teve contato com MicroFrontEnds? Se interessa pelo assunto?

Me chamo Guilherme Prezzi, sou Arquiteto FrontEnd na TOTVS, formando em Análise e Desenvolvimento de Sistemas pela UNISINOS, e convido você para conhecer um pouco
sobre os desafios que o uso de MicroFrontEnd introduz. Vamos experimentar uma solução que estou desenvolvendo, junto com outros desenvolvedores, para suprir a falta de ferramentas e conceitos para lidar com essa arquitetura em qualquer escala.

Este CodeSandbox funcionará como um *Playground* de experimentação da solução e leva em média 20 minutos para executá-lo. Ao final, peço encarecidamente 🙏 que você participe de um questionário **anônimo** rápido sobre como foi sua experiência de uso.

> Este Playground e Questionário fazem parte do Trabalho de Conclusão de curso **"Uma Plataforma para o desenvolvimento de Aplicações *Web* extensíveis baseada em *Micro-Frontends*"**. As pessoas responsáveis pela pesquisa são o Professor Dr. Christopher da Rosa Pohlmann, da Escola Politécnica
> da UNISINOS, e o aluno de graduação Guilherme Prezzi, do curso de Análise e Desenvolvimento de Sistemas.
> Quaisquer dúvidas, você pode entrar em contato pelo email guilhermeprezzi1997@gmail.com ou pelo WhatsApp +55 (51) 9 9726-4901.

[Compartilhe isso no WhatsApp](https://wa.me/?text=Voc%C3%AA%20que%20%C3%A9%20desenvolvedor%20FrontEnd%2C%20j%C3%A1%20teve%20contato%20com%20MicroFrontEnds%3F%20Se%20interessa%20pelo%20assunto%3F%0AParticipe%20da%20pesquisa%20%2AUma%20Plataforma%20para%20o%20desenvolvimento%20de%20Aplica%C3%A7%C3%B5es%20_Web_%20extens%C3%ADveis%20baseada%20em%20_Micro-Frontends_%2A%21%0A%0AMe%20chamo%20Guilherme%20Prezzi%2C%20sou%20Arquiteto%20FrontEnd%20na%20TOTVS%2C%20formando%20em%20An%C3%A1lise%20e%20Desenvolvimento%20de%20Sistemas%20pela%20UNISINOS%2C%20e%20convido%20voc%C3%AA%20para%20conhecer%20um%20pouco%20sobre%20os%20desafios%20que%20o%20uso%20de%20MicroFrontEnd%20introduz%2C%20e%20experimentar%20uma%20solu%C3%A7%C3%A3o%20que%20estou%20desenvolvendo%2C%20junto%20com%20outros%20desenvolvedores%2C%20para%20suprir%20a%20falta%20de%20ferramentas%20e%20conceitos%20para%20lidar%20com%20essa%20arquitetura%20em%20qualquer%20escala.%0A%0AAcesse%3A%20https%3A%2F%2Fcodesandbox.io%2Fp%2Fgithub%2Fmenosprezzi%2Fstribord-example%2Fmain)

Se você quiser saber mais sobre o que é MicroFrontEnd e o que motivou essa pesquisa, acesse `docs/MicroFrontEnd.md`.

Além disso, a motivação dessa pesquisa será apresentada no [**TDC INNOVATION 2023**, no dia 16/06, na trilha de Web / FrontEnd](https://thedevconf.com/tdc/2023/innovation/trilha-web-e-front-end).

# Desafio

Imaginamos que temos um Produto SaaS de Marketing que apresenta, entre suas páginas, uma home com um Dashboard contendo gráficos importantes para o cliente.

A aplicação FrontEnd Web desta solução começa a crescer e logo pensamos que é uma boa ideia quebrar ela em módulos menores, cada um com seu conjunto de funcionalidades e páginas, com a utilização de MicroFrontEnd (*MFE*). Ficamos então com uma aplicação *"mãe"* (chamada de *shell*, no conceito de MicroFrontEnds) que tem a responsabilidade de ser uma *casca* que integra os demais MicroApps em uma só aplicação.

<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/mfes-produto.png" />

Isso possibilitaria também que tivéssemos um time (*squad*) responsável para cada MicroApp, segregando suas responsabilidades.

Essa abordagem introduz um detalhe: A aplicação **my-product-web** agora dependerá de outras 3 aplicações para funcionar, fazendo com que a *squad* responsável seja obrigada a cuidar da integração com os outros 3 componentes em sua aplicação, entendendo o que e de que forma eles expõem (ou seja, sua interface pública, seus *contratos* de API). Essa responsabilidade cresce com o número de módulos. Além disso, as demais *squads* tornam-se agora fornecedoras, e isso introduz à elas a responsabilidade de cuidar do que está sendo exposto.

O ideal é termos um cenário onde esta relação é invertida. Dessa forma, a *squad* que detêm o componente **my-product-web** torna-se então uma única fornecedora e a responsabilidade manter a integração fica distribuída entre as *squads* que consomem a partir dela, uma *Inversão de Controle*.

<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/mfes-invertido.png" />

Mas como fazer isso mantendo o propósito de *casca* que a aplicação **my-product-web** deve possuir, sendo a camada de integração das demais funcionalidades? Como atingir esse objetivo com MicroFrontEnds?

Tendo em vista os desafios que temos ao lidar com MFEs, pensamos em criar o **Stribord**.

## Stribord

<img align="left" src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/stribord-logo.png" alt="Logo do Stribord" width="120"/>**Stribord** é uma plataforma de **desenvolvimento**, **gestão** e **orquestração** de aplicações orientadas a arquitetura de MicroFrontEnds. Seu propósito é fornecer a tecnologia necessária para resolver os problemas comuns à arquitetura distribuída presentes em MFEs, trazendo conceitos estruturais que fundamentem o design de sistemas em MFE e soluções técnicas que permitam executar essa arquitetura, visando garantir a integração não só entre os componentes mas também entre suas equipes.

Através da CLI e SDKs, os desenvolvedores podem criar e configurar aplicações FrontEnd **extensíveis**, controlar como e quais MFEs serão consumidos, além manter e versionar meta-informações sobre estes MFEs e suas relações no modelo *GitOps*.

**Stribord é o (*Kubernetes+ArgoCD*) do MicroFrontEnd!**

Ficou na dúvida do funcionamento? Vamos executar o tutorial e logo você estará dominando o trabalho com Stribord!

> 🧐 **Por quê o nome *Stribord*?**
>
> Como as demais tecnologias de aplicações distribuídas fazem referência a termos náuticos (ex. Docker, Kubernetes, Istio), **Stribord** foi o nome escolhido por representar orientação à face direita de uma embarcação. E como FrontEnd é a *cara/face* de um sistema... fez sentido 😄
>
> # Stribord
>
> **AERONÁUTICA • MARINHA**
>
> *substantivo masculino*
>
> Do francês-antigo, significa **Estibordo**. É o lado direito de quem se encontra numa embarcação, voltado para a sua proa.

### Conceitos

<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/stribord-concepts.png" />

## Tutorial

Dado o cenário comentado anteriormente, a ideia é criarmos uma aplicação que receberá funcionalidades de outra aplicação, e faremos isso utilizando o **Stribord**. Nesse exemplo, vamos apenas considerar essa estrutura de aplicações:

- **app**: Sendo um Extendable do tipo **App**, ou seja, uma aplicação FrontEnd que fornecerá a capacidade de ser extendida por outras
- **extension**: Sendo um exemplo de uma MicroApp que estenderá a aplicação **app**, adicionando novas funcionalidades à ela. Ou seja, um Extendable do tipo **Extension**.

Nese tutorial estaremos utilizando **React v16, TypeScript e Webpack.**

Vamos fazer os seguintes passos:

1. Realizar o **Setup do Stribord em um Projeto**: para podermos utilizar sua CLI e SDK.
2. **Criar Pontos de Extensão**: permitindo que MFEs estendam as funcionalidades da nossa aplicação.
3. **Publicar um Projeto na Plataforma**: Para que a plataforma conheça os detalhes do seu projeto e possa orquestrar os MFEs relacionados.
4. **Implementar um Ponto de Extensão**: Para que possamos estender as funcionalidades de uma aplicação.
5. **Criar um Deployment**: Configurando o que deve ser carregado pela **app**.

Ao final, teremos esse resultado:

<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/resolved.png" alt="resolved" style="zoom: 50%;" />

Onde o Card circulado é uma funcionalidade carregada de uma **Extension**, e seu botão *"View Details"* leva o usuário para uma nova página, também vinda dessa **Extension**.

Vamos utilizar o CodeSandbox para a executar este *Playground*. Para iniciar, basta começar a editar este sandbox para realizar o **Fork** em sua conta. Você pode criar uma conta no CodeSandbox gratuitamente utilizando sua conta do Github, Google ou Apple.

O Playground está rodando em um container Linux Debian com Node v16 já pré-instalado.

<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/condesandbox-anatomy.png" style="zoom: 50%;" />

Logo você vai perceber que o CodeSandbox é bem parecido com o seu **VSCode**. Qualquer dúvida, dê uma olhada [aqui](https://codesandbox.io/docs/learn/repositories/editors).

### Repositório

Este repositório utiliza de Yarn Workspaces para organizar o projeto, apenas para facilitar a execução do experimento. Porém, **o Stribord não obriga você possuir as aplicações em um monorepo** e nem uma determinada estrutura de arquivos. Na raiz do projeto deste exemplo, você irá enxergar:

- apps
  - **app**: Uma aplicação React v16 com Webpack + Module Federation e Ionic (apenas como lib de UI). Representará o nosso *shell*. Estará rodando na porta 3001.
    - src: Onde fica nosso código fonte
      - components: Os diversos componentes React de nossa aplicação, como a Página Dashboard.
      - mock-data: Mock dos dados de uma API para executarmos nosso teste.
      - types: As assinaturas que nossa aplicação conhece.
      - app.tsx: O componente principal renderizado pela aplicação, responsável pelo seu setup.
      - bootstrap.tsx: A execução principal da aplicação. Por estarmos utilizando de Module Federation como nossa engine, é necessário para possibilitar o carregamento de remotes.
      - routes.tsx: Onde está declarado as rotas da aplicação
  - **extension**: Uma aplicação React, assim como a **app**. Representará um MFE que interage com a aplicação **app**. Estará rodando na porta 3002.

---

<br />
<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/step-1.png" />

### 1. Setup do Stribord em um Projeto
  
Para iniciarmos, vamos realizar o *setup* do **Stribord** na aplicação **app**.
Aqui, já temos os pacotes da ferramenta (`@stribord/cli` e `@stribord/react-client`) já pré-instalados.

Dito isso, vamos inicializar o **Stribord** na aplicação. Isso criará o ambiente local do Stribord para que possamos executar nossos testes locais.

Abra um terminal no CodeSandbox (como o gif abaixo), entre na pasta do pacote **app** (`cd apps/app`) e execute o comando `yarn execute stribord init`.

<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/open-terminal-codesandbox.gif" alt="open-terminal-codesandbox" />

Seguindo as perguntas, você irá responder:

✔ Enable remote synchronization? If you want to use Stribord only locally, just disable it. (You can toggle it later too) · **no**

✔ The Id of your Domain · **stribord-examples**

✔ The Id of the extendable that you want to create · **@stribord-examples/app**

✔ Select the Extendable's Type · **app**

✔ Which framework will be used? · **@stribord/react-client**

A plataforma foi desenvolvida para operar de forma distribuida, da mesma forma que você usa o seu Git: Você tem o seu Local e o seu Remote (que chamamos aqui de **BackEnd**). Assim, possibilitamos que você realize alterações e submeta ao **BackEnd** para publicar. Podemos fornecer uma série de automações que permitem, por exemplo, verificar se suas alterações não irão impactar negativamente alguma **Extension** que consome os seus pontos de extensão (gerando assim uma *breaking change*) e permitir que os devs tomem ações proativamente.

> ℹ️ Observação: A plataforma não substitui o Git. Você ainda terá seus repositórios. **O que a plataforma entende de alterações e realiza o controle são as meta-informações do seu Extendable, apenas.**

#### Setup de Código

No caso de **Extendable** do tipo **App**, é necessário um setup adicional feito em código.

Basta adicionar as linhas abaixo no arquivo `apps/app/src/app.tsx`:

```tsx
import {
  StribordDeployment,
  StribordHost,
  HostConfig,
  WebpackLoader,
  LocalBackend,
} from '@stribord/react-client';

import manifest from './manifest';

// ...

const stribordConfig: HostConfig = {
  backend: new LocalBackend(), // Vamos utilizar o Local como BackEnd
  loader: new WebpackLoader(), // A tecnologia utilizada para carregar MFEs. Stribord suportará não só o Webpack, mas também ESM Native Modules e entre outros Bundlers.
  appManifest: manifest // Manifesto é onde declaramos o que essa aplicação implementa para que outros Extendables possam consumir.
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

Feito isso, confirme se sua aplicação está ok! Estamos prontos para adicionar **Pontos de Extensão** à ela.

<br />
<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/step-2.png" />

### 2. Criar Pontos de Extensão

O conceito de **Ponto de Extensão** é o racional fundamental que sustenta o modelo de lidar com MicroFrontEnds no **Stribord**. Imaginamos que nossa aplicação é uma Casa. Criar Pontos de Extensão nela seria como colocar novas tomadas nos comodos que você escolher, possibilitando que outras pessoas *pluggem* novas coisas à elas, desde que seja o tipo de tomada correta, ou seja, desde que respeitem o **contrato de API** que a aplicação expõe.

![plugin-types](https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/plugin-types.jpg)

O tipo de Ponto de Extensão chamado **Slot** é utilizado para possibilitar que outras **Extensions** possam adicionar qualquer componente à nossa UI.

Vamos criar um **Ponto de Extensão** do tipo **Slot** que possibilite que outras **Extensions** adicionem um card a Dashboard.

No diretório do pacote **app** (`apps/app`), execute:

```bash
yarn exec stribord extension-point
```

Respondendo:

✔ The id of this Extension point · **dashboard-card**

✔ Select the type of this Extension point · **@stribord/react-client:Slot**

✔ Where the implementation will be stored? (from source dir) · **extension-points**

Dê uma olhada no arquivo `apps/app/src/extension-points/dashboard-card-extension.ts`. Ele contém a declaração do nosso **Ponto de Extensão**.

> 💡 Você pode adicionar uma descrição ao ponto de extensão. Basta adicionar ao JSDoc da declaração um `@description`, como no exemplo abaixo:
>
> ```tsx
> /**
>  * @stribordExtensionPoint 'dashboard-card'
>  * @description Add a new card to Home Dashboard
>  */
> export type DashboardCardSlot = Slot<DashboardCardSlotProps>;
> ```
>
> Isso é bacana para ter uma documentação mínima do que seu **Extendable** expõe, para que outros desenvolvedores identifiquem-na facilmente.

#### Instalando Ponto de Extensão

Adicione as linhas abaixo no componente `DashboardPage` (`apps/app/src/components/dashboard-page.tsx`):

```ts
import { IonButton, IonCol, IonContent, IonGrid, IonLoading, IonRow } from '@ionic/react';
import { useSlot } from "@stribord/react-client";
import React, { Suspense } from 'react';

// ...

import { DashboardCardSlot } from '../extension-points/dashboard-card-extension';

// ...
export const DashboardPage = () => {
  // ...
  const DashboardCardSlot = useSlot<DashboardCardSlot>('dashboard-card', true);
  return (
  // ...
          <IonCol size="12" sizeMd="4">
            {/* ... */}
          </IonCol>
          {/* Após o IonCol que envolve o Card já existente */}
          
          <Suspense fallback={<IonLoading />}>
            <DashboardCardSlot />
          </Suspense>
  );
// ...
}
```

Pronto! Agora, as **Extensions** que implementarem o ponto `dashboard-card` do **app** `@stribord-examples/app` aparecerão na Dashboard. Porém, ainda não temos nenhuma **extension**.

<br />
<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/step-3.png" />

### 3. Publicando o Projeto

Para possibilitar que outros desenvolvedores possam consumir os seus **Pontos de Extensão**, é preciso publicar na plataforma. Ao publicar, a CLI do **Stribord** irá escanear seu projeto para montar as meta-informações necessárias, como a lista de **Pontos de Extensão** disponíveis.

No diretório do pacote **app** (`apps/app`), execute no terminal:

```bash
yarn exec stribord publish --local
```

O **Stribord** gerará um pacote NPM, contendo os contratos do que ela expõe para que as **Extensions** possam consumir. Por isso, podemos dizer que o **Stribord** possui 100% *end-to-end type-safe* 💙TS💙 (como o famoso [tRPC](https://trpc.io/)).

> Em um cenário real (com o *sync* ativado), este pacote seria publicado no registry NPM configurado no projeto, disponibilizando esse pacote para ser instalado em outros projetos. Aqui, no nosso exemplo, o pacote será utilizado apenas localmente, sem necessidade de publicar.

<br />
<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/step-4.png" />

### Implementar Pontos de Extensão

Agora, vamos mudar de papel: Somos desenvolvedores de um módulo que estenderá a aplicação **app**. Estaremos adicionando as funcionalidades do nosso negócio. Vamos adicionar um card na dashboard que *apresente um gráfico de quantidade de novos Leads por período*.

#### Realizando Setup

Precisamos inicializar este projeto com o comando `yarn exec stribord init` no diretório `apps/extension`, informando:

✔ Enable remote synchronization? If you want to use Stribord only locally, just disable it. (You can toggle it later too) · **no**

✔ The Id of your Domain · **stribord-examples**

✔ The Id of the extendable that you want to create · **@stribord-examples/extension**

✔ Select the Extendable's Type · **extension**

✔ Which framework will be used? · **@stribord/react-client**

Após isso, você terá que adicionar a seguintes linhas no `apps/extension/webpack.config.js` do projeto **extension**:

```js
// ...
		new ModuleFederationPlugin({
      name: 'StribordExamplesExtension',
      filename: './remoteEntry.js',
      exposes: {
        // Localize o ModuleFederationPlugin e adicione uma nova entrada de exposes na configuração
        './manifest': './src/manifest', // Expõe o manifest dessa extension.
      },
      // ...
    });
```

> ℹ️ No futuro, o **Stribord** fornecerá um utilitário para minimizar a necessidade de configuração manual no Webpack (e nos demais bundlers suportados).

Agora, podemos estender a Aplicação **app**.

#### Estendendo Ponto de Extensão

Do diretório da extension (`apps/extension`), execute no terminal:

```bash
yarn exec stribord extend
```

Respondendo:

✔ Which Extendable you want to extend? · **@stribord-examples/app**

✔ Which Extension Point you want to implement? · **dashboard-card**

✔ Which name you want to gave to this implementation? · **leads**

✔ Where the implementation will be stored? (from source dir) · **implementations**

O comando irá gerar um código inicial para a **implementação** do **Ponto de Extensão**, e também colocara a informação no `manifest.ts` do projeto.

Você pode editar o arquivo gerado em `apps/extension/src/implementations/leads-dashboard-card.tsx`

#### Testando a sua Implementação

Para testar sua implementação isoladamente, você pode importar o seu componente normalmente no `apps/extension/src/app.tsx` do projeto **extension** e executar o comando para realizar o *serve* da aplicação:

```bash
yarn run start:extension
```

Deixe a aplicação executando.

##### Publicando uma Extensão

Da mesma forma que publicamos o **app**, vamos publicar o **extension**.

Por se tratar de uma **Extension**, o **Stribord** precisará saber em que URL os estáticos dessa aplicação estarão disponíveis para que seja feito o seu carregamento posteriormente.

Como estamos executando ela localmente, vamos informar a URL em que a aplicação **extestension** está executando.

<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/extension-url.png" alt="image-20230527155045901" style="zoom:50%;" />

No exemplo da imagem, a url a ser informada seria `https://g3md3e-3002.csb.app/remoteEntry.js`.

Então, execute no terminal (no diretório `apps/extension`):
```bash
yarn exec stribord publish --local
```

Respondendo:

✔ Remote entry url (eg. https://my.site.com/remoteEntry.js) · **\<URL DE PREVIEW DO CODESANDBOX>/remoteEntry.js**

<br />
<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/step-5.png" />

### 5. Criar Deployment

Agora carregaremos a extensão criada na nossa aplicação **app**. Se você recarregar a aplicação **app** vai notar que nada mudou e sua implementação não apareceu na página Dashboard. Não estranhe, o **Stribord** separa o carregamento de **Extensions** de uma **App** em algo chamado **Deployments**.

O **Deployment** é como disponibilizamos o controle de quais **Extensions** devem ser carregadas (e qual versão, caso o sua organização realize algum versionamento).

Podemos ter vários **Deployments** de uma **App** contendo diferentes configurações. Isso pode ser utilizado para criar testes A/B, FeatureFlags, customizações específicas para clientes etc.

Para registrar um **Deployment** de uma **App**, basta executar o comando abaixo no terminal, a partir do diretórido da **app** (`apps/app`):

```bash
yarn exec stribord deployment
```

Respondendo:

✔ Id · **@stribord-examples/app:my-product**

✔ Description · **My product deployment**

✔ What is the URL that this app will be deployed at? · http://localhost:3001

Url onde essa aplicação estará disponível e rodando. Apenas para manter a informação.

✔ Which extensions you will this deployment use? · **@stribord-examples/extension**

Selecionar quais extensões estarão habilitadas nesse **Deployment**. (Utilize a tecla <kbd>espaço</kbd> para selecionar).

Feito isso, precisamos informar a plataforma em *runtime* que estamos utilizando o **Deployment** `@stribord-examples/app:my-product` recém criado.

Para isso, localize essas linhas no arquivo `apps/app/src/app.tsx`. Adicione a prop `id` ao componente `StribordDeployment` com o valor `@stribord-examples/app:my-product`.

```tsx
      <StribordDeployment id="@stribord-examples/app:my-product">
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

Certifique-se que a **extension** esteja executando e faça um *restart* na **app**, executando:

```
yarn run start:app
```

```
yarn run start:extension
```

Você irá ver sua implementação na página de Dashboard!

---

### Deixando mais bonito (e funcional) ✨

Colocamos um novo pedaço na tela. Agora vamos trazer a funcionalidade! Além disso, vamos ver como definir melhor o formato que o componente deve ser renderizado na tela.

#### Compartilhando dados

O interessante em MicroFrontEnds é poder compartilhar dados entre as peças da aplicação e no **Stribord** isso é fácil como lidar com qualquer componente nativo do seu Framework, nesse caso aqui, o React.

Vamos definir um novo **contrato** para o nosso **Slot**. Para isso, vamos modificar o `DashboardCardSlotProps` para que possamos compartilhar o filtro selecionado `FilterBy` e definir qual formato de componente deve ser utilizado para renderizar o Card na tela através de um `wrapper` a ser definido:

Abra o arquivo `apps/app/src/extension-points/dashboard-card-extension.tsx`.
```ts
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

Vamos compartilhar as informações necessárias a partir da `DashboardPage`:

Abra o arquivo `apps/app/src/components/dashboard-page.tsx`
```tsx
// ...

// Criar o Wrapper que deverá envolver todos os cards adicionados pelo Slot.
const DashboardCardSlotWrapper = (props: DashboardCardProps) => (
  <IonCol size="12" sizeMd="4">
  	<DashboardCard {...props} />
	</IonCol>
);

export const DashboardPage = () => {
  // ...
          <Suspense fallback={<IonLoading />}>
    				{/* Passar as novas props para o Slot */}
            <DashboardCardSlot filterBy={filterBy} wrapper={DashboardCardSlotWrapper} />
          </Suspense>
  // ...
}
```

Você deve publicar o **app** novamente para que suas alterações sejam registradas na plataforma **Stribord** e que o pacote de **typings** seja gerado novamente. Execute dentro do diretório `apps/app`:

```
yarn exec stribord publish --local
```

> ℹ️ Em um cenário real, deve ser incrementado a versão do projeto no **package.json** pois nossa alteração alterou o **contrato** da aplicação, gerando quebras em quem consumia a última versão. No futuro, o **Stribord** irá identificar essas quebras e notificar os desenvolvedores que dependem desse ponto de extensão, através de automações de CI nos projetos.

#### Adicionando a funcionalidade no novo Card

Voltando à **extension**, vamos utilizar das informações compartilhadas para introduzir nossa funcionalidade. Além disso, como desenvolvedores da **extension**, devemos respeitar o novo contrato definido pelo **app**! Modifique a implementação `LeadsDashboardCard`:

Abra o arquivo `apps/extension/src/implementations/leads-dashboard-card.tsx` e copie e cole o código abaixo.
```ts
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

Salve e faça um *refresh* no *preview* do **app**. Teste os filtros e veja que agora a card possui sua funcionalidade!

# Parabéns ✨ (e muito obrigado 🙌)

Muito obrigado por ter participado do experimento até aqui! Saiba que isso foi fundamental para o projeto e para o meu Trabalho de Conclusão. 

Você agora é um *alpha-user* do **Stribord** 😄!

Caso queira, você pode me encontrar:
- [E-mail pessoal](mailto:guilhermeprezzi1997@gmail.com)
- [E-mail profissional](mailto:guilherme.prezzi@totvs.com.br)
- [WhatsApp](https://wa.me/5551997264901) (eu demoro, mas respondo)
- [LinkedIn](https://www.linkedin.com/in/guilherme-prezzi/) (entro com pouca frequência)

## Agora você pode responder o [questionário de avaliação clicando aqui](https://forms.gle/per81oGKZbtUP7g3A)

Há mais para descobrir com o **Stribord**, caso você queira. Vou deixar mais exemplos na seção **Indo Além** logo abaixo.

# Indo Além 🚀

## Como testar implementações localmente

Até aqui, mesmo rodando localmente tanto a **app** quanto a **extension**, realizamos todos os testes na **app**, ou seja, num cenário real, seria como estivéssemos tendo que publicar nosso projeto **extension** no ambiente para podermos testar nossa funcionalidade na **app** ou tendo que clonar e executar o **app** localmente para podermos rodar local.

Pensando em melhorar essa experiência de desenvolvimento, o **Stribord** possibilita que você aponte sua **extension** para uma **app** remota, assim como você faz quando você está consumindo um serviço de API REST, por exemplo: você passa a apontar para sua URL e testa sua integração com ele, sem a necessidade de rodar ele localmente.

Para isso, é simples: Crie um arquivo `.env` no diretório do projeto **extension** (`apps/extension`) com o conteúdo abaixo, substituindo a `<URL do app>` pela URL onde o **app** está rodando.

```
REMOTE_URL='<URL do app>/remoteEntry.js'
```

Após isso, modifique o `apps/extension/webpack.config.js` do **extension**, adicionado a seguinte configuração no `ModuleFederationPlugin`.

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

> ℹ️ No futuro, essa configuração manual também não será necessária.

Agora, vamos modificar o arquivo `apps/extenstion/src/bootstrap.tsx` do pacote **extension** para o seguinte:

Você pode copiar e colar o conteúdo abaixo diretamente.
```tsx
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

Certifique-se que a **app** está executando, pois agora estamos apontando para ela. Reexecute o *start* do projeto **extension** e abra seu *preview*.

Estaremos rodando diretamente nossa **extension** para executar testes. Em um cenário real, poderiamos apontar o nosso `.env` para para um **app** do ambiente de desenvolvimento ou, inclusive, produção. Algo do tipo `https://my-app.org.com`. Isso possibilitaria simular a execução fielmente sem a necessidade de realizar deploy.

## Desafio adicional: Não é só sobre Cards na tela

Com o **Stribord** você pode extender mais do que partes de uma página. Você pode utilizar o modelo de **Pontos de Extensão** para qualquer coisa na sua aplicação. Tente executar o próximo desafio: **Como utilizar o Stribord para adiocionar novas Páginas em uma aplicação?**

### Utilizando de Pontos de Extensão para adicionar novas Páginas

O **Stribord** oferece também o **tipo de Ponto de Extensão** chamado **Factory**. Com ele, você pode carregar qualquer **Função JavaScript**, definindo seus parâmetros e sua saída esperada.

Vamos experimentar o **Factory** para adicionar novas rotas à aplicação.

Para isso, execute os passos:

1. Criar um novo Ponto de Extensão

   - Id: `routes`

   - Type: `Factory`
   
   - Modifique seu contrato como no [exemplo](https://github.com/menosprezzi/stribord-example/blob/resolved-example/apps/app/src/extension-points/routes-extension.ts)

2. Instale o Ponto de Extensão no arquivo `apps/app/src/routes.tsx` como no [exemplo](https://github.com/menosprezzi/stribord-example/blob/resolved-example/apps/app/src/routes.tsx).

3. Publique o projeto **app**

4. Extenda o Ponto de Extensão `routes` no projeto extension

5. Crie um novo componente para ser a nova página adicionada, como no [exemplo](https://github.com/menosprezzi/stribord-example/blob/resolved-example/apps/extension/src/components/leads-details-page.tsx)

6. Adicione a rota para a nova página na implementação do **Ponto de Extensão**, como no [exemplo](https://github.com/menosprezzi/stribord-example/blob/resolved-example/apps/extension/src/implementations/leads-routes.tsx)

7. Adicione um botão a tela para navegar seu usuário até a nova página, como no [exemplo](https://github.com/menosprezzi/stribord-example/blob/resolved-example/apps/extension/src/implementations/leads-dashboard-card.tsx)

Caso queira consultar a lista de comandos, utilize:
```
yarn exec stribord --help
```

# Um cenário mais dinâmico: Personalização para Clientes

Personalização é um dos maiores desafios em Software (depois de cache validation e dar nome as coisas hahah 😄). Sempre há um tabu dentro das organizações quando um cliente solicita uma nova funcionalidade específica: Como suportar uma personalização sem *sujar* o código do nosso produto e, além disso, de forma escalável, sem necessitar uma grande operação?

No mundo *OnPremisses*, onde cada cliente detém uma versão do seu produto rodando isoladamente, é comum criarmos compilações específicas para cada cliente, com suas personalizações.

O mercado de soluções SaaS está em busca de soluções que permitam a extensibilidade das aplicações para atender seus clientes. Mas a pergunta que fica é: Como trazer a customização que se tinha nas aplicações OnPremise, de software de prateleira, para o mundo cloud e multi-tenância do SaaS? Seria MicroFrontEnds a resposta?

Você já viu que o **Stribord** separa o registro das **extendables** dos **deployments** (onde realmente descreve o que está ativo), possibilitando que uma Aplicação tenha *N* **deployments**. Com isso, podemos suportar ter o **deployment** `@my-org/app:my-special-client` que estende do **deployment** padrão da App, adiocionado **Extensions** específicas para atender a necessidade de um Cliente Especial, e isso já é possível no **Stribord**! O controle dessa dinâmica é você quem define!

```tsx
const TenantBasedDeployment = ({ children }) => {
  const userTenant = useUserTenant();
  return (
    <StribordDeployment id={userTenant}>{children}</StribordDeployment>
  );
}

const App = () => {
  return (
    <StribordHost config={stribordConfig}>
      <TenantBasedDeployment>
        {/* ... */}
      </TenantBasedDeployment>
    </StribordHost>
  );
}
```

[Já temos algumas empresas que utilizam de técnicas como essa](https://www.youtube.com/watch?v=9Xo-rGUq-6E) para suportar personalizações e acreditamos que com MFEs, boa parte das personalizações poderão ser atendidas, pois a porta de entrada para a interação do usuário é o FrontEnd.

# Futuro

O projeto existe há alguns meses e ainda tem muito para evoluir. Atualmente, ele não está *OpenSource*, mas faremos sua abertura em breve, juntamente com o site que estamos desenvolvendo, onde toda a documentação ficará disponível para os desenvolvedores.
Além disso, algumas funcionalidades estão planejadas:
- Portal Web & BackEnd
  - Visualizar catálogo de **Extendables** e seus **Extension Points** publicados em um determinado Domínio, facilitando a gestão visual
  - Configurações de parâmetros globais de Domínio. como Lint de Dependências e versões banidas, Controle de Acesso.
  - Observabilidade: Métricas de uso dos Pontos de Extensão
  - Fluxo de Depreciação de Ponto de Extensão
  - Notificar times caso haja mudanças em algum Extendable consumido
- Funcionalidades Runtime (SDK):
  - Estratégia de Resiliência e Rollback, para possibilitar voltar a uma versão antiga do Extendable caso um erro aconteça
  - Integração com plataformas de APM e Error Monitoring como o Sentry
  - Sistema de comunicação Reativa para comunicação desacoplada entre MFEs.
- Wrapper Angular
- Suporte a Native Federation

