# FizQL

This repo will spin up 3 containers:

- Hasura
- Postgres
- Authentication Server

## Installing the Hasura CLI

```npm i -g hasura-cli```

## Deployment

```sh
git clone https://github.com/yorgyetson/FizQL.git
cd FizQL
cp .env.example .env
docker compose up -d
hasura metadata apply
hasura migrate apply
hasura metadata reload
```
