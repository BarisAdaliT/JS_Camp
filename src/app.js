console.log("merhaba kodlama.io")

// js type safe degildir (saf hali)
// global degişken


/*var dolarBugun = 9.20
// var dolarBugun = "ankara"
var dolarDun = 9.30

{
    var dolarBugun = 9.10
}

console.log(dolarBugun)*/

// let blok blok çalışır
let dolarBugun1 = 9.20
// var dolarBugun = "ankara"
let dolarDun1 = 9.30

{
    let dolarBugun = 9.10
}

console.log(dolarBugun1)

const euroDun = 11.2
//const sabit degişken içindir
// euroDun = 11 (hata veriri)
console.log(euroDun)
// array
let konutKredileri = ["Konut kredisi","Emlak konut kredisi","Kamu konut kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++)
    {
        console.log("<li>"+konutKredileri[i]+"</li>")
    }
console.log("</ul>")
