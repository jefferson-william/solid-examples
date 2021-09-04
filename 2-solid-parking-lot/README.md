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

Refatorar com SOLID algumas entidades e comportamentos ligados, a:

- Area de estacionamento (`ParkingLot`). Comece por este;
- Localização (`ParkingLocation`);
- Praia (`Beach`);
- Shopping (`Shopping`);
- Aeroporto (`Airport`);

#### Desafio

- Obter o **subtotal** de horas dos locais de estacionamentos;
- Obter o total de horas em **gratuitas** desses locais de estacionamentos;
- Obter o **total** de horas de todos os locais de estacionamentos;

#### Regras

- Shopping possui 1 hora gratuita;
- Aeroporto possui 2 horas gratuitas;
- Os demais não possuem horários gratuitos.

#### Bonus

- Deve ser possível obter período e valor por estacionar através do horário de chegada (`checkIn`) e
  horário de saída (`checkOut`) pela placa (`plate`) independente do local de estacionamento;

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
- ParkingLocation
- Beach
- Shopping
- Airport
- addParkingLocation
- getSubtotalPeriod
- getFreePeriod
- getTotalPeriod

#### Abstrações

- ParkingLocation
- ParkingLocationWithFreePeriod
