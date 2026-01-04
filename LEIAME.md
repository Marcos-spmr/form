# Projeto de Cadastro e Consulta de Endereço

Este projeto é uma aplicação Fullstack simples que realiza o cadastro de usuários com validação de dados e integração com a API externa (ViaCEP) para preenchimento automático de endereços baseados no logradouro.

## Tecnologias Utilizadas

* **Backend:** Node.js, Express
* **Banco de Dados:** MongoDB (Mongoose)
* **Frontend:** HTML, CSS, JavaScript
* **HTTP Client:** Axios

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão 14 ou superior)
* Uma string de conexão válida para o **MongoDB** (Local ou Atlas).

## Instalação e Configuração

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

### 1. Clonar ou extrair o projeto
Baixe os arquivos do projeto para uma pasta local.

### 2. Instalar as dependências
Abra o terminal na pasta raiz onde se encontra o arquivo `package.json` (ou dentro de `backend/src` dependendo da estrutura final) e execute:

```bash
npm install
```
### 3. Configurar Variáveis de Ambiente
O projeto utiliza variáveis de ambiente para segurança. Crie um arquivo chamado .env na mesma pasta do arquivo server.js.

Dentro deste arquivo `.env`, adicione a seguinte linha com sua conexão do MongoDB (substitua pela sua string real):

MONGO_URI=mongodb://localhost:27017/nome_do_seu_banco
# Ou, se usar MongoDB Atlas:
 `MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/meubanco`

### 4. Executar o Servidor
Com as dependências instaladas e o banco configurado, inicie o servidor com o comando:

```bash
node server.js
```
# Ou, caso tenha o nodemon instalado:
 ```npx nodemon server.js```

### 5. Como Utilizar
Abra o seu navegador de preferência.

Acesse o endereço: http://localhost:3003

Preenchimento Automático: Digite o nome da rua no campo "Logradouro" e clique fora do campo (ou aperte a tecla Tab). O sistema buscará o CEP e o Bairro automaticamente.

Envio: Preencha os dados restantes e clique em "Submit".