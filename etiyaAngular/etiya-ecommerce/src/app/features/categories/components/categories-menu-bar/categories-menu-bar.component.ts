import { Category } from './../../models/category';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import {MegaMenuItem} from 'primeng/api';

@Component({
  selector: 'app-categories-menu-bar',
  templateUrl: './categories-menu-bar.component.html',
  styleUrls: ['./categories-menu-bar.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush  //todo: research   //onPush sadece bellek adreslerine bakıyor. bellek adresindeki verilerin degisikligine bakmıyor.Bu nedenle CategoriesMenuBarComponent 'in güncellenmesi icin yeniden atanması lazım.Bu islem inputta yapılır
  changeDetection: ChangeDetectionStrategy.Default  //Statelerin degistigini angular otomatik olarak algılıyor bellek adresi ve bellek adresindeki verileri izliyor

})
export class CategoriesMenuBarComponent implements OnInit {
  categories! : Category[];
  items! : MegaMenuItem[];
  //@Input() items! : MegaMenuItem[];  //items'ı hompagecomponentten gectik
  //onPush Note: 1. Yol @Input'un parent'da yeniden set edilmesi.

  constructor(private categoriesService : CategoriesService,
    private changeDetectorRef: ChangeDetectorRef     //3.YÖNTEM
    ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoriesService.getList().subscribe(response => {
      this.categories = response;
      this.configureItems();
    })
  }



  //2. YÖNTEM
  //onPush Note: 2. Yol html içerisinde bir event çağrılması.
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

     //3.YÖNTEM
  //this.changeDetectorRef.markForCheck(); //State üzerinde degisiklik yaptım git bak demek. Manuel olarak yani
  }



}
