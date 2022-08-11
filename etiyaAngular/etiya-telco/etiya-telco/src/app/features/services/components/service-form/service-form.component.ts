import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  serviceForm! : FormGroup;
  service!:Service;

  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,
    private servicesService:ServicesService,private router:Router,private messageService:MessageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getServiceById(params['id']);
      else this.createServiceForm();
    });
  }

  createServiceForm(): void{
    this.serviceForm = this.formBuilder.group({
      name: [this.service?.name  || '',Validators.required]
    })
  }

  getServiceById(id:number) {
    this.servicesService.getById(id).subscribe((data) => {
      this.service = data;
      this.createServiceForm();
    });
  }


  save(){
    if(this.service) this.update();
    else{
      this.add();
    }
  }

  add(){
    if (!this.serviceForm.valid) {
      this.messageService.add({severity:'warn', summary:'Add', detail:'There are missing fields.'});
      return;
    }

    const service : Service = {...this.serviceForm.value }

    this.servicesService.add(service).subscribe(() =>{
      setTimeout(() => {
      this.messageService.add({severity:'success', summary:'Add', detail:'Service has been added.'});
        this.router.navigateByUrl("/services");
      }, 1000);
    })
  }


  update() {
    if (this.serviceForm.invalid) {
      this.messageService.add({severity:'warn', summary:'Update', detail:'There are missing fields.'});
      return;
    }
    const service : Service = { id:this.service.id, ...this.serviceForm.value };
      this.servicesService.update(service).subscribe(() => {
        setTimeout(() => {
          this.router.navigateByUrl("/services");
      this.messageService.add({severity:'success', summary:'Update', detail:'Service has been updated.'});
        }, 1000);
      });
  }



}
