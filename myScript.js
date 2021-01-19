//-----------------------------------------------SignUp-----------------------------------------------
  function verif_SignUp() {

      if (document.getElementById("SignUp-name").value=="" && document.getElementById("SignUp-email").value==""&& document.getElementById("SignUp-pass").value==""&& document.getElementById("SignUp-pass2").value==""){//check if element null
		   document.getElementById("error").innerHTML = "<p> Fill all input fields !!</p>";//modify the content of an HTML element 
		   document.getElementById("error").style.color = "red";//modify the style element
		   document.getElementById("error").style.display = "block";//modify the style display
		   return false;}//return statement, the function will stop executing

      else if (document.getElementById("SignUp-name").value=="" ){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill name field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
	 
	  else if (document.getElementById("SignUp-email").value==""){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill email field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
		   else if (document.getElementById("SignUp-email").value.includes("@")!=true){//check if element invaild email
           document.getElementById("error").innerHTML = "<p> Enter valid email !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
      else if (document.getElementById("SignUp-pass").value==""){
           document.getElementById("error").innerHTML = "<p> Fill Password field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
     else if (document.getElementById("SignUp-pass2").value==""){
           document.getElementById("error").innerHTML = "<p> Fill Re-Password field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		
	  else{
      document.getElementById("error").innerHTML = "<p> successfully sent</p>";
	  document.getElementById("error").style.color = "#2c3e50";
	  }
	  
	  alert("Your registration process has been successfully done");
      return true;//return statement, the function will stop executing
	  }

//-----------------------------------------------LogIn-----------------------------------------------

function verif_LogIn() {

      if (document.getElementById("login-name").value=="" && document.getElementById("login-pass").value==""){//check if element null
		   document.getElementById("error").innerHTML = "<p> Fill all input fields !!</p>";//modify the content of an HTML element 
		   document.getElementById("error").style.color = "red";//modify the style element
		   document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
			  
      else if (document.getElementById("login-name").value=="" ){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill name field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}
		 
      else if (document.getElementById("login-pass").value==""){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill Password field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
      else{
      document.getElementById("error").innerHTML = "<p> successfully sent</p>";
	  document.getElementById("error").style.color = "#2c3e50";
	  }
      
	   alert("Welcom Back To Our Store");
       return true;//return statement, the function will stop executing

	}
//-----------------------------------------------FeedBack-----------------------------------------------
function verif_FeedBack() {

      if (document.getElementById("name").value=="" && document.getElementById("Email").value==""&& document.getElementById("subject").value==""&& document.getElementById("message").value=="" && document.getElementById("topics").value==0){//check if element null
		   document.getElementById("error").innerHTML = "<p> Fill all input fields !!</p>";//modify the content of an HTML element 
		   document.getElementById("error").style.color = "red";//modify the style element
		   document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
	  
		   
      else if (document.getElementById("name").value==""){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill name field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
	
      else if (document.getElementById("Email").value=="" ){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill Email field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
	  else if (document.getElementById("Email").value.includes("@")!=true){
           document.getElementById("error").innerHTML = "<p> Enter valid email !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
	 
	  else if (document.getElementById("subject").value==""){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill subject field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
      else if (document.getElementById("message").value==""){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill message field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		    
     else if (document.getElementById("topics").value==0){//check if element null
           document.getElementById("error").innerHTML = "<p> select the topics!!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
      
	  else{
      document.getElementById("error").innerHTML = "<p> successfully sent</p>";
	  document.getElementById("error").style.color = "#2c3e50";
	  }
	  
	  alert("The feedback was successfully sent");
      return true;//return statement, the function will stop executing
	  }
//-----------------------------------------------Communication-----------------------------------------------

function verif_Communication() {

      if (document.getElementById("name").value=="" && document.getElementById("Email").value==""&& document.getElementById("subject").value==""&& document.getElementById("message").value==""){
		   document.getElementById("error").innerHTML = "<p> Fill all input fields !!</p>";//modify the content of an HTML element 
		   document.getElementById("error").style.color = "red";//modify the style element
		   document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
	  
		   
      else if (document.getElementById("name").value==""){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill name field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
	
      else if (document.getElementById("Email").value=="" ){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill Email field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
	 
	  else if (document.getElementById("subject").value==""){
           document.getElementById("error").innerHTML = "<p> Fill subject field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
      else if (document.getElementById("message").value==""){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill message field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
     
		   
      else if (document.getElementById("Email").value.includes("@")!=true){
           document.getElementById("error").innerHTML = "<p> Enter valid email !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
      else{
      document.getElementById("error").innerHTML = "<p> successfully sent</p>";//modify the content of an HTML element 
	  document.getElementById("error").style.color = "#2c3e50";
	  }
	  
	  alert("Your message has been successfully send");
      return true;//return statement, the function will stop executing
	  
	  }

//-----------------------------------------------CheckOut-----------------------------------------------

function verif_CheckOut() {
       var c=/[0-9]/;
      if (document.getElementById("Name").value=="" && document.getElementById("login").value==""&& document.getElementById("exmonth").value==""&& document.getElementById("expyear").value=="" && document.getElementById("cvv").value==""){//check if element null
		   document.getElementById("error").innerHTML = "<p> Fill all input fields !!</p>";//modify the content of an HTML element 
		   document.getElementById("error").style.color = "red";//modify the style element
		   document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
	  
		   
      else if (document.getElementById("Name").value==""){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill name on card field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
	
      else if (document.getElementById("login").value=="" ){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill credit card number field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
	 else if ((c.test(form1.login.value)!=true) || document.getElementById("login").value.length!=16){
           document.getElementById("error").innerHTML = "<p> Invaild card number ,card number should be have 16 digits !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
	 
	  else if (document.getElementById("exmonth").value==""){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill exp month field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
	 else if (c.test(form1.exmonth.value)!=true){
           document.getElementById("error").innerHTML = "<p> Invaild exp month!!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
      else if (document.getElementById("expyear").value==""){
           document.getElementById("error").innerHTML = "<p> Fill exp year field !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
	 else if ((c.test(form1.expyear.value)!=true)|| document.getElementById("expyear").value.length!=4){
           document.getElementById("error").innerHTML = "<p> Invaild exp year!!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
		   
     else if (document.getElementById("cvv").value==""){//check if element null
           document.getElementById("error").innerHTML = "<p> Fill cvv field!!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
	 else if ((c.test(form1.cvv.value)!=true)|| document.getElementById("cvv").value.length!=3){
           document.getElementById("error").innerHTML = "<p> Invaild cvv !!</p>";//modify the content of an HTML element 
           document.getElementById("error").style.color = "red";//modify the style element
           document.getElementById("error").style.display = "block";
		   return false;}//return statement, the function will stop executing
		   
	  else{
      document.getElementById("error").innerHTML = "<p> successfully sent</p>";
	  document.getElementById("error").style.color = "#2c3e50";
	  }
	  
	  alert("Thanks for buying from our store");
      return true;//return statement, the function will stop executing
	  }
	
         

      function change_back (elem) {
        elem.style.backgroundColor = '#ECF0F1'; 
        elem.style.color = 'black';}