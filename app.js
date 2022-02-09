function login()
  {
    var phoneNo = document.getElementById("phone").value;
    var mailId = document.getElementById("mail").value;
    var pnFormat = /^\d{10}$/;
    var mailFormal = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

   if (!phoneNo.match(pnFormat) || !mailId.match(mailFormal))
   {
    alert("Invalide Format");
   }
  else
  {

    var setPass;
    var rePass;
    setPass = document.getElementById("SetPass").value;
    rePass = document.getElementById("RetypePassword").value;

        if( setPass == rePass)
        {
           alert("Successful");
        }
        else
        {
            alert("verify retype password");
    
        }

    }

}