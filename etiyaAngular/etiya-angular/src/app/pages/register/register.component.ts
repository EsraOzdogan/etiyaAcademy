import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customers/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //companyName = new FormControl('kodlamaio'); //default deger, valğidatorFunction,
  //companyName = new FormControl('', Validators.required);

  registerForm !: FormGroup;  //state

  constructor(private formBuilder: FormBuilder, private customerService : CustomerService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    // this.registerForm = new FormGroup(
    //   { companyName : this.companyName
    // })

    this.registerForm = this.formBuilder.group(
      {
        companyName : ['', //default deger, bos verdik register ekranı diye
        Validators.required //dogrulama
        //[Validators.required, Validators.minLength(2)] //birden fazla dogrulama
      ],
      contactName :['',Validators.required ],
      contactTitle :['',Validators.required ],
      street: ['', Validators.required],
      city: ['', Validators.required],
      region: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      customerKey: ['', Validators.required],


      }
    )
  }

  register():void{
    //console.log(this.companyName)
    if(this.registerForm.invalid){                      //Engelliycek durumlar basta
      console.warn("Gerekli alanları doldurunuz.");
      return;
    }
    console.log(this.registerForm.value)         //Asıl islem

    const customer : Customer = {
      //companyName : this.registerForm.get("companyName")!.value     //tek tek deger atama , buun yerine ... (3 nokta) ile hepsini tanımlıyoruz

      ...this.registerForm.value, // ...  dan sonra gelen data içindekilerin hepsinin valuesu
      city : this.registerForm.value.city.toUpperCase() //yeni deger atama
    };
    this.customerService.register(customer).subscribe(response =>{
      console.info(response)
    })




    // this.customerService.register(this.registerForm.value).subscribe(response =>{
    //   console.info(response)
    // })
  }

}
