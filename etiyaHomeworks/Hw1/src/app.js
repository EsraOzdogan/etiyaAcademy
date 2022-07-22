//Js'de nesne yönelimli programlama düşüktür. EcmaScript ile js eskiye göre daha nesnel olmuştur.
//js geliştirilip type safe hale gelip ekstra özellikler eklenip typescript ortaya çıktı. Derlenirken tekrar js olarak derleniyor.
//Ama saf js ile de nene yönelimli programlama yapılabilinir tabii.
//Değişken tanımlarken kullanılan var keywordü eski bir kullanım olduğu için artık günümüzde let keywordunun kullanıyoruz. Bu durum scope ile alakalı
//let değisken tanımlamak icin kullanicaz.var--saf jsde, let-ecmaScript ile
//console.log ekrana yazdirir
//js'de virgül koymasan da olur
//saf javascript tip güvenli(type safe) değildir. Yani değişken tipi değiştirilebilir
//Typscript gibi baslangicta degiskenin tipi tanımlanıp daha sonra o tip ile devam etmiyor
//var
// var sayi1=10;
// sayi1="Esra Özdoğan";
// console.log(sayi1)


//--------
//Burda kod satırı duplicate decleration hatası yani birden fazla tanımlama hatası verecek.Çünkü 2 kere ayni isimle degisken tanımlamıs oluyoruz
// let sayi2=10;
// let sayi2="Esra Özdoğan";
// console.log(sayi2)


// string atadigimizda let ifadesini kaldirirsak sorun cözülecektir
// let sayi2=10;
// sayi2="Esra Özdoğan";
// console.log(sayi2)

//Asagidaki sekilde obje de tanimlayabiliriz. Degisken basina let koymazsak student in not defined uyarısı aliriz
 let student = {id:1,name:"Esra"} //obje--jsde aslında objeler bu seviyede biz bunları belirli patternlarla class yapıyoruz
// console.log(student) //object-notation şeklinde gözükür




//--------Function tanımlama
//uygulama yukardan asagiya dogru calisir

// function save(){ //fonksiyon tanımlaması bu şekilde yapılır
//     console.log("Saved")
// }
// save() //parametresiz fonksiyon cagirma

//parametreli fonksiyon--parametreye tip atmiyoruz
//aşağıdaki fonksiyonun amacı öğrenci bilgilerini kaydederek console'a yazdırmaktır
// function save(ogrenci){ //fonksiyon tanımlaması bu şekilde yapılır
//     console.log(ogrenci)
// }
// save() //çıktı: undefined--Hata vermez. 
// save(student); //parametreli fonksiyon bu şekilde çağırılır // çıktı:{id:1,name:"Esra"} 
// save(15); //15
// save("Esra"); //Esra

//default deger varsa sona yazilir.
// function save(ogrenci,puan=10) { 
//     console.log(ogrenci.name + " : "+ puan)
// }
// save(student); //Esra : 10 --default puan 10
// save(50);  //ögrencinin name özelligi yoktur bu nedenle undefined gelecek
//  //undefined--ortada yok, null--bellekte değeri var ama referansı yok

//  save(student,100); //Esra : 100

//default deger varsa sona yazilir.
// function save(puan=10,ogrenci) { 
//     console.log(ogrenci.name + " : "+ puan)
// }
// //save(student);  //Hata-- Çünkü fonksiyondaki parametereler sırayla çalışır ve student ile puan eşleşir. ogrenci parametresine bir değer atanmadığı için ogrenci.name'i de okuyamaz.
// save(undefined,student); //Esra : 10--Default değeri okuması için parametrede undefined veriyoruz.Undefined yazdığımızda yokum dediği içinsave'e gitmedi bu nedenle undefined



//--------Array(dizi) tanımlama
//Şuan let ve var olması farketmiyor
let students=["Esra","Tuğçe","Kübra"]; 
console.log(students);

let students2 = [student, {id:1 , name: "Esra"}]
console.log(students2);

let students3=[student,{id:2, name:"Esra"},"Ankara",{city:"İstanbul"}]; //Arrayin içinde obje,obje,string, obje var. VE objeler de farklı.
console.log(students3);