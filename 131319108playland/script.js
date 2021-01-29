'use strict'
/* =========ローディング画面=================== */
window.onload = function(){
  const loading_inner =
  document.getElementById('loading');

  loading_inner.classList.add('loaded');
}

//トップページに時間を表示する
const now = new Date();
const hour = now.getHours();
const min = now.getMinutes();
if(hour <= 9){
  if(min <= 9){
    const output = `0${hour}:0${min}`;
    document.getElementById('time').textContent = output;
  }else if(min >= 10){
    const output = `0${hour}:${min}`;
    document.getElementById('time').textContent = output;
  }
}else if(hour >= 10){
  if(min <= 9){
    const output = `${hour}:0${min}`;
    document.getElementById('time').textContent = output;
  }else if(min >= 10){
    const output = `${hour}:${min}`;
    document.getElementById('time').textContent = output;
  }
}


//トップページで時間によって変わる挨拶を表示する
if(hour <= 4 || hour >= 22){
  document.getElementById('greet').textContent
  = '＼You should sleep early!／';
} else if(hour >= 5 && hour<=11){
  document.getElementById('greet').textContent
  = '＼Good Morning!／';
} else if(hour >= 12 && hour<=21){
  document.getElementById('greet').textContent
  = '＼Good Afternoon!／';
}


//アニメーションターゲット
const targetElement =document.querySelectorAll(".animationTarget");

document.addEventListener("scroll",function(){
    for (let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .6

    if(window.innerHeight > getElementDistance){
      targetElement[i].classList.add("show");
    }
  }
})

//日本語と英語！！！！！！！！！！！！
const lang = document.querySelector('html').lang;

if(lang === 'ja'){
  document.querySelector('option[value="index.html"]').selected = true;
}else if(lang === 'en'){
  document.querySelector('option[value="index_en.html"]').selected = true;

}
document.getElementById('form').select.onchange = function(){
  location.href = document.getElementById('form').select.value;
}

//ゲーム
