var len = 24;
var toggleList = new Array(len).fill(0);
var pairing = ["ANH","ANH","j12","ANH","j14",
               "j09","j10","j13","j06","j07",
               "ANH","j03","j08","j05","SPL",
               "AMP","ANH","ANH","ANH","ANH",
               "AMP","SPL","j00","j00"];
var whereCue = ["goCtr","goCtr","goCtr","goCtr","goLeft",
             "goCtr","goCtr","goLeft","goCsl","goCsl",
             "j00","goCsl","goCsl","goCsl","goCtr",
             "goCtr","goCtr","goCtr","goCtr","goCtr",
             "goCtr","goCtr","j00","j00"];
var orTrg = {"ANH":[0,1,3,10,16,17,18,19],"SPL":[14,21],"AMP":[15,20],"goCtr":[0,1,2,3,5,6,14,15,16,17,18,19,20,21],"goCsl":[8,9,11,12,13],"goLeft":[4,7]};

$(".region-con").on('click',".jack",function(){
  var idStr = $(this).attr("id");
  var onJack = parseInt(idStr.replace("j",""))-1;
  var pairId = pairing[onJack];
  var cueId = whereCue[onJack];
  var onPair = parseInt(pairId.replace("j",""))-1;
  if(toggleList[onJack]==0){
    $("#"+idStr).append("<div class=\"short\"></div>");
    if(pairId.charAt(0)=="j"){
      $("#"+pairId).append("<div class=\"short\"></div>");
    }
    toggleList[onJack]=1;
    toggleList[onPair]=1;
  }else{
    $("#"+idStr).children(".short").remove();
    if(pairId.charAt(0)=="j"){
      $("#"+pairId).children(".short").remove();
    }
    toggleList[onJack]=0;
    toggleList[onPair]=0;
  }
  orTrigger(pairId);
  orTrigger(cueId);
});
var preSums = {"ANH":0,"SPL":0,"AMP":0,"goCtr":0,"goCsl":0,"goLeft":0};
function orTrigger(trgId){
  if(orTrg.hasOwnProperty(trgId)){
    var trgList = orTrg[trgId];
    var preSum = preSums[trgId];
    var sum = 0;
    for(i = 0; i < trgList.length; i++){
      sum+=toggleList[trgList[i]];
    }
    // console.log(sum);
    if(sum>preSum&&preSum==0){
      $("#"+trgId).append("<div class=\"short\"></div>");
    }else if(sum<preSum&&sum==0){
      $("#"+trgId).children(".short").remove();
    }
    preSums[trgId]=sum;
  }
}

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
var signposts = [{"name":"goCsl","content":"往控台區","class-name":"console"},{"name":"goCtr","content":"往控制室","class-name":"control"},{"name":"goLeft","content":"往左舞台","class-name":"leftStage"},{"name":"goRight","content":"往右舞台","class-name":"rightStage"}];
function fromCsl2Ctr(){
  $(".region.console").animate({top:"-100vh"},2000,function(){
    $("#goCtr").remove();
    leavingBtn(signposts[0]);
  });
  $(".region.control").animate({top:"50vh"},2000);
  $("#goCtr").animate({opacity: "0%"},800);
}

function fromCtr2Csl(){
  $(".region.console").animate({top:"50%",left:"50%"},2000,function(){
    $("#goCsl").remove();
    leavingBtn(signposts[1]);
  });
  $(".region.control").animate({top:"200vh"},2000);
  $("#goCsl").animate({opacity: "0%"},800);
}

function fromCsl2Left(){
  $(".region.console").animate({top:"-100vh"},2000,function(){
    $("#goLeft").remove();
    leavingBtn(signposts[0]);
  });
  $(".region.leftStage").animate({left:"50%"},2000);
  $("#goLeft").animate({opacity: "0%"},800);
}

function fromLeft2Csl(){
  $(".region.console").animate({top:"50%"},2000,function(){
    $("#goCsl").remove();
    leavingBtn(signposts[2]);
  });
  $(".region.leftStage").animate({left:"200vw"},2000);
  $("#goCsl").animate({opacity: "0%"},800);
}

function fromCsl2Right(){
  $(".region.console").animate({top:"-100vh"},2000,function(){
    $("#goRight").remove();
    leavingBtn(signposts[0]);
  });
  $(".region.rightStage").animate({left:"50%"},2000);
  $("#goRight").animate({opacity: "0%"},800);
}

function fromRight2Csl(){
  $(".region.console").animate({top:"50%"},2000,function(){
    $("#goCsl").remove();
    leavingBtn(signposts[3]);
  });
  $(".region.rightStage").animate({left:"-100vw"},2000);
  $("#goCsl").animate({opacity: "0%"},800);
}

function fromCtr2Left(){
  $(".region.leftStage").animate({left:"50%"},2000,function(){
    $("#goLeft").remove();
    leavingBtn(signposts[1]);
  });
  $(".region.control").animate({top:"200vh"},2000);
  $("#goLeft").animate({opacity: "0%"},800);
}

function fromCtr2Right(){
  $(".region.rightStage").animate({left:"50%"},2000,function(){
    $("#goRight").remove();
    leavingBtn(signposts[1]);
  });
  $(".region.control").animate({top:"200vh"},2000);
  $("#goRight").animate({opacity: "0%"},800);
}

function fromLeft2Ctr(){
  $(".region.control").animate({top:"50%"},2000,function(){
    $("#goCtr").remove();
    leavingBtn(signposts[2]);
  });
  $(".region.leftStage").animate({left:"200vw"},2000);
  $("#goCtr").animate({opacity: "0%"},800);
}

function fromLeft2Right(){
  $(".region.rightStage").animate({left:"50%"},2000,function(){
    $("#goRight").remove();
    leavingBtn(signposts[2]);
  });
  $(".region.leftStage").animate({left:"200vw"},2000);
  $("#goRight").animate({opacity: "0%"},800);
}

function fromRight2Left(){
  $(".region.leftStage").animate({left:"50%"},2000,function(){
    $("#goLeft").remove();
    leavingBtn(signposts[3]);
  });
  $(".region.rightStage").animate({left:"-100vw"},2000);
  $("#goLeft").animate({opacity: "0%"},800);
}

function fromRight2Ctr(){
  $(".region.control").animate({top:"50%"},2000,function(){
    $("#goCtr").remove();
    leavingBtn(signposts[3]);
  });
  $(".region.rightStage").animate({left:"-100vw"},2000);
  $("#goCtr").animate({opacity: "0%"},800);
}

function leavingBtn(signspot){
  $(".region-con").append("<div class=\"go2btn\" id=\""+signspot.name+"\">"+signspot.content+"</div>");
  $("#"+signspot.name).css({opacity:"0%"});
  $("#"+signspot.name).animate({opacity: "100%"},800);
}