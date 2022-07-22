//Arkadaş sayı
//iki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara denir.
//220-284

//220-->1+2+4+5+10+11+20+22+44+55+110=284
//284-->1+2+4+71+142=220
function friendsNumber(firstNumber,secondNumber) {
    //let biggerNumber;
    let total1=0;
    let total2=0;
    //let i=1;
    // if (firstNumber>secondNumber) {
    //     biggerNumber=firstNumber
    // }
    // else{
    //     biggerNumber=secondNumber
    // }
    // while(i <= biggerNumber/2){
    //     if (firstNumber%i==0) {
    //         total1=total1+i 
    //     }
    //     if (secondNumber%i==0) {
    //         total2=total2+i 
    //     }
    //     i=i+1
    // }

    for(let i=1; i<firstNumber;i++) {
        if(firstNumber %i ==0) {
            total1 = total1 + i;
        }
    }
    
    for(let i=1; i<secondNumber;i++) {
        if(secondNumber %i ==0) {
            total2 = total2 + i;
        }
    }
    if (firstNumber==total2 && secondNumber==total1) {
        console.log(firstNumber + " ve " + secondNumber + " are friend numbers")
    }
    else{
        console.log(firstNumber + " ve " + secondNumber + " are not friend numbers")
    }
}

friendsNumber(220,284)
friendsNumber(17296,18416)