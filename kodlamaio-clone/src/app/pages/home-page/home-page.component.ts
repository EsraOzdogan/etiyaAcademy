import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  lessonList !: any[]

  constructor() { }

  ngOnInit(): void {
    this.getLessonApi()
  }

  getLessonApi(){
    this.lessonList=[
      {
      "id": 1,
      "lessonName": "Yazılım Geliştirici Yetiştirme Kampı (JavaScript)",
      "lessonImg": "assets/img/lesson1.jpg",
      "description": "1,5 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.",
      "instructorName": "Engin Demiroğ",
      "instructorImg": "assets/img/engin-demirog.jpg",
      "price": "Ücretsiz"
     },
     {
      "id": 2,
      "lessonName": "Yazılım Geliştirici Yetiştirme Kampı (C# + ANGULAR)",
      "lessonImg": "assets/img/lesson2.jpg",
      "description": "2 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.",
      "instructorName": "Engin Demiroğ",
      "instructorImg": "assets/img/engin-demirog.jpg",
      "price": "Ücretsiz"
     },
     {
      "id": 3,
      "lessonName": "Yazılım Geliştirici Yetiştirme Kampı (JAVA + REACT)",
      "lessonImg": "assets/img/lesson3.jpg",
      "description": "2 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını buradan yapacağız.",
      "instructorName": "Engin Demiroğ",
      "instructorImg": "assets/img/engin-demirog.jpg",
      "price": "Ücretsiz"
     },
     {
      "id": 4,
      "lessonName": "Programlamaya Giriş İçin Temel Kurs",
      "lessonImg": "assets/img/lesson4.jpg",
      "description": "PYTHON, JAVA, C# gibi tüm programlama dilleri için temel programlama mantığını anlaşılır örneklerle öğrenin.",
      "instructorName": "Engin Demiroğ",
      "instructorImg": "assets/img/engin-demirog.jpg",
      "price": "Ücretsiz"
     }
  ]
}
}
