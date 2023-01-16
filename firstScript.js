function ex1(age , drink){
    try{
        if(age <18){
            throw "you're too young";
        }
        else{
            if(drink ==1){
                return "wine";
            }
            else if (drink ==2){
                return "beer";
            }
            else{
                throw "try again";
            }
        }
    }
    catch(){
        return error;
    }
}
function ex2(arr){
    let min1 = Infinity ; let min2 = Infinity;
    for(let i =0 ; i<arr.length ; i++){
        if(arr[i] == -1){
            break
        }
        if(arr[i] <min1){
            min1 = arr[i];
            arr[i++];
            
        }
        if (arr[i] < min2  && min2 < min1){
            min2 = arr[i];
            arr[i++];
        }
        return [min1,min2];

    }

}
function ex3(length, width) {
    for (let i = 0; i < width; i++) {
      let row = '';
      for (let j = 0; j < length; j++) {
        row += '*';
      }
      console.log(row);
    }
  }
  function ex4(kodkod1, kodkod2) {
    let base = kodkod2[0] - kodkod11[0];
    let height = kodkod2[1] - kodkod1[1];
    return (base * height) / 2;
  }
  
  
  

       
