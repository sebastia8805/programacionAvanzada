const salario= 3500000;

function calcularSalario(salario,lVendidas,ded){
    let total= salario +(lVendidas*1500000);

    ded(total);
}

calcularSalario(salario,3,function(total){
    let ded =total-(total*5/100);
    console.log("valor total del salario es: "+ded);
});


let calcular =(salario,lVendidas,dedu)=>{
    let total= salario +(lVendidas*1500000);

    dedu(total);
}

calcular(salario,6,function(total){
    let ded =total-(total*5/100);
    console.log("valor total del salario es: "+ded);
})