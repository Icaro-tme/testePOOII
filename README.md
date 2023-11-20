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

## Comandos de teste de API:

### Pacientes
```bash
curl -X POST http://localhost:3000/pacientes \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Nome do Paciente",
    "usuario": "nomeusuario",
    "senha": "senhadopaciente"
  }'

curl -X POST http://localhost:3000/pacientes \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Nome do Paciente 2",
    "usuario": "nomeusuario2",
    "senha": "senhadopaciente2"
  }'
  
curl -X GET http://localhost:3000/pacientes/1
  
curl -X PUT http://localhost:3000/pacientes/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Novo Nome do Paciente",
    "usuario": "novonomeusuario",
    "senha": "novasenhadopaciente"
  }'
  
curl -X GET http://localhost:3000/pacientes/
  
```

### Secretarias
```bash
curl -X POST http://localhost:3000/secretarias \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Nome da Secretaria",
    "RG": "123456789"
  }'

curl -X POST http://localhost:3000/secretarias \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Nome da Secretaria 2",
    "RG": "123456782"
  }'

curl -X GET http://localhost:3000/secretarias/1

curl -X PUT http://localhost:3000/secretarias/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Novo Nome da Secretaria",
    "RG": "987654321"
  }'
  
curl -X GET http://localhost:3000/secretarias/


```

### Agendas
```bash
curl -X POST http://localhost:3000/agendas \
  -H "Content-Type: application/json" \
  -d '{
    "data": "2023-10-10T14:30:00.000Z"
  }'

curl -X POST http://localhost:3000/agendas \
  -H "Content-Type: application/json" \
  -d '{
    "data": "2023-02-02T14:30:00.000Z"
  }'

curl -X GET http://localhost:3000/agendas/1

curl -X PUT http://localhost:3000/agendas/1 \
  -H "Content-Type: application/json" \
  -d '{
    "data": "2023-11-11T15:30:00.000Z"
  }'
  
curl -X GET http://localhost:3000/agendas/


```

### Consultas
```bash
curl -X POST http://localhost:3000/consultas \
  -H "Content-Type: application/json" \
  -d '{
    "data": "2023-10-10T14:30:00.000Z",
    "dentista": "Dr. Dentistonio",
    "pacienteId": 1,
    "secretariaId": 1,
    "agendaId": 1
  }'

curl -X POST http://localhost:3000/consultas \
  -H "Content-Type: application/json" \
  -d '{
    "data": "2023-10-10T14:30:00.000Z",
    "dentista": "Dr. Dentistonio 2",
    "pacienteId": 2,
    "secretariaId": 2,
    "agendaId": 2
  }'

curl -X GET http://localhost:3000/consultas/1

curl -X PUT http://localhost:3000/consultas/1 \
  -H "Content-Type: application/json" \
  -d '{
    "data": "2023-10-11T16:30:00.000Z",
    "dentista": "Dr. Novo Dentistonio",
    "pacienteId": 1,
    "secretariaId": 1,
    "agendaId": 1
  }'
  
curl -X GET http://localhost:3000/consultas/

```


### Comandos Delete:
- Obs*: Caso deletar Secretaria, Agenda, ou Paciente antes da Consulta relacionado ao mesmo, a consulta já será deletada por conta de dependência de foreign key (drop cascade)
- Obs**: Esses aqui deletam só os de Id 1

``` bash
curl -X DELETE http://localhost:3000/consultas/1

curl -X DELETE http://localhost:3000/agendas/1

curl -X DELETE http://localhost:3000/secretarias/1

curl -X DELETE http://localhost:3000/pacientes/1
```

### Refazer o db para testar do zero
- (Como os ids são autoincrementais se você deletar o id 1 o proximo a ser inserido será id 2 mesmo se a tabela estiver vazia.)

```bash
rm ./prisma/dev.db
npx prisma db push
npx prisma migrate deploy
```