import { Product } from '~/Product'
import { Promotion } from '~/Promotion'

export class Item extends Product {
  protected promotions: Promotion[] = []

  constructor(protected product: Product, protected quantity: number = 1) {
    super(product.category, product.name, product.price)

    this.quantity = quantity
  }

  updateQuantity(quantity: number) {
    this.quantity = quantity

    return this
  }

  getProduct(): Product {
    return this.product
  }

  getQuantity(): number {
    return this.quantity
  }
}
