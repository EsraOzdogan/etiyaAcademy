import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {
  categoryId! : number;
  //categoryId : number =0;     //undefined olmaması icin filter-productta cözüldü
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
}
