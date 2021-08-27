import { Item } from '~/Item'
import { PriceCalculator } from '~/PriceCalculator'

export class Order {
  public items: Item[] = []

  constructor(private priceCalculator: PriceCalculator) {
    this.priceCalculator = priceCalculator
  }

  addItem(item: Item): Order {
    this.items.push(item)

    return this
  }

  removeItem(itemParam: Item): Order {
    this.items = this.items.filter((item) => item.name !== itemParam.name)

    return this
  }

  getSubtotal(): number {
    return this.priceCalculator.calculateSubtotal(this.items)
  }

  getTaxes(date: Date): number {
    return this.priceCalculator.calculateTaxes(this.items, date)
  }

  getTotal(date: Date): number {
    return this.priceCalculator.calculateTotal(this.items, date)
  }
}
