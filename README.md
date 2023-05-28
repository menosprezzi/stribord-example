# Uma Plataforma para o desenvolvimento de Aplicações *Web* extensíveis baseada em *Micro-Frontends* 

Olá ✨!

Você que é desenvolvedor FrontEnd, já teve contato com MicroFrontEnds? Se interessa pelo assunto?

Me chamo Guilherme Prezzi, sou Arquiteto FrontEnd na TOTVS, formando em Análise e Desenvolvimento de Sistemas pela UNISINOS, e convido você para conhecer um pouco
sobre os desafios que o uso de MicroFrontEnd introduz. Vamos experimentar uma solução que estou desenvolvendo, junto com outros desenvolvedores, para suprir a falta de ferramentas e conceitos para lidar com essa arquitetura em qualquer escala.

Este CodeSandbox funcionará como um *Playground* de experimentação da solução e leva em média 20 minutos para executá-lo. Ao final, peço encarecidamente 🙏 que você participe de um questionário **anônimo** rápido sobre como foi sua experiência de uso.

> Este Playground e Questionário fazem parte do Trabalho de Conclusão de curso **"Uma Plataforma para o desenvolvimento de Aplicações *Web* extensíveis baseada em *Micro-Frontends*"**. As pessoas responsáveis pela pesquisa são o Professor Dr. Christopher da Rosa Pohlmann, da Escola Politécnica
> da UNISINOS, e o aluno de graduação Guilherme Prezzi, do curso de Análise e Desenvolvimento de Sistemas.
> Quaisquer dúvidas, você pode entrar em contato pelo email guilhermeprezzi1997@gmail.com ou pelo WhatsApp +55 (51) 9 9726-4901.

