import { Item } from '~/Item'
import { TaxedProduct } from './TaxedProduct'

export class Order {
  public items: Item[] = []

  addItem(item: Item): Order {
    this.items.push(item)

    return this
  }

  removeItem(itemParam: Item): Order {
    this.items = this.items.filter((item) => item.name !== itemParam.name)

    return this
  }

  getSubtotal(): number {
    return this.items.reduce((accumulator, item) => {
      return accumulator + item.getProduct().price * item.getQuantity()
    }, 0)
  }

  getTaxes(date: Date): number {
    return this.items.reduce((accumulator, item) => {
      let taxes = 0

      const product = item.getProduct()

      if (product instanceof TaxedProduct) {
        taxes = product.calculateTaxes(date)
      }

      taxes *= item.getQuantity()

      return accumulator + taxes
    }, 0)
  }

  getTotal(date: Date): number {
    return this.getSubtotal() + this.getTaxes(date)
  }
}
