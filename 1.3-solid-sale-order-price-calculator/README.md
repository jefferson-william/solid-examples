# 1.3-solid-sale-order-price-calculator

Continuação do [1.2-solid-sale-order-item-promotion](../1.2-solid-sale-order-item-promotion/README.md) com mais complexidade.

## Problema

Resolva o seguinte problema:

- `Order` não deve mais saber fazer cálculos. Apenas consumir de `PriceCalculator`;
- `PriceCalculator` deve conter os cáculos que antes estavam em `Order`;
- `Order` deve ficar mais enxuto afim de evitar um possível crescimento desnorteado.

Você deve manter alguns comportamentos do exemplo anterior, [1.2-solid-sale-order-item-promotion](../1.2-solid-sale-order-item-promotion/README.md):

- Ainda deve existir `Promotion` e items com desconto.
