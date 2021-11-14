function prime(a){
    var flag = 0;
    if(a==0||a==1){
        console.log("it is not a prime number");
    }
    else{
        for(let n=2;n<=a/2;n++){
            if(a/n == 0){
                console.log("it is not a prime number");
                flag = 1;
                break;
            }
        }
        if(flag == 0){
            console.log("it is a prime number");
        }
    }
}

prime(5)