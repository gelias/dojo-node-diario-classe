Diario-classe - Web App Demo usando NodeJS
=======================

Este projeto visa demonstar o uso de uma aplicação web usando [NodeJS](http://nodejs.org/), [Express]() e [MongoDB]()

Mo
Web App
-------
* Cadastro de Estudante `/diario-classe/estudante`
* Cadastro de Disiciplinas `/diario-classe/disciplina`

Rotas
--------

Estudante
--------
Adicionar Estudante

      url: /diario-classe/estudante/adicionar

Editar Estudante

      url: /diario-classe/estudante/editar/{id}

Buscar Lista de Estudantes

      url: /diario-classe/estudante

Deletar Estudante

      url: /diario-classe/estudante/deletar/{id}

Disciplina
--------
Adicionar Disciplina

      url: /diario-classe/disciplina/adicionar

Editar disciplina

      url: /diario-classe/disciplina/editar/{id}

Buscar Lista de disciplinas

      url: /diario-classe/disciplina

Deletar Disciplina

      url: /diario-classe/disciplina/deletar/{id}


Resolver Dependências
=====================

O projeto usa [Node Package Manager npm](https://www.npmjs.org/) como gerenciador de dependências. Para resolver as dependências entre basta procecer com os comandos abaixo:
  
  `cd dojo-node-diario-classe`
  `npm install`
      
Persistência
============

O projeto usa [MongoDB](http://www.mongodb.org/) onde no diretório root do projeto encontra-se a base de dados na pasta `data`. A estrutura das tabelas são representadas com os exemplos abaixo:

### diario-classe.estudante ###

`{ id: 1, nome: 'Guilherme da Silveira Elias'`

### diario-classe.disciplina ###

`{ id: 1, nome: 'Java Web 3.0'`

