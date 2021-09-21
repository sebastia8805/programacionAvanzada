let sables =[2.4,-8.5,-6];
let sables2 =[1,-10,-7.5,-9];

function comprobarSable(sables,cantidad){
    let contador=0;
    for(let i=0;i<sables.length;i++){
        if(sables[i]<0){
            contador++;
        }
    }
    cantidad(contador);
}

comprobarSable(sables,function(cantidad){
    console.log("el numero de sables negativos son: "+cantidad);
});


let comprobar =(sables,cantidad)=>{
    let contador=0;
    for(let i=0;i<sables.length;i++){
        if(sables[i]<0){
            contador++;
        }
    }
    cantidad(contador);
}

comprobar(sables2,function(cantidad){
    console.log("el numero de sables negativos son: "+cantidad);
});
