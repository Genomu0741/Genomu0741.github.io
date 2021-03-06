$("body").ready(function(){
  $(".block.first").animate({opacity: "100%",top: "-=50px"},800);
  setUpArr();
  fusing();
});
// declaration of routing arrays
var hasEnteredArr = [];
var preyElemArr = [];
var animArr = [];
/** animArr is yet to be assembled
 *  $(anim[0]).animate(anim[1],anim[2],anim[3],anim[4]);
 */

function setUpArr(){
  // here lays enterAnimation list
  // do mapping here
  addElem2Arr(".container.con-about",simpleFade(".inner-con"));
  addElem2Arr(".container.con-skills",simpleFade(".skill-frame"));
  addElem2Arr(".container.con-pros",simpleFade(".pro-frame"));
}
function simpleFade(elemName){
  $(elemName).css({opacity:"0",top:"+=20px"});
  return [elemName,{opacity: "100%",top: "-=20px"},800];
}
function addElem2Arr(elemName,anim){
  var elem = document.querySelector(elemName);
  hasEnteredArr.push(false);
  preyElemArr.push(elem);
  animArr.push(anim);
}

var doc = document.documentElement;

$(window).scroll(function(){
  var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  lookForPrey(top);
});

function lookForPrey(top){
  for(var i = 0;i<preyElemArr.length;i++){
    var position = getPosition(preyElemArr[i]);
    if(enteredElY(position.y,top,100)){
      if(!hasEnteredArr[i]){
        var anim = animArr[i];
        $(anim[0]).animate(anim[1],anim[2]);
      }
      hasEnteredArr[i]=true;
    }
  }
}

function enteredElY(y,top,offSet){
  var isEntered = top+$(window).height()>y+offSet;
  return isEntered;
}

function getPosition (element) {
  var x = 0;
  var y = 0;
  while ( element ) {
    x += element.offsetLeft - element.scrollLeft + element.clientLeft;
    y += element.offsetTop - element.scrollLeft + element.clientTop;
    element = element.offsetParent;
  }

  return { x: x, y: y };
}

function fusing(){
  var n = 7;
  var dist = ($(window).height()*0.5/n);
  for(var i = 0;i<2*(n+1);i++){
    $(".container.con-top").append("<div class=\"fusing-ball con-right\" id =\"ball-"+i+"\"></div>");
    var ran = Math.random()*i+1;
    
    if(i>=(n+1)){
       $("#ball-"+i).css({top:"+="+((i-n)*dist+20)+"px",opacity:0.5,animation:"breath "+ran+"s infinite"});
    }else{
      $("#ball-"+i).css({top:"+="+i*dist+"px",opacity:1,animation:"breath "+ran+"s infinite"});
    }
    
    }
  $(".con-right").delay(1250).animate({left:"-5%"},4000,function(){
    $(".fusing-ball.con-right").remove();
  });
  $("h1.title-pi").css({bottom:"+=50px"});
  $("h1.title-pi").delay(1250).animate({opacity:"100%",bottom:"-=50px"},1000);
  
  }
