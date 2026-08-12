/*==================================================
  Concept Quizzer — Navigation + Virtual Science Laboratory
  Keeps the normal Class → Subject → Chapter flow separate
  from the Virtual Science Laboratory flow.
==================================================*/
"use strict";

const App = {
  currentClass: null,
  currentSubject: null,
  currentChapter: null
};

function byId(id){ return document.getElementById(id); }
function escapeHTML(value){
  return String(value ?? "")
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}

const preloader=byId("preloader");
const classScreen=byId("classScreen");
const subjectScreen=byId("subjectScreen");
const chapterScreen=byId("chapterScreen");
const dashboardScreen=byId("dashboardScreen");
const subjectGrid=byId("subjectGrid");
const chapterGrid=byId("chapterGrid");
const selectedClassTitle=byId("selectedClassTitle");
const selectedSubjectTitle=byId("selectedSubjectTitle");
const chapterTitle=byId("chapterTitle");
const chapterSubtitle=byId("chapterSubtitle");
const searchInput=byId("searchInput");
const scienceLabHub=byId("scienceLabHub");
const scienceLabSelectorScreen=byId("scienceLabSelectorScreen");
const vslHeroPanel=byId("vslHeroPanel");
const vslSelectorCard=byId("vslSelectorCard");

function getData(){
  try { if(typeof ConceptQuizzerData!=="undefined") return ConceptQuizzerData; } catch(e){}
  return window.ConceptQuizzerData || null;
}
function getClasses(){
  const source=getData()?.classes;
  if(!source) return [];
  if(Array.isArray(source)) return source;
  return Object.keys(source).map(k=>{
    const item=source[k]; if(!item) return null;
    if(item.id==null) item.id=Number(k); return item;
  }).filter(Boolean);
}
function getClassById(id){ return getClasses().find(x=>Number(x.id)===Number(id)) || null; }
function getSubjects(cls){
  if(!cls?.subjects) return [];
  if(Array.isArray(cls.subjects)) return cls.subjects.map((data,i)=>({key:data.id||String(i),data}));
  return Object.keys(cls.subjects).map(key=>({key,data:cls.subjects[key]}));
}

function scrollTop(){ window.scrollTo(0,0); }
function hideLoader(){
  if(!preloader) return;
  preloader.style.opacity="0"; preloader.style.visibility="hidden";
  setTimeout(()=>preloader?.remove(),500);
}

function hideAllScreens(){
  [classScreen,subjectScreen,chapterScreen,dashboardScreen,scienceLabSelectorScreen]
    .forEach(x=>x?.classList.add("hidden"));
  if(scienceLabHub) scienceLabHub.classList.add("homeVslHidden");
}
function showHome(){
  hideAllScreens();
  classScreen?.classList.remove("hidden");
  scienceLabHub?.classList.remove("homeVslHidden");
  vslHeroPanel?.classList.remove("hidden");
  vslSelectorCard?.classList.add("hidden");
  scrollTop();
}
function setScreen(screen){
  hideAllScreens();
  if(screen) screen.classList.remove("hidden");
  scienceLabHub?.classList.add("homeVslHidden");
  scrollTop();
}
function openVslSelector(){
  hideAllScreens();
  scienceLabHub?.classList.remove("homeVslHidden");
  vslHeroPanel?.classList.add("hidden");
  vslSelectorCard?.classList.remove("hidden");
  showVslStep("class");
  initScienceLabSelector();
  scrollTop();
}
function showVslStep(step){
  const screens={class:byId("vslClassScreen"),chapter:byId("vslChapterScreen"),experiment:byId("vslExperimentScreen")};
  Object.values(screens).forEach(x=>x?.classList.add("hidden"));
  const target=screens[step];
  if(target) target.classList.remove("hidden");
  /* Step changes stay in place. No scroll/animation = no shaking or jumping. */
}

