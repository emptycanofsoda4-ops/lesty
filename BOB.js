// ==============================
// PAGE NAVIGATION
// ==============================

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

// ==============================
// RANDOM ACTIVITIES
// ==============================

const activities = [

"🎮 Play Roblox together",
"🎨 Draw each other in Paint",
"🎬 Watch a random horror movie",
"🍕 Order your favorite food",
"🎵 Make each other a playlist",
"😂 Try not to laugh challenge",
"💬 Ask 20 random questions",
"🌎 Visit a random country on Google Maps",
"🎲 Flip a coin to decide your next game",
"🎮 Play Skribbl.io",
"📷 Send your funniest selfie",
"🎤 Sing your favorite song badly",
"🍿 Watch YouTube at 0.25x speed",
"💖 Say five things you love about each other",
"📖 Read creepy stories together"

];

function generateActivity(){

const random =
activities[Math.floor(Math.random()*activities.length)];

document.getElementById("activityBox").innerHTML=random;

}

// ==============================
// QUESTIONS
// ==============================

const questions=[

"💖 What's your favorite memory with me?",

"If we could travel anywhere together where would we go?",

"What's something you've always wanted to tell me?",

"What's one thing that always makes you smile?",

"If we met today would you still like me?",

"What's your favorite thing about us?",

"What's your dream date?",

"Describe me using only three words.",

"What's a small thing I do that you secretly love?",

"What's the first thing you noticed about me?",

"What song reminds you of us?",

"What's something new you'd like us to try together?",

"When did you realize you liked me?",

"What's your favorite way to spend a lazy day with me?",

"What's one thing you're proud of me for?",

"If we had a movie night every week, what would be our theme?",

"What's a silly inside joke we have?",

"What do you want us to be doing one year from now?",

"What's a fear you'd like me to help you with?",

"What's the best compliment you've ever gotten?"

];

function generateQuestion(){

const random =
questions[Math.floor(Math.random()*questions.length)];

document.getElementById("questionBox").innerHTML=random;

}

// ==============================
// FLOATING BACKGROUND
// ==============================

const floatingItems=[

"❤️",

"💕",

"💖",

"✨",

"⭐",

"Lesty",

"Honey",

"Baby"

];

function createFloating(){

const item=document.createElement("div");

item.className="float-item";

item.innerHTML=
floatingItems[Math.floor(Math.random()*floatingItems.length)];

item.style.left=Math.random()*100+"vw";

item.style.fontSize=
(18+Math.random()*30)+"px";

item.style.animationDuration=
(8+Math.random()*10)+"s";

item.style.color=
`hsl(${Math.random()*360},80%,85%)`;

document.body.appendChild(item);

setTimeout(()=>{

item.remove();

},18000);

}

setInterval(createFloating,700);

// ==============================
// CURSOR HEARTS
// ==============================

document.addEventListener("mousemove",function(e){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.fontSize="18px";

heart.style.transition="1s";

heart.style.zIndex="999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.opacity=0;

heart.style.transform="translateY(-25px) scale(.5)";

},20);

setTimeout(()=>{

heart.remove();

},1000);

});

// ==============================
// BEAR MESSAGES
// ==============================

const bearLines=[

"Hi Honey ❤️",

"Go hug Lesty!",

"Drink some water 💧",

"Take a cute screenshot 📷",

"Tell Baby she's pretty 💕",

"You both deserve cookies 🍪",

"Smile 😊",

"Send a random heart ❤️"

];

const speech=
document.getElementById("bearSpeech");

setInterval(()=>{

speech.innerHTML=
bearLines[Math.floor(Math.random()*bearLines.length)];

},6000);

// ==============================
// POPUP
// ==============================

function popup(text){

const p=document.getElementById("popup");

p.innerHTML=text;

p.style.display="block";

setTimeout(()=>{

p.style.display="none";

},2500);

}

// ==============================
// SECRET CODE
// ==============================

let typed="";

document.addEventListener("keydown",(e)=>{

typed+=e.key.toLowerCase();

typed=typed.slice(-10);

if(typed.includes("lesty")){

popup("💖 Lesty Mode Activated!");

for(let i=0;i<80;i++){

setTimeout(createFloating,i*40);

}

}

if(typed.includes("love")){

popup("💕 Love Overload!");

document.body.style.filter="hue-rotate(20deg)";

setTimeout(()=>{

document.body.style.filter="";

},5000);

}

});

