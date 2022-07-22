function findPrimeNumbersForThousand() {
    for (let j = 2; j < 1000; j++) {
        let isPrime = true;
        //let sayac=0;
        for (let i = 2; i < j; i++) {
            if (j%i==0) {
                //sayac+=1
                isPrime = false
            }
            
        }
        // if(sayac==0){
        //     console.log(j + " Asaldir")
        // }
        if(isPrime){
            console.log(j + "  is prime number")
        }
    }
}

findPrimeNumbersForThousand();