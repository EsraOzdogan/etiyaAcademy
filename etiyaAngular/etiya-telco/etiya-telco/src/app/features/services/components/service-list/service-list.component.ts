import { ServicesService } from '../../services/services.service';
import { Service } from '../../models/service';
import { Component, Input, OnInit } from '@angular/core';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  @Input() serviceList!: Service[];
  loading !: boolean ;
  totalRecords !: number;
  //fetchStatus = "pending";
  @Input() fetchStatus!: string

  constructor(private serviceService : ServicesService) { }

  ngOnInit(): void {


  }


  deleteService(service : Service){
    if(confirm("Are you sure to delete?")){
      this.serviceService.delete(service).subscribe()
    }
    setTimeout(() => {
      //this.getServices();
    }, 1000);

  }

}
