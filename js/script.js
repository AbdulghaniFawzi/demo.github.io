$(document).ready(function(){
	
	$("#work-filter li a").click(function(e){
		e.preventDefault();
		
		$("#work-filter li a").removeClass('active');
		$(this).addClass('active');
		var dfilter =$(this).attr("data-group");
		//alert(dfilter);
		$("#work .item-work").fadein(dfilter);
		$("#work .item-work").fadeout(.not(dfilter));
		
	});
	
	
});