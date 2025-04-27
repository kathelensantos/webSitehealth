function calcImc(form){

    var imc =  (peso / (altura * altura));
    
    return imc
    }
    
          function resultado(form){
              var imc= calcImc(parseFloat(form.altura.value),parseFloat(form.peso.value));
              if(imc>1.7)
                  alert("peso");
              
              else
                  alert("sobre peso");
     }
      