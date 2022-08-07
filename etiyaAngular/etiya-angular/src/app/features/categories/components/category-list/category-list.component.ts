import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/features/categories/models/category';
import { CategoryService } from 'src/app/features/categories/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

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
