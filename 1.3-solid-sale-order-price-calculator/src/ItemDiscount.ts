import { Item } from '~/Item'
import { Product } from '~/Product'
import { Promotion } from '~/Promotion'

export class ItemDiscount extends Item {
  protected promotions: Promotion[] = []

  constructor(protected product: Product, protected quantity: number = 1) {
    super(product, quantity)
  }

  getCalculatedItemDiscountValue(): number {
    const promotionsDiscounts = this.promotions.reduce((accumulator, promotion) => {
      const discountValue = promotion.calculateDiscount(this.product.price) * this.quantity

      return accumulator + discountValue
    }, 0)

    return promotionsDiscounts
  }

  addPromotion(promotion: Promotion) {
    this.promotions.push(promotion)

    return this
  }

  getPromotions(): readonly Promotion[] {
    return Object.freeze(this.promotions)
  }
}
