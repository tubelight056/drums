
for(var i =0 ;i<document.querySelectorAll(".drum").length ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    handlesound(this.innerHTML);
    buttonanimation(this.innerHTML);

  });
  document.querySelectorAll(".drum")[i].addEventListener("keydown",function(event){
    buttonanimation(event.key);
    handlesound(event.key);
  });

}
  function handlesound(m){

    if(m=="w"){
      var w= new Audio("sounds/tom-1.mp3");
      w.play();}
      else if (m=="a") {
        var a =new Audio("sounds/tom-2.mp3");
        a.play();
      }
      else if (m=="s") {
        var s =new Audio("sounds/tom-3.mp3");
        s.play();
      }
      else if (m=="d") {
          var d=new Audio("sounds/tom-4.mp3");
          d.play();
        }
      else if (m=="j") {
          var j =new Audio("sounds/crash.mp3");
          j.play();
        }
      else if (m=="k") {
          var k =new Audio("sounds/kick-bass.mp3");
          k.play();
        }
        else if (m=="l") {
          var l =new Audio("sounds/snare.mp3");
          l.play();
        }



  };
function buttonanimation(n){
   var g="."+n;
   document.querySelectorAll(g)[0].classList.add("click");
   setTimeout(function(){classremove(g);},500);


}
function classremove(g)
{


  document.querySelectorAll(g)[0].classList.remove("click");

}
