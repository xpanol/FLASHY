/* =========================
   SHARED HELPERS
   ========================= */

function shuffleList(list){
    return [...list].sort(()=>Math.random()-0.5);
}

function sampleArray(arr,n){
    return shuffleList(arr).slice(0,Math.min(n,arr.length));
}

function getCategoryEntries(id){
    const section=GLOSSARY.find(s=>s.id===id);
    return section ? section.entries : GLOSSARY.flatMap(s=>s.entries);
}


/* =========================
   FLASHCARDS STATE
   ========================= */

let cards=[];
let currentIndex=0;
let direction="en-es";
let isFlipped=false;
let isChanging=false;

let selectedEnglish=null;
let selectedSpanish=null;
let matchedCount=0;

let selectedCategory=GLOSSARY[0].id;

const SESSION_SIZE=10;


/* =========================
   HOME / CATEGORY PICKER
   ========================= */

function buildCatPills(){
    const wrap=document.getElementById("catPills");
    wrap.innerHTML="";

    GLOSSARY.forEach(section=>{
        const pill=document.createElement("button");
        pill.className="cat-pill"+(section.id===selectedCategory ? " active" : "");
        pill.textContent=section.label;
        pill.dataset.cat=section.id;
        pill.onclick=()=>selectCategory(section.id);
        wrap.appendChild(pill);
    });
}

function selectCategory(id){
    selectedCategory=id;

    document.querySelectorAll(".cat-pill").forEach(p=>{
        p.classList.toggle("active", p.dataset.cat===id);
    });

    updatePreview();
}

function updatePreview(){
    const entries=getCategoryEntries(selectedCategory);
    const [es,en]=entries[Math.floor(Math.random()*entries.length)];

    document.getElementById("previewTerm").textContent=en;
    document.getElementById("previewPair").textContent=es;
}

function prepareSession(){
    const entries=getCategoryEntries(selectedCategory);
    const chosen=sampleArray(entries, SESSION_SIZE);

    cards=chosen.map(([es,en])=>({es,en}));
    currentIndex=0;

    selectedEnglish=null;
    selectedSpanish=null;
    matchedCount=0;
}


/* =========================
   RENDER FLASHCARD
   ========================= */

function render(enterClass=""){

    const card=cards[currentIndex];

    const frontLang=document.getElementById("frontLang");
    const backLang=document.getElementById("backLang");
    const frontTerm=document.getElementById("frontTerm");
    const backTerm=document.getElementById("backTerm");
    const counter=document.getElementById("counter");
    const flashcard=document.getElementById("flashcard");
    const frontFace=document.querySelector(".face.front");
    const backFace=document.querySelector(".face.back");

    isFlipped=false;
    flashcard.className="flashcard";

    if(enterClass){
        flashcard.classList.add(enterClass);
    }

    frontFace.classList.remove("en-face","es-face");
    backFace.classList.remove("en-face","es-face");

    counter.textContent=`${currentIndex+1} / ${cards.length}`;

    document.getElementById("nextBtn").querySelector(".button-en").textContent=
        currentIndex===cards.length-1 ? "Final match" : "Next";

    if(direction==="en-es"){

        frontFace.classList.add("en-face");
        backFace.classList.add("es-face");

        frontLang.textContent="🇬🇧";
        frontLang.className="lang en";
        frontTerm.textContent=card.en;
        frontTerm.className="term en";

        backLang.textContent="🇪🇸";
        backLang.className="lang es";
        backTerm.textContent=card.es;
        backTerm.className="term es";

    }else{

        frontFace.classList.add("es-face");
        backFace.classList.add("en-face");

        frontLang.textContent="🇪🇸";
        frontLang.className="lang es";
        frontTerm.textContent=card.es;
        frontTerm.className="term es";

        backLang.textContent="🇬🇧";
        backLang.className="lang en";
        backTerm.textContent=card.en;
        backTerm.className="term en";
    }

    document.getElementById("enEs").classList.toggle("active", direction==="en-es");
    document.getElementById("esEn").classList.toggle("active", direction==="es-en");
}