function registerClassCards(){
  document.querySelectorAll(".classCard").forEach(card=>{
    if(card.dataset.cqBound==="true") return;
    card.dataset.cqBound="true";
    card.addEventListener("click",e=>{
      e.preventDefault();
      const selected=getClassById(card.dataset.class);
      if(!selected) return;
      document.querySelectorAll(".classCard").forEach(x=>x.classList.remove("active"));
      card.classList.add("active");
      App.currentClass=selected; App.currentSubject=null; App.currentChapter=null;
      localStorage.setItem("cq-current-class",String(selected.id));
      loadSubjects();
    });
  });
}
function loadSubjects(){
  if(!App.currentClass||!subjectGrid) return;
  selectedClassTitle.textContent=App.currentClass.name||(`Class ${App.currentClass.id}`);
  subjectGrid.innerHTML="";
  getSubjects(App.currentClass).forEach(entry=>{
    const s=entry.data; if(!s) return;
    const card=document.createElement("button"); card.type="button"; card.className="subjectCard";
    const count=Array.isArray(s.chapters)?s.chapters.length:0;
    card.innerHTML=`<div class="subjectIcon">${s.icon||"📚"}</div><h3>${escapeHTML(s.name||entry.key)}</h3><p>${count} Chapters</p>`;
    card.addEventListener("click",()=>{
      App.currentSubject=s; App.currentChapter=null;
      localStorage.setItem("cq-current-subject",String(s.id||s.name||entry.key));
      loadChapters();
    });
    subjectGrid.appendChild(card);
  });
  setScreen(subjectScreen);
}
function loadChapters(){
  if(!App.currentSubject||!chapterGrid) return;
  selectedSubjectTitle.textContent=App.currentSubject.name||"Chapters";
  chapterGrid.innerHTML="";
  (Array.isArray(App.currentSubject.chapters)?App.currentSubject.chapters:[]).forEach((chapter,index)=>{
    const name=typeof chapter==="string"?chapter:(chapter?.title||chapter?.name||"Untitled Chapter");
    const card=document.createElement("button"); card.type="button"; card.className="chapterCard";
    card.innerHTML=`<div class="chapterNumber">Chapter ${index+1}</div><div class="chapterContent"><h3>${escapeHTML(name)}</h3><p>Open Chapter</p></div>`;
    card.addEventListener("click",()=>{
      App.currentChapter=name;
      localStorage.setItem("cq-current-chapter",makeChapterKeyFor(App.currentClass,App.currentSubject,name));
      openDashboard();
    });
    chapterGrid.appendChild(card);
  });
  setScreen(chapterScreen);
}
function makeChapterKeyFor(cls,sub,chapter){
  const clean=String(chapter||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
  const sid=sub?.id||sub?.name||"subject";
  return `${cls?.id||""}-${String(sid).toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${clean}`;
}
function makeChapterKey(){ return makeChapterKeyFor(App.currentClass,App.currentSubject,App.currentChapter); }

function openDashboard(){
  if(!App.currentClass||!App.currentSubject||!App.currentChapter) return;
  chapterTitle.textContent=App.currentChapter;
  chapterSubtitle.textContent=`${App.currentClass.name||`Class ${App.currentClass.id}`} • ${App.currentSubject.name||"Subject"}`;
  registerDashboardCards();
  setScreen(dashboardScreen);
}

function registerNavigation(){
  byId("backToClasses")?.addEventListener("click",()=>setScreen(classScreen));
  byId("backToSubjects")?.addEventListener("click",()=>setScreen(subjectScreen));
  byId("backToChapters")?.addEventListener("click",()=>setScreen(chapterScreen));
  byId("vslArrowButton")?.addEventListener("click",openVslSelector);
}
function registerTheme(){
  const b=byId("themeButton"); if(!b||b.dataset.cqBound==="true") return;
  b.dataset.cqBound="true";
  if(localStorage.getItem("cq-theme")==="dark") document.body.classList.add("dark");
  b.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    localStorage.setItem("cq-theme",document.body.classList.contains("dark")?"dark":"light");
  });
}
function registerSearch(){
  if(!searchInput||searchInput.dataset.cqBound==="true") return;
  searchInput.dataset.cqBound="true";
  searchInput.addEventListener("input",function(){
    const k=this.value.toLowerCase().trim();
    document.querySelectorAll("#subjectGrid .subjectCard").forEach(c=>c.style.display=c.innerText.toLowerCase().includes(k)?"":"none");
  });
}

