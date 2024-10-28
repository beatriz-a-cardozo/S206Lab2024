# S206Lab2024

# Autor: Beatriz de Araujo Cardozo.

# Arquivo de teste de qualidade do site SKOOB (https://www.skoob.com.br)
Aqui contém funções para testar o sistema de registro, acesso aos livros, pesquisa, explorar e home do site!

# Para abrir o relatório siga as instruções a baixo:

no terminal ou git bash aberto na pasta do projeto insira o seguintes comandos:
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'

caso nao funcione, tente:
npm install cypress-mochawesome-reporter  
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'

Isso abrira o relatório de testes no termminal, mas se quiser ver uma versão mais identada acesse a pasta Relatorio3\cypress\reports e abra o arquivo .html

# Para executar no CYPRESS:

Para executar o projeto no CYPRESS é necessário abri-lo pelo o cypress usando o comando : ./node_modules/.bin/cypress open no terminal da pasta do projeto
caso nao tenha o cypress instalado é só usar o comando : NPM install cypress na pasta do projeto!