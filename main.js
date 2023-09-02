function setup(){
    canvas = createCanvas(280,280);
    canvas.center();  
  }
  function draw(){
      image(image , 0 ,0 , 280 ,280);
  }
  function start(){
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById('status').innerHTML = "status : Detecting ";
  
  }
  function modelLoaded(){
      console.log('modelLoaded');
      Status = true ;
      video.loop();
      video.speed(1);
      video.volume(0);
  }