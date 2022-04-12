
function allFormValidation() {
    showErrors();    
    return checkProductID()&&!proDesc()&&checkPrice()&&!checkUsername()&&checkForAtleastOne(); 
   
 }  

 //ProductID validation
 function checkProductID(){
    var id_num = document.signup.entry01.value.length;
    if(id_num!=8)
         return false;
    else
         return true;  
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
       
        if(!patternUp.test(proDescString)){
            returnCode= 1;
        }
        if(!patternChar.test(proDescString)){
            returnCode=2;
        } 
        if(!patternUp.test(proDescString)&&!patternChar.test(proDescString)){
            returnCode=3;
        }
    }
    else
        proDescString =null; 
   
    return returnCode;    
 }

//Check price
function checkPrice(){   
    var checkPriceStr=document.signup.entry03;
    //var patterndot=/^[^.]*$/;
    if(document.signup.entry03.value>1000){
        return false;
    } 
    return true;
} 


//Check Username
function checkUsername(){
    var checkUsernameStr=document.signup.entry04.value;
    var patternUp=/^[A-Za-z]/;
    var returnCode=0; 
    if (checkUsernameStr.length < 6) {       
        returnCode=1;        
    }
    if(!patternUp.test(checkUsernameStr)){
        returnCode= 2;
    }
    if(checkUsernameStr.length < 6&&!patternUp.test(checkUsernameStr)){
        returnCode= 3;
    }
    
    return returnCode;  
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
    var counter=0;
  document.querySelector('#errors').innerHTML = "<h2>Error Message</h2>";
    if(!checkProductID()&&counter<3){//only display less than three message
     document.querySelector('#errors').innerHTML+="<p><mark>Product ID: <br /></mark> must be 8 characters long</p>";  
     counter++;
    }

   if(proDesc()==1&&counter<3){
    document.querySelector('#errors').innerHTML+="<p><mark>Product Description: <br /></mark>  must start with a cap</p>";
    counter++; 
}
    if(proDesc()==2&&counter<3){
    document.querySelector('#errors').innerHTML+="<p><mark>Product Description: <br /></mark>  only alphabet allowed</p>"; 
    counter++;
}
    if(proDesc()==3&&counter<3){
    document.querySelector('#errors').innerHTML+="<p><mark>Product Description: <br /></mark>  must start with a cap and only alphabet allowed</p>";  
    counter++;
}
    if(!checkPrice()&&counter<3){
    document.querySelector('#errors').innerHTML+="<p><mark>Price: <br /></mark>  must be less than 1000</p>";
    counter++;
}

   if(checkUsername()==1&&counter<3){
    document.querySelector('#errors').innerHTML+="<p><mark>Supplier Username: <br /></mark> must have at least 6 characters</p>"; 
    counter++;
}
    if(checkUsername()==2&&counter<3){
    document.querySelector('#errors').innerHTML+="<p><mark>Supplier Username: <br /></mark> must start with an alphabet</p>"; 
    counter++;
}
    if(checkUsername()==3&&counter<3){
    document.querySelector('#errors').innerHTML+="<p><mark>Supplier Username: <br /></mark> must start with an alphabet & must have at least 6 characters</p>"; 
    counter++;
}

    if(!checkForAtleastOne()&&counter<3){
    document.querySelector('#errors').innerHTML+="<p><mark>Supplier Status: <br /></mark> None checked, user must select at least one of the check boxes</p>";
    counter++;
}
} 

function  clearShowErrors() {
  document.querySelector('#errors').innerHTML = " ";    
} 