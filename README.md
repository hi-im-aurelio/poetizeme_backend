# PoetizeMe

Uma plataforma para amantes da poesia publicarem e apreciarem belos poemas.

## Documentação
[Leia a documentação aqui](https://github.com/fariosofernando/poetizeme_backend/tree/master/doc)

## Sobre

O PoetizeMe permite que os usuários publiquem seus próprios poemas, leiam obras de outros e expressem apreço com um simples "like". Explore a beleza da escrita e encontre-se imerso no mundo da poesia!

## Características

- **Publicar Poemas**: Compartilhe sua poesia com o mundo.
- **Ler Poemas**: Navegue por uma vasta coleção de poemas publicados por outros usuários.
- **Dar Likes**: Mostre apreço por um poema que você amou.
- **Filtrar por Tags**: Encontre poemas com base em temas ou sentimentos específicos.

## Começando

### Pré-requisitos

- Node.js
- PostgreSQL
- Yarn (ou npm)

### Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_SEU_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
yarn install
```

3. Configure o banco de dados no `.env`:
```
DATABASE_URL="postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE"
```

4. Execute as migrações:
```bash
yarn prisma migrate dev
```

5. Inicie o servidor:
```bash
yarn start
```

Agora você deve ter o PoetizeMe rodando localmente!

## Contribuindo

Ficamos felizes em receber contribuições, seja na forma de código, sugestões ou relatórios de bugs. Sinta-se à vontade para abrir um "pull request" ou uma "issue" no GitHub.

## Licença

Este projeto está licenciado sob a licença MIT.
