# 2-solid-parking-lot

Exemplo de estacionamento (Parking Lot) a ser aplicado com SOLID e Jest.

**Obs.:** Não é um executável. Valide pelos testes.

## Antes de codar

```bash
yarn install
yarn test
```

## Configuração do projeto

```bash
npm init
tsc --init
jest --init
yarn add -D jest typescript ts-jest prettier eslint eslint-config-airbnb eslint-config-airbnb-typescript  eslint-config-prettier eslint-plugin-jest eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/jest @types/node
```

### Passos

- Tenha um problema para solucionar com SOLID;
- Defina as principais regras;
- Defina objetivos ao começar a desenvolver;
- Ilustre as entidades e seus comportamentos;
- Pense nas abstrações que precisarão ser feitas;
- Hora de codar.

#### Problema

Exemplificar com SOLID algumas entidades e comportamentos ligados, a:

- Estacionamento (`ParkingLot`);
- Praia (`Beach`);
- Shopping (`Shopping`);
- Aeroporto (`Airport`);

#### Regras

- Deve ter horário de chegada (`checkIn`) e horário de saída (`checkOut`) pela placa (`plate`);
- Quando estacionado na praia, o preço será de R$ 5,00;
- Quando estacionado no shopping, o preço será de R$ 3,00, não sendo cobrado das 12h às 14h;
- Quando estacionado no aeroporto, o preço será de R$ 10,00, tendo 3h gratuitas.

#### Objetivos

**Objetivo macro:** Desenvolver de fora para dentro, ou seja, das entidades maiores para menores, baseado em testes;

- Criar as entities base;
- Criar as abstrações das entitidades;
- Separar os estacionamentos possíveis em entidades;
- Definir os comportamentos;
- Definir os cálculos;
- Finalizar o desenvolvimento.

#### Ilustração

- ParkingLot
- Beach
- Shopping
- Airport

#### Abstrações

A definir.
