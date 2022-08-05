import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList!:Category[]
  loading: boolean = true

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.getCategory()
    }, 3000);
  }

  getCategory(){
    this.categoryService.getList().subscribe(data=>{
      this.categoryList=data
      this.loading = false;
    })
  }

  getCategoryId(category: Category){
    console.log(category.id)
  }

}
