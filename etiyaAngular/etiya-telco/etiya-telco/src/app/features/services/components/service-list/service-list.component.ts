import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { Service } from '../../models/service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
  providers: [ConfirmationService]
})
export class ServiceListComponent implements OnInit {
  @Input() serviceList!: Service[];
  loading !: boolean ;
  totalRecords !: number;
  //fetchStatus = "pending";
  @Input() fetchStatus!: string
  @Output() onBtnClick: any = new EventEmitter()

  service! : Service;
  productDialog! : boolean;
  submitted! : boolean;

  constructor(private serviceService : ServicesService,
     private confirmationService: ConfirmationService,
     private messageService : MessageService,
     private router : Router) { }

  ngOnInit(): void {
  }
  // deleteService(service : Service){
  //   if(confirm("Are you sure to delete?")){
  //     this.serviceService.delete(service).subscribe()
  //   }
  //   setTimeout(() => {
  //     //this.getServices();
  //   }, 1000);

  // }

  deleteService(service : Service) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.serviceService.delete(service).subscribe()
          setTimeout(() => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
            this.router.navigateByUrl("/services");
            }, 4000);
        },
        reject: () => {
          this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
        }
    });
}


getEventValue($event:any) :string {
  this.onBtnClick.emit($event.target.value)
  return $event.target.value;
}

editService(service: Service) {
  this.service = {...service};
  this.productDialog = true;
}

hideDialog() {
  this.productDialog = false;
  this.submitted = false;
}
}