// ==============================
// MINI GAMES
// ==============================

const gameArea = document.getElementById("gameArea");
let gameTimer;
let battle = { running: false, p1: 0, p2: 0 };
let quick = { state: "idle", start: 0 };

// small helper: pick a random item from any list
function pick(list){
    return list[Math.floor(Math.random()*list.length)];
}

// every game starts by calling this: stops old timers, shows new content
function setGame(html){
    clearInterval(gameTimer);
    clearTimeout(gameTimer);
    battle.running = false;
    quick.state = "idle";
    gameArea.innerHTML = html;
}

// ---------- Love Sync ----------
const syncPairs = [
    ["🍕 Pizza","🍔 Burger"],
    ["🌞 Day","🌙 Night"],
    ["🐶 Dogs","🐱 Cats"],
    ["🏖️ Beach","🏔️ Mountains"],
    ["🍫 Sweet","🍟 Salty"],
    ["🎬 Movies","🎮 Games"],
    ["☕ Coffee","🧋 Boba"]
];

function loveSync(){
    const pair = pick(syncPairs);
    setGame(`
        <h3>Pick one in your head, then say it together!</h3>
        <div class="game-big">${pair[0]} or ${pair[1]}</div>
        <div class="game-big" id="count">3</div>
        <button onclick="loveSync()">Next round</button>
    `);

    let n = 3;
    const count = document.getElementById("count");
    gameTimer = setInterval(()=>{
        n--;
        if(n > 0){
            count.innerHTML = n;
        } else {
            clearInterval(gameTimer);
            count.innerHTML = "💖 SAY IT NOW!";
        }
    },1000);
}

// ---------- Click Battle ----------
function clickBattle(){
    setGame(`
        <h3>Player 1 mashes <b>A</b> · Player 2 mashes <b>L</b></h3>
        <div class="game-big"><span id="s1">0</span> vs <span id="s2">0</span></div>
        <div class="game-big" id="battleMsg">10 seconds. Ready?</div>
        <button onclick="startBattle()">Start</button>
    `);
}

function startBattle(){
    clearInterval(gameTimer);
    battle = { running: true, p1: 0, p2: 0 };
    let timeLeft = 10;
    document.getElementById("s1").innerHTML = 0;
    document.getElementById("s2").innerHTML = 0;
    document.getElementById("battleMsg").innerHTML = "⏱️ " + timeLeft;

    gameTimer = setInterval(()=>{
        timeLeft--;
        document.getElementById("battleMsg").innerHTML = "⏱️ " + timeLeft;

        if(timeLeft <= 0){
            clearInterval(gameTimer);
            battle.running = false;
            let result = "🤝 It's a tie!";
            if(battle.p1 > battle.p2) result = "🏆 Player 1 wins!";
            if(battle.p2 > battle.p1) result = "🏆 Player 2 wins!";
            document.getElementById("battleMsg").innerHTML = result;
        }
    },1000);
}

// count the key presses while a battle is running
document.addEventListener("keydown",(e)=>{
    if(!battle.running) return;
    const key = e.key.toLowerCase();
    if(key === "a") battle.p1++;
    if(key === "l") battle.p2++;
    document.getElementById("s1").innerHTML = battle.p1;
    document.getElementById("s2").innerHTML = battle.p2;
});

// ---------- Drawing Prompt ----------
const drawPrompts = [
    "🏠 Our dream house",
    "🐙 Each other as animals",
    "🍕 A pizza with weird toppings",
    "🚀 Us on a trip to the moon",
    "🧸 The bear's secret life",
    "🌈 Our perfect date",
    "👾 A monster that loves cookies"
];

let drawCanvas, drawCtx;
let penColor = "#ff4ea0";
let brush = "pen";
let hue = 0;
let lastStamp = { x: -999, y: -999 };

const penColors = ["#ff4ea0","#4ea8ff","#ffc400","#3ec46d","#333333"];
const brushes = [
    ["pen","✏️ Pen"],
    ["marker","🖍️ Marker"],
    ["rainbow","🌈 Rainbow"],
    ["glow","✨ Glow"],
    ["spray","💨 Spray"],
    ["hearts","💖 Hearts"],
    ["stars","⭐ Stars"],
    ["eraser","🧽 Eraser"]
];
const stamps = { hearts: "💖", stars: "⭐" };

