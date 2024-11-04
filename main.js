
         const litros = parseFloat =(prompt("ingrese cantidad de litros"));
         const valor = 9635
          if (litros >= 0  && litros <= 25 ){
                alert (" su deuda por el mes de octubre es de  $9635")
            }
        else if(litros >= 26  && litros <= 30 ){
                const excedente = (litros - 25);
                const precioTotal = excedente * 385;
                alert("su deuda es de  $" + ( precioTotal + valor) );
            }
            
        else if(litros >= 31  && litros <= 50 ){
                const excedente = (litros - 25);
                const precioTotal = excedente * 770;
                alert("su deuda es de $ " + ( precioTotal + valor) );
                
            }

            
          else if(litros >= 51  && litros < 80 ){
                const excedente = (litros - 25);
                const precioTotal = excedente * 1926;
                alert("su deuda es de  $" + ( precioTotal + valor) );
                
            }
            
           else if(litros >= 81  && litros < 500 ){
                const excedente = (litros - 25);
                const precioTotal = excedente * 2697;
                alert("su deuda es de $" + ( precioTotal + valor) );
            }

