# SystemproSpeed

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
"# sys-ape-front" 
Angular 16
ng new nome do app

import do styles bootstrap

Atualizar o angular.json:

npm install bootstrap

"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],



scss principal add
@import '~bootstrap/dist/css/bootstrap.min.css';

Limpar o cache do Angular CLI:
limpar o cache do Angular CLI pode ajudar a resolver problemas de compilação:

bash
no bash ou shell de o comando => 
npm cache clean --force

Reinstalar as dependências do projeto:
Após limpar o cache, reinstale todas as dependências do projeto novamente:

bash ou shell de o seguinte comando =>
npm install 

reiniciar o App
ng serve 

caso não tenha o AppRoutingModule 
ng generate module app-routing --flat --module=app
