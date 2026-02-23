
# **Proposta de Trabalho Final**

# **Discente: João Pedro Barbosa Lima - 23.1.8117**

# Sistema de gereciamento de revisões de veículos 

O trabalho se consiste em um sistema de gerenciamento de revisões de veículos, que deve possibilitar os funcionarios a cadastrarem veículos e suas informações básicas marca, modelo, ano, placa cor quilometragem etc. O cliente deve conseguir visualizar seus veículos e suas reviões afim de saber se está na hora de realizar outra revisão.

## 1. Tema

O trabalho final tem como tema o desenvolvimento de um **Sistema de de gerenciamento de revisões de veículos**, com foco na realização de revisões de diferente veículos e fornecer um melhor gerenciamento de revisões pendentes.

## 2. Escopo
Este projeto terá as seguintes funcionalidades:
*   **Dashboard** <br>
  ``Cliente``: Visualização de revisões registradas em seus veículos. <br>
  ``Funcionario/Admin``: Visualização de revisões registradas em todos veículos registrados.
*   **Veiculos**: <br>
  ``Cliente``:Exibição de todos seus própios veículos com suas referenciadas. <br>
  ``Funcionario/Admin``: Funcionalidades de cadastrar e deletar revisões e veículos Exibição de todos veículos com suas referenciadas.
*   **Dados**: Funcionalidade para alteração de dados.
*   **Funcionario**: <br>
  ``Admin``: Funcionalidade para que usuarios administradores possam registrar e listar funcionarios

## 3. Restrições
Neste trabalho não serão considerados:
*   **Revisões detalhadas**: Revisões com muitos campos por exemplo descrição, tempo, tipo, anual ou semanal etc. Só será abodado uma simples revisão de geral.
*   **Geração de Relatórios em PDF/Excel**: O escopo atual foca na visualização em tempo real via navegador.

## 4. Protótipo
Protótipos para as páginas de **Dashboard, veiculos, dados e funcinarios** foram elaborados e implementados utilizando React + vite podendo ser encontrados na pasta `Front-end` do projeto, com a lógica de navegação centralizada no arquivo `routes.jsx`.

1. **Arquitetura MVC**: Código reorganizado seguindo o padrão Model-View-Controller com camada de Services.
---

##  Arquitetura back-end

```
server/src/
├── database/         # Configurações da database
├── services/         # Lógica de negócio
├── controllers/      # Controllers (recebem requisições)
├── routes/           # Rotas da API
└──  middlewares/     # Middlewares de autenticação

```

### Controllers / Services

**Services (Lógica de Negócio)**
- `ClienteService.js`: CRUD de criação listagem e alteração de dados de clientes
- `FuncionarioService.js`: CRUD de criação e listagem de funcionarios
- `RevisaoService.js`: CRUD de criação, delete e listagem de revisões
- `Usuarioclienteservice.js`: Orquestra os CRUDs que precisam de usuario e cliente ao mesmo tempo
- `UsuarioService.js`: CRUD de criação, e alteração de tipo de usuário
- `VeiculoService.js`: CRUD de criação, delete e listagem de veículos

**Controllers (Requisições HTTP)**
- Recebem as requests via http com json e o token jwt decoded
- Delegam para services
- Retornam as responses

**Config**
- `database.js`: Instância única seguindo o padrão singleton do Prisma Client

##  Arquitetura Front-end

```
Front-end/src/
├── Components/       # Componentes das página (Menu, input de senha)
├── css/              # Estilização das páginas
├── pages/            # Páginas criadas (Dashboard, veiculos, dados e funcinarios)
├── funcionarios/     # Funcionalidades de listagem e criação de funcionarios
├── dados/            # Funcionalidades de alteração de dados pessoais
├── veiculos/         # Funcionalidades de criação e delete de veículos
└── services/         # Serviços requisitados au back-end como autenticação
```

## Instalação

### Pré-requisitos
- Node.js
- PostgreSQL
- npm

### Passos

1. **Instalar dependências**
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente**
   
   Edite o arquivo `.env` com suas credenciais do banco:
   ```env
    DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"

    HOST = localhost

    PORT = 5432

    USER = usuario

    PASSWORD = senha

    DATABASE = nome_do_banco

    SECRET = "sua_chave_secreta_aqui"

    EXPIRESIN= "7d"
   ```

3. **Executar migrações do banco**
   ```bash
   npx prisma migrate dev
   ```

4. **Gerar Prisma Client**
   ```bash
   npx prisma generate
   ```

5. **Iniciar o servidor do back-end** <br>
  No terminal da pasta server execute:
   ```bash
   npm start
   ```

6. **Iniciar o servidor do front-end** <br>
  No terminal da pasta front-end execute:
   ```bash
   npm run dev
   ```

7. **Acessar o sistema**
   
   Abra o navegador em: `http://localhost:5173/Login`

---

## Documentação

## Endpoints da API

### Cliente
- `GET api/cliente` - Listar clientes
- `POST api/cliente` - Criar cliente
- `DELETE api/cliente` - Deletar cliente

### Funcionario
- `GET api/funcionario` - Listar funcionarios
- `POST api/funcionario` - Criar funcionario
- `DELETE api/funcionario` - Deletar funcionario

### Veiculo
- `GET api/Veiculo` - Listar Veiculos
- `POST api/Veiculo` - Criar Veiculo
- `DELETE api/Veiculo` - Deletar Veiculo

### Revisão
- `GET api/revisao` - Listar revisões
- `POST api/revisao` - Criar revisao
- `DELETE api/revisao` - Deletar revisao

### Login/registro
- `POST api/usuario/registrar` - Registrar usuário
- `POST api/usuario/login` - Validar login do usuário

### Usuário
- `DELETE api/usuario` - Delete de usuário
- `GET api/auth/validate` - Validação de usuário logado
- `GET api/usuario/logout` - Logout de usuário
- `GET api/usuario/cliente` - Busca de usuário/cliente
- `GET api/usuario` - Busca de usuário/cliente
- `PUT api/usuario/update` - Listagem de usuários
---

## Tecnologias Utilizadas

- **Backend**: Node.js + Express
- **ORM**: Prisma
- **Banco de Dados**: PostgreSQL
- **Autenticação**: JWT + bcrypt + cookieParser
- **Frontend**: HTML, CSS, JavaScript XML, React, Vite, Node.js

---

## Observações Importantes

### Segurança

- Autenticação via JWT 
- Middleware de autenticação em rotas protegidas
- Isolamento de dados por tipo de usuário (CLIENTE/FUNCIONARIO/ADMIN)
---