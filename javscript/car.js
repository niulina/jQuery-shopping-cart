$(function(){
	var offset = $('#carimg').offset();
	$('.addcar').on('click',function(event){
		var addcar = $(this);
		var img = addcar.parent().find('img').attr('src');
		var flyer = $('<img class="flyer" src="'+img+'">');
		flyer.fly({
			start:{
				left:event.pageX,
				top:event.pageY
			},
			end:{
				left:offset.left,
				top:offset.top,
				width:0,
				height:0
			},
			onEnd:function(){
				$("#success").show().animate({width: '250px'}, 200).fadeOut(1000);
				addcar.css("cursor","default").removeClass('orange').unbind('click');
				this.destory();
			}
		});
	});
});