# solid-sale-product-taxes

Exemplo de um estrutura de vendas com produtos taxados ou não com SOLID e Jest.

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

Exemplificar com SOLID algumas entidades e comportamentos ligados a venda, produtos, preços e taxas.

#### Regras

- Alguns produtos podem ser taxados no valor final da venda;
- Produtos prejudiciais a saúde como cigarro serão taxadas em 20%;
- Bebidas alcoólicas serão taxadas em 10%, exceto em Fevereiro;
- Demais produtos não são taxados.

#### Objetivos

**Objetivo macro:** Desenvolver de fora para dentro, ou seja, das entidades maiores para menores, baseado em testes;

- Criar as entities base;
- Criar as abstrações das entitidades;
- Separar os produtos que serão taxados por abstrações;
- Definir os comportamentos;
- Definir os cálculos;
- Finalizar o desenvolvimento.

#### Ilustração

- Sale
- Product
- Cigar
- Beer
- Water
- getSubtotal
- getTaxes
- getTotal
- calculateTaxes()
- getTax()

#### Abstrações

- Product
- TaxedProduct

## Roteiro

Anotações para usar na hora da apresentação.

- Criar `Sale.spec.ts` e definir o primeiro teste sendo sobre `getSubtotal()`;
- Criar `Product.ts`;
- Criar `addProduct()` e `getSubtotal()` em `Sale.ts`;
- Criar `getTaxes()` em `Sale.ts` com `if` e cálculos `product.value * 0.2` e etc das taxas por categoria de produtos;
- Criar `getTotal()` em `Sale.ts`;
- Falar sobre _Single Responsibility Principle_ através do cálculo das taxas;
- Criar `[Entity].calculateTaxes()` com os cálculos e `if` do `getTaxes()` (não sendo a versão final);
- Falar sobre _Open Close Principle_ exemplificando nova categoria `Eletronic` e quebrando o princípio;
- Criar `Cigar.ts` e `constructor`;
- Criar `calculateTaxes()` em `Product` como `abstract`. Com isso, fechar modificação e abrir para estensão;
- Implementar `calculateTaxes()` de `Cigar` com seu cálculo e citar que _polimorfismo_ reduz `if`;
- Criar `Beer.ts` e `Water.ts`;
- Refatorar os testes;
- Criar `Eletronic.ts` e citar que está aberto para estensão e fechado para modificação;
- Aplicar _template method_ implementando `calculateTaxes()` e criando `getTax()` em `Product`;
- Refatorar entidades criando `getTax()`;
- Implementar que `Water.getTax()` não tem taxa, ou seja, `throw new Error()`;
- Falar que quebrou o _Liskov Substitution Principle_;
- Citar que se Cigar/Beer/Water é subclasse de `Product`, os objetos do tipo `Product` podem ser substituidos por instancias de Cigar/Beer/Water;
- O que a **Barbara Liskov** trás é herança para que você possa substituí-la sem quebrar o código;
- Falar sobre _Interface Segregation Principle_ (interface é algo a ser implementado);
- Criar `TaxedProduct.ts` que estende de `Product`;
- Mover `calculateTaxes()` e `getTax()` para `TaxedProduct` para segregar uma implementação baixando o nível da hierarquia;
- Remover `Water.getTax()` e fazer ele estender de `Product` apenas, e as demais entidades, estender de `TaxedProduct`;
- Refatorar `Sale.getTaxes()` com `instanceof`;
- Citar que quando se fala sobre _Liskov Substitution_ e _Interface Segregation_ nada mais é que hierarquia e estrutura de classes;
- Implementar regra de _february_ em `Beer` e citar que seria complicado testar o `new Date()` e que o teste começa a ficar massante;
- Citar como os `new`(s) são sinais de fortes acoplamentos;
- Falar sobre _Dependency Inversion Principle_;
- Passar uma data `new Date('2021-01-01T00:00:00')` desde os testes em `getTaxes()` e `getTotal()` até `calculateTaxes()`, `Cigar`, `Water` e `Eletronic`;