function scienceChaptersForClass(classId){
  const cls=getClassById(classId); if(!cls) return [];
  const science=getSubjects(cls).find(e=>String(e.key||e.data?.id||e.data?.name||"").toLowerCase()==="science");
  return science?.data&&Array.isArray(science.data.chapters)?science.data.chapters:[];
}
function scienceExperimentData(classId,chapterIndex,chapterName){
  if(Number(classId)===6&&Number(chapterIndex)===0){
    const base="js/chapters/science/class6/the-wonderful-world-of-science.html?tab=lab&experiment=";
    return [
      {n:1,icon:"🖊️",title:"Pen Detective",tag:"NCERT-style inquiry",text:"Change ink level and tip condition, predict whether the pen will write, then test it.",link:base+"1"},
      {n:2,icon:"🌱",title:"Plant Mystery",tag:"NCERT-inspired investigation",text:"Change light, water and nutrients and observe a simulated 7-day plant response.",link:base+"2"},
      {n:3,icon:"🚁",title:"Paper Helicopter",tag:"Extension investigation",text:"Change blade length and mass and compare simulated falling time.",link:base+"3"},
      {n:4,icon:"🛝",title:"Ramp Investigation",tag:"Physics extension",text:"Change slope and surface and test the simulated travel distance.",link:base+"4"},
      {n:5,icon:"❓",title:"Mystery Question Lab",tag:"Scientific thinking",text:"Turn an observation into a testable question and choose a variable to investigate.",link:base+"5"}
    ];
  }
  return [1,2,3,4,5].map((n)=>({n,icon:["🧪","🔬","🌡️","⚙️","💡"][n-1],title:`Experiment ${n}`,tag:"Five practical investigations",text:`${chapterName}: interactive experiment ${n} is reserved for this chapter's laboratory build.`,link:null}));
}

function initScienceLabSelector(){
  const grid=byId("scienceClassGrid"), chapterGrid=byId("scienceChapterGrid"), expGrid=byId("scienceExperimentGrid");
  if(!grid||!chapterGrid||!expGrid) return;
  const classes=getClasses().filter(c=>[6,7,8,9,10].includes(Number(c.id)));
  grid.innerHTML=classes.map(c=>`<button type="button" class="scienceClassCard" data-science-class="${c.id}"><span>${c.id}</span><b>Class ${c.id}</b><small>Science Laboratory</small></button>`).join("");
  chapterGrid.innerHTML=""; expGrid.innerHTML="";
  grid.querySelectorAll("[data-science-class]").forEach(btn=>btn.addEventListener("click",()=>{
    grid.querySelectorAll(".scienceClassCard").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    const id=Number(btn.dataset.scienceClass), chapters=scienceChaptersForClass(id);
    byId("vslClassTitle").textContent=`Class ${id} • Science Chapters`;
    chapterGrid.innerHTML=chapters.map((ch,i)=>{
      const name=typeof ch==="string"?ch:(ch?.title||ch?.name||`Chapter ${i+1}`);
      return `<button type="button" class="scienceChapterCard" data-vsl-class="${id}" data-vsl-index="${i}"><span class="vslChapterNo">CHAPTER ${i+1}</span><h3>${escapeHTML(name)}</h3><span class="experimentCount">🧪 5 simulations available</span></button>`;
    }).join("");
    showVslStep("chapter");
    chapterGrid.querySelectorAll("[data-vsl-index]").forEach(chBtn=>chBtn.addEventListener("click",()=>{
      chapterGrid.querySelectorAll(".scienceChapterCard").forEach(x=>x.classList.remove("active"));
      chBtn.classList.add("active");
      const ci=Number(chBtn.dataset.vslIndex), cId=Number(chBtn.dataset.vslClass), raw=scienceChaptersForClass(cId)[ci];
      const name=typeof raw==="string"?raw:(raw?.title||raw?.name||`Chapter ${ci+1}`);
      byId("vslChapterTitle").textContent=`Chapter ${ci+1} • ${name}`;
      const labs=scienceExperimentData(cId,ci,name);
      expGrid.innerHTML=labs.map(l=>`<button type="button" class="scienceExperimentLink" data-lab-class="${cId}" data-lab-index="${ci}" data-lab-name="${escapeHTML(name)}" data-lab-link="${l.link||''}" aria-label="Open ${escapeHTML(l.title)} simulation"><article class="scienceExperimentCard"><div class="experimentIcon">${l.icon}</div><div class="experimentMeta">EXPERIMENT ${l.n} • ${escapeHTML(l.tag)}</div><h3>${escapeHTML(l.title)}</h3><p>${escapeHTML(l.text)}</p><div class="experimentTap"><span>▶ Play Experiment</span><span>→</span></div></article></button>`).join("");
      expGrid.querySelectorAll(".scienceExperimentLink").forEach(a=>a.addEventListener("click",e=>{
        e.preventDefault();
        const link=a.dataset.labLink;
        if(!link) return;
        localStorage.setItem("cq-science-class",a.dataset.labClass);
        localStorage.setItem("cq-science-chapter-index",a.dataset.labIndex);
        localStorage.setItem("cq-current-class",a.dataset.labClass);
        localStorage.setItem("cq-current-subject","science");
        localStorage.setItem("cq-current-chapter",makeChapterKeyFor(getClassById(a.dataset.labClass),{id:"science",name:"Science"},a.dataset.labName));
        window.location.assign(link);
      }));
      showVslStep("experiment");
    }));
  }));
  byId("vslBackToClasses")?.addEventListener("click",()=>showVslStep("class"));
  byId("vslBackToChapters")?.addEventListener("click",()=>showVslStep("chapter"));
}

