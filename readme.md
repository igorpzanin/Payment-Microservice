# Aplicação de pagamento

Este projeto consiste em dois microsserviços independentes: um serviço de pagamento e um serviço de notificação. Eles se comunicam de forma assíncrona através de uma fila de mensagens utilizando o RabbitMQ. A aplicação utiliza Docker Compose para orquestrar os serviços.

## Pré-requisitos

- Docker e Docker Compose instalados na máquina.
- Node.js e npm (caso queira testar os microsserviços fora do Docker).

## Configuração

1. Clone o repositório:

```bash
git clone https://github.com/igorpzanin/fastLocation.git
cd projeto
```

2. Inicialização com Docker Compose

O projeto utiliza o docker-compose.yml para gerenciar os serviços de pagamento, notificação, RabbitMQ e PostgreSQL.

2.1. No terminal, dentro da pasta raiz do projeto, execute:

```bash
docker-compose up --build
```

2.2. Aguarde até que todos os containers sejam inicializados. Você verá mensagens de log indicando que os serviços de pagamento e notificação estão "rodando".

2.3. O Docker Compose configurará automaticamente as portas de cada serviço:

Serviço de Pagamento: http://localhost:3001
Serviço de Notificação: http://localhost:3002
RabbitMQ Management: http://localhost:15672 (usuário: guest, senha: guest)

## Estrutura do Banco de Dados
Antes de iniciar, o banco de dados deve ser configurado com a seguinte tabela:

```bash
CREATE TABLE transacoes (
id SERIAL PRIMARY KEY,
usuario_id INT NOT NULL,
valor DECIMAL(10, 2) NOT NULL,
status VARCHAR(20) NOT NULL
);
```
Execute este script em um cliente SQL conectado ao container do PostgreSQL.

## Comandos Úteis
Parar os containers:

´´´bash
docker-compose down
´´´

Reconstruir os containers:

´´´bash
docker-compose up --build
´´´
