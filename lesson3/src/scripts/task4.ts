type Book = { author: string }
type Electronics = { warranty: number }
type Clothes = { size: string }
type PriceType = { onSale: boolean } | { regularPrice: boolean }
type ShopProduct = (Book | Electronics | Clothes) & PriceType

const product: ShopProduct = { author: "John Doe", onSale: true }
const resultTask4 = document.getElementById("result") as HTMLElement
resultTask4.innerHTML = JSON.stringify(product)
