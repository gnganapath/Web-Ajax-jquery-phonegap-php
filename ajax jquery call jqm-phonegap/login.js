��USBC�(P
     
* �C�         ���    ��           �q    tq    tq    x          @              ( P x   @  �      �      �z5     P      ��     ��     ��    �r�=����               < l o g i n . j s     �q    �q    �q    h          @             (   H                        �    8�    8�             �    ��    8�           �q    �q            (          @             (   (                     ��    �q                    �          @         ��var companycode,empcode,pwd;

function passingcompanycode()
{
	
	alert("1");
	var url="http://192.168.1.36/";
	alert("2");

    compcode=document.getElementById('empid').value;
    empidd=document.getElementById('passwordd').value;
    
    alert("3");
		
	 var query="Name="+compcode+"&Pwd="+empidd;
	$.ajax({
		
		url: url+"login.php",
		type:"POST",
		data:query,
		timeout: 5000,
		success: function(data)
		{
			alert("4");   
			data=jQuery.parseJSON(data);				
                 
              	if(data==1)
              		{ 		  
				  		alert("5");	
						$.mobile.showPageLoadingMsg();
		                window.location='options1.html';
              		}
              else if(data==0)
              		{		  
		               alert("Login failed");
		               loginn.Login.disabled = false;
		              
        
              		}      
                 
     
			
		},
	
	});
}



function loginvalidate()
        {
            var x=document.forms["login"]["empid"].value
            
            
            if(x==null || x=="")
            {
                alert("EmployeeId Cannot Be Left Blank");
                return false;   
            }
            
            
var x=document.forms["login"]["passwordd"].value
            
            
            if(x==null || x=="")
            {
                alert("password Cannot Be Left Blank");
                return false;  
             }
            else
            {
                
                return true;
            }
 
        }
        
var name,pwd;
        function loginready()
        {
            
            name=document.getElementById('empid').value;
            pwd= document.getElementById('passwordd').value;

            
           // alert(name +""+pwd);
            
            var ajax=new XMLHttpRequest(); 
           // alert("ajax");

            ajax.onreadystatechange=function()
            {             
alert("s");
               
            if(ajax.readyState==4 ) 
               {
            	alert("status 4");
              if(ajax.status==200){
                                
                   alert("a");
                       
           if(ajax.responseText==1)
           {
            alert("Login Successfully");
            //setCookie("empid", name, 1);           
            window.location='options1.html';
           }
           else if(ajax.responseText==0)
           {
               alert("Login failed");
           }

      
              }
               }