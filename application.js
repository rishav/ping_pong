var ball = { speed: 5, x: 250, y: 100, directionX: 1}
var Statuses = { started:true, stopped:false };

var Game = { status:Statuses.stopped }

$(document).ready(function() {
	$('#start_game').click(function() {
		Game.status = Statuses.started;
	})
	$('#stop_game').click(function() {
		Game.status = Statuses.stopped;
	})
	setInterval(moveBall,30);
})
$(document).keydown(function(e){
	if (e.which == 38) {
		var top = parseInt($("#paddleB").css("top")); 
		$("#paddleB").css("top",top-5);
	}
	else if(e.which == 40) {
		var top = parseInt($("#paddleB").css("top")); 
		$("#paddleB").css("top",top+5);	
	}
	else if(e.which == 87) {
		var top = parseInt($("#paddleA").css("top"));
		$("#paddleA").css("top",top-5);
	}
	else if(e.which == 83) {
	 var top = parseInt($("#paddleA").css("top")); 
	 $("#paddleA").css("top",top+5);
	}
})

function moveBall()
{
	if(Game.status == Statuses.started ) {
		var playgroundWidth = parseInt($("#playground").width());	
	
		if (ball.x + ball.speed*ball.directionX > playgroundWidth)
		{
			ball.directionX = -1;
		}
		if (ball.x  + ball.speed * ball.directionX < 0)
		{
			ball.directionX = 1;
		}
	
		var paddleAX = parseInt($("#paddleA").css("left")) + parseInt($("#paddleA").css("width"));
	
		var paddleAYBottom = parseInt($("#paddleA").css("top"))+parseInt($("#paddleA").css("height"));
	
		var paddleAYTop = parseInt($("#paddleA").css("top"));
	
		if (ball.x + ball.speed * ball.directionX < paddleAX)
		{
			if (ball.y  <= paddleAYBottom && ball.y >= paddleAYTop)
				ball.directionX = 1;
		}
	
		var paddleBX = parseInt($("#paddleB").css("left")) - parseInt($("#paddleB").css("width"))/2;	
		var paddleBYBottom = parseInt($("#paddleB").css("top"))+parseInt($("#paddleB").css("height"));
		var paddleBYTop = parseInt($("#paddleB").css("top"));

		if (ball.x + ball.speed * ball.directionX >= paddleBX)
		{
			if (ball.y  <= paddleBYBottom && ball.y  >= paddleBYTop)
				ball.directionX = -1;
		}
		ball.x += ball.speed * ball.directionX;

		$("#ball").css({
			"left" : ball.x,
			"top" : ball.y
		});
	}
	else {
		$("#ball").css({
			"left" : 180,
			"top" : 100,
		});	
	}
}