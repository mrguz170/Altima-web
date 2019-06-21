$(document).ready(function(){
	$('[data-ic-class="tab-trigger"]').click(function(e, index){
		e.preventDefault();
		$('[data-ic-class="tab-trigger"]').removeClass('active');
		$(this).addClass('active');
		var tabIndex = $(this).index();
		$('[data-ic-class="tab-content"]').removeClass('active');
		$('[data-ic-class="tab-content"]').eq(tabIndex).addClass('active');
	});
});