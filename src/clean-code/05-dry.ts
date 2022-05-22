type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady() {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if (this[key].length <= 0) throw new Error(`${key} is empty`);
          break;

        case "number":
          if (this[key] <= 0) throw new Error(`${key} is not valid`);
          break;

        default:
          throw Error(`${typeof this[key]} is not supported`);
      }
    }
  }

  toString() {
    if (!this.isProductReady) return;
    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("blue pants", 100, "M");
  console.log(bluePants.toString());
})();
