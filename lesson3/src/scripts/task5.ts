type ProductType = { title: string; price: number }
const productObj: unknown = { title: "Book", price: 100 }
localStorage.setItem("product", JSON.stringify(productObj))

function isProductType(valueObj: unknown): valueObj is ProductType {
	if (!(!!valueObj && typeof valueObj === "object" && "title" in valueObj && "price" in valueObj)) {
		throw new Error("Invalid product object")
	}
	return true
}

const result5 = document.getElementById("result") as HTMLElement
const productValue: unknown = JSON.parse(localStorage.getItem("product") || "")
if (isProductType(productValue)) {
	result5.innerHTML = `Title: ${productValue.title}, Price: ${productValue.price}`
} else {
	result5.innerHTML = "Invalid product object"
}
