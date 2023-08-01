
   //prime number
   
    function prime(n) {
        if(n<2)
            return ` ${n} is not a prime number`
        for (let i=2;i<n;i++){
            if (n % i===0){
                return `${n} is not a prime a number`
            }
        }
        return `${n} is a prime number`
       }
       console.log(prime(7))
    