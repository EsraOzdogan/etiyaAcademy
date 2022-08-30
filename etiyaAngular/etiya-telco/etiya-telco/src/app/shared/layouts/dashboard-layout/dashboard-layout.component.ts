import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {
  visibleSidebar1!:any;
  items! : MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.configureItems();
  }

  configureItems(){
    this.items = [
      {
         label:'Services',
         icon:'pi pi-fw pi-file',
         items:[
            {
               label:'List',
               icon:'pi pi-fw pi-plus',
               routerLink : ['/dashboard/services/services-list'],
            },
            {
              label:'Edit/Add',
              icon:'pi pi-fw pi-plus',
              items:[
                 {
                    label:'Add',
                    icon:'pi pi-fw pi-bookmark',
                    routerLink : ['/dashboard/services/add'],
                 },
                 {
                    label:'Edit',
                    icon:'pi pi-fw pi-video',
                    routerLink : ['/dashboard/services/service:id']
                 },

              ]
           }
          ]
      }
    ]

  }
}
