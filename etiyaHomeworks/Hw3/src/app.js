//Html-Css-Js

//Js-- Html, css leri değiştirebilirsin

//Js data types: String, Number, Boolean, Array, Object, Loose Typing, Dynamic Typing
//String: Metinsel verileri tutmak için
//Number: sayısal verileri tutmak için
//Boolean: Mantıksal verileri tutmak için(True-False)
//Array :Benzer verileri tutmak için, bir değişken üzerinde birden fazla veri tutulur
//Object : Nesnel yetenekler kazanmak için


//-------String

// var student = "Esra Özdoğan";
// console.log(student)

// var student = "Esra Özdoğan"; //string
// var value = 10; //number
// var student2 = student; //string
// var isItTrue = true //boolean
// document.getElementById("demo").innerHTML=student;



// var student = "Esra Özdoğan"; //string
// student = student.substring(1,4)  //js string functions
// document.getElementById("demo").innerHTML=student;


// //not type safe
// var value = 10; //number
// value = "Salih Demiroğ"
// document.getElementById("demo").innerHTML=value;



//-------Array

// var students = ["Esra Özdoğan", "Engin Demiroğ","Salih Demiroğ"]; //böyle yazım tercih edilir
// document.getElementById("demo").innerHTML=students;

// var students = new Array("Esra Özdoğan", "Engin Demiroğ","Salih Demiroğ");//string tanımlama da vermez. Ama sayısal tanımlama da verir
// var students = new Array(5,10,15);// hata vermez
// var students = new Array(25);// tek elemanlı içinde 25 mi var yoksa 25 elemanlı mı diye hata verir
// document.getElementById("demo").innerHTML=students;

// document.getElementById("demo").innerHTML=students[1]; //Engin Demiroğ
// students[1]= "Ulaş Demiroğ" //set
// document.getElementById("demo").innerHTML=students[1]; //Ulaş Demiroğ


//Js dizisinde sadece aynı tip değil farklı tipte de veriler tutulabilir

// var students = ["Esra Özdoğan", "Engin Demiroğ","Salih Demiroğ",25]; 
// document.getElementById("demo").innerHTML=students[3]; //25

//diziye yeni eleman ekleme-push
// students.push("Ahmet Sait Duran")
// document.getElementById("demo").innerHTML=students;
// student[4] = "Derin Demiroğ" //4. indeks yoktu bilmemiz lazım son indeksi
// //student[students.length] = "Derin Demiroğ"
// document.getElementById("demo").innerHTML=students;



//-------Object

// var student = {firstName : "Esra", lastName : "Özdoğan", city : "İstanbul"}
// document.getElementById("objectDemo").innerHTML=student.firstName; //get

// student.firstName = "Salih" //set
// document.getElementById("objectDemo").innerHTML=student.firstName; //get



//-------Loose Typing(Gevşek tip tanımlama)

//önceden tanımlanan number tipli değişkeni daha sonra obje yapabiliriz bu durumda hata vermez. 
//Farklı yere işaret eder
// var number = 10;
// number = new Object();
// alert(number)

// //stringde verilir
// var number = 10;
// number = "Ten";
// alert(number)



//-------Dynamic Typing

// var customer = {
//     id:1,
//     contactName : "Engin Demiroğ"
// }

// customer.country = "Turkey"; //başka bir özellik tanımlama

// customer.sayHello = function(){    //cutomer sınıfına method tanımı
//     alert( "Hello " + this.contactName) //this--fonksiyonu barındıran nesne ynai customer
//     alert( "Hello " + this.country)
// }
// customer.sayHello()





//---Event

// function eventCode(){
//     alert("Event Code Run")
// }





//----Functions

//Fonksiyon, bir nesne gibi ve bir nesne yapıcısı, bir soyut sınıf gibi de davranabilir. Bu nedenle C#, Java gibi nesne yönelimli dilleri de teşlil eder
//Fonksiyonlar belirli biri şi yapmak için kullanılır .Bir değer döndürebilir
//Parametre de herhangi bir veri tipi belirtilmez.Tip kontrolü de yapılmaz

//Function Signature

//with return
// function functionName(paremter1,parameter2){
//     //Do something
//     return parameter1 * parameter2        
// }
// alert(functionName(2,3));  //alert(6)


// //function without return
// //fonksiyonda parametre alıp kullanmak zoruunda değiliz. 
// //fonksiyon çağırılırken parametre göndermek zorunda da değiliz
// function functionWithOutReturn(parameter1,parameter2){    
//     alert("This is a function without 'return' statement")
// }

