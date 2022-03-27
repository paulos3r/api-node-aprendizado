# api-node-aprendizado
Primeiro projeto criando uma api em node.js

- Application Programming Interface 'Interface de Programação de Aplicações'
- Webservices = serviços da web

### REST
- Representation State Transfer
- Transferência de Estado Representacional

### RESTfull
É um sistema que utiliza a padronização REST seguindo abaixo os conseitos 

- __GET__: A requisição é um pedido de dados para a API
- __POST__: Tipo de requisição utilizada para criar um recurso em uma determinada API
- __PUT__: Requisição utilizada para atualizar o recurso indicado com alguma informação
- __PATCH__: Requisição feita para atualização de somente uma parte de um recurso
- __DELETE__: Requisição para excluir um dado

### biblioteca e dependência
- npm init
- npm install dotenv express pg pg-hstore sequelize validator
- tsc --init
- npm install -D @types/express @types/sequelize @types/validator

### Rodar o projeto

* npm install
#### Rodar o servidor 
* npm run start-dev
* [http://localhost:8080]