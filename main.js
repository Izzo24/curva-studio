/* 曲木製作所 CURVA — 共用互動腳本 */
(function(){
  // 行動選單
  var toggle=document.querySelector('.nav-toggle');
  var links=document.querySelector('.nav-links');
  if(toggle&&links){
    toggle.addEventListener('click',function(){
      links.classList.toggle('open');
      var open=links.classList.contains('open');
      toggle.setAttribute('aria-expanded',open);
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){links.classList.remove('open');});
    });
  }

  // 進場動畫
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
    });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});

  // 頁尾年份
  var y=document.getElementById('year');
  if(y){y.textContent=new Date().getFullYear();}

  // 聯絡表單(前端示範,不送出至任何伺服器)
  var form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',function(ev){
      ev.preventDefault();
      var ok=document.getElementById('form-success');
      if(ok){ok.style.display='block';}
      form.reset();
    });
  }
})();