// functionWithOutReturn();
// functionWithOutReturn(2);
// functionWithOutReturn(2,3);
// functionWithOutReturn(2,3,4);

// //Jsde aynı isimde fonsiyon adı yazılırsa hata vermez. Değerini değiştirerek onun üzerinden işlem yaparak devam eder.

// //Parameter Defaults
// //kullanıcı 'i gönderip y'yi göndermeyebilir. bu durumu yakalamak için kontrol edip bir değer atıyoruz
// function functionName2(x,y) {
//     if (y === undefined) {
//         y= 0;
//     }
// }

// functionName2(3);  //x=3, y=0
// functionName2(3,4);  //x=3, y=4


// //The Arguments Object
// x= findMax(1,123,500,115,44,88); //findMax-array(obje arrayi)

// function findMax() {
//     var i, max = 0;
//     for ( i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i]
//         }        
//     }
//     return max;
// }




//----Conditionals

// //If, Switch
// //Gün saatine göre günaydın, iyi günler, iyi geceler


// //If
// var date = new Date();   //tarih alma
// var hour = date.getHours();  //tarihin saatini alma

// if(hour =>5 && hour <= 11){
//     alert("Good morning")
// }
// else if(hour >11 && hour < 17){
//     alert("Good afternoon!")
// }
// else if(hour >=17 && hour < 13){
//     alert("Good evening")
// }
// else{
//     alert("Good night")
// }


// //Switch

// var language = prompt("What is your language?"); //prompt--kullanıcıdan bilgi alır

// switch (language) {
//     case "fr":
//         alert("French")
//         break;
//     case "tr":
//         alert("Turkish")
//         break;
//     default:
//         alert("English")
//         break;
// }


//---Loops

//For, While, Do-While

//For

// for (let i = 0; i <= 10; i++) {
//     alert(i);
    
// }

//for loops with break
// for (let i = 0; i <= 10; i++) {
//     if (i==5) {
//         break; 
//         //continue
//     }
//     alert(i);    //0,1,2,3,4
// }

// //for loops with continue

// for (let i = 0; i <= 10; i++) {
//     if (i==5) {
//         //break;         
//         continue;
//     }
//     alert(i);    //0,1,2,3,4,6,7,8,9,10
// }



// //While
// var number = 1;
// while (number < 10) {
//     alert(number);
//     number = number+1;
// }

// //Do-while
// var age = prompt("your age?");
// var result = "";
// do {
//     result += age;              //do--şart sağlansada sağlanmasa da çalışır
//     result += "-";
//     age--;
// } while (age >0)
// alert(result);






//-------Exception Handling(Hata Yakalama)
//Hata yönetimi önemli
//try-catch-finally


// function myFunction(){
//     var message,x;
//     message = document.getElementById("message");
//     message.innerHTML="";
//     x = document.getElementById("demo").value;

//     try{
//         if (x=="") throw "is empty";        //throw--hata fırlat
//         if (isNan(x)) throw "is not a number";
//         if(x>10) throw "is too high";           //herbiri err
//         if(x<5) throw "is too low";
//     }
//     catch(err){
//         message.innerHTML = "input " + err;
//     }
//     finally{
//         document.getElementById("demo").value = "";      //sonunda çalışan blok. demo id'li inputu boşaltır
//     }
// }




//---Validation

//Disabled, Readonly, Max, Min, Pattern(e.g. [A-Za-z]{3}) --numerik olmayan 3 karakter, Required, Type--inputun tipini verir, Maxlength, Novalidate**validation yapılmak istenmediğinde
//novalidate--form tagı için kullanılır
// function validate() {
//     var numberEntered = document.getElementById("numberBox")

//     if (numberEntered.checkValidity() == false) {
//         console.log(numberEntered.validationMessage)
//     }
//     else{
//         console.log("Input OK")
//     }
// }




//--HTML DOM

//Js Html Dom

//Önemliler
//getElementById
//getElementsByTagName
//getElementsByClassName
//querySelectorAll
//getElementsByName
//addEventListener
//removeEventListener
//Working With Nodes


//getElementByID
// alert("Reading with getElementById")
// var firstParagraph = document.getElementById("intro1");
// var message = document.getElementById("message");
// message.innerHTML = "Message: "+firstParagraph.innerHTML;


