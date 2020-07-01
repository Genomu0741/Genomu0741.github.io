var len = 24;
var toggleList = new Array(len).fill(0);
var pairing = ["ANH","ANH","j12","ANH","j14",
               "j09","j10","j13","j06","j07",
               "ANH","j03","j08","j05","SPL",
               "AMP","ANH","ANH","ANH","ANH",
               "AMP","SPL","j00","j00"];
var where = ["goCtr","goCtr","goCtr","goCtr","j14",
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
    $("#"+pairId).children(".short").remove();
    $("#"+pairId).append("<div class=\"short\"></div>");
    toggleList[onJack]=1;
    toggleList[onPair]=1;
  }else{
    $("#"+idStr).children(".short").remove();
    $("#"+pairId).children(".short").remove();
    toggleList[onJack]=0;
    toggleList[onPair]=0;
  }
});
var regionState = 0;
$(".region-con").on('click',"#goCtr",function(){
  switch(regionState){
    case 0:
      fromCsl2Ctr();
      break;
    case 2:
      fromLeft2Ctr();
      break;
    case 3:
      fromRight2Ctr();
      break;
  }
  regionState = 1;
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
      break;
    case 1:
      fromCtr2Left();
      break;
    case 3:
      fromRight2Left();
      break;
  }
  regionState = 2;
});

$(".region-con").on('click',"#goRight",function(){
  switch(regionState){
    case 0:
      fromCsl2Right();
      break;
    case 1:
      fromCtr2Right();
      break;
    case 2:
      fromLeft2Right();
      break;
  }
  regionState = 3;
});

function fromCsl2Ctr(){
  $(".region.console").animate({top:"-100vh"},2000,function(){
    $("#goCtr").remove();
    leavingCsl();
  });
  $(".region.control").animate({top:"50vh"},2000);
  $("#goCtr").animate({opacity: "0%"},800);
}

function fromCtr2Csl(){
  $(".region.console").animate({top:"50%",left:"50%"},2000,function(){
    $("#goCsl").remove();
    leavingCtr();
  });
  $(".region.control").animate({top:"200vh"},2000);
  $("#goCsl").animate({opacity: "0%"},800);
}

function fromCsl2Left(){
  $(".region.console").animate({top:"-100vh"},2000,function(){
    $("#goLeft").remove();
    leavingCsl();
  });
  $(".region.leftStage").animate({left:"50%"},2000);
  $("#goLeft").animate({opacity: "0%"},800);
}

function fromLeft2Csl(){
  $(".region.console").animate({top:"50%"},2000,function(){
    $("#goCsl").remove();
    leavingLeft();
  });
  $(".region.leftStage").animate({left:"200vw"},2000);
  $("#goCsl").animate({opacity: "0%"},800);
}

function fromCsl2Right(){
  $(".region.console").animate({top:"-100vh"},2000,function(){
    $("#goRight").remove();
    leavingCsl();
  });
  $(".region.rightStage").animate({left:"50%"},2000);
  $("#goRight").animate({opacity: "0%"},800);
}

function fromRight2Csl(){
  $(".region.console").animate({top:"50%"},2000,function(){
    $("#goCsl").remove();
    leavingRight();
  });
  $(".region.rightStage").animate({left:"-100vw"},2000);
  $("#goCsl").animate({opacity: "0%"},800);
}

function fromCtr2Left(){
  $(".region.leftStage").animate({left:"50%"},2000,function(){
    $("#goLeft").remove();
    leavingCtr();
  });
  $(".region.control").animate({top:"200vh"},2000);
  $("#goLeft").animate({opacity: "0%"},800);
}

function fromCtr2Right(){
  $(".region.rightStage").animate({left:"50%"},2000,function(){
    $("#goRight").remove();
    leavingCtr();
  });
  $(".region.control").animate({top:"200vh"},2000);
  $("#goRight").animate({opacity: "0%"},800);
}

function fromLeft2Ctr(){
  $(".region.control").animate({top:"50%"},2000,function(){
    $("#goCtr").remove();
    leavingLeft();
  });
  $(".region.leftStage").animate({left:"200vw"},2000);
  $("#goCtr").animate({opacity: "0%"},800);
}

function fromLeft2Right(){
  $(".region.rightStage").animate({left:"50%"},2000,function(){
    $("#goRight").remove();
    leavingLeft();
  });
  $(".region.leftStage").animate({left:"200vw"},2000);
  $("#goRight").animate({opacity: "0%"},800);
}

function fromRight2Left(){
  $(".region.leftStage").animate({left:"50%"},2000,function(){
    $("#goLeft").remove();
    leavingRight();
  });
  $(".region.rightStage").animate({left:"-100vw"},2000);
  $("#goLeft").animate({opacity: "0%"},800);
}

function fromRight2Ctr(){
  $(".region.control").animate({top:"50%"},2000,function(){
    $("#goCtr").remove();
    leavingRight();
  });
  $(".region.rightStage").animate({left:"-100vw"},2000);
  $("#goCtr").animate({opacity: "0%"},800);
}

function leavingCtr(){
  $(".region-con").append("<div class=\"go2btn\" id=\"goCtr\">往控制室</div>");
  $("#goCtr").css({opacity:"0%"});
  $("#goCtr").animate({opacity: "100%"},800);
}

function leavingCsl(){
  $(".region-con").append("<div class=\"go2btn\" id=\"goCsl\">往控台區</div>");
  $("#goCsl").css({opacity:"0%"});
  $("#goCsl").animate({opacity: "100%"},800);
}

function leavingRight(){
  $(".region-con").append("<div class=\"go2btn\" id=\"goRight\">往右舞台</div>");
  $("#goRight").css({opacity:"0%"});
  $("#goRight").animate({opacity: "100%"},800);
}

function leavingLeft(){
  $(".region-con").append("<div class=\"go2btn\" id=\"goLeft\">往左舞台</div>");
  $("#goLeft").css({opacity:"0%"});
  $("#goLeft").animate({opacity: "100%"},800);
}