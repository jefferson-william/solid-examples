import { Product } from '~/Product'

export class Rice extends Product {
  constructor(public name: string, public price: number) {
    super('Rice', name, price)
  }
}