function setBrush(name){
    brush = name;
    document.querySelectorAll(".brush-btn").forEach(btn => {
        btn.classList.toggle("selected", btn.dataset.brush === name);
    });
}

function setPen(color){
    penColor = color;
    document.getElementById("colorPicker").value = color;
}

function drawingPrompt(){
    setGame(`
        <h3>Draw this together: ${pick(drawPrompts)}</h3>
        <div class="game-big" id="drawTime">⏱️ 60</div>
        <canvas id="drawCanvas" width="600" height="360"></canvas>

        <div class="draw-row">
            ${brushes.map(b => `<button class="brush-btn" data-brush="${b[0]}" onclick="setBrush('${b[0]}')">${b[1]}</button>`).join("")}
        </div>

        <div class="draw-row">
            <input type="color" id="colorPicker" value="#ff4ea0" oninput="penColor=this.value">
            ${penColors.map(c => `<button class="swatch" style="background:${c}" onclick="setPen('${c}')"></button>`).join("")}
            <label>Size <input type="range" id="brushSize" min="2" max="40" value="6"></label>
        </div>

        <div class="draw-row">
            <button onclick="clearCanvas()">🗑️ Clear</button>
            <button onclick="saveDrawing()">💾 Save</button>
            <button onclick="drawingPrompt()">New prompt</button>
        </div>
    `);

    // set up the canvas
    drawCanvas = document.getElementById("drawCanvas");
    drawCtx = drawCanvas.getContext("2d");
    clearCanvas();
    setBrush("pen");
    setPen(penColors[0]);

    // convert a mouse/finger position into canvas coordinates
    function pos(e){
        const r = drawCanvas.getBoundingClientRect();
        return {
            x: (e.clientX - r.left) * drawCanvas.width / r.width,
            y: (e.clientY - r.top) * drawCanvas.height / r.height
        };
    }

    let drawing = false;
    let last = null;

    drawCanvas.onpointerdown = (e)=>{
        drawing = true;
        drawCanvas.setPointerCapture(e.pointerId);
        last = pos(e);
        lastStamp = { x: -999, y: -999 };
        paint(last, last);
    };

    drawCanvas.onpointermove = (e)=>{
        if(!drawing) return;
        const p = pos(e);
        paint(last, p);
        last = p;
    };

    drawCanvas.onpointerup = drawCanvas.onpointercancel = ()=>{ drawing = false; };

    // 60 second timer (you can keep drawing after it ends)
    let timeLeft = 60;
    const display = document.getElementById("drawTime");
    gameTimer = setInterval(()=>{
        timeLeft--;
        display.innerHTML = "⏱️ " + timeLeft;
        if(timeLeft <= 0){
            clearInterval(gameTimer);
            display.innerHTML = "🎨 Time's up! Show each other!";
        }
    },1000);
}

// draws one little piece of a stroke, depending on the brush
function paint(from, to){
    const ctx = drawCtx;
    const size = Number(document.getElementById("brushSize").value);

    // reset anything the last brush changed
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    ctx.lineCap = "round";
    ctx.lineWidth = size;
    ctx.strokeStyle = penColor;
    ctx.fillStyle = penColor;

    if(brush === "spray"){
        for(let i = 0; i < 14; i++){
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * size * 2;
            ctx.fillRect(to.x + Math.cos(angle)*dist, to.y + Math.sin(angle)*dist, 2, 2);
        }
        return;
    }

    if(stamps[brush]){
        // only stamp when we've moved far enough from the last stamp
        const gap = size * 3 + 10;
        if(Math.hypot(to.x - lastStamp.x, to.y - lastStamp.y) < gap) return;
        ctx.font = gap + "px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(stamps[brush], to.x, to.y);
        lastStamp = { x: to.x, y: to.y };
        return;
    }

    if(brush === "eraser") ctx.strokeStyle = "white";
    if(brush === "marker"){ ctx.lineWidth = size * 2; ctx.lineCap = "square"; }
    if(brush === "rainbow"){ hue = (hue + 4) % 360; ctx.strokeStyle = `hsl(${hue},90%,60%)`; }
    if(brush === "glow"){ ctx.shadowColor = penColor; ctx.shadowBlur = size * 2; }

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
}

