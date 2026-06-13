
/* PARTICLES — very subtle, low opacity */
particlesJS('particles-js',{particles:{number:{value:40,density:{enable:true,value_area:900}},color:{value:["#C9A96E","#3ECFB2","#7A8499"]},shape:{type:"circle"},opacity:{value:.25,random:true,anim:{enable:true,speed:.4,opacity_min:.05}},size:{value:1.8,random:true},line_linked:{enable:true,distance:140,color:"#C9A96E",opacity:.06,width:.8},move:{enable:true,speed:.55,direction:"none",random:true,out_mode:"out"}},interactivity:{events:{onhover:{enable:true,mode:"repulse"},onclick:{enable:true,mode:"push"}},modes:{repulse:{distance:70},push:{particles_nb:2}}},retina_detect:true});

/* MOUSE GLOW */
document.addEventListener('mousemove',e=>{
  if(window.matchMedia('(hover: none), (pointer: coarse)').matches)return;
  const glow=document.getElementById('mglow');
  if(glow){
    glow.style.left=e.clientX+'px';
    glow.style.top=e.clientY+'px';
  }
});

/* SCROLL */
window.addEventListener('scroll',()=>{
  const s=document.documentElement.scrollTop,h=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  document.getElementById('prog').style.width=(s/h*100)+'%';
  document.getElementById('nav').classList.toggle('scrolled',s>40);
  document.getElementById('btt').classList.toggle('vis',s>300);
  activeNav();
});

function activeNav(){
  const ids=['home','work','services','skills','testimonials','contact'];
  let cur2='';
  ids.forEach(id=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=120)cur2=id;});
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur2));
}

/* TYPING */
const words=['Freelance Web Developer','Web App Developer','React Developer','Firebase Expert','UI/UX Enthusiast'];
let wi=0,ci2=0,del=false;
function type(){
  const el=document.getElementById('typed'),w=words[wi];
  if(!del){el.textContent=w.slice(0,++ci2);if(ci2===w.length){del=true;setTimeout(type,1800);return;}}
  else{el.textContent=w.slice(0,--ci2);if(ci2===0){del=false;wi=(wi+1)%words.length;}}
  setTimeout(type,del?55:90);
}type();

/* AOS */
AOS.init({duration:650,once:true,offset:50,easing:'ease-out-quart'});

/* SWIPER */
new Swiper('.swiper',{slidesPerView:1,spaceBetween:20,pagination:{el:'.swiper-pagination',clickable:true},autoplay:{delay:4500,disableOnInteraction:false},breakpoints:{768:{slidesPerView:2}},loop:true});

/* HAMBURGER */
const hbg=document.getElementById('hbg');
const mob=document.getElementById('mob');
const closeMob=document.getElementById('closeMob');
function oMob(){
  mob.classList.add('open');
  document.body.classList.add('mob-open');
  hbg.classList.add('open');
  hbg.setAttribute('aria-expanded','true');
}
function cMob(){
  mob.classList.remove('open');
  document.body.classList.remove('mob-open');
  hbg.classList.remove('open');
  hbg.setAttribute('aria-expanded','false');
}
hbg.setAttribute('aria-expanded','false');
hbg.addEventListener('click',oMob);
closeMob.addEventListener('click',cMob);
mob.addEventListener('click',e=>{if(e.target===mob)cMob();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')cMob();});

/* FORM */
function sendForm(){
  const n=document.getElementById('fn').value.trim();
  const e=document.getElementById('fe').value.trim();
  const s=document.getElementById('fs').value.trim();
  const m=document.getElementById('fm').value.trim();
  if(!n||!e||!m){alert('Please fill in your name, email, and message.');return;}
  const text=`New website enquiry%0A%0AName: ${encodeURIComponent(n)}%0AEmail: ${encodeURIComponent(e)}%0ASubject: ${encodeURIComponent(s||'Project inquiry')}%0AMessage: ${encodeURIComponent(m)}`;
  window.open(`https://wa.me/916379648721?text=${text}`,'_blank');
}

/* HERO SCROLL PARALLAX */
window.addEventListener('scroll',()=>{
  const hc=document.querySelector('.hero-content'),pb=document.querySelector('.profile-block');
  const y=window.scrollY;
  if(hc)hc.style.transform=`translateY(${y*.08}px)`;
  if(pb)pb.style.transform=`translateY(${y*.05}px)`;
});
window.addEventListener('load',()=>{
  const loader=document.getElementById('preloader');
  const fill=document.getElementById('loaderFill');
  const percent=document.getElementById('loaderPercent');
  let value=0;
  const timer=setInterval(()=>{
    value+=Math.floor(Math.random()*8)+4;
    if(value>=100)value=100;
    if(fill)fill.style.width=value+'%';
    if(percent)percent.textContent=value+'%';
    if(value===100){
      clearInterval(timer);
      setTimeout(()=>loader?.classList.add('hide'),350);
    }
  },95);
});
