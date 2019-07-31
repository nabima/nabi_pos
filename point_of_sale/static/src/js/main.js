
odoo.define('point_of_sale.main', function (require) {
"use strict";

var chrome = require('point_of_sale.chrome');
var core = require('web.core');

core.action_registry.add('pos.ui', chrome.Chrome);

});


function ledDisplay(i){  
		var worker = new Worker('point_of_sale/static/src/js/display.js');

		worker.addEventListener('message', function(e) {
			console.log('Worker said: ', e.data);
		}, false);    

    try{  
		//bienvenu
		if (i==1)
		{
			line1="ISRAE SUPERMARKET";
			line2="BienvenuE";
		};
		//addProduct
		if(i==2)
		{
			line1= $(".selected .product-name").text().trim().substr(0,13) + " " + $(".selected .price").text().trim().substr(0,6);
			line2 = "Total = " + $("div.total > span.value").text();
		};
		//good bye
		if(i==3)
		{
			line1="A bientot";
			line2 = "Change = " + $("#payment-change").text();
		};
		
		console.log("log1: " +String(line1)+"___"+String(line2));
		
		
		
              
    }catch(err){  } 
		
	worker.postMessage(String(line1)+"___"+String(line2)); 
		
		
    } ;