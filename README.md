# Configuração de ambiente

## 1-Baixar o Xampp
[Link Download do Xampp](https://www.apachefriends.org/pt_br/index.html)

## 2-Abrir o Xampp
* Clickar em start apache e no Mysql
* Clicar em admin do mysql no xampp para abrir o PhpMyadmin
* Clickar em Novo
* Criar um banco chamado nptcc 

## Rodando a aplicação 
* A aplicação so funciona se o banco estiver configurado corretamente.
* Entre na pasta do projeto execute o comando npm start no terminal.
* Toda vez que a aplicação rodar, a aplicação ira verificar se há tabelas novas ou modificações nas tabelas existentes e realizá-las.

## Criando uma tabela 
sequelize model:generate --name nomedaclasse --attributes

* Exemplo 
- sequelize model:generate --name Pessoas --attributes nomePessoa:string,idade:number