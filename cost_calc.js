/* global $ */

function calcSub(){
    
    var argSubTotal;
    
    if(document.getElementById('salesforce').checked) {
      argSubTotal = 100;
    }
    else {
      argSubTotal = 300;
    }
    
    display(argSubTotal);
}

function display(parm1){
  
  document.getElementById("subtotal").value = parm1;
  document.getElementById("total").value = parm1;
        
  enablebtnProceed();
}


function enablebtnProceed(){
    $('#btnProceed').prop('disabled', false);
}

function disablebtnProceed() {
    $('#btnProceed').prop('disabled', true);
}
            /* global $ */

function calcSub(){
    
    var argSubTotal;
    
    if(document.getElementById('salesforce').checked) {
      argSubTotal = 100;
    }
     if(document.getElementById('aws').checked) {
      argSubTotal = 150;
    }
     if(document.getElementById('nile').checked) {
      argSubTotal = 88;
    }
     if(document.getElementById('star').checked) {
      argSubTotal = 200;
    }
    
    
    
    
    display(argSubTotal);
}

function display(parm1){
  
  document.getElementById("subtotal").value = parm1;
  document.getElementById("total").value = parm1;
        
  enablebtnProceed();
}


function enablebtnProceed(){
    $('#btnProceed').prop('disabled', false);
}

function disablebtnProceed() {
    $('#btnProceed').prop('disabled', true);
}
