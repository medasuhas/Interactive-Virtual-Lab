
// Physics 1: Pendulum
function animatePendulum() { let c=document.getElementById('pendulumCanvas');let x=c.getContext('2d');let a=Math.PI/4,d=1,cx=100,cy=40,l=70;function draw(){x.clearRect(0,0,200,200);x.beginPath();x.arc(cx,cy,6,0,2*Math.PI);x.fill();let px=cx+l*Math.sin(a),py=cy+l*Math.cos(a);x.beginPath();x.moveTo(cx,cy);x.lineTo(px,py);x.stroke();x.beginPath();x.arc(px,py,18,0,2*Math.PI);x.fillStyle='#f68';x.fill();a+=d*0.04;if(a>Math.PI/4||a<-Math.PI/4)d*=-1;requestAnimationFrame(draw);}draw();}

// Physics 2: Ohms Law
function animateOhmsLaw() { let c=document.getElementById('ohmsLawCanvas');let x=c.getContext('2d');let v=0;function draw(){x.clearRect(0,0,200,200);x.strokeRect(80,80,40,40);x.beginPath();x.moveTo(0,100);x.lineTo(80,100);x.moveTo(120,100);x.lineTo(200,100);x.stroke();x.fillText(`V=${v}V`,60,70);v=(v+1)%13;requestAnimationFrame(draw);}draw();}

// Physics 3: Projectile
function animateProjectile() { let c=document.getElementById('projectileCanvas');let x=c.getContext('2d');let t=0;function draw(){x.clearRect(0,0,200,200);let xPos=t;let yPos=150-(t-10)*(t-10)/5;x.beginPath();x.arc(xPos,yPos,10,0,2*Math.PI);x.fillStyle='#fa0';x.fill();t=(t+2)%180;requestAnimationFrame(draw);}draw();}

// Physics 4: Lens Simulation
function animateLens() { let c=document.getElementById('lensCanvas');let x=c.getContext('2d');let r=0;function draw(){x.clearRect(0,0,200,200);x.beginPath();x.moveTo(100,0);x.lineTo(100,200);x.stroke();x.beginPath();x.moveTo(r,0);x.lineTo(100,100);x.lineTo(r,200);x.strokeStyle='#0a0';x.stroke();r=(r+2)%200;requestAnimationFrame(draw);}draw();}

// Chemistry 1: Acid-Base Color Change
function startColorChange() { let b=document.getElementById('colorBox');b.style.background='#b3ffb3';let i=0,c=['#b3ffb3','#f7dd63','#f77575','#90b2ff'];let inter=setInterval(()=>{b.style.background=c[i%c.length];i++;if(i>16)clearInterval(inter);},250);}

// Chemistry 2: Titration
function animateTitration() { let c=document.getElementById('titrationCanvas');let x=c.getContext('2d');let y=20;function draw(){x.clearRect(0,0,200,200);x.fillStyle='#48f';x.fillRect(90,y,20,20);y+=2;if(y>150)y=20;requestAnimationFrame(draw);}draw();}

// Chemistry 3: Reaction Rate (Bubbles)
function animateBubbles() { let c=document.getElementById('bubblesCanvas');let x=c.getContext('2d');let b=Array.from({length:8},()=>({x:100+Math.random()*60-30,y:150,r:7+Math.random()*9}));function draw(){x.clearRect(0,0,200,200);b.forEach(p=>{x.beginPath();x.arc(p.x,p.y,p.r,0,2*Math.PI);x.fillStyle='rgba(0,180,255,0.25)';x.fill();p.y-=2+p.r/6;if(p.y<15){p.y=150;p.x=100+Math.random()*60-30;}});requestAnimationFrame(draw);}draw();}

// Chemistry 4: Electrolysis
function animateElectrolysis() { let c=document.getElementById('electrolysisCanvas');let x=c.getContext('2d');let b=Array.from({length:5},()=>({x:100+Math.random()*30-15,y:150,r:5+Math.random()*5}));function draw(){x.clearRect(0,0,200,200);b.forEach(p=>{x.beginPath();x.arc(p.x,p.y,p.r,0,2*Math.PI);x.fillStyle='rgba(0,150,255,0.4)';x.fill();p.y-=1+p.r/5;if(p.y<10){p.y=150;p.x=100+Math.random()*30-15;}});requestAnimationFrame(draw);}draw();}

// Biology 1: Photosynthesis
function animatePhotosynthesis() { let c=document.getElementById('photosynthesisCanvas');let x=c.getContext('2d');let r=10;function draw(){x.clearRect(0,0,200,200);x.beginPath();x.arc(100,50,r,0,2*Math.PI);x.fillStyle='#ff0';x.fill();r=r<40?r+0.5:10;requestAnimationFrame(draw);}draw();}

// Biology 2: Enzyme Activity
function animateEnzyme() { let c=document.getElementById('enzymeCanvas');let x=c.getContext('2d');let p=20;function draw(){x.clearRect(0,0,200,200);x.fillStyle='#0c0';x.fillRect(100,90,40,20);x.fillStyle='#08f';x.fillRect(p,100,20,10);p+=2;if(p>100)p=20;requestAnimationFrame(draw);}draw();}

// Biology 3: Cell Division
function animateCellDivision() { let c=document.getElementById('cellCanvas');let x=c.getContext('2d');let r=50,s=false;function draw(){x.clearRect(0,0,200,200);x.beginPath();x.arc(100,100,r,0,2*Math.PI);x.stroke();if(s){x.beginPath();x.arc(70,100,r/2,0,2*Math.PI);x.stroke();x.beginPath();x.arc(130,100,r/2,0,2*Math.PI);x.stroke();}s=!s;requestAnimationFrame(draw);}draw();}

// Biology 4: Respiration
function animateRespiration() { let c=document.getElementById('respirationCanvas');let x=c.getContext('2d');let d=[];for(let i=0;i<20;i++)d.push({x:Math.random()*200,y:Math.random()*200});function draw(){x.clearRect(0,0,200,200);d.forEach(p=>{x.beginPath();x.arc(p.x,p.y,5,0,2*Math.PI);x.fillStyle='#f80';x.fill();p.x+=Math.random()*4-2;p.y+=Math.random()*4-2;if(p.x<0)p.x=200;if(p.x>200)p.x=0;if(p.y<0)p.y=200;if(p.y>200)p.y=0;});requestAnimationFrame(draw);}draw();}