function clearCanvas(){
    drawCtx.globalAlpha = 1;
    drawCtx.shadowBlur = 0;
    drawCtx.fillStyle = "white";
    drawCtx.fillRect(0, 0, drawCanvas.width, drawCanvas.height);
}

function saveDrawing(){
    const link = document.createElement("a");
    link.download = "our-drawing.png";
    link.href = drawCanvas.toDataURL("image/png");
    link.click();
}

// ---------- Truth or Dare ----------
const truths = [
    "What's the most embarrassing thing you've done in front of me?",
    "What's a secret you've never told anyone?",
    "What's your biggest guilty pleasure?",
    "What's the cutest thing I've ever done?",
    "What's one thing you'd change about our first conversation?"
];

const dares = [
    "Send me your silliest selfie right now 📷",
    "Talk in a funny accent for the next 3 minutes",
    "Sing the chorus of any song 🎤",
    "Do your best impression of me",
    "Say something sweet without laughing 💖"
];

function truthOrDare(){
    setGame(`
        <h3>Truth or Dare?</h3>
        <div class="game-big" id="todText">Choose one 👇</div>
        <button onclick="showTod('Truth')">💬 Truth</button>
        <button onclick="showTod('Dare')">🔥 Dare</button>
    `);
}

function showTod(type){
    const text = type === "Truth" ? pick(truths) : pick(dares);
    document.getElementById("todText").innerHTML = type + ": " + text;
}

// ---------- Would You Rather (new) ----------
const rathers = [
    ["Live in a treehouse 🌳", "Live on a boat ⛵"],
    ["Never use your phone again 📵", "Never watch a movie again 🎬"],
    ["Have a pet dragon 🐉", "Have a pet unicorn 🦄"],
    ["Travel to the past ⏪", "Travel to the future ⏩"],
    ["Eat pizza every day 🍕", "Eat ice cream every day 🍦"],
    ["Be invisible 👻", "Be able to fly 🕊️"],
    ["Cuddle on the couch all day 🛋️", "Go on a big adventure 🗺️"]
];

function wouldYouRather(){
    const pair = pick(rathers);
    setGame(`
        <h3>Would you rather...</h3>
        <div class="game-big">${pair[0]}<br>or<br>${pair[1]}</div>
        <p>Answer at the same time, then explain why!</p>
        <button onclick="wouldYouRather()">Next</button>
    `);
}

// ---------- Memory Match (new) ----------
function memoryMatch(){
    const emojis = ["💖","🧸","🍕","🎮","🌙","🐱"];
    const deck = [...emojis, ...emojis].sort(()=>Math.random()-0.5);

    setGame(`
        <h3>Find all the pairs together!</h3>
        <div class="memory-grid">
            ${deck.map(e => `<button class="mem-card" data-emoji="${e}">❓</button>`).join("")}
        </div>
        <button onclick="memoryMatch()">Restart</button>
    `);

    let first = null;
    let locked = false;
    let matches = 0;

    gameArea.querySelectorAll(".mem-card").forEach(card => {
        card.onclick = () => {
            if(locked || card === first) return;
            card.innerHTML = card.dataset.emoji;

            if(!first){
                first = card;
            } else if(first.dataset.emoji === card.dataset.emoji){
                first.disabled = true;
                card.disabled = true;
                first = null;
                matches++;
                if(matches === emojis.length) popup("🎉 You found them all!");
            } else {
                locked = true;
                const other = first;
                setTimeout(()=>{
                    other.innerHTML = "❓";
                    card.innerHTML = "❓";
                    first = null;
                    locked = false;
                },800);
            }
        };
    });
}

// ---------- How Well Do You Know Me? (new) ----------
const knowQs = [
    "What's my favorite food?",
    "What's my favorite color?",
    "What's my dream vacation?",
    "What's my biggest fear?",
    "What song do I sing the most?",
    "What's my favorite movie?",
    "What do I do when I'm stressed?",
    "What's my go-to snack?",
    "What's my most-used emoji?",
    "What did I want to be when I was little?"
];
let know = { i: 0, score: 0, order: [] };

