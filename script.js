let menu=document.querySelector("#toggler");
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    menu.classList.toggle('active');
}
menu.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
}

var nameError=document.getElementById('name-error');
var mobileError=document.getElementById('mobile-error');
var mailError=document.getElementById('mail-error');
var selectError=document.getElementById('select-error');
var submiterror=document.getElementById('submit-error');


function validatename(){
    var name = document.getElementById('name').value;
    if(name.length == 0){
        submiterror.innerHTML = 'Name is required';
        document.getElementById('name').style.border="2px solid #ec0505";
        return false;
    }
    if(!name.match(/[A-Za-z .]$/)){
        submiterror.innerHTML = 'Digits not allowed in name field';
        document.getElementById('name').style.border ="2px solid #ec0505";
        name.innerHTML="";
        return false;
    }
    
    name.innerHTML ='';
        document.getElementById('name').style.border="2px solid #05ec2b";
        document.getElementById('name').placeholder='';
        submiterror.innerHTML = '';
    return true;
}
var name=document.getElementById(name);
name.addEventListener('input', () => {
    errorMessage.style.display = 'none';
});

function validatemobile(){
    var mobile = document.getElementById('mobno').value;
    if( mobile. length  ==0){
        submiterror.innerHTML = 'Mobile number is required';
    
        document.getElementById('mobno').style.border="2px solid #ec0505";
        return false;
    }
    if(!mobile.match(/[0-9.]$/)){
        submiterror.innerHTML = 'Only Digits allowed in this field';
        document.getElementById('mobno').style.border ="2px solid #ec0505";
        mobno.innerHTML="";
        return false;
    }
    mobno.innerHTML ='';
        document.getElementById('mobno').style.border="2px solid #05ec2b";
        document.getElementById('mobno').placeholder='';
        submiterror.innerHTML = '';
    return true;
}
var mobile=document.getElementById(mobno);
mobno.addEventListener('input', () => {
    errorMessage.style.display = 'none';
});

function validateemail(){
    var mail = document.getElementById('email').value;
    if( mail. length ==0){
        submiterror.innerHTML = 'E-mail is required';
        document.getElementById('email').style.border="2px solid #ec0505";
        return false;
    }
    if(!mail.match(/[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        submiterror.innerHTML = 'Invalid E-mail';
        document.getElementById('email').style.border ="2px solid #ec0505";
        email.innerHTML ="";
        return false;
    }
    email.innerHTML ='';
        document.getElementById('email').style.border="2px solid #05ec2b";
        document.getElementById('email').placeholder='';
        submiterror.innerHTML = '';
    return true;
}
var mail=document.getElementById(email);
email.addEventListener('input', () => {
    errorMessage.style.display = 'none';
});

function validatemessage(){
    var message = document.getElementById('message').value;
    if( message. length ==0){
        submiterror.innerHTML = 'message is required';
        document.getElementById('message').style.border="2px solid #ec0505";
        return false;
    }
    message.innerHTML ='';
        document.getElementById('message').style.border="2px solid #05ec2b";
        document.getElementById('message').placeholder='';
        submiterror.innerHTML = '';
    return true;
}
function validateform(){
    if(!validatename() || !validatemobile() || !validateemail() || !validatemessage()){
        final_error.style.display='block';
        final_error.innerHTML = 'Please fix error to submit';
        setTimeout(function(){final_error.style.display="none";},2000);
        return false
    }
}
let popup = document.getElementById("popup");
function openpopup(){
    popup.classList.add("open_popup");
}
function closepopup(){
    popup.classList.remove("open_popup");
}