var shownME = false;
$("#ME").click(function(){
  if(!shownME){
    $("#ME > .skill-info").append("<p>理想材料應力分析</p>");
    $("#ME > .skill-info").append("<p>剛體動力計算</p>");
    $("#ME > .skill-info").append("<p>簡單靜力分析</p>");
    $("#ME p").css({opacity:"0"});
    $("#ME p").animate({opacity:"1"});
    shownME=true;
  }else{
    $("#ME p").animate({opacity:"0"},function(){
      $("#ME p").remove();
      shownME=false;
    });
  }
});
var shownLC = false;
$("#LC").click(function(){
  if(!shownLC){
    $("#LC > .skill-info").append("<p>時序電路</p>");
    $("#LC > .skill-info").append("<p>組合電路</p>");
    $("#LC > .skill-info").append("<p>FPGA</p>");
    $("#LC p").css({opacity:"0"});
    $("#LC p").animate({opacity:"1"});
    shownLC=true;
  }else{
    $("#LC p").animate({opacity:"0"},function(){
      $("#LC p").remove();
      shownLC=false;
    });
  }
});
var shownCE = false;
$("#CE").click(function(){
  if(!shownCE){
    $("#CE > .skill-info").append("<p>轉移函數</p>");
    $("#CE > .skill-info").append("<p>電路設計</p>");
    $("#CE > .skill-info").append("<p>電路分析</p>");
    $("#CE > .skill-info").append("<p>小信號分析</p>");
    $("#CE p").css({opacity:"0"});
    $("#CE p").animate({opacity:"1"});
    shownCE=true;
  }else{
    $("#CE p").animate({opacity:"0"},function(){
      $("#CE p").remove();
      shownCE=false;
    });
  }
});
var shownEMD = false;
$("#EMD").click(function(){
  if(!shownEMD){
    $("#EMD > .skill-info").append("<p>動電磁場計算</p>");
    $("#EMD > .skill-info").append("<p>非齊次電勢分析</p>");
    $("#EMD > .skill-info").append("<p>相對論電磁場</p>");
    $("#EMD > .skill-info").append("<p>電磁力學</p>");
    $("#EMD p").css({opacity:"0"});
    $("#EMD p").animate({opacity:"1"});
    shownEMD=true;
  }else{
    $("#EMD p").animate({opacity:"0"},function(){
      $("#EMD p").remove();
      shownEMD=false;
    });
  }
});
var shownEMA = false;
$("#EMA").click(function(){
  if(!shownEMA){
    $("#EMA > .skill-info").append("<p>傅立葉分析</p>");
    $("#EMA > .skill-info").append("<p>拉普拉斯轉換</p>");
    $("#EMA > .skill-info").append("<p>分離變數法</p>");
    $("#EMA > .skill-info").append("<p>級數法</p>");
    $("#EMA p").css({opacity:"0"});
    $("#EMA p").animate({opacity:"1"});
    shownEMA=true;
  }else{
    $("#EMA p").animate({opacity:"0"},function(){
      $("#EMA p").remove();
      shownEMA=false;
    });
  }
});
$("#Taro").click(function(){
  window.open("https://github.com/Rhodanthe1116/taro-oriented-project","_blank");
});
$("#Front").click(function(){
  window.open("https://codepen.io/q9p7w891p/full/YzyGgYj","_blank");
});
$("#MATLAB").click(function(){
  window.open("https://github.com/Genomu0741/matlabTrial","_blank");
});
var isOked = false;
$(".contact").click(function(){
  var clipboard = new ClipboardJS("#ct");
  clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    if(!isOked){
      isOked=true;
      $("body").append("<div class=\"ok-msg\">已複製</div>");
      $(".ok-msg").css({opacity:"0"});
      $(".ok-msg").animate({opacity:"0.7"});
      $(".ok-msg").delay(400).animate({opacity:"0"},function(){
      isOked = false;
    });
    }
    e.clearSelection();
});
});
var isNaved = false;
$(".navbtn").click(function(){
  if(!isNaved){
    $(".navbtn").append("<div class='navlist'><\div>");
    $(".navlist").append("<div class='nav-item' id='nP'>專案<\div>");
    $(".navlist").append("<div class='nav-item' id='nS'>技能<\div>");
    $(".navlist").append("<div class='nav-item' id='nA'>關於我<\div>");
    $(".navlist").append("<div class='nav-item' id='n'>最上面<\div>");
    isNaved = true;
    $(".navlist").animate({opacity:"1"});
    $(".nav-item").animate({opacity:"1"});
    $("#n").click(function(){
      $("html,body").animate({
          scrollTop: 0
        }, 600);
    });
    $("#nA").click(function(){
      var vw = $(window).width();
      if(vw>1100){
        $("html,body").animate({
          scrollTop: 500
        }, 600);
      }else{
        $("html,body").animate({
          scrollTop: 900
        }, 600);
      }
      
      
    });
    $("#nS").click(function(){
      var vw = $(window).width();
      if(vw>1100){
        $("html,body").animate({
          scrollTop: 1050
        }, 600);
      }else{
        $("html,body").animate({
          scrollTop: 1800
        }, 600);
      }
    });
    $("#nP").click(function(){
      var vw = $(window).width();
      if(vw>1100){
        $("html,body").animate({
            scrollTop: 1550
          }, 600);
      }else{
        $("html,body").animate({
            scrollTop: 2675
          }, 600);
      }
    });
  }else{
    $(".navlist").animate({opacity:"0"},300,function(){
      $(".nav-item").remove();
      $(".navlist").delay(200).remove();
      isNaved = false;
    });
  }
});