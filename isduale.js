function isdual(arr){

    if(!(arr.length % 2 == 0)){
          return false;
    }
    
    var sum = arr[0] + arr[1];

    for(var i = 2; i < arr.length; i = i+2){
          if(sum != arr[i] + arr[i+1]){
              return false;
          }
    }
    return true;
}

var me = [4,4,4,4,4,4];
console.log(isdual(me));