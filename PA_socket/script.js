var len = 24;
var toggleList = new Array(len).fill(0);
var pairing = ["j00","j00","j12","j00","j14",
               "j09","j10","j13","j06","j07",
               "j00","j03","j08","j05","j00",
               "j00","j00","j00","j00","j00",
               "j00","j00","j00","j00"];

$(".region-con").on('click',".jack",function(){
  var idStr = $(this).attr("id");
  var onJack = parseInt(idStr.replace("j",""))-1;
  var pairId = pairing[onJack];
  var onPair = parseInt(pairId.replace("j",""))-1;
  if(toggleList[onJack]==0){
    $("#"+idStr).append("<div class=\"short\"></div>");
    $("#"+pairId).append("<div class=\"short\"></div>");
    toggleList[onJack]=1;
    toggleList[onPair]=1;
  }else{
    $("#"+idStr).children().remove();
    $("#"+pairId).children().remove();
    toggleList[onJack]=0;
    toggleList[onPair]=0;
  }
});
var regionState = 0;
$(".region-con").on('click',"#goCtr",function(){
  switch(regionState){
    case 0:
      fromCsl2Ctr();
      regionState = 1;
      break;
    case 2:
      break;
  }
});

$(".region-con").on('click',"#goCsl",function(){
  switch(regionState){
    case 1:
      fromCtr2Csl();
      break;
    case 2:
      fromLeft2Csl();
      break;
    case 3:
      fromRight2Csl();
      break;
  }
  regionState = 0;
});

$(".region-con").on('click',"#goLeft",function(){
  switch(regionState){
    case 0:
      fromCsl2Left();
      regionState = 2;
      break;
  }
});

$(".region-con").on('click',"#goRight",function(){
  switch(regionState){
    case 0:
      fromCsl2Right();
      regionState = 3;
      break;
  }
});

function fromCsl2Ctr(){
  $(".region.console").animate({top:"-100vh"},2000,function(){
    $("#goCtr").remove();
    $(".region-con").append("<div class=\"go2btn\" id=\"goCsl\">往控台區</div>");
    $("#goCsl").css({opacity:"0%"});
    $("#goCsl").animate({opacity: "100%"},800);
  });
  $(".region.control").animate({top:"50vh"},2000);
  $("#goCtr").animate({opacity: "0%"},800);
}

function fromCtr2Csl(){
  $(".region.console").animate({top:"50vh"},2000,function(){
    $("#goCsl").remove();
    $(".region-con").append("<div class=\"go2btn\" id=\"goCtr\">往控制室</div>");
    $("#goCtr").css({opacity:"0%"});
    $("#goCtr").animate({opacity: "100%"},800);
  });
  $(".region.control").animate({top:"200vh"},2000);
  $("#goCsl").animate({opacity: "0%"},800);
}

function fromCsl2Left(){
  $(".region.console").animate({left:"-100vw"},2000,function(){
    $("#goLeft").remove();
    $(".region-con").append("<div class=\"go2btn\" id=\"goCsl\">往控台區</div>");
    $("#goCsl").css({opacity:"0%"});
    $("#goCsl").animate({opacity: "100%"},800);
  });
  $(".region.leftStage").animate({left:"50%"},2000);
  $("#goLeft").animate({opacity: "0%"},800);
}

function fromLeft2Csl(){
  $(".region.console").animate({left:"50%"},2000,function(){
    $("#goCsl").remove();
    $(".region-con").append("<div class=\"go2btn\" id=\"goLeft\">往左舞台</div>");
    $("#goLeft").css({opacity:"0%"});
    $("#goLeft").animate({opacity: "100%"},800);
  });
  $(".region.leftStage").animate({left:"200vw"},2000);
  $("#goCsl").animate({opacity: "0%"},800);
}

function fromCsl2Right(){
  $(".region.console").animate({left:"200vw"},2000,function(){
    $("#goRight").remove();
    $(".region-con").append("<div class=\"go2btn\" id=\"goCsl\">往控台區</div>");
    $("#goCsl").css({opacity:"0%"});
    $("#goCsl").animate({opacity: "100%"},800);
  });
  $(".region.rightStage").animate({left:"50%"},2000);
  $("#goRight").animate({opacity: "0%"},800);
}

function fromRight2Csl(){
  $(".region.console").animate({left:"50%"},2000,function(){
    $("#goCsl").remove();
    $(".region-con").append("<div class=\"go2btn\" id=\"goRight\">往右舞台</div>");
    $("#goRight").css({opacity:"0%"});
    $("#goRight").animate({opacity: "100%"},800);
  });
  $(".region.rightStage").animate({left:"-100vw"},2000);
  $("#goCsl").animate({opacity: "0%"},800);
}