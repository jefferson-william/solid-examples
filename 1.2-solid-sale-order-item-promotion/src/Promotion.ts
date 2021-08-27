export class Promotion {
  constructor(private discountPercentage: number) {
    this.discountPercentage = discountPercentage
  }

  calculateDiscount(value: number): number {
    return value * this.discountPercentage
  }
}
