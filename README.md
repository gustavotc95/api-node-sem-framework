<p align="center">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gustavotc95/api-node-sem-framework"> <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/gustavotc95/api-node-sem-framework"> <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gustavotc95/api-node-sem-framework">
  </p>

# API Node sem framework

CRUD (Create, Read, Update and Delete) básico de usuarios em node sem o uso de um framework.


## Run Locally

```bash

# Clone o projeto
$ git clone https://github.com/gustavotc95/api-node-sem-framework


# Vá para o diretório do projeto
$ cd api-node-sem-framework


# Inicie o servidor
$ node src/index.js

# O servidor inciará na porta:3030 - acesse <http://localhost:3030> 

```
  
## API Reference

### Recursos disponíveis

Atualmente existem os seguintes recursos abaixo que você pode manipular através dos métodos GET, POST, PUT e DELETE:

- Usuários (users)

### Endpoints

#### Listar todos os usuários

```http
GET /users
```

#### Criar um novo usuário

```http
POST /users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nome`      | `string` | **Required**. Nome do usuário |


#### Criar um novo usuário

```http
POST /users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nome`      | `string` | **Required**. Nome do usuário |


#### Exibir informações de um usuário 

```http
GET /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id do usuário |
  

#### Editar informações de um usuário 

```http
PUT /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id do usuário |
| `nome`      | `string` | **Required**. Novo nome do usuário |


#### Deletar informações de um usuário 

```http
DELETE /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id do usuário |
