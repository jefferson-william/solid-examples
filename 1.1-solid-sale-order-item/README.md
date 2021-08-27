# 1.1-solid-sale-order-item

Continuação do [1-solid-sale-product-taxes](../1-solid-sale-product-taxes/README.md) com mais complexidade.

## Problema

Resolva o seguinte problema:

- Venda agora não deve possuir cáculos, mas sim toda venda pode ter uma `Order` de `Sale`;
- `Order` deve conter `Item[]` que por sua vez tem `Product`;
- `Order` deve conter todos os cálculos ligados a `Product` de um `Item`;
- `Item` deve conter uma quantidade _N_ de produtos, de acordo com o que for informado.

Você deve manter alguns comportamentos do exemplo anterior, [1-solid-sale-product-taxes](../1-solid-sale-product-taxes/README.md):

- Ainda deve conter produtos taxados ou não;
- As categorias de produto devem ser mantidas, tais como: `Cigar`, `Beer` e `Water`;
- Deve ser criado uma nova categoria sendo `Rice` por R$ 20,00 não taxado para usar nos testes.
