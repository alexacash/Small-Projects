


var button = document.querySelector("button");
var isPurple = false;



button.addEventListener("click",function(){

	if(isPurple){
		document.body.style.background = "white";
        isPurple = false;
	} else {
	document.body.style.background = "purple";
	isPurple =  true;
}
});

//isPurple = !isPurple 
//does the same thing as above not true, true false etc.

	//if white 
	   //make it purple
    //else
       //make it white