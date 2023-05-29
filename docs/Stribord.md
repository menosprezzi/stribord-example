1. **Realizar o Setup do Stribord em um Projeto**: para podermos utilizar sua CLI e SDK.
2. **Criar Pontos de Extensão**: permitindo que MFEs estendam as funcionalidades da nossa aplicação, tornando ela um *shell*.
3. **Publicar um Projeto na Plataforma**: Para que a plataforma conheça os detalhes do seu projeto e possa orquestrar os MFEs relacionados.
4. **Implementar Pontos de Extensão**: Para que possamos estender as funcionalidades de uma aplicação.


# CLI

## Inicial Stribord

```bash
yarn exec stribord init
```

# Conceitos

## Domain

Domain é o nome da organização no qual você estará publicando suas aplicações. Isso cria uma divisão lógica na plataforma **Stribord**, isto é, um domínio não enxerga o que o outro possui. Na vida real, pode também ser utilizado para segregar ambientes (development, staging, production) e/ou multiplas verticais/tribos de atuação da sua organização.

## Extendable

Extendable é o nome que damos para a peça fundamenteal que a plataforma conhece. Todo código é considerado extensível, logo toda app que é registrada na plataforma é um **Extendable**. O id do **Extendable** deve representar ele bem (o ideal é que se uso o mesmo id do package.json do projeto, para facilitar a identificação). O **Id** é único para todo o **Domain**.

### Tipos de Extendable

A plataforma conhece 2 tipos de Extendables atualmente:

- **Extensions**: São MicroApps que tem o objetivo de estender a funcionalidade das aplicações (ou de outras Extensions). Pode ser utilizada para *fatiar* um grande produto em diversas MicroApps que se conversam. Pense nelas como *PlugIns do seu VSCode*.
- **Apps**: São as aplicações que serão publicadas como **host**, podendo elas expor diversos **Pontos de Extensão** e carregar as diversas **Extensions** publicadas para apresentar suas funcionalidades.

> ℹ️ Observação: Apenas para esclarecer sobre a sincronização, a plataforma não substitui o Git. Você ainda terá seus repositórios. **O que a plataforma entende de alterações e realiza o controle são as meta-informações do seu Extendable, apenas.**

### Setup do Stribord em um Projeto

Para iniciarmos, vamos realizar o *setup* do **Stribord** na aplicação **app**.

Para isso, abra um terminal no CodeSandbox e execute na pasta do pacote **app** (entre na pasta do pacote app com o comando `cd apps/app`):

Veja como abrir o Terminal:
<img src="https://raw.githubusercontent.com/menosprezzi/stribord-example/main/docs/assets/open-terminal-codesandbox.gif" alt="open-terminal-codesandbox" />

```bash
yarn add -D @stribord/cli
```

Instalaremos o pacote **@stribord/cli** como uma dependência de desenvolvimento. Ele é responsável por fornecer a ferramenta de linha de comando, necessária para gerar o *scaffolding* de arquivos para trabalhar com o **Stribord** e a publicação das meta-informações da aplicação para a plataforma.

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