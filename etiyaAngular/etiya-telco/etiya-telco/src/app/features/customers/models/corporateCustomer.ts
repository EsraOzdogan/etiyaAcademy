import { Customer } from './customer';
export interface CorporateCustomer extends Customer {
	//customerId: number;
	companyName: string;
	taxNumber: number;
}


