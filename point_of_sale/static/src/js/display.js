self.addEventListener('message', function(e) {
  
  
            
              xmlhttp=new XMLHttpRequest();  
             
             xmlhttp.open("GET","http://127.0.0.1:8100/" +  e.data,false);  
			 xmlhttp.send();
  
  this.postMessage(e.data);
  
}, false);