//-----Rest:Geriye kalan.
//C#--params
//Java--varArgs
// Rest Parametresi, fonksiyonlara sınır sayısı olmadan parametre geçmemize olanak verir 
//İstenilen harici kalan tüm öğeleri bir dizide toplar.
//İstediğimiz kadar parametreyi veriyoruz array olarak tutuluyor restte
//...products--arraye çevirir verilen parametreyi
let showProducts = function (id,...products){ //jsde değişkene değer atılır
    console.log(id)
    console.log(products)
    console.log(products[0])

}
// console.log(typeof showProducts) //değişken türü--function
// showProducts() //id--undefined, ...products--boş array
showProducts(20,"Elma","Armut","Karpuz","Portakal") //20, Elma Armut Karpuz Portakal olan Array
// showProducts(20,["Elma","Armut","Karpuz","Portakal"]) //20, Elma Armut Karpuz Portakal olan Array içinde array





//------Spread: Ayrıştırmak
//String, Array veya Object'i parametre gibi virgülle ayırmaya yarıyor. 
//Gönderilen veriyi ayırır.
//Elimizdeki arrayi ayrıştırıyoruz spreadde
console.log(Math.max(1,3,5,7,12)) //max--rest ister parametre olarak.Bu nedenle virgül ile veriyoruz
// console.log(Math.max([1,3,5,7,1])) //virgül yerine array verirsek NaN-not a number hatası.

let points=[1,3,5,7,12]
console.log(...points) //Bir arrayi parametra gibi ayırdı

console.log(Math.max(...points)) // 12-arraydeki büyüğü gösterir
console.log(..."ABC","D",..."EFG","H",..."KL") // A B C ayırdı, D ayrı zaten, E F G ayırır, H ayrı zaten, K L yi ayırır




//---Destructuring
//Array Destrucuting
//Elimizdeki arrayın değerlerini değişkenlere atıyoruz
//let ile tanımlıyoruz. Array referans değer bu nedenle
// let populations=[1000,2000,3000]
// //console.log(populations[0])--bu şekilde erişmek istemiyorum değişkene atmak istiyorum
// let [small,medium,high] = populations



// //--3 fonk birbirini etkiliyorsa.Mesela sepet
// let setState = function(params){

// }
// let populations=[1000,setState,3000]




let populations=[1000,2000,3000,[40000,60000]]
// let [small,medium,high,veryHigh,maximum] = populations//veryHigh--[4000,6000],maximum undefined --Böyle olmaayacak kedni içinde de destructuring yapıcaz
let [small,medium,high,[veryHigh,maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)




//Jsde fonk içine parametre olarak array vermiyoruz zaten, değişken tipi verilmiyor parametrede.
//Array verirsen paramtreye destructuring anlıyor
// function someFunction([small1],number){
//     console.log(small1)
//  }
//  //someFunction() //hata çünkü array vermedik iterable yapamaz
//  someFunction(populations)



//Obje Destructuring--Objenin istediğin elemanının değerini değişkene atama
let category={id:1,name:"İçecek"};
console.log(category.id);
console.log(category["name"])

let {id,name} = category
console.log(id);
console.log(name)