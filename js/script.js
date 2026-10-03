const creators = [

  {
    name:"Leo Ray",
    handle:"@leoray",
    cat:"ПУТЕШЕСТВИЯ / СПОРТ",
    followers:"94K",
    posts:"287",
    accent:"#ffb84a",

    desc:
      "Аэропорты, горы, автомобили и новые приключения. Leo документирует жизнь, построенную вокруг движения и любопытства.",

    story:
      "Leo живёт между аэропортами, горными дорогами и новыми маршрутами. Он собирает истории из поездок, спорта и случайных открытий, превращая каждое новое место в часть своей цифровой жизни.",

    img:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=90",

    thumb:[
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=400&q=80"
    ],

    titles:[
      "Где-то на севере.",
      "Без постоянного адреса.",
      "Всегда в движении."
    ]
  },


  {
    name:"Alex V.",
    handle:"@alexvision",
    cat:"БИЗНЕС / ТЕХ",
    followers:"128K",
    posts:"324",
    accent:"#c4ff3d",

    desc:
      "Предпринимательство, технологии и будущее цифровой культуры. Alex превращает сложные идеи в яркий и визуальный ежедневный контент.",

    story:
      "Alex создаёт цифровую хронику будущего: предпринимательство, технологии, новые продукты и культура, которая формируется прямо сейчас. Его мир — это идеи, эксперименты и люди, которые пытаются представить, каким будет следующий интернет.",

    img:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=90",

    thumb:[
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
    ],

    titles:[
      "Строим будущее.",
      "Внутри студии.",
      "Новый взгляд."
    ]
  },


  {
    name:"Mia Cole",
    handle:"@miacole",
    cat:"МОДА / КУЛЬТУРА",
    followers:"212K",
    posts:"461",
    accent:"#ff79ba",

    desc:
      "Мода, визуальная культура и городская жизнь. Mia превращает обычные сцены в страницы редакционного журнала и никогда не повторяет один образ дважды.",

    story:
      "Mia смотрит на город как на бесконечную съёмочную площадку. Мода, архитектура, музыка и повседневные детали превращаются в визуальные истории с собственным характером и ритмом.",

    img:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=90",

    thumb:[
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=400&q=80"
    ],

    titles:[
      "Новый сезон.",
      "Городской стиль.",
      "Важны детали."
    ]
  },


  {
    name:"Nora Kim",
    handle:"@norakim",
    cat:"ОБРАЗ ЖИЗНИ / МУЗЫКА",
    followers:"176K",
    posts:"392",
    accent:"#8fb7ff",

    desc:
      "Музыка, книги, медленные утра и маленькие вещи, которые превращают город в дом. Лента Nora намеренно не спешит.",

    story:
      "Nora создаёт пространство для более медленного взгляда на жизнь. Музыка, книги, утренний кофе и маленькие городские ритуалы становятся частью её спокойной цифровой вселенной.",

    img:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=90",

    thumb:[
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80"
    ],

    titles:[
      "Ночная пластинка.",
      "Воскресный ритуал.",
      "Тихое место."
    ]
  }

];


let active = 0;

const $ = s => document.querySelector(s);

const person = $("#person");
const heroImage = $("#heroImage");
const switcher = $("#switcher");
const feed = $("#feed");


/* =========================
   CREATOR TABS
   ========================= */

function renderTabs(){

  switcher.innerHTML = creators.map((c,i)=>`

    <button
      class="creator-tab ${i===active ? "active" : ""}"
      data-i="${i}"
    >

      <img
        src="${c.img}"
        alt="${c.name}"
      >

      <div class="creator-tab-info">

        <span>
          0${i+1}
        </span>

        <strong>
          ${c.name}
        </strong>

        <em>
          ${c.cat}
        </em>

      </div>

    </button>

  `).join("");


  switcher
    .querySelectorAll(".creator-tab")
    .forEach(button => {

      button.onclick = () =>
        setCreator(+button.dataset.i);

    });

}


/* =========================
   FEED
   ========================= */

function renderFeed(c){

  feed.innerHTML = c.thumb.map((img,i)=>`

    <article class="post-card">

      <img
        src="${img}"
        alt=""
      >

      <div class="post-meta">
        <span>
          ${c.titles[i]}
        </span>
      </div>

    </article>

  `).join("");

}


/* =========================
   CHANGE CREATOR
   ========================= */

function setCreator(i){

  const c = creators[i];

  active = i;

  $("#feedCreatorName").textContent =
    c.name;

  $("#feedCreatorHandle").textContent =
    c.handle;


  document.documentElement.style.setProperty(
    "--accent",
    c.accent
  );


  const rgb = c.accent
    .replace("#","")
    .match(/../g)
    .map(x => parseInt(x,16))
    .join(",");


  document.documentElement.style.setProperty(
    "--accent-rgb",
    rgb
  );


  person.classList.remove("ready");


  setTimeout(()=>{

    heroImage.src = c.img;

    $("#heroName").textContent =
      c.name;

    $("#heroCategory").textContent =
      c.cat;

    $("#heroFollowers").textContent =
      c.followers;

    $("#floatTitle").textContent =
      c.titles[0];


    c.thumb.forEach((x,j)=>{

      $("#fp"+(j+1)).style.backgroundImage =
        `url("${x}")`;

    });


    person.classList.add("ready");

  },180);


  renderTabs();
  renderFeed(c);

}


/* =========================
   MODAL
   ========================= */

function openModal(){

  const c = creators[active];


  $("#modalImage").src =
    c.img;

  $("#modalName").textContent =
    c.name;

  $("#modalHandle").textContent =
    c.handle;

  $("#modalDesc").textContent =
    c.desc;

  $("#modalStory").textContent =
    c.story;

  $("#mFollowers").textContent =
    c.followers;

  $("#mPosts").textContent =
    c.posts;


  /* Динамический заголовок галереи */

  $("#modalGalleryTitle").textContent =
    `Последние посты от ${c.name}`;


  /* Gallery */

  $("#modalPosts").innerHTML =
    c.thumb
      .map((x,i)=>`
        <img
          src="${x}"
          alt="${c.name} — ${c.titles[i]}"
          loading="lazy"
        >
      `)
      .join("");


  $("#modal").classList.add("open");

  document.body.style.overflow =
    "hidden";

}


function closeModal(){

  $("#modal").classList.remove("open");

  document.body.style.overflow =
    "";

}


/* =========================
   EVENTS
   ========================= */

$("#explore").onclick =
  openModal;

$("#close").onclick =
  closeModal;


$("#modal").onclick = e => {

  if(e.target.id === "modal"){
    closeModal();
  }

};


document.addEventListener(
  "keydown",
  e => {

    if(e.key === "Escape"){
      closeModal();
    }

  }
);


/* =========================
   INIT
   ========================= */

setCreator(0);


window.addEventListener(
  "load",
  () => {
    person.classList.add("ready");
  }
);