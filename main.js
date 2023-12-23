var btn=document.getElementById("btn")
var color=["red","green","brown","purple","pink","violet","orange","aqua","black","white"]
var para=document.getElementById("para")
btn.addEventListener("click",function(){
    color.forEach(function(e,a){
       b= Math.floor(Math.random()*color.length)
      var c= para.innerHTML=color[b]
      para.style.color=c

       console.log(b)
    })
})