function knowMe(){
    know = { i: 0, score: 0, order: [...knowQs].sort(()=>Math.random()-0.5).slice(0,8) };
    showKnow();
}

function showKnow(){
    if(know.i >= know.order.length){
        setGame(`
            <h3>Final score</h3>
            <div class="game-big">${know.score} / ${know.order.length} 💖</div>
            <button onclick="knowMe()">Play again</button>
        `);
        return;
    }
    setGame(`
        <h3>Question ${know.i + 1} of ${know.order.length}</h3>
        <p>Player ${know.i % 2 + 1}: guess your partner's answer. They tell you if you got it right!</p>
        <div class="game-big">${know.order[know.i]}</div>
        <button onclick="knowAnswer(true)">✅ Got it</button>
        <button onclick="knowAnswer(false)">❌ Nope</button>
    `);
}

function knowAnswer(correct){
    if(correct) know.score++;
    know.i++;
    showKnow();
}

// ---------- Tic-Tac-Toe (new) ----------
function ticTacToe(){
    const marks = ["❤️","🧸"];
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const board = Array(9).fill("");
    let turn = 0;
    let over = false;

    setGame(`
        <h3 id="tttMsg">${marks[0]}'s turn</h3>
        <div class="ttt-grid">
            ${board.map((_, i) => `<button class="ttt-cell" data-i="${i}"></button>`).join("")}
        </div>
        <button onclick="ticTacToe()">Restart</button>
    `);

    const msg = document.getElementById("tttMsg");

    gameArea.querySelectorAll(".ttt-cell").forEach(cell => {
        cell.onclick = () => {
            const i = cell.dataset.i;
            if(over || board[i]) return;
            board[i] = marks[turn];
            cell.innerHTML = marks[turn];

            if(lines.some(l => l.every(n => board[n] === marks[turn]))){
                msg.innerHTML = marks[turn] + " wins! 🎉";
                over = true;
            } else if(board.every(c => c)){
                msg.innerHTML = "🤝 It's a draw!";
                over = true;
            } else {
                turn = 1 - turn;
                msg.innerHTML = marks[turn] + "'s turn";
            }
        };
    });
}

// ---------- Quick Draw (new) ----------
function quickDraw(){
    setGame(`
        <h3>Player 1 = <b>A</b> · Player 2 = <b>L</b></h3>
        <div class="game-big" id="qdMsg">Wait for GO, don't press early!</div>
        <button onclick="startQuick()">Start round</button>
    `);
}

function startQuick(){
    clearTimeout(gameTimer);
    const msg = document.getElementById("qdMsg");
    msg.innerHTML = "🤫 Wait for it...";
    quick.state = "waiting";

    // go signal appears after a random 2 to 5 second wait
    gameTimer = setTimeout(()=>{
        quick.state = "go";
        quick.start = Date.now();
        msg.innerHTML = "💖 GO!!!";
    }, 2000 + Math.random()*3000);
}

document.addEventListener("keydown",(e)=>{
    const key = e.key.toLowerCase();
    const msg = document.getElementById("qdMsg");
    if(quick.state === "idle" || !msg || (key !== "a" && key !== "l")) return;

    const player = key === "a" ? 1 : 2;
    const other = 3 - player;

    if(quick.state === "waiting"){
        clearTimeout(gameTimer);
        msg.innerHTML = `😬 Player ${player} was too early! Player ${other} wins!`;
    } else {
        msg.innerHTML = `🏆 Player ${player} wins! (${Date.now() - quick.start} ms)`;
    }
    quick.state = "idle";
});

// ---------- Finish the Sentence (new) ----------
const sentences = [
    "My perfect Sunday is...",
    "The thing I love most about you is...",
    "If I could go anywhere tomorrow, I'd go to...",
    "I get really excited when...",
    "Something I want us to do someday is...",
    "The funniest thing we've done together is...",
    "When I think of us, I think of..."
];

function finishSentence(){
    setGame(`
        <h3>Finish the sentence. Take turns!</h3>
        <div class="game-big">${pick(sentences)}</div>
        <button onclick="finishSentence()">Next</button>
    `);
}

// ==============================
// FIRST VISIT
// ==============================

window.onload=()=>{

popup("💖 Welcome Back!");

generateActivity();

generateQuestion();

};