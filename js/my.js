console.log("my js has loaded");

(function() {
  $('.toggle-wrap').on('click', function() {
    $(this).toggleClass('active');
    $('aside').animate({width: 'toggle'}, 200);
  });
})();

//
//$(document).ready(function(){
//    $("#button1").click(function(){
//       $('#demo').html('a red card');
//   });
//});


$(document).ready(function(){
    $("#button1").click(function(){
var myArray = [
  "a red card",
  "a part",
  "a key role",
"with fire",
    "and learn",
    "with the",
    "something",
    "fair",
    "with ideas",
    "with type",
    "a wild card",
    "on words"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
       $('#demo').html(randomItem);
   });
});


$(document).ready(function(){
    $("#button2").click(function(){
var myArray = [
  "goo.",
  "peak.",
  "look about.",
"look see.",
    "gawk.",
    "wander.",
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
       $('#gander').html(randomItem);
   });
});




$(document).ready(function(){
    $("#button3").click(function(){
var myArray = [
  "salsa.",
  "cha-cha.",
  "rumba.",
"waltz."
    
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
       $('#tango').html(randomItem);
   });
});



//function changing(){
//var colors = ['red', 'blue'],
//    i = 0;}
//
//$("bodycolour").click(function(){ 
//    $("#button4").css("bodycolour", colors[i++]);
//    if (i >= colors.length)
//        i = 0;
//
//});






var text = ["a red card",
  "a part",
  "a key role",
"with fire",
    "and learn",
    "with the",
    "something",
    "fair",
    "with ideas",
    "with type",
    "a wild card",
           "on words"]
var pos = {x: 0, y:0};
$(document).mousemove(function(event) {
  var randomItem = text[Math.floor(Math.random() * text.length)];
  var div = $("#message");
  if (event.pageX > pos.x+30 || event.pageY > pos.y+30 || event.pageY < pos.y -30 || event.pageX < pos.x-30) {
    pos.x = event.pageX;
    pos.y = event.pageY;
    div.stop().animate({
      "opacity": "1"
    }, 1, function() {
      $(this).text(randomItem);
      $(this).stop().animate({
        "opacity": "1"
      }, 1);
    });
  }
});




//
//function randomPick(arr) {
//
//  var selected = arr[Math.floor(Math.random()*arr.length)]
//
//  return selected;
//}
//
//
//images = 
//[ 
//"https://dummyimage.com/300x300/red/fff&text=I+AM+CAT",
//"https://dummyimage.com/300x300/purple/fff&text=I+AM+CAT",
//"https://dummyimage.com/300x300/45454/fff&text=I+AM+CAT",
//"https://dummyimage.com/300x300/999/fff&text=I+AM+CAT
//"
//]
//
//function randomHover () {
//
//  var myImage = document.getElementById('hover');
//  var selImage = randomPick(images);
//
//  myImage.src = selImage;
//
//}
//
//function resetState() {
//
//  var myImage = document.getElementById('hover');
//  myImage.src = "https://dummyimage.com/300x300/red/fff&text=I+AM+CAT
//";
//
//}











$(document).ready(function(){    

    $.fn.animateRotate = function(angle_from, angle_to, duration, easing, complete) {
      var args = $.speed(duration, easing, complete);
      var step = args.step;
      return this.each(function(i, e) {
        args.complete = $.proxy(args.complete, e);
        args.step = function(now) {
          $.style(e, 'transform', 'rotate(' + now + 'deg)');
          if (step) return step.apply(e, arguments);
        };
    
        $({deg: angle_from}).animate({deg: angle_to}, args);
      });
    };
    
    
    var jsShowMenu = false;
    var jsPlusStart = 0;
    var jsPlusEnd = 405;
    
    $('#plus').click(function(){    
        if(jsShowMenu){
            jsPlusStart = 405;
            jsPlusEnd = 720;    
            jsShowMenu = false;    
        }else{
            jsPlusStart = 0;
            jsPlusEnd = 405;            
            jsShowMenu = true;    
        }
    
        $(this).animateRotate(jsPlusStart, jsPlusEnd, 400, "swing");    
        
        $(".header_menu aside").animate({width:'toggle'},300);
                    
    });
    
    
    
    
    
    
    
    
     var jsBG = true;
    
    $('#button4').click(function(){    
        console.log("clicked2");
        if(jsBG){
            document.body.style.backgroundColor="#e71b24";
            jsBG = false;
        }else{
            document.body.style.backgroundColor="#fafafa";
            jsBG = true;    
        }
    });
    
    
});     

















