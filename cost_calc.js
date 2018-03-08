/* global $ */

function calcSub(){
    
    var argSubTotal;
    
    if(document.getElementById('MovieCenter').checked) {
      argSubTotal = 100;
    }
    
    if(document.getElementById('InlookMail').checked) {
      argSubTotal = 150;
    }
    
    if(document.getElementById('NileWebServices').checked) {
      argSubTotal = 88;
    }
    if(document.getElementById('Star8').checked) {
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