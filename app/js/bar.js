
export default () => {
	//
	//window.requestAnimationFrame(updateCanvas);
	//updateCanvas();
}


function updateCanvas(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	var myCanvas = document.getElementById("animated_background");
	myCanvas.width = width;
	myCanvas.height = height;
    
	var context = myCanvas.getContext("2d");
    context.clearRect(0,0,width,height);
    
    var rad = 16;
    var gaps= rad*2;
    var widthCount = parseInt(width/gaps); 
    var heightCount = parseInt(height/gaps); 
    for(var x=0; x<widthCount; x++){
    	for(var y=0; y<heightCount; y++){
    		context.strokeStyle="#265996";
    		context.lineWidth=12;
    		//context.fillStyle = aColors[parseInt(Math.random()*aColorsLength)];
        	context.beginPath();
    		context.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true); 
    		context.closePath();
    		context.stroke();
    		//context.fill();  
    	}
    }


	window.requestAnimationFrame(updateCanvas);
}
