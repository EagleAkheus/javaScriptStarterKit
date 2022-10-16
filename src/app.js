console.log("Merhaba Kodlama.io")

//10:20 dersteyiz arkadşlar...

let dolarBugun = 9.30


//JS TYPE SAFE DEĞİLDİR BAŞTA NE TANIMLADIYSAN ONUNLA GİDER

let dolarDun = 9.20
dolarDun = "Ankara"
{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
// euroDun = 11 // bunu yapamıyoruz

console.log(euroDun)

//array'ler
//camelCasing
//PascalCasing

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Boktan Kredileri"]
//react

console.log("<ul>")
for(let i= 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")



console.log(konutKredileri)