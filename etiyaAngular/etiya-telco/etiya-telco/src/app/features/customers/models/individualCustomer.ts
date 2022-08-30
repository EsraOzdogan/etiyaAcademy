import { Customer } from './customer';
export interface IndividualCustomer extends Customer{
	//customerId: number;
	firstName: string;
	lastName: string;
	nationalIdentity: number;
}
