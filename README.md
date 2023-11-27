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


### Usuário
- **Criar** (POST):
  ```json
  {
    "nome": "John Doe",
    "email": "john@example.com"
  }
  ```
- **Atualizar** (PUT):
  ```json
  {
    "nome": "John Updated",
    "email": "john.updated@example.com"
  }
  ```

### Leilão
- **Criar** (POST):
1. Primeiro Leilão:
   ```json
   {
     "produto": "Painting",
     "preco": 500.00,
     "data": "2023-11-27T15:00:00Z",
     "donoId": 1
   }
   ```
2. Segundo Leilão:
   ```json
   {
     "produto": "Antique Vase",
     "preco": 800.00,
     "data": "2023-11-28T15:00:00Z",
     "donoId": 2
   }
   ```
- **Atualizar** (PUT):
  ```json
  {
    "produto": "Updated Painting",
    "preco": 1200.00
  }
  ```


### Lance
- **Criar** (POST):
1. Lances para o primeiro Leilão:
   - Lance 1:
     ```json
     {
       "compradorId": 2,
       "leilaoId": 1,
       "valor": 550.00
     }
     ```
   - Lance 2:
     ```json
     {
       "compradorId": 1,
       "leilaoId": 1,
       "valor": 600.00
     }
     ```

2. Lances para o segundo Leilão:
   - Lance 1:
     ```json
     {
       "compradorId": 1,
       "leilaoId": 2,
       "valor": 850.00
     }
     ```
   - Lance 2:
     ```json
     {
       "compradorId": 3,
       "leilaoId": 2,
       "valor": 900.00
     }
     ```

- **Atualizar** (PUT):
  ```json
  {
    "valor": 200.00
  }
  ```


### Refazer o db para testar do zero
- (Como os ids são autoincrementais se você deletar o id 1 o proximo a ser inserido será id 2 mesmo se a tabela estiver vazia.)

```bash
rm ./prisma/dev.db
npx prisma db push
npx prisma migrate deploy
```
