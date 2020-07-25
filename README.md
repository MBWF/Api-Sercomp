<h1 align="center">
    <p> Sercomp Project - API Rest</p>
    <img src=".github/logo-title.png" alt="logo.png">
</h1>

<p align="center">
  <a href="#rocket-Technology">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction-BreakPoints">BreakPoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed_book-Commands">Commands</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-License">License</a>
</p>

## :rocket: Technology
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://github.com/remy/nodemon/)
- [Knex](http://knexjs.org/)
- [Cors](https://www.npmjs.com/package/cors)
- [Postgresql](https://www.postgresql.org/)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Dotenv](https://www.npmjs.com/package/dotenv)

<br>

## :construction: BreakPoints

<br>

### Type **POST**

`http://localhost:3333/Admin`

`http://localhost:3333/user` 

`http://localhost:3333/palestra`

`http://localhost:3333/minicurso`

`http://localhost:3333/aluno` 

`http://localhost:3333/minicurso/:id/cadastrar`

<br>

### Type **GET**

`http://localhost:3333/Admin`

`http://localhost:3333/palestra`

`http://localhost:3333/minicurso`

`http://localhost:3333/aluno/palestra`

`http://localhost:3333/aluno/:id/minicurso`

<br>

### Type **PUT**

`http://localhost:3333/palestra/:id`

`http://localhost:3333/minicurso/:id`

`http://localhost:3333/user/:id`


<br>

### Type **DELETE**

`http://localhost:3333/palestra/:id`

`http://localhost:3333/minicurso/:id`

`http://localhost:3333/user/:id`

<br>

## :closed_book: Commands

### First enter the folder and in the console enter the following command: 


&nbsp;&nbsp;&nbsp;&nbsp; `npm i` &nbsp;&nbsp; or  &nbsp;&nbsp;  `yarn`

 >It is necessary that you create an .env file in the root, copy all the content inside .env.example paste in .env and fill in your values 


### After completing the installation of the dependencies, we perform the migrations:

&nbsp;&nbsp;&nbsp;&nbsp; `npx knex migrate:latest`

### And the seeds:

&nbsp;&nbsp;&nbsp;&nbsp; `npx knex seed:run`

### Now just run:

&nbsp;&nbsp;&nbsp;&nbsp;`npm run dev` &nbsp;&nbsp; or  &nbsp;&nbsp;  `yarn dev`

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details