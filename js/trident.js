$(function(){
     	       
     	       var videoBtn = 0;
			   $('.switchBtn').click(function(){
			   	          $('.TraditionalBtn').fadeIn(500);
			   	          $('.videoBtn').fadeIn(500);
                         
			   })
			   

			   
			   $('.TraditionalBtn').click(function(){
			   	          
                           $('.videoPart').fadeOut();
                           $('.videoList').fadeOut();
			   	           $('.triditionPart').fadeIn(1000);
			   	           $('video.vjs-tech').attr({'src':''})
			   	           
			   	           videoBtn = 1;
                          
			   })
			   
			   $('.videoBtn').click(function(){
			   	     	   if(videoBtn == 1){
			   	     	   	     $('video.vjs-tech').attr({'src':text+videoSrc[0]})
			   	     	   	     $('.triditionPart').fadeOut();
			   	                 $('.videoPart').fadeIn(1000);
			   	                 videoBtn = 0;
			   	     	   }else{
			   	     	   	   
			   	     	   	   $('.videoList').fadeIn(500);
			   	     	   	
			   	     	   }
			   	           
                          
			   })
			   //video play
			   var videoSrc = [
			            '1.webm','2.webm','3.webm','4.webm','5.webm','6.webm',
			            '7.webm','8.webm','9.webm','10.webm','11.webm','12.webm',
			            '13.webm','14.webm','15.webm','16.webm','17.webm','18.webm'
			            
			   ];
			   //Q-A功能
				var btn = $("a.videoshow");
				var text = "video/webm/"
				btn.each(function(index){
						var moveIndex = index;
						$(this).click(function(){
							   $('.videoList').fadeOut();
							   $('video.vjs-tech').attr({'src':text+videoSrc[moveIndex]})
						});
				  })
			   	      
			   
})