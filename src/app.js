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
console.log("-----------------------------")
// array
let konutKredileri = ["Konut kredisi","Emlak konut kredisi","Kamu konut kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++)
    {
        console.log("<li>"+konutKredileri[i]+"</li>")
    }
console.log("</ul>")
console.log("-----------------------------")

let student ={id:1, name:"Barış"}
console.log(student)
// fonksiyon tanımlama
// function name () { } yapısı
function save(ogrenci,puan=10) {
    console.log(ogrenci.name+ " : " +puan)
}
save(student)
//puanı gönermes isen defult degeri alır
save(student,100)
// defult parametre sona yazılır atamalar sıra ile yapılır

//bu şekilde yazılamaz
// ama ilk degeri undefined göndere bilirsin

 function save1(puan=10, ogrenci) {
     console.log(ogrenci.name+ " : " +puan)
 }

save1 (undefined, student)


// type safe olmadıgı için ogrenci degişkeni varmış gibi davrenıyor
// types. farklı

// ! array'e obje atama
let students2 = [student, {id:1, name:"Barış"}]
console.log(students2)
// objelerin türü aynı olmak zorunda degil hatta objenin yanına array de göndere bilirsin
let students3 = [student, {id:1, name:"Barış"}, "Ankara", {city:"İstanbul"}]
console.log(students3)
console.log("-----------------------------")




