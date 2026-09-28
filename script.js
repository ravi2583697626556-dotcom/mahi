const $=s=>document.querySelector(s),R=(a,b)=>Math.random()*(b-a)+a,
P=['#f7a8c0','#ffc2d4','#e88fb0','#ffd6e2'],sky=$('#sky');
function mk(p,cls,n,f){for(let i=0;i<n;i++){const e=document.createElement('i');e.className=cls;f(e,i);p.append(e)}}
mk(sky,'bk',9,e=>e.style.cssText=`--x:${R(-5,95)}%;--y:${R(0,90)}%;--s:${R(70,170)}px;--d:${R(9,16)}s;--dl:${R(-16,0)}s`);
mk(sky,'hrt',12,e=>{e.textContent='♥';e.style.cssText=`--x:${R(0,96)}%;--s:${R(12,24)}px;--dx:${R(-8,8)}vw;--d:${R(10,18)}s;--dl:${R(-18,0)}s`});
function petals(n,burst){mk(sky,'pt',n,(e,i)=>{e.style.cssText=`--x:${R(0,100)}%;--pw:${R(9,17)}px;--dx:${R(-22,22)}vw;--c:${P[i%4]};--d:${burst?R(3,6):R(10,17)}s;--dl:${burst?0:R(-17,0)}s`;if(burst){e.style.animationIterationCount=1;e.onanimationend=()=>e.remove()}})}
petals(24,0);
function lights(){const W=innerWidth,n=Math.round(W/70)|1,cs=['#ffd9a0','#ffb3c8','#fff2c2','#e2c9ff'];let s=`<path d="M0 6Q${W/2} 62 ${W} 6" fill="none" stroke="#c98b7a99" stroke-width="1.5"/>`;for(let i=0;i<=n;i++){const t=i/n,x=W*t,y=16+112*t*(1-t);s+=`<g class="bulb" fill="${cs[i%4]}" style="--dl:${-i*.7}s"><circle cx="${x}" cy="${y}" r="11" opacity=".3"/><circle cx="${x}" cy="${y}" r="5"/></g>`}const l=$('#lt');l.setAttribute('width',W);l.setAttribute('viewBox',`0 0 ${W} 60`);l.innerHTML=s}
lights();addEventListener('resize',lights);
$('.msg').innerHTML=$('.msg').textContent.split(' ').map((w,i)=>`<span style="--i:${i}">${w}</span>`).join('');
$('#bl').onclick=e=>{const off=$('#cake').classList.toggle('off');e.target.textContent=off?'Light them again 🕯️':'Blow the candles 🎂';if(off)petals(90,1)};
document.querySelectorAll('.env').forEach(e=>{e.onclick=()=>e.classList.toggle('open');e.onkeydown=k=>{if(k.key=='Enter'||k.key==' '){k.preventDefault();e.click()}}});
