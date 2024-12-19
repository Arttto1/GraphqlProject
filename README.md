# Kanban Field Control

Este projeto é um sistema Kanban simples e funcional, com funcionalidades para gerenciar colunas, tarefas e subtarefas. A seguir estão as instruções para iniciar o projeto e uma descrição das principais funcionalidades.

---

## **Como iniciar o projeto**

### **Backend (Servidor)**

+ **Comandos para iniciar o servidor:**
  ```bash
  # Acesse a pasta do servidor
  cd server

  # Instale as dependências
  npm install

  # Configure as variáveis de ambiente
  # Crie um arquivo .env na raiz do servidor e adicione:
  DATABASE=<sua_connection_string_do_mongodb>
  PORT=3000

  # Inicie o servidor
  npm start
