import { Product } from '~/Product'

export class Item extends Product {
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
