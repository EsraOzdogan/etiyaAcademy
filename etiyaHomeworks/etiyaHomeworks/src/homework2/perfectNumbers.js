//Mükemmel sayı
//Kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayı. 
//Mükemmel sayı, bütün pozitif tam bölenlerinin toplamının yarısına eşittir.

//6--> 1,2,3         --->1+2+3=6
//28-->1,2,4,7,14    ---->1+2+4+7+14=28
function perfectNumber() {    
    
    for (let j = 1; j < 1000; j++) {
        // let total =0
        // for(let i=1;i<j;i++) {
		// 	if(j % i == 0){
		// 		total = total + i;
		// 	}
		// }



        let i=1;
        let total=0;
        while(i <= j/2){
            if (j%i==0) {
                total=total+i 
            }
            i=i+1
        }


        if (j==total) {
            console.log(j + " perfect number")
        }
        // else{
        //     console.log(j + " Number is not perfect number")
        // }
    }
    
}

perfectNumber();