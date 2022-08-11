import { Category } from './../../models/category';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import {MegaMenuItem} from 'primeng/api';

@Component({
  selector: 'app-categories-menu-bar',
  templateUrl: './categories-menu-bar.component.html',
  styleUrls: ['./categories-menu-bar.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush  //todo: research
  changeDetection: ChangeDetectionStrategy.Default

})
export class CategoriesMenuBarComponent implements OnInit {
  categories! : Category[];
  items! : MegaMenuItem[];

  constructor(private categoriesService : CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoriesService.getList().subscribe(response => {
      this.categories = response;
      this.configureItems();
    })
  }

  configureItems(){
    //this.items = [];


    //foreach
    //map
    //for

    this.items = this.categories.map(category =>{
      return {
        label: category.name,
        // /categories/1 --Route params
        // /categories?category=1 --Query params      -->iki şekilde de yazılır biz query paramsla yazıyoruz
        //routerLink : ['/categories', category.id],
        routerLink : [''],
        //queryParams : {categoryId : category.id , categoryName : category.name},
        queryParams : {categoryId : category.id},
      }
    });

    // unshift()  -->arraya eleman ekleme

    this.items.unshift(
      {
        label: 'All',
        routerLink: [''],
        //queryParams: {categoryId: 0}
    })

  }

}
