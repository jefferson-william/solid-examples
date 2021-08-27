import { Item } from '~/Item'
import { ItemDiscount } from '~/ItemDiscount'
import { TaxedProduct } from '~/TaxedProduct'

export class PriceCalculator {
  public calculateSubtotal(items: Item[]) {
    return items.reduce((accumulator, item) => {
      return accumulator + item.getProduct().price * item.getQuantity()
    }, 0)
  }

  public calculateTaxes(items: Item[], date: Date) {
    return items.reduce((accumulator, item) => {
      const product = item.getProduct()
      let taxes = 0

      if (product instanceof TaxedProduct) {
        taxes = product.calculateTaxes(date)
      }

      taxes *= item.getQuantity()

      return accumulator + taxes
    }, 0)
  }

  public calculatePromotionsDiscountsValue(items: ItemDiscount[]) {
    const promotionsItems = items.filter((promotion) => promotion instanceof ItemDiscount)

    return promotionsItems.reduce((accumulator, itemDiscount) => {
      return accumulator + itemDiscount.getCalculatedItemDiscountValue()
    }, 0)
  }

  public calculateTotal(items: Item[], date: Date) {
    const itemsWithDiscounts = items.filter(
      (item) => item instanceof ItemDiscount,
    ) as ItemDiscount[]
    const subtotal = this.calculateSubtotal(items)
    const taxes = this.calculateTaxes(items, date)
    const promotionsDiscountsValue = this.calculatePromotionsDiscountsValue(itemsWithDiscounts)

    return subtotal + taxes - promotionsDiscountsValue
  }
}
