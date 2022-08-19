// Just copy and paste the below code HAPPY CODING 
function lonelyinteger(a) {
 let result;
    let repeated = false;
    let map = [];
    if(a.length <= 1){
        return a[0];
    }
    
    for(let i = 0; i < a.length; i ++){
        for (let j = i + 1; j < a.length; j++){
            if(a[i] == a[j]){
                map.push(a[i]);
            }
        }
    }
    
    for(let i = 0; i < a.length; i++){
        if(map.indexOf(a[i]) == -1){
            return a[i];
        }
    }
    
       console.log(map);
}
