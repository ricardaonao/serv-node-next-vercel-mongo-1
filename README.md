# CRUD / API com Next.js + MongoDB hospedado na Vercel
## Objetivo deste código 🎯
Criar uma API dinâmica, interagindo com banco de dados em cloud, com os 4 principais métodos ( CRUD), utilizando o cliente HTTP integrado do **Next.js** e hospedando na **Vercel**. 

## O que vamos usar. 🧰
- Node.js 
- Next.js 
- Vercel
- MongoBD
- Mongoose


## Configurando Ambiente Local 📗
 Instale o **Node.Js** (caso não tenha, acesse o site do Node.js https://nodejs.org/en/, baixe a versão LTS, e instale. Next, next, next...), instale os seguintes pacotes utilizando seu terminal:


* **Next.js** : Framework poderoso, baseado no react, desenvolvido para aplicações web. Iremos utilizar o cliente **HTTP** integrado que ele possui nativamente.🤯<br> <br>
Se você não deseja clonar este projeto, irá precisar criar uma nova aplicação do next. Execute em seu terminal:

```bash
npm create-next-app
# ou
yarn create-next-app
```


Após isso , suba a aplicação para um novo repositório em seu GitHub.


* **MongoDB** : Banco de dados não relacional, que pode rodar tanto em sua máquina local, quanto em servidores. Utilizaremos o serviço gratuito em nuvem chamado de *Atlas*. Neste ambiente temos tudo que precisamos. Crie sua conta gratuitamente.<br> <br>


* **Mongoose** : Uma **ODM**. Trocando em miúdos, é uma abstração entre formato do bando de dados não relacional e o Json. Ou seja, ele transforma uma coisa (notação de objetos do bd), em outra coisa (formato json). <br> <br>

```bash
npm install mongoose
# ou
yarn add mongoose
```
<br>

## Configurando Ambiente no Backend - Vercel 📕
Antes, clone esta aplicação para seu repositório no Github, pois a Vercel irá identificar seus repositórios automaticamente no Git e sugerir que seu novo projeto (hospedagem) seja feito apartir do repositório que você escolher no Github, e com 1 clique sua aplicação já estará rodando em ambiente de produção com **segurança, certificado digital e pronta para ser escalada** 🤯. Prático não?<br><br>

Acesse >> www.vercel.com <br><br>

Se ja tiver conta, faça o login, se não tiver, crie sua conta, é gratuita. Após isso em seu *"Dashboard"*, clique em *"New Project"*, selecione de onde quer importar seus repositórios. Escolha Github, autorize a comunicação da Vercel com a API da *Github*. Em seguida serão listados todas suas dependências no Github. Escolha este projeto que você clonou, clique em *"Import"*, clique em *"Select"* em sua conta, dê um nome para seu projeto, e finalize clicando em *"Deploy"*. <br> irá aparecer uma mensagem: *"Congratulations! Your project has been successfully deployed"*.<br><br>

Pronto, tá no ar. Clique em *"Visit"* e veja sua aplicação novinha!

## Configurando sua conexão com BD e variável de ambiente 🔌

Com seu projeto aberto na Vercel, clique em *Edit*, e em seguida, no menu esquerdo, clique em *Evironment Variables* e crie sua varável de ambiente com o link fornecido pelo MongoDB no cluster que você criou. ( pesquise sobre como criar um cluster no MongoDB. Super simples). <br> <br>

![Environment Variables](https://serv-node-next-vercel-mongo-1.vercel.app/capture01.PNG)



## Testando Aplicação 🕹

Se você clonou o repositório, e deseja ver a aplicação em ambiente de desenvolvimento, digite no seu terminal o comando: <br> <br>

```bash
npm run dev
# ou
yarn dev
```


Acesse em seu navegador o localhost, e divirta-se!<br> 
http://localhost:3000/api/notas<br>

Se já enviou seu projeto para Vercel, basta acessar o link fornecido pela Vercel, e ver sua API pronta para o uso. <br><br>

**No meu caso, o link é este abaixo. Veja o que tem neste momento no meu BD teste, clicando nele** <br> <br>
https://serv-node-next-vercel-mongo-1.vercel.app/api/notas<br>

>Dica : Utilize o **Insomnia** para simular suas requisições GET, POST, PUT e DELETE. 👇<br>


![Print API](https://serv-node-next-vercel-mongo-1.vercel.app/capture0.PNG)

## Conclusão 🏆
Com pouco código, podemos implantar uma API dinâmica que se comunica em tempo "real com banco de dados em cloud. Isso por que o Next.js junto com a Vercel, possuem um Backend preparado para isso. Ela cuida de todo roteamento das APIs, bastando apenas colocar todas suas APIs dentro da pasta **API**, o resto já está pronto. Além disso a Vercel facilita nossa vida em configurar as variáveis de ambiente, apenas com uma inserção. **Show!**



## Dica 📌
Na vercel, é possivel adicionar seu domínio personalizado (de qualquer TLD) adiquirido em qualquer lugar. Deixando sua aplicação perfeita. E não, eu não trabalho na vercel. rs. 😉 <br><br> Um abraço e até a próxima!<br><br>
←[Voltar para lista anterior](https://github.com/ricardaonao/APIs)
____________________________________________________________________
Autoria: Ricardo Souza 









```bash
npm run dev
# or
yarn dev
```


