# Desafio 07: GoFinances Web

### :rocket: Sobre o Desafio

Nesse desafio, você deve continuar desenvolvendo a aplicação de gestão de transações, a GoFinances. Agora você irá praticar o que você aprendeu até agora no React.js junto com TypeScript, utilizando rotas e envio de arquivos por formulário.

Essa será uma aplicação que irá se conectar ao seu backend do  [Desafio 06](https://github.com/wslmacieira/desafio-database-upload), e exibir as transações criadas e permitir a importação de um arquivo CSV para gerar novos registros no banco de dados.

Essa será uma aplicação que deve armazenar transações financeiras de entrada e saída e permitir o cadastro e a listagem dessas transações, além de permitir a criação de novos registros no banco de dados a partir do envio de um arquivo csv.

### Preparando o backend

Antes de tudo, para que seu frontend se conecte corretamente ao backend, vá até a pasta do seu  `backend`  e execute os comandos  `yarn add cors`  e depois  `yarn add @types/cors -D`.

Depois disso vá até o seu  `app.ts`  ainda no backend, e importe o  `cors`  e adicione  `app.use(cors())`  antes da linha que contém  `app.use(routes)`;


###  :pencil:  Funcionalidades da aplicação
- [x] **`Listar as transações da sua API`**
- [x] **`Exibir o balance da sua API`**
- [x] **`Importar arquivos CSV`**


### ⚡️ Especificação dos testes
Para esse desafio temos os seguintes testes:


- [x] **`should be able to list the total balance inside the cards`**
- [x] **`should be able to list the transactions`**
- [x] **`should be able to navigate to the import page`**
- [x] **`should be able to upload a file`**


Feito com :purple_heart:   by [wslmacieira](https://github.com/wslmacieira) :wave:
