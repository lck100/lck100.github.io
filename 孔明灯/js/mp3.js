 $(function(){
	  var mp3_player = document.getElementById("media");
	  var is_playing=false;
	  $("#audio_btn").click(function(){			 
			// $(this).toggleClass("rotate"); //控制音乐图标 自转或暂停
			// $(this).toggleClass("audio_play"); 
			// $(this).toggleClass("audio_stop");     
			//if($(this).hasClass("rotate")){
			 if(is_playing==false){//不用toggleClass是为了避免谷歌浏览器或其他无法自动播放的情况下图标不对的问题
				 $("#audio_btn").removeClass("audio_stop");
				 $("#audio_btn").addClass("audio_play");
				 mp3_player.play();
			 }else{
				 mp3_player.pause();
				$("#audio_btn").removeClass("audio_play");
				$("#audio_btn").addClass("audio_stop");
			 }
	 })
	mp3_player.addEventListener("play", function(){
		is_playing=true;

		$("#audio_btn").addClass("audio_play");
		$("#audio_btn").removeClass("audio_stop");
	});
	mp3_player.addEventListener("pause", function(){
		is_playing=false;
		$("#audio_btn").removeClass("audio_play");
		$("#audio_btn").addClass("audio_stop");
	});
 });