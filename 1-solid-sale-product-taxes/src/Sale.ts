import { Product } from '~/Product'
import { TaxProduct } from '~/TaxedProduct'

export class Sale {
  private products: Product[] = []

  addProduct(product: Product) {
    this.products.push(product)
  }

  getSubtotal() {
    return this.products.reduce((accumulator, product) => accumulator + product.price, 0)
  }

  getTaxes(date: Date) {
    return this.products.reduce((accumulator, product) => {
      if (product instanceof TaxProduct) {
        return accumulator + product.calculateTaxes(date)
      }

      return accumulator
    }, 0)
  }

  getTotal(date: Date) {
    return this.getSubtotal() + this.getTaxes(date)
  }
}
