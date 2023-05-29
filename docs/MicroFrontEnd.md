# O que é MicroFrontEnd?

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