
/*function decir(){
    console.log("2");
}
console.log("1");
setTimeout(() => {
    console.log("3");
},3000);
setTimeout(decir,2999);
for (let index = 0; index < 1000; index++) {
    
    console.log(index);
}*/


console.log ("que hiciste ayer?");

process.stdin.once('data', (input) =>{
    process.stdout.write(`asi que hiciste ${input}, que vas a hacer mañana`)
    

    process.stdin.once('data', (input) =>{
        process.stdout.write(`Asi que vas a hacer ${input}, tienes algun problema?`)
        

        process.stdin.once('data', (input) =>{
            process.stdout.write(`Pues luego solucionamos que ${input}`)
            process.exit();
        }) ;
    }) ;
}) ;


/*process.stdin.on('end', (input) =>{
    process.stdout.write('adios');
}) ;*/
