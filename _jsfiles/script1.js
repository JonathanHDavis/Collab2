
$(document).ready(
	function(){
		// alert("hi there mofo");
	



		$("#surprise").hide();


		function magicTime(){
			$("#surprise").show();
		};


		setTimeout(magicTime, 2000);
		// magicTime();


		$("#exit").click(
			function(){
				$("#surprise").hide();
			}
		);


	}
);