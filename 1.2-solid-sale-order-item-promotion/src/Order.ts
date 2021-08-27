import { Item } from '~/Item'
import { ItemDiscount } from './ItemDiscount'
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
      const product = item.getProduct()
      let taxes = 0

      if (product instanceof TaxedProduct) {
        taxes = product.calculateTaxes(date)
      }

      taxes *= item.getQuantity()

      return accumulator + taxes
    }, 0)
  }

  getTotal(date: Date): number {
    const itemsWithDiscounts = this.items.filter(
      (item) => item instanceof ItemDiscount,
    ) as ItemDiscount[]
    const subtotal = this.getSubtotal()
    const taxes = this.getTaxes(date)
    const promotionsDiscountsValue = this.calculatePromotionsDiscountsValue(itemsWithDiscounts)

    return subtotal + taxes - promotionsDiscountsValue
  }

  private calculatePromotionsDiscountsValue(items: ItemDiscount[]) {
    const promotionsItems = items.filter((promotion) => promotion instanceof ItemDiscount)

    return promotionsItems.reduce((accumulator, itemDiscount) => {
      return accumulator + itemDiscount.getCalculatedItemDiscountValue()
    }, 0)
  }
}
