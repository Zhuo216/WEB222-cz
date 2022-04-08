
function allFormValidation() {
    showErrors(); 
   
    return checkForAtleastOne (); 
  // return checkForAtleastOne ()&&checkProductID()&&!proDesc()&&checkPrice();
   
 }  

 //ProductID validation
 /*function checkProductID(){
if(get_ID_number()!=8){             
        return false;  
    }
    return true;  
 }
 function get_ID_number() {
    var checkbox_num = document.signup.entry01.length;
    var countID = 0;
    for (var i = 0; i < checkbox_num; i++) {
        if (document.signup.entry01[i].checked == true) { 
           countID++;
        } 
    }   
    return countID;
 }
 
//Product Description validation
 function proDesc(){
    var proDescString;
    var returnCode=0;
    var Entry02 = document.getElementById('entry02');
    if(Entry02!=null){
        proDescString =Entry02.value;
        var patternUp=/^[A-Z]/;
        var patternChar=/^[A-Za-z]+$/;
       
        if (proDescString.trim().length < 20) {       
            returnCode=1;
        }
        if(!patternUp.test(proDescString)){
            returnCode= 2;
        }
        if(!patternChar.test(proDescString)){
            returnCode=3;
        } 
    }
    else
        proDescString =null; 
   
    return returnCode;    
 }

//Check price
function checkPrice(){
   // var returnCode=0;
    var checkPriceStr=document.signup.entry03;
    //var patterndot=/^[^.]*$/;
    if(document.signup.entry03.value>1000){
        return false;
    } 
    return true;
} 
*/

//Check Username
function checkUsername(){





    
}


 
 
 //Checkbox validation
function checkForAtleastOne () {
  if (get_checked_number() == 0) {                                  
    return false; 
  }    
  return true;     
}  

function get_checked_number() {
    var checkbox_num = document.signup.entry05.length;
    var count = 0;
    for (var i = 0; i < checkbox_num; i++) {
        if (document.signup.entry05[i].checked == true) { 
           count++;
        } 
    }   
    return count;		
}

function showErrors() {   
  document.querySelector('#errors').innerHTML = "<h2>Error Message</h2>";
 /*  if(!checkProductID())
     document.querySelector('#errors').innerHTML+="<p>Product ID: Digit only and 8 characters long.</p>";  
    if(proDesc()==1)
    document.querySelector('#errors').innerHTML+="<p>1.</p>"; 
    if(proDesc()==2)
    document.querySelector('#errors').innerHTML+="<p>2.</p>"; 
    if(proDesc()==3)
    document.querySelector('#errors').innerHTML+="<p>3.</p>";   
    if(!checkPrice())
    document.querySelector('#errors').innerHTML+="<p>Price: Less than 1000.</p>";*/

    if(!checkForAtleastOne())
    document.querySelector('#errors').innerHTML+="<p>Supplier Status: None checked, user must select at least one of the check boxes.</p>"; 
} 

function  clearShowErrors() {
  document.querySelector('#errors').innerHTML = " ";    
} 