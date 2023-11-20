# simuladoWeb

## Comandos de instalação e inicialização do TypeScript:

> ```npm init -y```
> 
> ```npm install typescript --save-dev```
> 
> ```npx tsc -init```

## Instalando dependências do Prisma

> ```npm install express --save```
> 
> ```npm i --save-dev @types/express```
> 
> ```npm install prisma --save-dev```
> 
> ```npx prisma init --datasource-provider sqlite```
>
> ```npx prisma migrate dev --name init```

### Refazer o db para testar do zero
- (Como os ids são autoincrementais se você deletar o id 1 o proximo a ser inserido será id 2 mesmo se a tabela estiver vazia.)

```bash
rm ./prisma/dev.db
npx prisma db push
npx prisma migrate deploy
```
