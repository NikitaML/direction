
$(document).ready(function(){
			inginiring.style.setProperty('--right-size', 85 + "px")
			inginiring.style.setProperty('--left-size', 85 + "px")

			$('.b-direction__btn_inginiring').hover(function(event){
				btn_inginiring();
			});
})

	function btn_inginiring(){

		$('.b-direction__btn_inginiring').mousemove(function(event){
			
			//координаты внутри кнопки
			var element = $(this).offset();

			var elem_left = element.left.toFixed(0);
			var left = event.pageX - elem_left;
			
			var width =	$(this).outerWidth();
			var right = width - left;
			
			// зписываем в переменные css значения 
			inginiring.style.setProperty('--right-size', right + "px")
			inginiring.style.setProperty('--left-size', left + "px")
		});
		
	}


