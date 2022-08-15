import { Service } from './../../models/service';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';

@Component({
  //selector: 'app-service-dashboard',
  templateUrl: './service-dashboard.component.html',
  styleUrls: ['./service-dashboard.component.css']
})
export class ServiceDashboardComponent implements OnInit {
  serviceList!: Service[];
  totalRecords !: number;
  fetchStatus = "pending";

  constructor(private serviceService : ServicesService) { }

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
}