/* =========================
   FLASHCARD CLICK / FLIP
   ========================= */

const flashcardEl=document.getElementById("flashcard");

let touchStartX=0;
let touchStartY=0;
let suppressClickUntil=0;

flashcardEl.addEventListener("click",()=>{
    if(Date.now()<suppressClickUntil) return;
    flipCard();
});

function flipCard(){
    isFlipped=!isFlipped;
    flashcardEl.classList.toggle("flipped", isFlipped);
}


/* =========================
   MOBILE SWIPE
   ========================= */

flashcardEl.addEventListener("touchstart",(event)=>{
    if(event.touches.length!==1) return;
    touchStartX=event.touches[0].clientX;
    touchStartY=event.touches[0].clientY;
},{passive:true});

flashcardEl.addEventListener("touchend",(event)=>{
    if(event.changedTouches.length!==1) return;

    const touchEndX=event.changedTouches[0].clientX;
    const touchEndY=event.changedTouches[0].clientY;
    const deltaX=touchEndX-touchStartX;
    const deltaY=touchEndY-touchStartY;

    if(Math.abs(deltaX)<50 || Math.abs(deltaX)<=Math.abs(deltaY)) return;

    suppressClickUntil=Date.now()+700;

    if(deltaX<0){ nextCard(); } else { prevCard(); }
},{passive:true});


/* =========================
   CARD NAVIGATION
   ========================= */

function nextCard(){
    if(currentIndex===cards.length-1){
        showMatchExercise();
        return;
    }
    changeCard(1);
}

function prevCard(){
    if(currentIndex===0) return;
    changeCard(-1);
}

function changeCard(step){
    if(isChanging) return;
    isChanging=true;

    const shell=document.querySelector(".card-shell");
    const fc=document.getElementById("flashcard");

    shell.classList.add("portal-burst");
    fc.classList.remove("flipped");
    isFlipped=false;

    fc.classList.add(step>0 ? "exit-next" : "exit-prev");

    setTimeout(()=>{
        currentIndex=(currentIndex+step+cards.length)%cards.length;
        render(step>0 ? "enter-next" : "enter-prev");
    },440);

    setTimeout(()=>{
        document.getElementById("flashcard").classList.remove("enter-next","enter-prev");
        shell.classList.remove("portal-burst");
        isChanging=false;
    },980);
}

function setDirection(value){
    if(isChanging) return;
    direction=value;
    render();
}


/* =========================
   HOME / NAV
   ========================= */

function startFromPreview(event){
    if(event.key==="Enter" || event.key===" "){
        event.preventDefault();
        startFlashcards();
    }
}

function showHome(){
    document.getElementById("homeMode").classList.remove("hidden");
    document.getElementById("flashMode").classList.add("hidden");
    document.getElementById("matchMode").classList.add("hidden");
    document.getElementById("glossaryMode").classList.add("hidden");

    document.getElementById("navFlash").classList.add("active");
    document.getElementById("navGlossary").classList.remove("active");
}

function showGlossary(){
    document.getElementById("homeMode").classList.add("hidden");
    document.getElementById("flashMode").classList.add("hidden");
    document.getElementById("matchMode").classList.add("hidden");
    document.getElementById("glossaryMode").classList.remove("hidden");

    document.getElementById("navFlash").classList.remove("active");
    document.getElementById("navGlossary").classList.add("active");
}

function startFlashcards(){
    prepareSession();

    document.getElementById("homeMode").classList.add("hidden");
    document.getElementById("matchMode").classList.add("hidden");
    document.getElementById("glossaryMode").classList.add("hidden");
    document.getElementById("flashMode").classList.remove("hidden");

    render();
}

function startMatchFromHome(){
    prepareSession();
    showMatchExercise();
}

function showMatchExercise(){
    document.getElementById("homeMode").classList.add("hidden");
    document.getElementById("flashMode").classList.add("hidden");
    document.getElementById("glossaryMode").classList.add("hidden");
    document.getElementById("matchMode").classList.remove("hidden");

    startMatching();
}