function registerDashboardCards(){
  const notesCard=byId("notesCard"), quizCard=byId("quizCard"), scienceLabCard=byId("scienceLabCard");
  const isScience=String(App.currentSubject?.id||App.currentSubject?.name||"").toLowerCase()==="science";
  if(scienceLabCard) scienceLabCard.classList.toggle("scienceLabVisible",isScience);
  [notesCard,quizCard].forEach(card=>card?.classList.remove("dashboardHidden"));

  if(notesCard&&!notesCard.dataset.cqBound){
    notesCard.dataset.cqBound="true";
    notesCard.addEventListener("click",()=>{
      localStorage.setItem("cq-current-chapter",makeChapterKey());
      if(isScience&&Number(App.currentClass?.id)===6){
        const idx=(App.currentSubject?.chapters||[]).findIndex(c=>(typeof c==="string"?c:c?.title||c?.name)===App.currentChapter);
        if(idx===0){ location.href="js/chapters/science/class6/the-wonderful-world-of-science.html?tab=notes"; return; }
      }
      location.href="notes.html";
    });
  }
  if(quizCard&&!quizCard.dataset.cqBound){
    quizCard.dataset.cqBound="true";
    quizCard.addEventListener("click",()=>{
      localStorage.setItem("cq-current-chapter",makeChapterKey());
      const idx=(App.currentSubject?.chapters||[]).findIndex(c=>(typeof c==="string"?c:c?.title||c?.name)===App.currentChapter);
      if(isScience&&Number(App.currentClass?.id)===6&&idx===0){
        location.href="js/chapters/science/class6/the-wonderful-world-of-science.html?tab=quiz";
        return;
      }
      location.href="quiz.html";
    });
  }
  if(scienceLabCard&&!scienceLabCard.dataset.cqBound){
    scienceLabCard.dataset.cqBound="true";
    scienceLabCard.addEventListener("click",()=>{
      const idx=(App.currentSubject?.chapters||[]).findIndex(c=>(typeof c==="string"?c:c?.title||c?.name)===App.currentChapter);
      localStorage.setItem("cq-science-class",String(App.currentClass?.id||6));
      localStorage.setItem("cq-science-chapter-index",String(Math.max(0,idx)));
      if(Number(App.currentClass?.id)===6&&idx===0) location.href="js/chapters/science/class6/the-wonderful-world-of-science.html?tab=lab";
      else { location.href=`index.html?vsl=1&class=${encodeURIComponent(App.currentClass?.id||6)}&chapter=${encodeURIComponent(Math.max(0,idx))}`; }
    });
  }
}

function initApp(){
  if(!getData()?.classes){ hideLoader(); return; }
  registerClassCards(); registerNavigation(); registerTheme(); registerSearch(); registerDashboardCards();
  // Home is the only place where the large VSL hero is shown.
  showHome();
  const p=new URLSearchParams(location.search);
  if(p.get("vsl")==="1") openVslSelector();
  hideLoader();
}
document.addEventListener("DOMContentLoaded",initApp);
