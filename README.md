# nginx_node
Programa NODE que grava e consulta um banco de dados MYSQL, utilizando o NGINX como proxy reverso.
O sistema está estruturado em três containeres DOCKER, utilizando DOCKER-COMPOSE para a criação dos mesmos.
Para que o container da aplicação NODE aguarde o do MYSQL é utilizado o "WAIT-FOR-IT".
O EJS está sendo utilizado na página HTML para facilitar a exibição dos dados provenientes da base.
