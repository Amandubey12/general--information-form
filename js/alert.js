
function aman() {

    if(document.form.com.value==""){
        alert("Plaese enter your address!");
        document.form.com.focus();
        return false;
    }
    if(document.form.co.value==""){
        alert("Please enter additional informat");
        document.form.co.focus();
        return false;
    }
    if(document.form.zip.value==""){
        alert("Please enter Zip code !")
        document.form.zip.focus();
        return false();

    }
    if(document.form.plc.value==""){
        alert("Please select place !")
        document.form.plc.focus();
        return false();

    }
    if(document.form.con.value==""){
        alert("Please select country  !")
        document.form.con.focus();
        return false();

    }
    if(document.form.code.value==""){
        alert("Please enter code+ !")
        document.form.code.focus();
        return false();

    }
    if(document.form.phone.value==""|| document.form.phone.value.length!=10){
        alert("Please enter alteast 10 digit mobile number ")
        document.form.phone.focus();
        return false();

    }
    if(document.form.email.value==""){
        alert("Please enter you email !")
        document.form.email.focus();
        return false();

    }
    var x= email.indexOf("@");
    var y=email.indexOf(".");
    if((x<1)||(y<X+2)||(y+2>=x.length)){
        alert("enter username@gmail.com");
        document.form.email.focus();
        return false;
    }
    alert("you registered successfully !");

    return true;
    


    
}

