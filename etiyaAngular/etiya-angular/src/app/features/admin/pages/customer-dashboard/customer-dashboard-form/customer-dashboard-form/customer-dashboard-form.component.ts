import { Customer } from 'src/app/shared/models/customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';

@Component({
  selector: 'app-customer-dashboard-form',
  templateUrl: './customer-dashboard-form.component.html',
  styleUrls: ['./customer-dashboard-form.component.css']
})
export class CustomerDashboardFormComponent implements OnInit {
  //companyName = new FormControl('kodlamaio'); //default deger, valğidatorFunction,
  //companyName = new FormControl('', Validators.required);

  customerForm!: FormGroup;
  customerToEdit!: Customer;
  dataLoaded: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private customerService : CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getCustomerById(params['id']);
      else this.createCustomerForm();
    });

  }

  getCustomerById(id: number) {
    this.customerService.getById(id).subscribe(response => {
      this.customerToEdit = response;
      this.dataLoaded = true;
      this.createCustomerForm();
    });
  }

  createCustomerForm(){
     // this.registerForm = new FormGroup(
    //   { companyName : this.companyName
    // })


    this.customerForm = this.formBuilder.group(
      {
        companyName : [ this.customerToEdit?.companyName || '', //default deger, bos verdik register ekranı diye
        Validators.required //dogrulama
        //[Validators.required, Validators.minLength(2)] //birden fazla dogrulama
      ],
      contactName :[ this.customerToEdit?.contactName ||'',Validators.required ],
      contactTitle :[ this.customerToEdit?.contactTitle ||'',Validators.required ],
      street: [ this.customerToEdit?.street ||'', Validators.required],
      city: [ this.customerToEdit?.city ||'', Validators.required],
      region: [ this.customerToEdit?.region ||'', Validators.required],
      postalCode: [ this.customerToEdit?.postalCode ||'', Validators.required],
      country: [ this.customerToEdit?.country ||'', Validators.required],
      phone: [ this.customerToEdit?.phone ||'', Validators.required],
      customerKey: [ this.customerToEdit?.customerKey ||'', Validators.required],
      }
    )
  }

  add() {
    if (!this.customerForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let customerToAdd: Customer = { ...this.customerForm.value }; // ...  dan sonra gelen data içindekilerin hepsinin valuesu        // this.customer :Customer yapmıycaz. local değişken oluşturuyoruz. Tekrar renderlamasın diye tekara fonk çalımasın diye

     //companyName : this.registerForm.get("companyName")!.value     //tek tek deger atama , bunun yerine ... (3 nokta) ile hepsini tanımlıyoruz

     //city : this.registerForm.value.city.toUpperCase() //yeni deger atama

    this.customerService.add(customerToAdd).subscribe(() => {
      this.toastrService.success('Customer has been added.');
      this.router.navigate(['dashboard/customer']);
    });


     // this.customerService.register(this.registerForm.value).subscribe(response =>{
    //   console.info(response)
    // })
  }

  update() {
    if (!this.customerForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let customerToUpdate: Customer = { id: this.customerToEdit.id, ...this.customerForm.value };
    this.customerService.update(customerToUpdate).subscribe(() => {
      this.toastrService.success('Customer has been updated.');
      this.router.navigate(['dashboard/customer']);
    });
  }

  delete() {
    if (!window.confirm('Are you sure to delete?')) return;

    let customerToDelete: Customer = { id: this.customerToEdit.id, ...this.customerForm.value };
    this.customerService.delete(customerToDelete).subscribe(() => {
      this.toastrService.success('Customer has been deleted.');
      this.router.navigate(['dashboard/customer']);
    });
  }

}