function restartFlashcards(){
    currentIndex=0;

    document.getElementById("homeMode").classList.add("hidden");
    document.getElementById("matchMode").classList.add("hidden");
    document.getElementById("glossaryMode").classList.add("hidden");
    document.getElementById("flashMode").classList.remove("hidden");

    render();
}


/* =========================
   MATCHING
   ========================= */

function startMatching(){

    selectedEnglish=null;
    selectedSpanish=null;
    matchedCount=0;

    const matchCard=document.getElementById("matchCard");
    matchCard.classList.remove("victory");

    const englishList=document.getElementById("englishList");
    const spanishList=document.getElementById("spanishList");

    englishList.innerHTML="";
    spanishList.innerHTML="";

    document.getElementById("matchComplete").textContent="";
    document.getElementById("victoryScore").textContent=`${cards.length} / ${cards.length} MATCHED`;

    updateMatchStatus();

    shuffleList(cards).forEach((card)=>{
        englishList.innerHTML+=`
            <button class="match-item" data-side="en" data-key="${card.en}" onclick="selectMatch(this)">
                ${card.en}
            </button>
        `;
    });

    shuffleList(cards).forEach((card)=>{
        spanishList.innerHTML+=`
            <button class="match-item" data-side="es" data-key="${card.en}" onclick="selectMatch(this)">
                ${card.es}
            </button>
        `;
    });
}

function selectMatch(el){

    if(el.classList.contains("matched")) return;

    const side=el.dataset.side;

    clearWrong();

    if(side==="en"){
        if(selectedEnglish) selectedEnglish.classList.remove("selected");
        selectedEnglish=el;
    }else{
        if(selectedSpanish) selectedSpanish.classList.remove("selected");
        selectedSpanish=el;
    }

    el.classList.add("selected");

    if(selectedEnglish && selectedSpanish){
        checkMatch();
    }
}

function checkMatch(){

    const isCorrect=selectedEnglish.dataset.key===selectedSpanish.dataset.key;

    if(isCorrect){

        selectedEnglish.classList.remove("selected");
        selectedSpanish.classList.remove("selected");
        selectedEnglish.classList.add("matched");
        selectedSpanish.classList.add("matched");

        matchedCount++;

        selectedEnglish=null;
        selectedSpanish=null;

        updateMatchStatus();

        if(matchedCount===cards.length){

            const items=[...document.querySelectorAll(".match-item.matched")];

            items.forEach((item)=>{
                const angle=Math.random()*Math.PI*2;
                const distance=180+Math.random()*300;
                const x=Math.cos(angle)*distance;
                const y=Math.sin(angle)*distance;
                const r=-360+Math.random()*720;

                item.style.setProperty("--x",x);
                item.style.setProperty("--y",y);
                item.style.setProperty("--r",`${r}deg`);
            });

            setTimeout(()=>{
                document.getElementById("matchCard").classList.add("victory");
            },180);
        }

    }else{

        selectedEnglish.classList.add("wrong");
        selectedSpanish.classList.add("wrong");

        setTimeout(()=>{
            if(selectedEnglish) selectedEnglish.classList.remove("selected","wrong");
            if(selectedSpanish) selectedSpanish.classList.remove("selected","wrong");
            selectedEnglish=null;
            selectedSpanish=null;
        },420);
    }
}

function clearWrong(){
    document.querySelectorAll(".match-item.wrong").forEach((item)=>{
        item.classList.remove("wrong");
    });
}

function updateMatchStatus(){
    document.getElementById("matchStatus").textContent=`${matchedCount} / ${cards.length} matched`;
}


/* =========================
   GLOSSARY VIEW (built once)
   ========================= */