//getElementsByTagName  --Elements Array döner
// var allUnorderedLists = document.getElementsByTagName("ul");
// var unorderedList = allUnorderedLists[0];
// var allListItems = unorderedList.getElementsByTagName("li");
// for (let i = 0; i < allListItems.length; i++) {
//     alert(allListItems[i].firstChild.data);
// }


 //getElementsByClassName
//  var allItemsWithClassName = document.getElementsByClassName("intro1"); //array şeklinde gelir(elements) hangisine erişmek istiorsan onun indisini yaz. Burda 1 tane
// alert(allItemsWithClassName[0].innerHTML);


//querySelectorAll
// var allItemsWithSelector = document.querySelectorAll("p.intro2");  //intro2'yi kullanna tüm p'ler
// alert(allItemsWithSelector[0].innerHTML);


//getElementsByName
// var names = document.getElementsByName("customerName");
// alert(names[0].value);  //Engin Demiroğ


//addEventListener 
// document.getElementById("tryIt").addEventListener("click",changeColor);
// function changeColor(){
//     document.getElementById("intro1").style.color="blue";
// }

//removeEventListener
//  document.getElementById("tryIt").removeEventListener("click",changeColor); //artık tıklayınca mavi olmayacak yazı rengi

 //Node

//  var nodeText = document.getElementById("nodes").childNodes[0].nodeValue; //bir tane node var o nedenle childNodes[0]
//  alert(nodeText)


// var heading = documet.createElement("h2"); //h2 türet
// var node = document.createTextNode("Hello Javascript");
// //h2 elementin içine node eklemek için
// heading.appendChild(node);

// var div1 = document.getElementById("div1");
// var p2 = document.getElementById("p2")

// div1.insertBefore(heading,p2)

// alert("Removing P2");
// div1.removeChild(p2)


// //silmek yerine değiştirilebilir
// //replace
// alert("Replacing");
// var heading2 = documet.createElement("h1"); //h1 türet
// var node2 = document.createTextNode("This is a replacement");
// //h2 elementin içine node eklemek için
// heading2.appendChild(node2);

// var p1 = document.getElementById("p1")
// div1.replaceChild(heading2,p1)




//--Constructor
//This in a function inside an object
// var student = {
//     firstName: "Esra",
//     lastName: "Özdoğan",
//     fullName: function(){
//         return this.firstName + " " + this.lastName;  //nesne içerisinde fonksiyon içindeki this keywordü nesnenin kendisidir.Yain nesneye işaret eder. Yani student'ın firstName'i
//     }
// }

// alert(student.fullName());


// //Object constructor(Nesne yapılandırıcı)--Sabit değerler atayarak değil direkt nesnenin değerleri ile üretilebilir
// //Jsde her şey nesne
// //Fonksiyonu nesne gibi kullanabiliriz
// //Obje fonksiyon olarak tanımlanmış ise constructor olur
// //this is an object

// function Customer(first,last,city,country,age){   //kullanıcıdan alınan parametreler
//     this.first = first;  //this.first -- o an oluşan Customerın propertysi,  first--parametre
//     this.last = last;
//     this.city = city;
//     this.age = age;
//     this.country = country;
// }


// var someCustomer = new Customer("Esra","Özdoğan","İstanbul","Turkey",23) //Customer türünde nesne oluşur

// alert(someCustomer.first) //this.first'teki first--yani nesnenin özelliği olan first arka tarafta oluşur

// alert(someCustomer.country)





//----Prototyping--Nesneye sonradan özellik ekleme

//Müşteri nesnesi-constructor bloğu ile parametre ile aldığı değerler gönderilip nesnedeki her özelliğe set ediliyor
// function Customer(first,last,city,country,age){
//     this.first = first;
//     this.last = last;
//     this.city = city;
//     this.age = age;
//     this.country = country;
// }

// var someCustomer = new Customer("Esra","Özdoğan","İstanbul","Turkey",23);

// Customer.prototype.eMail = "esra@gmail.com";   //eMail özelliği eklendi ve değer set edildi
// Customer.prototype.fullName = function(){     //fonksiyon olarak değer set edilme
//     return this.first + " " + this.last;
// };

// alert(someCustomer.city);
// alert(someCustomer.eMail);
// alert(someCustomer.fullName());







