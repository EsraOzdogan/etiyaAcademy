import { MegaMenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {
  categoryId! : number;
  //categoryId : number =0;     //undefined olmaması icin filter-productta cözüldü

  itemsTest! : MegaMenuItem[]//State      //1. YÖNTEM
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    this.activatedRoute.queryParams.subscribe((params) =>{
      //if(params['categoryId']) this.categoryId = params['categoryId'];   //undefined olmaması icin filter-productta cözüldü
      this.categoryId = params['categoryId'];
      console.log( 'Category Id :' ,this.categoryId)
    })
  }

  // addItem(){           //1. YÖNTEM
  //   // this.itemsTest.push({  //x123588       //Test2 seklinde eleman ekliyorum. Ama bellek adresine bakıyor sadece bu nedenle degisikligi gözlemleyemiyoruz onPush ile bu nedenle yeni bir array olusturuyoruz
  //   //   label:"Test2",
  //   //   routerLink: [""],
  //   //    queryParams:{categoryId :2},
  //   // });

  //   this.itemsTest = [         // bu nedenle yeni bir array olusturuyoruz  //x1584856
  //     {
  //       label:"Test",
  //       routerLink: [""],
  //        queryParams:{categoryId :1}
  //     },
  //     {
  //       label:"Test2",
  //       routerLink: [""],
  //        queryParams:{categoryId :2},
  //     },
  //   ];
  // }
}
