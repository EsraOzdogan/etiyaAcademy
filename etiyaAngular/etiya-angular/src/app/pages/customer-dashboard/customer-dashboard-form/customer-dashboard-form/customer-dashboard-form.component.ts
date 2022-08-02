import { Customer } from 'src/app/models/customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customers/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-dashboard-form',
  templateUrl: './customer-dashboard-form.component.html',
  styleUrls: ['./customer-dashboard-form.component.css']
})
export class CustomerDashboardFormComponent implements OnInit {
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

    let customerToAdd: Customer = { ...this.customerForm.value };         // this.customer :Customer yapmıycaz. local değişken oluşturuyoruz. Tekrar renderlamasın diye tekara fonk çalımasın diye
    this.customerService.add(customerToAdd).subscribe(() => {
      this.toastrService.success('Customer has been added.');
      this.router.navigate(['dashboard/customer']);
    });
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
