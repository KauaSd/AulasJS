function contador() { 
    let valor = 0; 
    return function(){ 
        valor++;
        return valor;
    };
} 
console.log(contador());