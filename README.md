# Banco API Performance Tests

## 📌 Introdução
Este repositório contém testes de performance desenvolvidos para avaliar a API do projeto Banco API.  
Os testes foram implementados utilizando JavaScript em conjunto com a ferramenta K6, permitindo simular carga e analisar o comportamento da aplicação sob diferentes cenários.

O objetivo é garantir que a API suporte volumes de requisições de forma eficiente, identificando gargalos e oportunidades de melhoria.

---

## 🚀 Tecnologias Utilizadas
- JavaScript
- K6 (ferramenta de testes de performance)

---

## 📁 Estrutura do Repositório

```
├── tests/          #Casos de testes organizados por módulo de API
├── helpers/        #Funções utilitárias reutilizáveis para interação com a API
├── fixtures/       #Dados de entrada para os testes (ex:usuários,payloads)
├── utils/          #Funções utilitárias reutilizaveis
└── README.md
```

---

## 🎯 Objetivo de Cada Grupo de Arquivos

- **tests/**  
  Contém os arquivos principais de teste que executam as requisições e cenários de carga.

- **fixtures/**  
  Dados de entrada para os testes (ex:usuários,payloads).

- **utils/**  
  Funções auxiliares reutilizáveis, como criação de headers, autenticação, etc.

  **helpers/**
  Funções utilitárias reutilizáveis para interação com a API  

---

## ⚙️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/fabiooliveira98/banco-api-performance.git
```

2. Acesse o diretório:
```bash
cd banco-api-performance
```

3. Instale o K6 (caso ainda não tenha):
https://k6.io/docs/getting-started/installation/

---

## ▶️ Execução dos Testes

### 🔹 Execução básica
É necessário informar a variável de ambiente `BASE_URL` ao rodar os testes caso não esteja usando o `config.local.json` ou a abordagem de carregamento automática:

```bash
k6 run tests/seu-teste.js -e BASE_URL=https://sua-api.com
```

---

### 🔹 Execução com dashboard em tempo real

```bash
k6 run tests/seu-teste.js K6_WEB_DASHBOARD=true -e BASE_URL=https://sua-api.com 
```

---

### 🔹 Exportação do relatório em HTML

```bash
k6 run tests/seu-teste.js K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html -e BASE_URL=https://sua-api.com 
```

---

## 📊 Observações
- Certifique-se de configurar corretamente a variável `BASE_URL` caso não esteja usando o `config.local.json` ou a abordagem de carregamento automática.
- Os relatórios ajudam a identificar gargalos de performance.
- Recomenda-se executar os testes em ambiente controlado para evitar interferências externas.

---

## 📌 Autor
Fabio Oliveira
