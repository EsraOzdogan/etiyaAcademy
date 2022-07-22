//Prime Number(asal sayı) 
//yalnızca kendisine ve 1'e bölünebilen pozitif tam sayılardır.
//rest
function findPrime(...numbers) {  //number is array
    for (let i = 0; i < numbers.length; i++) {
        let isPrime = true;
        //console.log(numbers[i])

        if(numbers[i]==1){
            console.log(numbers[i] +" number is not prime")
            return
        }
        if(numbers[i]<1){
            console.log(numbers[i] + " number is invalid")
        }


       //let sayac=0;
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i]%j==0) {
                //sayac+=1
                isPrime = false;
            }
            
        }
        if(isPrime) {
			console.log(numbers[i] + " is prime");
		}else{
			console.log(numbers[i] + " is not prime");
		}


        // if(sayac==0){
        //     console.log(numbers[i] + " is prime")
        // }
        // else{
        //     console.log(numbers[j] + " is not prime")
        // }
    }
}

findPrime(18,5,8,7);