const thumupEl = document.getElementById("thumup");
const imageEl = document.getElementById("image");
let result =true;

function onClickButton(){
    if(result === true){
        thumupEl.style.backgroundColor = "blue"
        image.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        result= false;
    }else{
        thumupEl.style.backgroundColor = "white"
        image.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        result = true;
    }
   
}