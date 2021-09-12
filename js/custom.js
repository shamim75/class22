// get element from html;

var uName = document.getElementById('uName');
var uNameErr = document.getElementById('uNameErr');

var email = document.getElementById('email');
var emailErr = document.getElementById('emailErr');

var pass = document.getElementById('pass');
var passErr = document.getElementById('passErr');

var rePass = document.getElementById('rePass');
var rePassErr = document.getElementById('rePassErr');

//a fubction form subbmet button;

function subm()
{

    if(uName.value==""){
        uName.style.borderBottomColor = "red";
        uNameErr.innerHTML="plz enter your name";
        uName.focus();
        return false;
    }

   //email;

    if(email.value==""){
        email.style.borderBottomColor = "red";
        emailErr.innerHTML="plz enter your mail";
        email.focus();
        return false;
    }
       
    //pass;

    if(pass.value==""){
        pass.style.borderBottomColor = "red";
        passErr.innerHTML="plz enter your password";
        pass.focus();
        return false;
    }

    //value langht;

    if(pass.value.length <6){
        pass.style.borderBottomColor = "red";
        passErr.innerHTML="plz enter your 6  letter";
        pass.focus();
        return false;
    }



    if(rePass.value==""){
        rePass.style.borderBottomColor = "red";
        rePassErr.innerHTML="plz enter your password";
        rePass.focus();
        return false;
    }
       
    if(rePass.value != pass.value){
        rePass.style.borderBottomColor = "red";
        rePassErr.innerHTML="password didi not match";
        rePass.focus();
        return false;
    }
       
    
}

function errvalid()
{
    if(uName.value !=""){
        uName.style.borderBottomColor = "brown";
        uNameErr.innerHTML="";
    }

    if(email.value !=""){
        email.style.borderBottomColor = "brown";
        emailErr.innerHTML="";
    }

    if(pass.value !=""){
        pass.style.borderBottomColor = "brown";
        passErr.innerHTML="";
    }
    if(rePass.value !=""){
        rePass.style.borderBottomColor = "brown";
        rePassErr.innerHTML="";
    }

}

 uName.addEventListener('blur', errvalid);
 email.addEventListener('blur', errvalid);
 pass.addEventListener('blur', errvalid);
 rePass.addEventListener('blur', errvalid);





 var trigger = document.getElementById('trigger');
 var modal= document.getElementById('modal');
 var closeBtn= document.getElementById('closeBtn');

 trigger.addEventListener('click', function(){
    modal.style.display='flex';
 });
 
 closeBtn.addEventListener('click', function(){
    modal.style.display='none';
 });