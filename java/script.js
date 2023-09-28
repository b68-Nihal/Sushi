 function myFunction() {	/*java script used for pop-up alert*/
				var txt;
				if (confirm("Your order has been placed")) {
				txt = "Item have been added to your cart";

				}else{
				txt = "You pressed Cancel!" ;

				}
				document.getElementById("alert").innerHTML = txt;
				}
				