import { Component, OnInit } from '@angular/core';
//import { ListResponseModel } from 'src/app/core/models/listResponseModel';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerService } from 'src/app/shared/services/customers/customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  // customerListModel: ListResponseModel<Customer> = {
  //   index: 0,
  //   size: 10,
  //   items: []
  // };

  customerList! : Customer[];

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.getAll();
    debugger

  }

  // getAll() {
  //   this.customerService.getList(this.customerListModel.index, this.customerListModel.size).subscribe(response => (
  //     this.customerListModel = response
  //     ));
  //     debugger

  // }

  getAll(){
     this.customerService.getList().subscribe(response =>{
      this.customerList = response;
    })
  }

  deleteCustomer(customer:Customer){
    if(confirm("Are you sure to delete??")){
      this.customerService.delete(customer).subscribe()
    }
    setTimeout(() => {
      this.getAll();
    }, 1000);
  }
}
