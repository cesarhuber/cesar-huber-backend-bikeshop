export class Bycicle {
  constructor(
    private id: string,
    private color: string,
    private gears: number,
    private brand: string,
    private model: string,
    private price: number
  ){}

  public getBycicleInfo() {
    return {
      color: this.color,
      gears: this.gears,
      brand: this.brand,
      model: this.model,
      price: this.price
    }
  }

  public getBycicleId() {
    return this.id
  }

  public getBycicleColor() {
    return this.color
  }

  public getBycicleGears() {
    return this.gears
  }

  public getBycicleBrand() {
    return this.brand
  }

  public getBycicleModel() {
    return this.model
  }

  public getByciclePrice() {
    return this.price
  }
}