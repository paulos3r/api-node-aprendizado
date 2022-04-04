# api-node-aprendizado
Primeiro projeto criando uma api em node.js

- __ESTUDO__ b7web

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

### HTTP - status
- Respostas de informação (100-199),
- Respostas de sucesso (200-299),
- Redirecionamentos (300-399)
- Erros do cliente (400-499)
- Erros do servidor (500-599).
- [https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status]

### biblioteca e dependência
- npm init
- npm install dotenv express pg pg-hstore sequelize validator
- tsc --init
- npm install -D @types/express @types/sequelize @types/validator
  
- npm isntall cors
- npm install -D @types/cors

> cors e uma permissão para tilizar á api
### Rodar o projeto
* npm install
#### Rodar o servidor 
* npm run start-dev
- [http://localhost:8080]

### Testes
- [resttesttest.com]