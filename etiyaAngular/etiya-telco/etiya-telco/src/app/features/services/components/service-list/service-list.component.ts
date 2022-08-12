import { ServicesService } from '../../services/services.service';
import { Service } from '../../models/service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  datasource!: Service[];
  serviceList!: Service[];
  loading !: boolean ;
  totalRecords !: number;
  fetchStatus = "pending";

  constructor(private serviceService : ServicesService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getServices();
    }, 1500);

  }

getServices() {
    this.serviceService.getAll().subscribe(response => {
      this.serviceList = response;
      this.totalRecords = response.length;
       this.fetchStatus = 'loaded';
    },
    (error) => {
      this.fetchStatus = 'error';
    })
  }

  deleteService(service : Service){
    if(confirm("Are you sure to delete?")){
      this.serviceService.delete(service).subscribe()
    }
    setTimeout(() => {
      this.getServices();
    }, 1000);

  }

}
