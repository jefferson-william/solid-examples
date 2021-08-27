import { Product } from '~/Product'

export class Water extends Product {
  constructor(public name: string, public price: number) {
    super('Water', name, price)
  }
}