[Compartilhe isso no WhatsApp](https://wa.me/?text=Voc%C3%AA%20que%20%C3%A9%20desenvolvedor%20FrontEnd%2C%20j%C3%A1%20teve%20contato%20com%20MicroFrontEnds%3F%20Se%20interessa%20pelo%20assunto%3F%0AParticipe%20da%20pesquisa%20%2AUma%20Plataforma%20para%20o%20desenvolvimento%20de%20Aplica%C3%A7%C3%B5es%20_Web_%20extens%C3%ADveis%20baseada%20em%20_Micro-Frontends_%2A%21%0A%0AMe%20chamo%20Guilherme%20Prezzi%2C%20sou%20Arquiteto%20FrontEnd%20na%20TOTVS%2C%20formando%20em%20An%C3%A1lise%20e%20Desenvolvimento%20de%20Sistemas%20pela%20UNISINOS%2C%20e%20convido%20voc%C3%AA%20para%20conhecer%20um%20pouco%20sobre%20os%20desafios%20que%20o%20uso%20de%20MicroFrontEnd%20introduz%2C%20e%20experimentar%20uma%20solu%C3%A7%C3%A3o%20que%20estou%20desenvolvendo%2C%20junto%20com%20outros%20desenvolvedores%2C%20para%20suprir%20a%20falta%20de%20ferramentas%20e%20conceitos%20para%20lidar%20com%20essa%20arquitetura%20em%20qualquer%20escala.%0A%0AAcesse%3A%20https%3A%2F%2Fcodesandbox.io%2Fp%2Fgithub%2Fmenosprezzi%2Fstribord-example%2Fmain)

# Iniciando

## O que é MicroFrontEnd?

No *FrontEnd* de um sistema é comum que, com o passar do tempo, a aplicação *Web* tornar-se em um grande monolito, com uma larga base de código, aumentando a sua complexidade de manutenção (PELTONEN et al., 2021).

<img align="center" src="https://micro-frontends.org/ressources/diagrams/organisational/monolith-frontback-microservices.png" alt="FrontEnd Monolítico" width="600"/>

<small>Fonte: Micro-frontends.org.</small>

*Micro-FrontEnds* traz os conceitos de *Microservices* para a camada *FrontEnd*, visando possibilitar dividir a aplicação de forma vertical, possibilitando assim que, em uma estrutura dividida por domínios de negócio, a aplicação seja dividida da mesma forma como também seus times, onde então cada um seja responsável por uma fatia, de ponta a ponta (PELTONEN et al., 2021).

<img align="center" src="https://micro-frontends.org/ressources/diagrams/organisational/verticals-headline.png" alt="Exemplo de Times End-to-End com Micro-FrontEnd em uma aplicação de E-commerce" width="600"/>

<small>Fonte: Micro-frontends.org.</small>

*Micro-FrontEnds* é um conjunto de técnicas arquiteturais de *FrontEnd*, Infraestrutura e *DevOps* que permite a independência de desenvolvimento, integração, entrega e execução entre módulos *FrontEnd* de um sistema, tornando-se então aplicações isoladas e intercomunicáveis, o que possibilita alta escalabilidade – premissa principal da arquitetura de *Microservices* (JACKSON, 2019).

Em *runtime*, essas aplicações são compostas, podendo ser orquestradas e consolidadas em uma só por uma outra aplicação (JACKSON, 2019).

<img align="center" src="https://martinfowler.com/articles/micro-frontends/deployment.png" alt="Cada FrontEnd é versionado, construído e entregue separadamente, sendo composto em tempo de execução" width="600"/>

<small>Fonte: Martinfowler.com.</small>

Existem diversas formas de se criar aplicações em arquitetura de *Micro-FrontEnds*, mas é ideal que se escolha por somente uma estratégia (PELTONEN et al., 2021).

## Quais problemas temos com MicroFrontEnd?

Entre alguns problemas estudados no artigo *Motivations, benefits, and issues for adopting Micro-Frontends: A Multivocal Literature Review* de PELTONEN et al.:

1. Pelo fato de que muitas vezes há sobreposição entre as stacks utilizadas pelos *MFEs*, ou pela duplicação de uma mesma dependência sendo requisitada em *runtime*, há **crescimento no tamanho do Payload carregado pelo Usuário**
2. Assim como nos Microservices, é comum observar a necessidade de **duplicar códigos** para que cada componente possa operar autonomamente. **Muitas vezes essa duplicação pode ser prematura, levando a inconsistencias.**
3. Visando diminuir o tamanho de payload ocasionado pela duplicação de dependências, pode ser empregadas técnicas que possibilitem compartilhar dependências comuns. **Porém, como podemos garantir que todos os *MFEs* estão utilizando uma mesma determinada versão de uma dependência na sua construção para prevenir erros em *runtime*?**
4. **Cresce a nessecidade de maior Governança, Colaboração e Alinhamento**, uma vez que teremos pessoas de diferentes *skills* técnicos trabalhando isoladamente, além da interdependência entre times gerada pela necessidade de integrar os diversos componentes construídos.
5. **Complexidade de dominar o conceito** e definir **como as coisas vão se comunicar**, podendo levar à má divisão das coisas e escolhas que podem tornar o projeto obsoleto
6. **Como garantir que um *MFE* irá funcionar com os demais em Produção**, uma vez que cada time está apenas desenvolvendo o seu *MFE* isoladamente, sem conseguir reproduzir com fidelidade o ambiente Produtivo localmente?
7. **Falta de Técnicas de Monitoramento**

Como podemos utilizar de MicroFrontEnds para aumentar a escalabilidade sem cair nestes problemas?

# Desafio

Imaginamos que temos um Produto SaaS de Marketing que apresenta, entre suas páginas, uma home com um Dashboard contendo gráficos importantes para o cliente.

A aplicação FrontEnd Web desta solução começa a crescer e logo pensamos que é uma boa ideia quebrar ela em módulos menores, cada um com seu conjunto de funcionalidades e páginas, com a utilização de MicroFrontEnd (*MFE*). Ficamos então com uma aplicação *"mãe"* (chamada de *shell*, no conceito de MicroFrontEnds) que tem a responsabilidade de ser uma *casca* que integra os demais MicroApps em uma só aplicação.

![mfes-produto](https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/mfes-produto.png)

Isso possibilitaria também que tivéssemos um time (*squad*) responsável para cada MicroApp, segregando suas responsabilidades.

Dado os demais problemas que comentamos acima, essa abordagem introduz mais um outro detalhe: A aplicação **my-product-web** depende de outras 3 aplicações para funcionar, fazendo com que a *squad* responsável seja obrigada a cuidar da integração com os outros 3 componentes em sua aplicação, entendendo o que e de que forma eles expõem (ou seja, sua interface pública, seus *contratos* de API). E essa responsabilidade cresce com o número de módulos. Além disso, as demais *squads* tornam-se agora fornecedoras, e isso introduz a responsabilidade de cuidar do que está sendo exposto.

O ideal é termos um cenário onde esta relação é invertida. Dessa forma, a *squad* que detêm o componente **my-product-web** torna-se então uma única fornecedora e a responsabilidade mater a integração fica distribuída entre as *squads*.

![mfes-invertido](https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/mfes-invertido.png)

Mas como fazer isso mantendo o propósito de *casca* que a aplicação **my-product-web** possui, sendo a camada de integração das demais funcionalidades? Como atingir esse objetivo em MicroFrontEnds?

## Stribord

Tendo em vista os desafios presentes no desenvolvimento em arquitetura de MFEs... (escrever mais aqui)

<img align="left" src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/stribord-logo.png" alt="Logo do Stribord" width="120"/>**Stribord** é uma plataforma de **desenvolvimento**, **gestão** e **orquestração** de aplicações orientadas a arquitetura de MicroFrontEnds. Seu propósito é fornecer a tecnologia necessária para resolver os problemas comuns à arquitetura distribuída presentes em MFEs, trazendo conceitos estruturais que fundamentem o design de sistemas em MFE e soluções técnicas que permitam executar essa arquitetura, visando garantir a integração não só entre os componentes mas também entre suas equipes.

Através da CLI e SDKs, os desenvolvedores podem criar e configurar aplicações FrontEnd **extensíveis**, controlar como e quais MFEs serão consumidos, além manter e versionar meta-informações sobre estes MFEs e suas relações no modelo GitOps.

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

## Tutorial

Dado o cenário comentado anteriormente, a ideia é criarmos uma aplicação que receberá funcionalidades de outra aplicação, e faremos isso utilizando o **Stribord**. Nesse exemplo, vamos apenas considerar essa estrutura de aplicações:

- **app**: Sendo a aplicação FrontEnd *shell*, que fornecerá a capacidade de ser extendida por outras
- **extension**: Sendo um exemplo de uma MicroApp que estenderá a aplicação **app**, adicionando novas funcionalidades à ela

Para isso, estaremos utilizando **React v16, TypeScript e Webpack.**

Neste tutorial, vamos fazer o seguinte experimento:

- Realizar o Setup do Stribord em um Projeto: para podermos utilizar sua CLI e SDK.
- Criar Pontos de Extensão: permitindo que MFEs estendam as funcionalidades da nossa aplicação, tornando ela um *shell*.
- Publicar um Projeto na plataforma: Para que a plataforma conheça os detalhes do seu projeto e possa orquestrar os MFEs relacionados.
- Implementar Pontos de Extensão: Para que possamos estender as funcionalidades de uma aplicação.
- Testar suas implementações com uma App remota: Para que possamos executar nossp MFE apontando para uma App remota, podendo reproduzir o que está em produção localmente.

Ao final, teremos esse resultado

<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/resolved.png" alt="resolved" style="zoom: 50%;" />

Onde o Card circulado veio de um MFE, chamado de **extension**, e seu botão "View Details" leva o usuário para uma nova página, também vinda da MFE **extension**.

Vamos utilizar o CodeSandbox para a execução deste Playground. Para iniciar, basta realizar o **Fork** desse sandbox em sua conta. Você pode criar uma conta no CodeSandbox gratuitamente utilizando sua conta do Github, Google ou Appple.

<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/codesandbox-fork.png" alt="codesandbox-fork" style="zoom: 50%;" />

O Playground está rodando em um container Linux Debian com Node v16 já pré-instalado.

<!-- imagem e anatomia do codesandbox -->

<!-- descrever brevemente -->

### Repositório

Estaremos utilizando Yarn Workspaces para organizar o projeto, apenas para facilitar a execução do teste. Porém, **o Stribord não obriga você possuir as aplicações em um monorepo** e nem uma determinada estrutura de arquivos. Na raiz do projeto deste exemplo, você irá enxergar:

- apps
  - **app**: Uma aplicação React v16 com Webpack + Module Federation e Ionic apenas como lib de UI. Representará o nosso *shell*. Estará rodando na porta 3001
    - src: Onde fica nosso código fonte
      - components: Os diversos componentes React de nossa aplicação, como a Página Dashboard.
      - mock-data: Mock dos dados de uma API para executarmos nosso teste.
      - types: As assinaturas que nossa aplicação conhece.
      - app.tsx: O componente principal renderizado pela aplicação, responsável pelo seu setup.
      - bootstrap.tsx: A execução principal da aplicação. Por estarmos utilizando de Module Federation como nossa engine, é necessário para possibilitar o carregamento de remotes.
      - routes.tsx: Onde está declarado as rotas da aplicação
  - **extension**: Uma aplicação React, assim como a **app**. Representará um MFE que interage com a aplicação **app**. Estará rodando na porta 3002

Cada pacote dentro de apps possuí seu próprio `package.json`, contendo suas dependências.

### Setup do Stribord em um Projeto

Para iniciarmos, vamos realizar o *setup* do **Stribord** na aplicação **app**.

Para isso, abra um terminal no CodeSandbox e execute na pasta do pacote **app** (entre na pasta do pacote app com o comando `cd apps/app`):

<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/open-terminal-codesandbox.gif" alt="open-terminal-codesandbox" />

```bash
yarn add -D @stribord/cli
```

Instalaremos o pacote **@stribord/cli** como uma dependência de desenvolvimento. Ele é responsável por fornecer a ferramenta de linha de comando, necessária para gerar o scaffolding de arquivos para trabalhar com o **Stribord** e a publicação das meta-informações da aplicação para a plataforma.

Após isso, execute no terminal (ainda na pasta do pacote **app**)

```bash
yarn add @stribord/react-client @stribord/core-client
```

Instalaremos os pacotes:

- **@stribord/react-client**: Fornece o cliente da plataforma para React, necessário para nos comunicarmos com a plataforma **Stribord**.
- **@stribord/core-client**: Fornece a base para o cliente React, além de utilitários comuns a todos frameworks suportados.

Após a instalação dos pacotes, modifique o arquivo `apps/app/package.json` do pacote **app**, adicionando aos `scripts` um hook de `postinstall`, como o exemplo abaixo:

```
// Arquivo apps/app/package.json

// ...
  "scripts": {
      "postinstall": "stribord sync"
  }
// ...
```

Agora, vamos inicializar o **Stribord** na aplicação. Isso criará o ambiente local do Stribord para que possamos executar nossos testes locais.

Para isso, execute no terminal (ainda na pasta do pacote **app**)

```bash
yarn exec stribord init
```

Seguindo as pergundas, você vai responder (aquilo que está grifado em negrito):

> ✔ Enable remote synchronization? If you want to use Stribord only locally, just disable it. (You can toggle it later too) · **no** / yes

A plataforma foi desenvolvida para operar de forma distribuida, da mesma forma que você usa o seu Git: Você tem o seu Local e o seu Remote (que chamamos aqui de **BackEnd**). Assim, possibilitamos que você realize alterações e submeta ao **BackEnd** para publicar. Podemos fornecer uma série de automações que permitem, por exemplo, verificar se suas alterações não irão impactar negativamente alguma **Extension** que consome os seus pontos de extensão (gerando uma *breaking change*) e permitir que os devs tome ações proativamente.

Vamos desabilitar a sincronização com o **BackEnd** pois faremos apenas um teste local aqui.

> ✔ The Id of your Domain · **stribord-examples**

**Domain** (Domínio) é o nome da organização no qual você estará publicando suas aplicações. Isso cria uma divisão lógica na plataforma **Stribord**, isto é, um domínio não enxerga o que o outro possui. Na vida real, pode também ser utilizado para segregar ambientes (development, staging, production) e/ou multiplas verticais/tribos de atuação da sua organização.

> ✔ The Id of the extendable that you want to create · **@stribord-examples/app**

**Extendable** é o nome que damos para a peça fundamenteal que a plataforma conhece. Todo código é considerado extensível, logo toda app que é registrada na plataforma é um **Extendable**. O id do **Extendable** deve representar ele bem (o ideal é que se uso o mesmo id do package.json do projeto, para facilitar a identificação). O **Id** é único para todo o **Domain**.

> ✔ Select the Extendable's Type · **app**

A plataforma conhece 2 tipos de Extendables atualmente:

- **Extensions**: São MicroApps que tem o objetivo de estender a funcionalidade das aplicações (ou de outras Extensions). Pode ser utilizada para *fatiar* um grande produto em diversas MicroApps que se conversam. Pense nelas como *PlugIns do seu VSCode*.
- **Apps**: São as aplicações que serão publicadas como **host**, podendo elas expor diversos **Pontos de Extensão** e carregar as diversas **Extensions** publicadas para apresentar suas funcionalidades.

> ℹ️ Observação: Apenas para esclarecer sobre a sincronização, a plataforma não substitui o Git. Você ainda terá seus repositórios. **O que a plataforma entende de alterações e realiza o controle são as meta-informações do seu Extendable, apenas.**

#### Setup de código para Apps

No caso de **extendable** do tipo `app`, é necessário um setup adicional feito em código.

Feito a instalação e inicialização, vamos alterar nosso código para configurar o cliente do Stribord através da SDK **@stribord/react-client**.

Basta adicionar as linhas abaixo:

```tsx
// Arquivo apps/app/src/app.tsx
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

Na configuração temos:

- `backend`: Vamos utilizar o Local como backend
- `loader`: Qual tecnologia o Stribord vai utilizar para carregar os MFEs. A ideia é suportar não só o Webpack Module Federation mas também outros bundlers, como o Vite, Rollup, e também ESM Nativo, com o [Native Federation](https://www.npmjs.com/package/@softarc/native-federation)
- `appManifest`: Manifesto é onde declaramos o que essa aplicação implementa para que outros Extendables possam consumir.

Feito isso, confirme se sua aplicação está ok! Estamos prontos para adicionar **Pontos de Extensão** à ela.

### Criando Pontos de Extensão

O conceito de **Ponto de Extensão** é o racional fundamental que sustenta o modelo de lidar com MicroFrontEnds no **Stribord**. Imaginamos que nossa aplicação é uma Casa. Criar Pontos de Extensão nela seria como colocar novas tomadas nos comodos que você escolher, possibilitando que outras pessoas *pluggem* novas coisas à elas, desde que seja o tipo de tomada correta, ou seja, desde que respeitem o **contrato de API** que a aplicação expõe.

![plugin-types](https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/plugin-types.jpg)

Vamos criar um **Ponto de Extensão** que possibilite que outras MicroApps adicionem um card a Dashboard.

No diretório do pacote **app** (`apps/app`), execute:

```bash
yarn exec stribord extension-point
```

> ✔ The id of this Extension point · **dashboard-card**

Identificador do **Ponto de Extensão**. Será utilizado posteriormente pelas **Extensions** para poder adicionar suas implementações. Esse identificador é único por **Extendable**, ou seja, único apenas nessa app (`@stribord-examples/app`).

> ✔ Select the type of this Extension point · @stribord/react-client:Slot

O tipo do **Ponto de Extensão**. Cada tipo possui um determinado uso. O tipo **Slot** é quando queremos possibilitar que outras **Extensions** possam adicionar qualquer componente à UI.

> ✔ Where the implementation will be stored? (from source dir) · **extension-points**

Este comando gerará um código para facilitar o desenvolvimento, e esta opção determina em qual caminho (a partir do `src`) este código será gerado.

Dê uma olhada no arquivo `/src/extension-points/dashboard-extension.ts`. Ele contém a declaração desse **Ponto de Extensão**.

> 🚀 Você pode adicionar uma descrição ao ponto de extensão. Basta adicionar ao JSDoc da declaração um `@description`, como no exemplo abaixo:
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
>
> A ideia, no futuro, é que plataforma forneça uma solução Web para visualizar o catálogo de **Extendables** e seus **Extension Points** que estão publicados em um determinado **Domain**, facilitando a gestão.

#### Instalando Ponto de Extensão

Agora, vamos instalar o **Ponto de Extensão** criado no nosso dashboard.

Adicione as linhas abaixo no componente `DashboardPage`:

```ts
// Arquivo apps/app/src/components/dashboard-page.tsx

import { useSlot } from "@stribord/react-client";
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

> ℹ️ O *hook* `useSlot` leva como parâmetro o id local do Ponto de Extensão que deverá ser carregado. É possível optar por carregar mais de um componente, ou seja, um *array* de elementos em tela, para isso é passado o segundo parâmetro `multi: true`.

Pronto! Agora, as **Extensions** que implementarem o ponto `dashboard-card` do app `@stribord-examples/app` aparecerão na Dashboard, mas ainda não temos nenhuma.

### Publicando Extendables

Para possibilitar que outros desenvolvedores possam consumir os seus **Pontos de Extensão**, é preciso publicar na plataforma. Ao publicar, a CLI do **Stribord** irá escanear seu projeto para montar as meta-informações necessárias.

No diretório do pacote **app** (`apps/app`), execute no terminal:

```bash
yarn exec stribord publish --local
```

O **Stribord** gerará um pacote NPM, contendo os contratos do que ela expõe para que as **Extensions** possam consumir. Por isso podemos dizer que o **Stribord** possui 100% *end-to-end type-safe* (como o famoso [tRPC](https://trpc.io/)).

> Em um cenário real (com o *sync* ativado), este pacote seria publicado no registry NPM configurado no projeto, disponibilizando esse pacote para ser instalado em outros projetos. Aqui, no nosso exemplo, o pacote será utilizado apenas localmente, sem necessidade de publicar.

### Estendendo um Ponto de Extensão

Agora, vamos mudar de papel: Somos desenvolvedores de um módulo que estenderá a aplicação **app**. Estaremos adicionando as funcionalidades do nosso negócio. Vamos adicionar um card na dashboard que *apresente um gráfico de quantidade de novos Leads por período*.

Primeiramente, devemos executar a Instalação e Inicialização do **Stribord** no projeto **extension** (localizado no diretório `apps/extension`), assim como fizemos no **app**. Recaptulando:

1. `yarn add -D @stribord/cli`

2. `yarn add @stribord/react-client @stribord/core-client`

3. `yarn exec stribord init`, **informando**:

   - Domain Id: **stribord-examples**

   - Extendable Id: **@stribord-examples/extension**

   - Extendable Type: **extension**

Você terá que adicionar a seguintes linhas no `webpack.config.js` do projeto **extension**:

```js
// Arquivo apps/extension/webpack.config.js

// ...
// Localize o ModuleFederationPlugin e adicione uma nova entrada de exposes na configuração
		new ModuleFederationPlugin({
      name: 'StribordExamplesExtension',
      filename: './remoteEntry.js',
      exposes: {
        './manifest': './src/manifest', // Expor o manifest.
      },
      // ...
    });
```

> ℹ️ No futuro, o **Stribord** fornecerá um utilitário para minimizar a necessidade de configuração manual no Webpack (e nos demais bundlers suportados).

Agora, podemos estender a Aplicação **app**.

Do diretório da extension (`apps/extension`), execute no terminal:

```bash
yarn exec stribord extend
```

> ✔ Which Extendable you want to extend? · **@stribord-examples/app**
>
> ✔ Which Extension Point you want to implement? · **dashboard-card**
>
> ✔ Which name you want to gave to this implementation? · **leads**
>
> ✔ Where the implementation will be stored? (from source dir) · **implementations**

O comando irá gerar um código inicial para a **implementação** do **Ponto de Extensão**, e também colocara a informação no `manifest.ts` do projeto.

Você pode editar o arquivo gerado em `apps/extension/src/implementations/leads-dashboard-card.tsx`

#### Testando a sua Implementação

Para testar sua implementação isoladamente, você pode importar ela normalmente no `app.tsx` do projeto **extension** e executar:

```bash
yarn run start:extension
```

Deixe a aplicação executando.

#### Publicando Extensão

Da mesma forma que publicamos o **app**, vamos publicar o **extension**.

Execute no terminal (no diretório `apps/extension`)

```bash
yarn exec stribord publish --local
```

Por se tratar de uma **Extension**, o **Stribord** precisará saber em que URL os estáticos dessa aplicação estarão disponíveis para que seja feito o seu carregamento. Lembrando que, por estarmos utilizando de Webpack Module Federation, este valor deverá ser a URL com o caminho para seu **remoteEntry**.

Como estamos executando ela localmente, vamos informar a URL em que a aplicação **extestension** está executando.

<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/extension-url.png" alt="image-20230527155045901" style="zoom:50%;" />

No exemplo da imagem, a url a ser informada seria `https://g3md3e-3002.csb.app/remoteEntry.js`.

> ✔ Remote entry url (eg. https://my.site.com/remoteEntry.js) · **\<URL DE PREVIEW DO CODESANDBOX>/remoteEntry.js**

### Como carregar extensões

Agora carregaremos a extensão criada na nossa aplicação **app**. Se você recarregar a aplicação **app** vai notar que nada mudou e sua implementação não apareceu na página Dashboard. Não estranhe, o **Stribord** separa o carregamento de **Extensions** em uma **App** em algo chamado **Deployment**.

O **Deployment** é como disponibilizamos o controle de quais **Extensions** devem ser carregadas (e qual versão, caso o sua organização realize o versionamento adequado).

Podemos ter vários **Deployments** de uma **App** contendo diferentes configurações. Isso pode ser utilizado para criar testes A/B, FeatureFlags, customizações específicas para clientes etc.

Para registrar um **Deployment** de uma **App**, basta executar o comando abaixo no terminal, a partir do diretórido da **app** (`apps/app`):

```bash
yarn exec stribord deployment
```

> ✔ Id · **@stribord-examples/app:my-product**

O Identificador do **Deployment** que será registrado. Único por **Domain**.

> ✔ Description · **My product deployment**

Uma descrição opcional.

> ✔ What is the URL that this app will be deployed at? · http://localhost:3001

Url onde essa aplicação estará disponível e rodando. Apenas para manter a informação.

> ✔ Which extensions you will this deployment use? · **@stribord-examples/extension**

Selecionar quais extensões estarão habilitadas nesse **Deployment**. (Utilize a tecla <kbd>espaço</kbd> para selecionar).

Feito isso, precisamos informar a plataforma em *runtime* que estamos utilizando o **Deployment** configurado `@stribord-examples/app:my-product`

Para isso, localize essas linhas no arquivo `apps/app/src/app.tsx`. Adicione a prop `id` ao componente `StribordDeployment` com o valor `@stribord-examples/app:my-product`.

```tsx
// Arquivo apps/app/src/app.tsx
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

Certifique-se que a **extension** esteja executando e faça um *restart* na **app**.

```
yarn run start:extension
```

```
yarn run start:app
```

Você irá ver sua implementação na página de Dashboard!

### Deixando mais bonito (e funcional) ✨

Colocamos um novo pedaço na tela. Agora vamos trazer a funcionalidade! Além disso, vamos ver como definir melhor o formato que o componente deve ser renderizado na tela.

#### Compartilhando dados

O interessante em MicroFrontEnds é poder compartilhar dados entre as peças da aplicação e no **Stribord** isso é fácil como lidar com qualquer componente nativo do seu Framework, nesse caso aqui, o React.

Vamos definir um novo **contrato** para o nosso **Slot**. Para isso, vamos modificar o `DashboardCardSlotProps` para que possamos compartilhar o filtro selecionado `FilterBy` e definir qual formato de componente deve ser utilizado para renderizar o Card na tela:

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

Vamos compartilhar as informações necessárias a partir da `DashboardPage`:

```tsx
// Arquivo apps/app/src/components/dashboard-page.tsx

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

Você deve publicar o **app** novamente para que suas alterações sejam registradas na plataforma **Stribord** e que o pacote de **typings** seja gerado novamente.

> ℹ️ Em um cenário real, deve ser incrementado a versão do projeto no **package.json** pois nossa alteração alterou o **contrato** da aplicação, gerando quebras em quem consumia a última versão. No futuro, o **Stribord** irá identificar essas quebras e notificar os desenvolvedores que dependem desse ponto de extensão, através de automações de CI nos projetos.

#### Adicionando a funcionalidade no novo Card

Vamos utilizar das informações compartilhadas para introduzir nossa funcionalidade. Além disso, como desenvolvedores da **extension**, devemos respeitar o novo contrato definido pelo **app**! Modifique a implementação `LeadsDashboardCard`:

```ts
// Arquivo apps/extension/src/implementations/leads-dashboard-card.tsx
// Copie e cole diretamente!

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

# Parabéns ✨ (e obrigado 🙌)

<!-- textinho de conclusão, agradecimento, comentar sobre outras funcionalidades, e pedir para responder a pesquisa -->

# Indo Além 🚀

## Como testar implementações localmente

Até aqui, mesmo rodando localmente tanto a **app** quanto a **extension**, realizamos todos os testes na **app**, ou seja, num cenário real, seria como estivéssemos tendo que publicar nosso projeto **extension** no ambiente para podermos testar nossa funcionalidade na **app** ou tendo que clonar e executar o **app** localmente para podermos rodar local.

Pensando em melhorar essa experiência de desenvolvimento, o **Stribord** possibilita que você aponte sua **extension** para uma **app** remota, assim como você faz quando você está consumindo um serviço de API REST, por exemplo: você passa a apontar para sua URL e testa sua integração com ele, sem a necessidade de rodar ele localmente.

Para isso, é simples: Crie um arquivo `.env` no diretório do projeto **extension** com o conteúdo abaixo, substituindo a `<URL do app>` pela URL onde o **app** está rodando.

```
# Arquivo apps/extension/.env
REMOTE_URL='<URL do app>/remoteEntry.js'
```

Após isso, modifique o `webpack.config.js` do **extension**, adicionado a seguinte configuração no `ModuleFederationPlugin`.

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

Agora, vamos modificar o arquivo `bootstrap.tsx` do **extension** para o seguinte:

```tsx
// Arquivo apps/extension/src/bootstrap.tsx
// Você pode copiar e colar diretamente

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

Certifique-se que a **app** está executando, pois agora estamos apontando para ela. Reexecute** o *start* do projeto **extension** e abra seu *preview*.

Estaremos rodando diretamente nossa **extension** para executar testes. Em um cenário real, poderiamos apontar o nosso `.env` para apontar para o **app** do ambiente de desenvolvimento, algo do tipo `https://my-app.dev.org.com`.

## Desafio adicional: Não é só sobre Cards na tela

Com o **Stribord** você pode extender mais do que partes de uma página. Você pode utilizar o modelo de **Pontos de Extensão** para qualquer coisa na sua aplicação. Tente executar o próximo desafio: **Como utilizar o Stribord para adiocionar novas Páginas em uma aplicação?**

### Utilizando de Pontos de Extensão para adicionar novas Rotas

O **Stribord** oferece também o **tipo de Ponto de Extensão** chamado **Factory**. Com ele, você pode carregar qualquer **Função JavaScript**, definindo seus parâmetros e sua saída esperada.

Para isso, execute os passos:

1. Criar um novo ponto de extensão <!-- colocar link para a seção que ensina -->

   - Id: `routes`

   - Tipo: `Factory`

2. Veja o exemplo de setup do ponto de extensão aqui

3. Publique o projeto **app**

4. Extenda o Ponto de Extensão `routes` no projeto extension

5. Crie um novo componente para ser a nova página adicionada

6. Adicione a página à implementação do **Ponto de Extensão**

7. Adicione um botão a tela para navegar seu usuário até a nova página

# Outros desafios (Personalização para clientes)

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

<!-- comentar sobre o roadmap do Stribord -->