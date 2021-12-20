
function addToCart( quantity, productName = "elma") {
    console.log("Sepete Eklendi : " + productName + " Adet :" + quantity)
}
addToCart(10)
addToCart( 10 ,"Yumurta")
// addToCart("Karpuz")
console.log("-----------------------------")


// başka bir şekilde funksiyon tanımlamak
let sayHello = () => {
    console.log("Hello World !")
}
sayHello();
console.log("-----------------------------")


// başka bir şekilde funksiyon tanımlamak
let sayHello2 = function () {
    console.log("Hello World!")
}
sayHello2()
console.log("-----------------------------")
//OOP

let product1 = {productName: "elma", unitPrice: 10, quantity:5}


function addToCart3(product) {
    console.log("Ürün : " +product.productName)
    console.log("Fiyat : " +product.unitPrice)
    console.log("Ürün : " +product.quantity)
}


addToCart3 (product1)
console.log("-----------------------------")


//sayı tip leri değer tip iken objeler referans tip degişkenlerdeir

let product2 ={productName: "elma", unitPrice:10, quantity: 5}
let product3 ={productName: "elma", unitPrice:10, quantity: 5}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

console.log("-----------------------------")

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi2)
console.log("-----------------------------")

function addToCart4(products) {
    console.log(products)

}

//array içinde obje tutma
let product4 ={productName: "Elma", unitPrice:10, quantity: 5}
let product5 ={productName: "Armut", unitPrice:10, quantity: 5}
let product6 ={productName: "Karpuz", unitPrice:10, quantity: 5}


let products1 = [
    product4,
    product5,
    product6
]
addToCart4(products1)
console.log("-----------------------------")

