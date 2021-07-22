$(function(){
    // 초기화(첫번째 이미지만 출력)
    $('.gallery img').hide().eq(0).show();

    var imgNum = 0; // 이미지 번호
    var pauseTime = 4000; // 정지 시간
     //이미지 변경 함수
    function changeGallery(imgNum){
        $('.gallery img').stop().fadeOut().eq(imgNum).fadeIn();
  
    //자동재생함수\
    setInterval(function(){
        imgNum = imgNum + 1;
        if (imgNum > 0){imgNum = 0;}
        changeGallery(imgNum);
    }, pauseTime);

    
  
      

  })