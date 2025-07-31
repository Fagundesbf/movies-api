# Desafio Frontend Angular 
#### Objetivo

Desenvolver uma aplicação Angular que consuma a API de filmes fornecida e implemente as funcionalidades descritas abaixo. O objetivo é avaliar sua capacidade de solucionar problemas de forma limpa e organizada, além de seu conhecimento técnico com Angular. Não será avaliado o estilo dos componentes, portanto, não se preocupe com telas bonitas, mas sim com uma aplicação organizada e funcional.


## Como execultar a aplicação web

#### requisitos

1. Node.js
   * recomendado: Node.js v20.x ou v22.0.0
   * Para verificar versão instalada, basta acessar o terminal e digitar o seguinte comando "node -v"
2. Npm
3. Angular CLI
   * Instalar Globalmente via terminal
     npm install -g @angular/cli

#### Rodar o projeto

1. Navegar para o diretorio do projeto via terminal, basta digitar
   cd app-movies-angular/movies
2. Instalar dependencias do projeto
   * digitar comando no terminal **"npm install"** ou **"npm i"** (uma abreviação do primeiro comando)
   * no mesmo terminal basta rodar o comando **"npm run start"** ou **"ng serve"** para rodar aplicação local
   * feito isso, seu servidor com sua aplicação vai servir uma porta e sua aplicação ficará disponivel **http://localhost:4200/** ou se ela já estiver em uso ela vai rodar em uma outra e informara no terminal qual porta ficou disponivel
3.

## Como execultar a API de Videos
   *  via terminal acessar diretorio do projeto, basta digitar
        cd api-movies 
   * no mesmo terminal, digitar comando **"npm install"** ou **"npm i"** (uma abreviação do primeiro comando).
   * feito isso, seu servidor com sua aplicação vai servir uma porta e sua aplicação ficará disponivel **http://localhost:3000** ou se ela já estiver em uso ela vai rodar em uma outra e informara no terminal qual porta ficou disponivel
 
  para mais informações dentro da pasta api-movies, tem um README.ME com mais informaço˜es.

   #### Com ambos projetos rodando, só pegar o link do  http://localhost:4200/ e acessar via navegador e efetuar os testes.

   ### Credenciais de teste:
      - **Usuário**: `teste`
      - **Senha**: `teste`

   ## Decisoes tecnicas

    * Separação de repositorios (FRONT/BACK).
    * Liberação do cors no (BACK).
    * Criação de componentes reutilizaveis
    * inteceptar chamadas para repasar o Token
    * Guardas de rotas para que o usuario nao acesse nada que ele não possua acesso, nessa caso antes de obter o token ele não deve acessar as paginas (Favoritos | Home )
    * Organização de pastas (front)   
            src ---
            |   app--
            |     interfaces--
            |     pages------
            |          favorite
            |          home
            |          login
            |     shared---- <REUTILIZAVEIS>
            |           components
            |                     header-list
            |                     list
            |           guards
            |           services----
            |                    login
            |                    movies


