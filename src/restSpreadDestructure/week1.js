//rest (geriye kalan)
// ... elemanları belli olmayan bir array yaratır
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts)
showProducts(10,"elma","armut","karpuz")
console.log("-----------------------------")

//spread (ayırma)
// arraydeki elemanları ayrı ayrı yazmaya yarar
let points = [1,2,3,4,5,61,54,84,41,6]
console.log(...points)
// araydeki en büyük elemeneı yazdırmak icin
console.log(Math.max(...points))
console.log("-----------------------------")

//Destructuring
// arimizdeki arrayin degerlerini deişkenlere atama yöntemi
let populastions = [10000,20000,30000,[40000,100000]]
let [small,medium,high,asadaf] = populastions
console.log(small)
console.log(medium)
console.log(high)
console.log(asadaf)
let [deneme1,deneme2] = asadaf
console.log(deneme1)
console.log(deneme2)
console.log("-----------------------------")
// daha iyi yöntem
let populastions1 = [10000,20000,30000,[40000,100000]]
let [small1,medium1,high1,[asadaf1,asadaf2]] = populastions1
console.log(small1)
console.log(medium1)
console.log(high1)
console.log(asadaf1)
console.log(asadaf2)
console.log("-----------------------------")

function someFunction([small2],number) {
    console.log(small2)
}
someFunction(populastions)

//objeyi degişkenlere atama

let category = {id:1, name:"İçeçek"}
let {id,name} = category
console.log(id)
console.log(name)