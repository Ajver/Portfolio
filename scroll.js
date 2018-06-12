<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="jquery.scrollTo.min.js"></script>
	
$(window).scroll(function(){if($(this).scrollTop()>300){$('#upbutton').fadeIn();}else {$("#arrow").fadeOut();}});
		
jQuery(function($){$('#upbutton').click(function() { $.scrollTo($('body'), 500); });});
