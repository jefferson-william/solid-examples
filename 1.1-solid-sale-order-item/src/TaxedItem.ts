import { TaxedProduct } from '~/TaxedProduct'
import { Promotion } from '~/Promotion'
import { Product } from '~/Product'

export abstract class TaxedItem extends TaxedProduct {
  protected promotions: Promotion[] = []

  constructor(protected product: Product, protected quantity: number = 1) {
    super(product.category, product.name, product.price)

    this.quantity = quantity
  }

  updateQuantity(quantity: number) {
    this.quantity = quantity

    return this
  }
}