//------Closures

   // var counter = 0; //global değişken--Ama bu değere her yerden erişil. Hem bu sayfa hemde diğer js dosyaları

        // function add() {
        //     //var counter = 0;
        //     counter += 1;
        //     return counter;
        // }


        // function someOtherFunction(){
        //     counter += 10;     //counter yukarıdaki counter ile karıştı ve ona göre değer aldı
        // }

        //counter değişkeninin sadece add için çalışması ve add için global davranması gerekir. Closures yazıyoruz

        //self-invoke
        // var add = (function () {
        //     var counter = 0;  //Bir kere oluşur,bir kere çalışır
        //     return function(){       //Her seferinde çalışır
        //         return counter += 1;
        //     }
        // })();






        //----Classes

        //Nesneye ait temel özellik ve operasyonları yazarız
        //Oğrenci nesnesinin adı, soyadı özellikleri, ögrenci sınıfında öğrencinin ihtiyaç duyduğu operasyonlars

        //Nesnel programlama da class yapılarında;
        //Constructor:Sınıf oluştuğunda temel özelliklerin set edilmesi
        //Field--Öğrencinin adı soyadı, public--sınıf dısı, private: sınıfi ici
        //Functions
        //Static members

   //      function Customer(firstName,lastName){
   //       this.firstName = firstName; //public
   //       this.lastName = lastName;

   //       var someField = "some value"; //private

   //       this.sendProduct = function (){ //operation
   //           alert("Product send!");
   //       }
   //   }

   //   var Engin = new Customer("Engin","Demiroğ");
   //   Engin.sendProduct();




   //--Inheritance(Miras)
   //Temel nesneler olusturup ortak özellik ve operasyonların temel nesnede tutulması. 
   //Türeyen nesnede ise sadece o nesneye ait özelliklerin tutulması. Ve temel nesneden miras alıp bu nesnenin temel nesne özellik ve operasyonlarını çalıştırması
//    function Person(firstName, lastName) {   //Kişi constructor nesnesi
//       this.firstName = firstName;
//       this.lastName = lastName;
//   }

//   function Student(favoriteCourse) {           //Öğrenci, ileride müsteri vs de olabilir
//       this.favoriteCourse = favoriteCourse;
//   }

//   Student.prototype = new Person("Engin", "Demiroğ");  //inheritance. Öğrencide de ad,soyad var
//   var engin = new Student("Programming");

//   alert(engin.firstName + " " + engin.lastName + " " + engin.favoriteCourse);   //Student'i Person'dan inheritance aldıgımız icin ögrenci firstName ve lastName'e erisebiliyorum


  

//-----Abstract Classes

//Tek basina anlami yoktur
//Newlenemez
//Base sinif görevi
//İcerisinde tamamlanmis ve tamamlanmamis operasyonları icerir. Tamamlanmamislari miras alan sinif implemente eder.s

// var Person={
//    name: "None",   //tamamlanmamis
//    email: "None",  //tamamlanmamis
//    sendEmail: function(){
//        alert("Mail send to :" + this.name + "/" + this.email);     //tamamlanmis
//    }
// }

// function Customer(name,email){
//    this.name = name;             //miras aldıgı sınıfta tamamlanmayanları burada set ediyoruz
//    this.email = email;
//    //other staff
// }

// function Employee(name,email){
//    this.name = name;
//    this.email = email;
//    //other staff
// }

// Customer.prototype = Person;   //inherite ettik, inheritance
// var someCustomer = new Customer("engin","engin@goliq.net");  //customer nesnesi olusturduk
// someCustomer.sendEmail();
// someCustomer.name();
// someCustomer.email();


// Employee.prototype = Person;
// var employee = new Employee("esra","esra@goliq.net")
// employee.sendEmail();






//------Interfaces

//Bagımlılıgın ortadan kalkması icin önemli
//Tek basina newlenemez
// function sendEmail(personInterface) {    //Müsteri, Personele vs email gönderir, Sonra Çalısan nesnesi ortaya cikarsa oan da implemente edebiliriz
//    var to = personInterface.eMail;       //private
//    var name = personInterface.name;       //private

//    var send = function(){
//        alert("Mail sent to: " + name + "/" + to);
//    }
//    send();
// }
// function Customer(name,eMail){       //constructor, concrete(somut) sınıf
//    this.name=name;
//    this.eMail=eMail;
//    //other staff
// }
// function Employee(name,eMail,sadad){     //constructor, concrete(somut) sınıf
//    this.name=name;
//    this.eMail=eMail;
//    this.sadad =sadad  //başka ozellikler de olabilir
//    //other staff
// }
// var someCustomer=new Customer("engin","engin@goliq.net");
// var someEmployee=new Employee("salih","salih@goliq.net");
// sendEmail(someCustomer);
// sendEmail(someEmployee);