//Json2ts extension
//ctrl+alt+V
export default interface Product { //Pascal Case
	id: number;
	supplierId: number;
	categoryId: number;
	quantityPerUnit: string;
	unitPrice: number;
	unitsInStock: number;
	unitsOnOrder: number;
	reorderLevel: number;
	discontinued: boolean;
	name: string;    //imza

	//birMetot(){} fonksiyon da olabilir
}

//export-public(baska yerlerde de kullanılmasını saglıyor)
//default--import edilen sayfada {} koymadan alınır. Ama default koymazsan import edilen sayfada {} icinde yazman gerekir
//interface yazılmasının nedeni diger sayfalarda :Product veri tipinde obje arrayi vs oluşturduğumuzda burda interfacedeki bilgileri implemente ediyor. Hem ortak olarak diğer sayfalarda da içeriğin eksiksiz olmasını sağlıyor. Var olan projeleri anlamlandırmak için

// export default interface IProduct { //Pascal Case
// 	id: number;
// 	supplierId: number;
// 	categoryId: number;
// 	quantityPerUnit: string;
// 	unitPrice: number;
// 	unitsInStock: number;
// 	unitsOnOrder: number;
// 	reorderLevel: number;
// 	discontinued: boolean;
// 	name: string;    //imza
// }



// class Product1 implements IProduct{
//   id!: number;
//   supplierId!: number;
//   categoryId!: number;
//   quantityPerUnit!: string;
//   unitPrice!: number;
//   unitsInStock!:number;
//   unitsOnOrder!:number;
//   reorderLevel!: number;
//   discontinued!:boolean;
//   name!: string;

// }


// class Product2 implements IProduct{
//   id!: number;
//   supplierId!: number;
//   categoryId!: number;
//   quantityPerUnit!: string;
//   unitPrice!: number;
//   unitsInStock!:number;
//   unitsOnOrder!:number;
//   reorderLevel!: number;
//   discontinued!:boolean;
//   name!: string;

// }


// const response: IProduct = {
// 	id: 1,
//   supplierId: 1,
//   categoryId: 1,
//   quantityPerUnit: "10 boxes x 20 bags",
//   unitPrice: 18,
//   unitsInStock: 39,
//   unitsOnOrder: 0,
//   reorderLevel: 10,
//   discontinued: false,
//   name: "Chai"
// }


//* yeni bir obje üretmek için belirli bir şemaya uymak için class'lar kullanılabilir.
//* yine aynı şekilde class oluşturmak için interface'lar de kullanılabilir.
// export class ProductClass implements Product{
//    id!: number;
//   supplierId!: number;
//   categoryId!: number;
//   quantityPerUnit!: string;
//   unitPrice!: number;
//   unitsInStock!:number;
//   unitsOnOrder!:number;
//   reorderLevel!: number;
//   discontinued!:boolean;
//   name!: string;

// }
