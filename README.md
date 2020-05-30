# 個人履歷作業 工海二 陳庭賢 B07505019
> 本次作業沒有使用任何模板
> 使用pug+sass+jquery 純手刻
## 參考資料(同時是大綱 OㄣO)
### 誘發動畫(ver-1.0)
#### [上學期同學範例參考](https://minglu6955.github.io/)
#### [取得元素的座標](https://andyyou.github.io/2015/04/07/get-an-element-s-position-by-js/)
### 首頁水波動畫啟發(ver-1.0)
#### [RemindMe App Concept](https://codepen.io/ispal/pen/LxjgEj)
### 複製email到剪貼簿(ver-1.0)
#### [clipboard.js](https://clipboardjs.com/)
### 響應式設計 RWD(ver-1.0)
#### [Guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
### 浮動式導覽鈕(ver-1.0)
#### [Floating action button](https://material.io/components/buttons-floating-action-button)

---

## 元素進入畫面誘發動畫
### 結構=工作拆解
為了更好的函式重用、維護性以及資料擴充性，我將工作拆成好幾個函式
> 其實我根本應該用一個json-array來存
> 做到快結束才想起來，就先算了
- (檢查是否進入對象:更新對象)配對組合清單
    - 是否已進入目標 的清單
    - 待動畫更新對象 的清單
    - 對應到動畫內容 的清單
    - 做對應的函式
    - 執行新增清單的函式 
- 頁面滑動處理
    -  聆聽滑動事件來獲得使用者視窗上緣位置
    -  拿出清單中的項目檢查並做出對應動作
    -  取得某元素座標的函式
    -  檢查是否進入某元素的函式
### 組合列
```javascript=
var hasEnteredArr = [];
var preyElemArr = [];
var animArr = [];
function setUpArr(){ ... }
function addElem2Arr(elemName,anim){ ... }
```
### 滑動事件聆聽
```javascript=
var doc = document.documentElement;
$(window).scroll(function(){
  var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  lookForPrey(top);
});
function lookForPrey(top){ ... }
function enteredElY(y,top,offSet){ ... }
function getPosition(element){ ... }
```
## 混和液體動畫
> 原本想做兩個液體流進混和的感覺
> 但是後來比較像小波浪洗過去 Orz
### FlatDesign?
大概念就是用很多簡單的色塊拼出動畫
在這裡是用CSS刻出基底樣子(橢圓)
每個以不盡相同的頻率持續水平縮放(呼吸)
jQuery決定多個色塊之間的數量跟參數的不同
### CSS呼吸動畫
```sass=
.fusing-ball.con-right
  +center
  left: 54%
  top: -50px
  +size(100px,120px)
  background-color: $cLo1
  border-radius: 100%
  
@keyframes breath
  0%
    transform: scale(1,1)
  50%
    transform: scale(2,1)
  100%
    transform: scale(1,1)
```
### jQuery加入多個橢圓
```javascript=
function fusing(){
  var ofg = 7;
  for(var i = 0;i<2*ofg;i++){
    $(".container.con-top").
    append("<div class=\"fusing-ball con-right\" id =\"ball-"+i+"\"></div>");
        ...
    }
}
```
## 複製email到剪貼簿
沒什麼太特別的，還滿輕量化的
### 決定複製鍵、對象-pug
```pug=
p.contact#ct(data-clipboard-target="#ct",
    data-clipboard-text="B07505019@ntu.edu.tw") B07505019@ntu.edu.tw
```
### 提醒訊息樣式-SASS
```sass=
.ok-msg
  color: green
  font-size: 18pt
  text-align: center
  transform: translateX(-50%)
  left: 50%
  bottom: 20px
  opacity: 0.6
  background-color: #fff
  position: fixed
  +size(120px,40px)
  border-radius: 20px
```
### 提醒已複製-jQuery
```javascript=
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
```
## 響應式設計RWD
### 以一列容器為單位切割畫面-pug
```sass=
.container
  margin-left: auto
  margin-right: auto
  width: 100%
  height: 500px
  overflow: hidden
```
### 手機瀏覽畫面調整-SASS
- 頭頁字型大小
- 內容字型大小
- flex-direction列轉行
- 浮動導覽鈕大小
- 已複製提醒訊息大小
```sass=
@media screen and (max-width:600px)
  ...
  ...
  ...
```
## 浮動導覽鈕
一樣是用append來做動態加入元素
在點擊之後載入導覽列，先在CSS寫好樣子
### 大概導覽外觀-SASS
```sass=
.navbtn
  +trans(1s)
  z-index: 4
  right: 20px
  bottom: 2%
  border-radius: 100%
  opacity: 0.4
  position: fixed
  cursor: pointer
  background-color: $cLo3
  +size(50px,50px)
  &:hover
    box-shadow: $boxSha
    transform: scale(1.2)
    opacity: 1
.navlist
  display: flex
  flex-direction: column-reverse
  opacity: 0
  width: 120%
  height: 200px
  +center
  top: -220%
.nav-item
  text-decoration: none
  text-align: center
  background-color: #fff
  color: $cLo3
  font-size: 12pt
  width: 100%
  &:hover
    color: #fff
    background-color: $cLo3
```
### 處理點擊事件-jQuery
```javascript=
var isNaved = false;
$(".navbtn").click(function(){
  if(!isNaved){
    $(".navbtn").append("<div class='navlist'><\div>");
    $(".navlist").append("<div class='nav-item' id='nP'>專案<\div>");
    $(".navlist").append("<div class='nav-item' id='nS'>技能<\div>");
    $(".navlist").append("<div class='nav-item' id='nA'>關於我<\div>");
    $(".navlist").append("<div class='nav-item' id='n'>最上面<\div>");
    isNaved = true;
    ...
  }
}
```