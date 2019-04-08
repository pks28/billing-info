/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
    var v1=document.getElementById('billingName');
    var v2=document.getElementById('billingZip');
    if(document.getElementById('same').checked){
        v1.value=document.getElementById('shippingName').value;
      v2.value=document.getElementById('shippingZip').value;
    }
    else{
        v1.value="";
        v2.value="";
    }
  }
  