// Immediately Invoked Function Expressions ( IIFE).


(function chai() {                                // (chai) => named IIFE
    console.log(`DB CONNECTED`);    
})();

((name) => {                                      //  IIFE
    console.log(`DB CONNECTED two ${name}`);
    
})("vivek")