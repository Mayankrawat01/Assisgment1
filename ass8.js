    function maximum(){
        let arr =[23,12,13,24,56,76]
        let max=arr[0]
        for (let i=0;i<arr.length;i++){
            if(arr[i]>max){
                max= arr[i]
            }
        }
        console.log(max)
    }
    maximum()

    //For Minimun
    function minimum(){
        let arr =[23,3,1,3,4,56]
        let min=arr[0]
        for (let i=0;i<arr.length;i++){
            if(arr[i]<min){
                min= arr[i]
            }
        }
        console.log(min)
    }
    minimum()

    