(function buildGlossary(){

    const glMain=document.getElementById("glMain");
    const glFilters=document.getElementById("glFilters");
    const glSearch=document.getElementById("glSearch");
    const glClear=document.getElementById("glClear");
    const glNoResults=document.getElementById("glNoResults");

    let glTotal=0;
    GLOSSARY.forEach(s=>glTotal+=s.entries.length);
    document.getElementById("glCountTotal").textContent=glTotal;
    document.getElementById("glCountTotal2").textContent=glTotal;

    GLOSSARY.forEach((section,idx)=>{

        const sec=document.createElement("div");
        sec.className="gl-section";
        sec.id=`gl-sec-${section.id}`;
        sec.dataset.section=section.id;

        sec.innerHTML=`
            <div class="gl-section-header">
                <span class="gl-section-num">#${idx+1}</span>
                <span class="gl-section-title">${section.title}</span>
                <span class="gl-section-count">${section.entries.length} términos</span>
            </div>
            <div class="gl-col-labels">
                <span class="gl-col-label">🇪🇸 Español</span>
                <span class="gl-col-label">🇬🇧 English</span>
            </div>
            <div class="gl-entries" id="gl-entries-${section.id}"></div>
        `;
        glMain.appendChild(sec);

        const entriesEl=document.getElementById(`gl-entries-${section.id}`);

        section.entries.forEach(([es,en])=>{
            const div=document.createElement("div");
            div.className="gl-entry";
            div.dataset.es=es.toLowerCase();
            div.dataset.en=en.toLowerCase();
            div.innerHTML=`
                <div class="gl-cell gl-cell-es">${es}</div>
                <div class="gl-cell gl-cell-en">${en}</div>
            `;
            entriesEl.appendChild(div);
        });

        const pill=document.createElement("button");
        pill.className="gl-pill";
        pill.dataset.section=section.id;
        pill.textContent=section.label;
        glFilters.appendChild(pill);
    });

    let glActiveSection="all";
    let glQuery="";

    function glHighlight(text,query){
        if(!query) return text;
        const regex=new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`,'gi');
        return text.replace(regex,'<mark>$1</mark>');
    }

    function glUpdate(){
        let visible=0;

        GLOSSARY.forEach(section=>{
            const secEl=document.getElementById(`gl-sec-${section.id}`);
            const entries=secEl.querySelectorAll(".gl-entry");
            let sectionVisible=0;

            const sectionMatch=glActiveSection==="all" || glActiveSection===section.id;

            entries.forEach(entry=>{
                const esText=entry.dataset.es;
                const enText=entry.dataset.en;
                const matchSearch=!glQuery || esText.includes(glQuery) || enText.includes(glQuery);
                const show=sectionMatch && matchSearch;

                const esCell=entry.querySelector(".gl-cell-es");
                const enCell=entry.querySelector(".gl-cell-en");
                const esOrig=esCell.dataset.orig || (esCell.dataset.orig=esCell.textContent);
                const enOrig=enCell.dataset.orig || (enCell.dataset.orig=enCell.textContent);

                if(show){
                    entry.classList.remove("hidden");
                    esCell.innerHTML=glHighlight(esOrig,glQuery);
                    enCell.innerHTML=glHighlight(enOrig,glQuery);
                    sectionVisible++;
                    visible++;
                }else{
                    entry.classList.add("hidden");
                }
            });

            secEl.style.display=sectionVisible===0 ? "none" : "";
        });

        document.getElementById("glCountVisible").textContent=visible;
        document.getElementById("glCountVisible2").textContent=visible;
        glNoResults.style.display=visible===0 ? "block" : "none";
    }

    glSearch.addEventListener("input",()=>{
        glQuery=glSearch.value.trim().toLowerCase();
        glClear.classList.toggle("show", glQuery.length>0);
        glUpdate();
    });

    glClear.addEventListener("click",()=>{
        glSearch.value="";
        glQuery="";
        glClear.classList.remove("show");
        glSearch.focus();
        glUpdate();
    });

    glFilters.addEventListener("click",e=>{
        const pill=e.target.closest(".gl-pill");
        if(!pill) return;

        document.querySelectorAll(".gl-pill").forEach(p=>p.classList.remove("active"));
        pill.classList.add("active");
        glActiveSection=pill.dataset.section;
        glUpdate();

        if(glActiveSection!=="all"){
            const target=document.getElementById(`gl-sec-${glActiveSection}`);
            if(target) target.scrollIntoView({behavior:"smooth", block:"start"});
        }
    });

    glUpdate();
})();


/* =========================
   PDF EXPORT (full glossary, XPAÑOL style)
   ========================= */

function generatePdf(){

    const btn=document.getElementById("pdfBtn");
    if(btn.dataset.busy==="1") return;

    btn.dataset.busy="1";
    const originalLabel=btn.innerHTML;
    btn.innerHTML='<span class="button-en">Generando... / Generating...</span>';

    // html2canvas needs the element to be visible and inside the normal
    // viewport to render it correctly, so instead of hiding it off-screen
    // (which produces a blank capture) we show it briefly as a full-page
    // white overlay while the PDF is being generated.
    const overlay=document.createElement("div");
    overlay.style.position="fixed";
    overlay.style.inset="0";
    overlay.style.zIndex="99999";
    overlay.style.background="#ffffff";
    overlay.style.overflow="auto";

    const container=document.createElement("div");
    container.style.width="760px";
    container.style.maxWidth="94vw";
    container.style.margin="0 auto";
    container.style.background="#ffffff";
    container.style.color="#111";
    container.style.fontFamily="'Special Elite', monospace";

    overlay.appendChild(container);

    let html=`
        <div style="text-align:center; padding:50px 40px 34px; border-bottom:4px solid #F8AC10;">
            <div style="font-size:44px; color:#F8AC10; letter-spacing:2px;">XPAÑOL</div>
            <div style="font-size:19px; color:#111; margin-top:10px;">Glosario Digital &amp; Tech</div>
            <div style="font-size:15px; color:#666; margin-top:4px;">Digital &amp; Tech Glossary &middot; ES &ndash; EN</div>
        </div>
    `;

    GLOSSARY.forEach((section,idx)=>{
        html+=`
            <div style="padding:26px 40px 6px;">
                <div style="display:flex; align-items:center; gap:10px; border-bottom:2px solid #F8AC10; padding-bottom:6px; margin-bottom:10px;">
                    <span style="background:#F8AC10; color:#000; padding:2px 8px; font-size:12px;">#${idx+1}</span>
                    <span style="color:#F8AC10; font-size:16px; text-transform:uppercase;">${section.title}</span>
                </div>
                <table style="width:100%; border-collapse:collapse; font-size:13px;">
        `;

        section.entries.forEach(([es,en])=>{
            html+=`
                <tr>
                    <td style="width:50%; padding:5px 8px; border-bottom:1px solid #eee; color:#111;">${es}</td>
                    <td style="width:50%; padding:5px 8px; border-bottom:1px solid #eee; color:#555;">${en}</td>
                </tr>
            `;
        });

        html+=`</table></div>`;
    });

    html+=`
        <div style="text-align:center; padding:34px; margin-top:14px; border-top:2px solid #F8AC10; color:#F8AC10; font-size:15px;">
            www.xpanol.com
        </div>
    `;

    container.innerHTML=html;
    document.body.appendChild(overlay);

    const restore=()=>{
        document.body.removeChild(overlay);
        btn.dataset.busy="0";
        btn.innerHTML=originalLabel;
    };

    if(!window.jspdf || !window.html2canvas){
        alert("No se pudo cargar la librería de PDF. Revisa tu conexión a internet e inténtalo de nuevo. / The PDF library could not be loaded. Check your internet connection and try again.");
        restore();
        return;
    }

    const { jsPDF }=window.jspdf;
    const doc=new jsPDF("p","pt","a4");

    doc.html(container,{
        margin:[24,18,24,18],
        autoPaging:"text",
        html2canvas:{ scale:0.72, useCORS:true },
        callback:function(pdf){
            pdf.save("xpanol-glosario.pdf");
            restore();
        }
    });
}


/* =========================
   INIT
   ========================= */

buildCatPills();
updatePreview();
