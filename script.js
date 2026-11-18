const flowers=[
 ['🌷','Your voice','i still remember the first time i heard your voice. there was just something about it that made me want to keep listening. i did not even need a reason to hear you talk because your voice itself was enough.'],
 ['🌸','That first feeling','i do not know how to explain it properly but hearing you for the first time made me feel something i still remember. it was one of those little things that stayed with me.'],
 ['🌼','Your way of speaking','even the simplest things sound different when they come from you. i love the way you talk and how your voice can make me feel calm without you even trying.'],
 ['🌺','Your smile','i hope you know how lovely your smile is. it is one of those things i wish you could see the way i see it because maybe then you would understand why i like it so much.'],
 ['🪻','Your mesmerizing beauty','it is not just one thing about your beauty. it is every little detail about your face that comes together to make you so beautiful and everything that makes you stand out from everyone else..'],
 ['🌹','Your heart','i hope life is always gentle with you. you deserve to feel appreciated and cared for and to never have to question how special you are.'],
 ['🌻','Your laugh','i hope i get to hear it as often as possible. there is something so lovely about knowing you are happy and getting to hear that happiness in your voice.'],
 ['🪷','Simply you','i do not need us to have a million memories for you to mean a lot to me. i am happy i got to know you and i want to keep discovering all the little things about you.']
];
const memories=[
 ['🎧','The first time i heard you','i remember the first time i heard your voice and how i fell for it. i could listen to you talk about absolutely anything and still want to hear more.'],
 ['💗','I love u more','one of my favourite little memories is our cute i love u more argument. neither of us wanted to give in and honestly i would never get tired of arguing with you about who loves who more.'],
 ['☁️','First time I layed eyes on you','from the very first moment i laid my eyes on you i couldnt help but admire just how beautiful you are. there was something about your face that instantly caught my attention and i still find myself admiring every little detail about you..'],
 ['🎀','The little things','we might not have loads of shared moments yet but i notice the little things about you and they mean more to me than you probably realise.'],
 ['🌙','More memories to come','there are still so many little things i want to experience with you. i hope this is only the beginning of a lot of memories we will get to look back on.'],
 ['🧸','Why i made this','i wanted you to have something that is yours and that reminds you that someone thinks about you in the smallest moments too.']
];
const gifts=[
 ['🎁','A little reminder','i hope you never forget how much i adore your voice and how one of the first things i fell for was simply hearing you speak.'],
 ['🧁','A tiny challenge','next time we have an i love u more argument i am still not giving up. you can try to win but just know i will be prepared.'],
 ['💝','A wish for us','i hope we get to make so many more memories together. not even huge or perfect ones just little moments that become special because they are with you.']
];
function makeCard(item,kind,index){return `<button class="${kind}" onclick="openNote('${kind}',${index})">${kind==='flower'?`<span class="emoji">${item[0]}</span>`:`<div class="photo-placeholder">${item[0]}</div>`}<strong>${item[1]}</strong>${kind==='flower'?'<small>tap to bloom ✿</small>':`<p>${kind==='memory'?'tap to open this page':'tap to unwrap'}</p>`}</button>`}
document.getElementById('gardenGrid').innerHTML=flowers.map((x,i)=>makeCard(x,'flower',i)).join('');
document.getElementById('memoryGrid').innerHTML=memories.map((x,i)=>makeCard(x,'memory',i)).join('');
document.getElementById('giftGrid').innerHTML=gifts.map((x,i)=>`<button class="gift" onclick="openNote('gift',${i})"><span class="boxemoji">${x[0]}</span><strong>${x[1]}</strong><p>unwrap your surprise ♡</p></button>`).join('');
function openNote(kind,i){const item=kind==='flower'?flowers[i]:kind==='memory'?memories[i]:gifts[i];document.getElementById('modalEmoji').textContent=item[0];document.getElementById('modalTitle').textContent=item[1];document.getElementById('modalBody').textContent=item[2];document.getElementById('modal').classList.add('show');}
function closeModal(){document.getElementById('modal').classList.remove('show')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
function enterWorld(){document.getElementById('garden').scrollIntoView({behavior:'smooth'});sprinkle()}
function toggleLetter(){const letter=document.getElementById('letterText');letter.classList.toggle('open');document.getElementById('envelope').textContent=letter.classList.contains('open')?'💗':'💌'}
const questions=[
 {q:'What was one of the first things i fell for?',a:['Your voice','Your cooking','Your football skills'],correct:0,why:'your voice. i still remember hearing it for the first time ♡'},
 {q:'What is our iconic little argument?',a:['Who is funnier','Who loves who more','Who gets the last snack'],correct:1,why:'the i love u more argument. and i am still convinced i win.'},
 {q:'What do i hope we make more of?',a:['More silly arguments','More little memories together','More homework'],correct:1,why:'more little memories with you. that is what i want.'}
];
let qIndex=0,score=0;
function startGame(){qIndex=0;score=0;showQuestion()}
function showQuestion(){const q=questions[qIndex];document.getElementById('question').textContent=q.q;document.getElementById('gameHeart').textContent='♡';document.getElementById('progressBar').style.width=(qIndex/questions.length*100)+'%';document.getElementById('gameFeedback').textContent='';document.getElementById('gameOptions').innerHTML=q.a.map((a,i)=>`<button onclick="answer(${i})">${a}</button>`).join('')}
function answer(i){const q=questions[qIndex];const correct=i===q.correct;if(correct)score++;document.getElementById('gameHeart').textContent=correct?'💗':'🌸';document.getElementById('gameFeedback').textContent=q.why;document.getElementById('gameOptions').innerHTML=`<button onclick="nextQuestion()">${qIndex===questions.length-1?'See my result':'Next question →'}</button>`}
function nextQuestion(){qIndex++;if(qIndex<questions.length){showQuestion();return}document.getElementById('progressBar').style.width='100%';document.getElementById('question').textContent=`You collected ${score} out of ${questions.length} hearts!`;document.getElementById('gameHeart').textContent='💖';document.getElementById('gameFeedback').textContent='your prize: one more reminder that i love u more ♡';document.getElementById('gameOptions').innerHTML='<button onclick="startGame()">Play again ♡</button>'}
function sprinkle(){const symbols=['♡','✦','✿','💗','✨'];for(let i=0;i<24;i++){const el=document.createElement('span');el.className='confetti';el.textContent=symbols[Math.floor(Math.random()*symbols.length)];el.style.left=Math.random()*100+'vw';el.style.fontSize=(14+Math.random()*18)+'px';el.style.animationDuration=(1.8+Math.random()*1.7)+'s';document.body.appendChild(el);setTimeout(()=>el.remove(),4000)}}
const sparkles=document.getElementById('sparkles');for(let i=0;i<35;i++){const s=document.createElement('span');s.className='spark';s.textContent=i%3===0?'✦':i%3===1?'♡':'·';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.fontSize=(10+Math.random()*18)+'px';s.style.animationDelay=Math.random()*3+'s';s.style.color=i%2?'#e6a4c0':'#c4a7e8';sparkles.appendChild(s)}
