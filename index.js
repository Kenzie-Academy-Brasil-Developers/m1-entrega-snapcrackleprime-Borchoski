function snapCrackle(maxValue){
    let lista = []
    for(let i = 1; i <= maxValue; i++){
        if(prime(i) && i != 2 && i != 5){
            lista.push("SnapPrime")
        }else{
            if(i % 2 == 1 && i % 5 == 0 && i != 5){
                lista.push("SnapCrackle")
            }
            else if(i % 5 == 0 && i != 5){
                lista.push("Crackle")
            }
            else if(i % 2 == 1 && i != 5){
                lista.push("Snap")
            }else{
                if(i == 5){
                    lista.push("SnapCracklePrime")
                }
                else if(i == 2){
                        lista.push("Prime")
                }else{
                    lista.push(i)
                }
            }    
        }
    }
    let lista2 = lista.join(", ")
    return lista2
}

function prime(num){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false
        }
    }
    return num > 1
}

console.log(snapCrackle(100))

