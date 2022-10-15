# bis2bis-api 🧩
## SOBRE 📎

Case back-end com dois objetivos a serem desenvolvidos e implementados. 

Sendo a stack usada - Node.js

#### OBJETIVO 01:
  Criação de script para popular um banco de dados utilizando o MongoDB a partir de uma API fornecida.

#### OBJETIVO 02:
  Criação de uma API Rest viabilizando um CRUD, para gestão dos dados utilizados.
  
  ## __HOSPEDAGEM__ :house:
  Sendo necessário a hospedagem em um ambiente ubuntu em máquina virtualizada AWS.
  
  Foi usado o Amazon container service (EC2 ECS), que permite escalar contêineres do docker com alto desempenho.
  
  Após a criação da Docker Container Image em repositorio na AWS, a instância criada disponibiliza a utilização e acesso.
  
  ### ACESSO :door:
  Com a configuração e liberação da porta 3000 da instância, temos para acesso a URL: http://ec2-18-213-245-167.compute-1.amazonaws.com/
  
  Respeitando as rotas configuradas na API, seguimos com o detalhamento:
  
  ### ROTAS :twisted_rightwards_arrows:
  
   - Metodo GET
      - Listagem: http://ec2-18-213-245-167.compute-1.amazonaws.com:3000/universities
      - Listagem por id: http://ec2-18-213-245-167.compute-1.amazonaws.com:3000/universities/ {id_a_ser_buscado}
      - Listagem por pais (query string):
         http://ec2-18-213-245-167.compute-1.amazonaws.com:3000/universities/country/query?country= {nome_pais}
   - Metodo POST
      - Cadastro: http://ec2-18-213-245-167.compute-1.amazonaws.com:3000/universities
   - Metodo PUT/PATCH
      - Atualização: http://ec2-18-213-245-167.compute-1.amazonaws.com:3000/universities/ {id_a_ser_atualizado}
   - Metodo DELETE
      - Exclusão: http://ec2-18-213-245-167.compute-1.amazonaws.com:3000/universities/ {id_a_ser_deletado}


 ## __DOCKER__ :whale2:
 Disponível em ambiente local, caso usuário/dev tenha o Docker em sua máquina. Utilizando o Docker Compose.
  ```
   docker-compose up
  ```
  Docker já configurado.
  ## __DEPLOY__ :rocket:
  Instalação de dependências
  ```
   yarn add 
  ```
  Scripts pre definidos contidos em __package.json__
  Para rodar o serviço
  ```
   yarn dev
  ```
  Script para inserção de dados no MongoDB
  ```
   yarn insert
  ```
  Script do qual realiza todos os procedimentos necessários. Inserção e inicio da API.
  ```
   yarn start
  ```

  
  
