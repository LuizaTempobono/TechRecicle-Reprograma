<h1 align="center">
    <br>
    <p align="center">Projeto Final {Reprograma}<p>
</h1>

 <p align="center">
<img src='https://github.com/LuizaTempobono/TechRecicle-Reprograma/blob/f1f9aca3b893272cc18577cb4290265a702ceb54/assets/banner.png'title="Banner">

<h2 align="center">
    <br>
    <p align="center"> Tech Recicle  <p>
</h2>

## 💻 Sobre o projeto 

<br>

<p align="justify">

API desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/)
  
<br>

## 🔗 Link 

- [Apresentação](colocar o link da apresentação)

<br>

## ⚙️ Funcionalidades/Objetivos

- Cadastrar usuários numa plataforma de reciclagem de eletrônicos 
- Cadastrar pontos de coleta na plataforma 
- Retornar tipos de resíduo eletrônico que cada ponto de coleta recebe
- Retornar endereço dos pontos de coleta
- Pontuar usuários após cada descarte realizado

<br>

## 📚 Aprendizados

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)

<br>

## 📁 Arquitetura MVC 

```
 📁 Projeto-Final-Reprograma
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 collectionPointsController.js
   |         |- 📑 ewasteController.js
   |         |- 📑 userController.js
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 models
   |         |- 📑 collectionPointsSchema.js
   |         |- 📑 interactionSchema.js
   |         |- 📑 userSchema.js
   |
   |    |- 📁 routes
   |         |- 📑 collectionPointsRoutes.js 
   |         |- 📑 ewasteRoutes.js
   |         |- 📑 userRoutes.js 
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js

```
<br>
    
## ⚙️ Como rodar o projeto localmente
Siga os passos e inclua as informações abaixo:

| Passo     | Comando/informação       |
| --------- | ----------- |
| Faça o fork  | `botão de forkar` |
| Faça o clone  | `git clone` |
| Instale as dependências   | `npm i` |
| Crie seu .env e inclua as variáveis e os valores     | `MONGODB_URL` |
| utilize o script de dev    | `npm run dev` |

 MONGODB_URL = URL do `MongoDb Atlas` Banco de dados orientado a documentos e interface na nuvem.
    
<br>

## 🔃 Rotas

* local: http://localhost:7090

* Heroku:https://techrecicle.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

<br>

## 🔃 Manipulação das Rotas de usuários:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/  `              | Retorna apresentação  do API             |
| GET          | `/users/all`                 | Retorna lista de usuários cadastrados     |
| GET          | `/users/filter/:id`                 | Retorna usuário a partir do id     |
| GET          | `/users/filterName`                 | Retorna usuário a partir do nome     |
| POST         | `/users/create`          |  Cadastra novo usuário      |
| PUT         | `/users/update/:id`          |  Atualiza cadastro de usuário      |
| DELETE         | `/users/delete/:id`    | Deleta usuário           |

<br>
   
## ✅ Método POST deve retornar seguinte JSON:

```jsx
{
    "message": "Usuário cadastrado com sucesso",
    "savedUser": {
        "name": "Nome do usuario",
        "email": "usuario@email.com",
        "password": "senha123",
        "address": "Cidade, Zona, Bairro, 0000-00",
        "telephone": "(00) 0000-0000",
        "points": 0,
        "_id": "62e3ec11b9731bc88ac41bae",
        "createdAt": "2022-07-29T14:17:53.556Z",
        "__v": 0
    }
}
```

<br>

## 🔃 Manipulação das Rotas de Pontos de Coleta:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/collectionPoints/all`                 | Retorna lista de pontos de coleta cadastrados     |
| GET          | `/collectionPoints/filter/:id`                 | Retorna ponto de coleta a partir do id     |
| GET          | `/collectionPoints/filterName`                 | Retorna ponto de coleta a partir do nome     |
| GET          | `/collectionPoints/filterAddress`                 | Retorna ponto de coleta a partir do endereço     |
| GET          | `/collectionPoints/filterEwaste`                 | Retorna ponto de coleta a partir do tipo de resíduo    |
| POST         | `/collectionPoints/create`          |  Cadastra novo ponto de coleta      |
| PUT         | `/collectionPoints/update/:id`          |  Atualiza cadastro de ponto de coleta      |
| DELETE         | `/collectionPoints/delete/:id`    | Deleta ponto de coleta           |

<br>
   
## ✅ Método POST deve retornar seguinte JSON:

```jsx
{
    "message": "Ponto de coleta cadastrado com sucesso",
    "savedPoint": {
        "name": "Ecoponto",
        "email": "ecoponto@email.com",
        "address": "São Paulo, Zona Norte, Santana, 02222-020",
        "telephone": "(11) 1111-2222",
        "openingTime": "Seg à Sáb - 9h às 17h",
        "ewaste": [
            "computadores",
            "celulares",
            "cabos",
            "chips"
        ],
        "_id": "62e4296cfbaf2b8fb36a2b77",
        "createdAt": "2022-07-29T18:39:40.796Z",
        "__v": 0
    }
}
```

<br>

## 🔃 Manipulação das Rotas de Interação:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/ewaste/all`                 | Retorna lista de interações cadastradas     |
| GET          | `/ewaste/filter/:id`                 | Retorna interação a partir do id     |
| POST         | `/ewaste/create`          |  Cadastra nova interação      |
| PUT         | `/ewaste/update/:id`          |  Atualiza cadastro de interação      |
| DELETE         | `/ewaste/delete/:id`    | Deleta interação           |

## ✅ Método POST deve retornar seguinte JSON:

```jsx
{
    "message": "Interação cadastrada com sucesso",
    "savedInteraction": {
        "userId": "62e3e93ab9731bc88ac41b99",
        "collectionPointsId": "62e4296cfbaf2b8fb36a2b77",
        "discardedEwaste": [
            "computador",
            "pilhas"
        ],
        "done": false,
        "_id": "62e42b39fbaf2b8fb36a2b87",
        "discardedAt": "2022-07-29T18:47:21.497Z",
        "__v": 0
    }
}
```
    
<br>
## 🚧 Futuras implementações 

*  Aplicar autenticação;
*  Constuir sistema de login;
*  Implementar testes unitários.

## 👋 Até breve 

<br>


