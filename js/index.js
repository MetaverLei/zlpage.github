let items=document.querySelectorAll(".item");
function setActive(){
    items.forEach((item)=>{
        item.classList.remove("active");
    })
    this.classList.add("active");
}
items.forEach((item)=>{
    item.addEventListener("click",setActive);
})
var bgs = new Array('url("img/1.jpg")','url("img/2.jpg")','url("img/3.jpg")','url("img/4.jpg")','url("img/5.jpg")',
                    'url("img/6.jpg")','url("img/7.jpg")','url("img/8.jpg")','url("img/9.jpg")','url("img/10.jpg")',
                    'url("img/11.jpg")','url("img/12.jpg")');

function changeBg(){
    document.getElementById('bgid').style.backgroundImage = bgs[Math.round(Math.random()* (bgs.length-1))];
}

function myFunction(){
    var time = new Date();
    y = time.getFullYear();
    mon = time.getMonth()+1;
    d = time.getDate();
    var  h = time.getHours();
    var ampm = h < 12 ? 'AM' : 'PM';
    if(h < 10){h = '0' + h;}
    else if(h >= 12 && h < 22){h = '0' + (h % 12)}
    else if(h >= 22){h = h % 12;}
    else{h = h;}
    var  m = time.getMinutes();
    m = m < 10 ? '0'+ m : m;
    var s = time.getUTCSeconds();
    s = s < 10 ? '0'+ s : s;
    var wArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    w = wArr[time.getDay()];
    document.getElementById("rtbox").innerHTML = y +"-"+mon+"-"+d+" "+w;
    document.getElementById("lttime").innerHTML = ampm +'  '+ h + ":"+m+":"+s;
    var txt = document.querySelector('#txt');
    var btn = document.querySelector('#add');
    var ul = document.querySelector('.notes');
    var colors =['#ef9a9a','#F48FB1','#CE93D8','#B39DDB','#9FA8DA','#90CAF9','#81D4FA','#80DEEA','#80CBC4','#A5D6A7','#C5E1A5','#FFCC80','#FFAB91','#BCAAA4','#B0BEC5'];
    btn.onclick = function(){
        txt.focus();
        if(ul.children.length < 12 && txt.value !='' ){
            var li = document.createElement('li');
            li.style.backgroundColor = colors[parseInt(Math.random()*(colors.length-1))];
            ul.appendChild(li);
            li.innerHTML = txt.value + "<p>"+h +":"+ m +" "+ampm+"</p>" + "<a href='javascript:;' style='background:"+ li.style.backgroundColor +"' >Delete</a>";
            txt.value = '';
            txt.focus();
            var as = document.querySelectorAll('a');
            for(var i = 0; i < as.length; i++){
                as[i].onclick = function (){
                    ul.removeChild(this.parentNode);
                    txt.focus();
                }
            }
        }else if(ul.children.length == 12){
            txt.value ='';
            txt.setAttribute('placeholder','最多只能添加12个便签哦！');
            txt.focus();

        }
        else if(txt.value ==''){
            txt.setAttribute('placeholder','请输入内容...');
            txt.focus();
        }
    }

}
setInterval("myFunction()",1000);

function getFocus(){
    document.getElementById('seaid').focus();
}

var btnn = document.querySelector('#note');
var div = document.querySelector('.btm');
var flag1 = true;
function addFocus(){
    if(!flag1){
        div.style.transform = 'translateX(0px)';
        flag1 = true;
        txt.blur();
    }else{
        div.style.transform = 'translateX(570px)';
        txt.focus();
        flag1 = false;
    }
}
btnn.onclick = function(){
    addFocus();
}
var flag3 = true;
function addFocus2() {
    var div2 = document.querySelector('.inf');
    if(!flag3){
        div2.style.transform = 'translateY(0px)';
        flag3 = true;
        txt.blur();
    }else{
        div2.style.transform = 'translateY(80px)';
        flag3 = false;
        txt.focus();
    }
}