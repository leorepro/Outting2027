const GAL = {"halong": ["assets/images/img-02.jpg", "assets/images/img-13.jpg", "assets/images/img-12.jpg", "assets/images/img-14.jpg", "assets/images/img-15.jpg", "assets/images/img-16.jpg"], "oldquarter": ["assets/images/img-03.jpg", "assets/images/img-17.jpg", "assets/images/img-18.jpg", "assets/images/img-19.jpg", "assets/images/img-20.jpg", "assets/images/img-21.jpg"], "train": ["assets/images/img-04.jpg", "assets/images/img-22.jpg", "assets/images/img-23.jpg", "assets/images/img-24.jpg"], "food": ["assets/images/img-05.jpg", "assets/images/img-25.jpg", "assets/images/img-26.jpg", "assets/images/img-27.jpg", "assets/images/img-28.jpg", "assets/images/img-29.jpg"], "grandworld": ["assets/images/img-06.jpg", "assets/images/img-30.jpg", "assets/images/img-31.jpg"], "cruise": ["assets/images/img-07.jpg", "assets/images/img-32.jpg", "assets/images/img-33.jpg", "assets/images/img-34.jpg", "assets/images/img-35.jpg", "assets/images/img-36.jpg"], "doughhaus": ["assets/images/img-37.jpg", "assets/images/img-38.jpg"], "seafood": ["assets/images/food-seafood-1.jpg", "assets/images/food-seafood-2.jpg"], "cave": ["assets/images/food-cave-1.jpg", "assets/images/food-cave-2.jpg"], "coffee": ["assets/images/food-coffee-1.jpg", "assets/images/food-coffee-2.jpg"], "pho": ["assets/images/food-pho-1.jpg", "assets/images/food-pho-2.jpg", "assets/images/food-pho-3.jpg"], "ngon": ["assets/images/food-ngon-1.jpg", "assets/images/food-ngon-2.jpg"], "hotelhalong": ["assets/images/hotel-halong-1.jpg", "assets/images/hotel-halong-2.jpg", "assets/images/hotel-halong-3.jpg", "assets/images/hotel-halong-4.jpg", "assets/images/hotel-halong-5.jpg"], "hotelhanoi": ["assets/images/hotel-hanoi-1.jpg", "assets/images/hotel-hanoi-2.jpg", "assets/images/hotel-hanoi-3.jpg", "assets/images/hotel-hanoi-4.jpg", "assets/images/hotel-hanoi-5.jpg"]};
  const META = {"halong": {"title": "下龍灣海上桂林", "sub": "Hạ Long Bay · 世界自然遺產", "blurb": "搭乘頂級遊輪出海，巡遊驚訝洞、鐘乳石洞與 TITOP 英雄島。", "desc": "1994 年列入 UNESCO 世界遺產，逾 1,600 座石灰岩島嶼散落翡翠海面。傳統遊船穿梭島礁、登 TITOP 島俯瞰整片海上桂林，是北越最具代表性的風景。", "caps": ["下龍灣全景", "TITOP 島俯瞰視角", "揚帆巡航島礁間", "壯麗石灰岩地貌", "清晨薄霧中的島群", "傳統木造遊船 Junk"], "src": "Wikimedia Commons · CC 授權"}, "oldquarter": {"title": "河內 36 古街", "sub": "Old Quarter · 千年古都", "blurb": "漫遊千年古都，搭電瓶車探訪聖約瑟夫大教堂與在地紀念品。", "desc": "76 條老街各以昔日行業命名（賣絲、賣銀、賣紙…）。鄰近新哥德式聖約瑟夫大教堂與還劍湖，街巷咖啡香與機車川流，是體驗越南庶民生活的最佳場域。", "caps": ["古街街景", "聖約瑟夫大教堂", "老街市集巷弄", "街邊小販日常", "還劍湖畔", "還劍湖落日"], "src": "Wikimedia Commons · CC BY 3.0"}, "train": {"title": "河內鐵道街 Train Street", "sub": "Train Street · 鐵道時光", "blurb": "造訪著名河內鐵道街，行程另含雙層觀光列車半日遊。", "desc": "法國殖民時期鋪設的鐵軌從民宅門前穿過，兩側緊鄰咖啡館，火車經過近在咫尺，是河內最具人氣的打卡景點之一。", "caps": ["鐵軌穿過民宅", "鐵道街咖啡座", "軌道與紅燈籠", "旅人沿軌散步"], "src": "Wikimedia Commons · CC 授權"}, "food": {"title": "米其林美食巡禮", "sub": "Vietnamese Cuisine · 味蕾之旅", "blurb": "米其林入選與推薦餐廳，從越南河粉到創意越式饗宴。", "desc": "以牛骨慢熬高湯的越南河粉、酥脆春卷、烤肉米線 Bún chả、法式越南三明治 Bánh mì…行程一路吃遍北越道地與創意風味。", "caps": ["越南河粉 Phở", "越式料理拼盤", "烤肉米線 Bún chả", "越式春卷 Gỏi cuốn", "新鮮春卷", "越南法包 Bánh mì"], "src": "Wikimedia Commons · CC 授權"}, "grandworld": {"title": "越南威尼斯 Grand World", "sub": "The Venice · 歐風娛樂城", "blurb": "沉浸式劇場奇幻秀《聖珠再現》與威尼斯運河造景。", "desc": "VinGroup 打造的歐風娛樂城，830 公尺翡翠運河搭配義式彩色樓房與貢多拉船，水上實景劇場《The Grand Voyage》是最大亮點。位於河內近郊 Ocean City。", "caps": ["威尼斯區彩色樓房夜景", "《The Grand Voyage》水上帆船", "東西橋與運河造景"], "src": "Vinhomes Ocean Park · Wikimedia Commons · CC 授權"}, "cruise": {"title": "奢享海上遊船", "sub": "Cruise · 驚訝洞 Sung Sot", "blurb": "出海遊船並停靠最大鐘乳石洞「驚訝洞」，船上享自助午餐。", "desc": "遊船巡航石灰岩島群，停靠下龍灣最大鐘乳石洞「驚訝洞 Sung Sot Cave」，洞內鐘乳石柱壯觀，午間於船上享用自助餐。", "caps": ["下龍灣遊船船隊", "巡航於翡翠海面", "驚訝洞鐘乳石", "驚訝洞內景", "傳統觀光遊船", "木造帆船 Junk"], "src": "Wikimedia Commons · CC 授權"}, "doughhaus": {"title": "LÌM LIM DOUGHHAUS 甜甜圈", "sub": "Hanoi · 人氣甜點名所", "blurb": "抵達河內第一站，先嚐人氣手作甜甜圈與咖啡。", "desc": "河內超人氣的手作甜甜圈專賣店，繽紛多彩的造型與多種口味是排隊打卡名所。抵達河內後的第一站，先以一份甜甜圈與越式咖啡揭開旅程序幕。", "caps": ["繽紛多彩的甜甜圈塔", "多款口味手作甜甜圈"], "src": "Wikimedia Commons · CC 授權（示意圖）"}, "seafood": {"title": "下龍灣海鮮塔氣鍋", "sub": "Seafood Hotpot · 下龍灣海味", "blurb": "Day 1 晚餐｜九層海鮮塔氣鍋，現撈蝦蟹貝類佐暖心火鍋湯底。", "desc": "下龍灣緊鄰漁港，海鮮新鮮肥美。第一晚的九層海鮮塔氣鍋集合鮮蝦、淡菜、花枝與各式火鍋料，圍爐共享，為旅程暖身開胃。（餐點示意）", "caps": ["豐盛的越式海鮮火鍋盛宴", "鮮蝦淡菜花枝氣鍋"], "src": "越式海鮮火鍋・網路實拍示意"}, "cave": {"title": "龍騰碧珠洞・洞穴饗宴", "sub": "Cave Dining · 鐘乳石洞", "blurb": "Day 2 午餐｜在鐘乳石洞內享浪漫饗宴，獨一無二的用餐場景。", "desc": "走入下龍灣的鐘乳石洞，於億萬年地質奇景中擺設餐桌、點起燈火，伴隨表演享用午宴。這是下龍灣最具特色、最難忘的一餐。（場景示意）", "caps": ["鐘乳石洞內的浪漫宴席", "洞穴劇場式用餐場景"], "src": "下龍灣洞穴餐宴・網路實拍示意"}, "coffee": {"title": "河內越式蛋咖啡", "sub": "Egg Coffee · 河內名物", "blurb": "綿密蛋霜浮於濃醇咖啡之上，河內百年咖啡館必嚐的招牌風味。", "desc": "越式蛋咖啡（Cà phê trứng）以打發蛋黃、煉乳鋪在濃縮咖啡上，口感如提拉米蘇般滑順香甜，是河內 Giảng 咖啡館自 1946 年流傳至今的代表名物。（飲品示意）", "caps": ["河內 Giảng 咖啡館的招牌蛋咖啡", "綿密蛋霜與濃醇咖啡"], "src": "越式蛋咖啡・網路實拍示意"}, "pho": {"title": "石鍋河粉＋炸春卷", "sub": "Phở & Nem · 越南國民美食", "blurb": "Day 3 午餐｜熱騰騰石鍋河粉，搭配金黃酥脆的越式炸春卷。", "desc": "以牛骨慢熬高湯的河粉，配上鮮嫩牛肉、九層塔與豆芽，再來一份外酥內餡的越式炸春卷（Nem rán），是越南最經典的國民組合。（餐點示意）", "caps": ["越南牛肉河粉 Phở bò", "金黃酥脆越式炸春卷", "炸春卷佐生菜沾醬"], "src": "越南河粉與炸春卷・網路實拍示意"}, "ngon": {"title": "米其林 NGON GARDEN", "sub": "NGON Garden · 米其林推薦", "blurb": "Day 2 晚餐｜綠意花園庭院間，品嚐米其林推薦的創意越式饗宴。", "desc": "NGON Garden 是河內知名的越式餐廳，米其林指南推薦名單之一。坐落於綠意盎然的花園洋房中，將各地越南風味料理一次呈現，氛圍與美味兼具。", "caps": ["NGON Garden 花園洋房門面", "綠意盎然的庭園用餐空間"], "src": "NGON Garden 河內・網路實拍示意"}, "hotelhalong": {"title": "溫德姆花園傳奇", "sub": "Wyndham Garden Legend Halong · Day 1 & 2", "blurb": "下龍灣畔五星飯店，海景客房眺望石灰岩島群。", "desc": "坐落下龍灣 Bai Chay 區、緊鄰國際遊輪港，海景客房可眺望石灰岩島群與港灣。館內設有戶外泳池、健身中心與多國風味景觀餐廳。", "caps": ["飯店外觀全景", "海景豪華客房", "舒適雙人客房", "自助餐廳", "客房陽台下龍灣海景"], "src": "Tripadvisor 飯店實照"}, "hotelhanoi": {"title": "西河內喜來登飯店", "sub": "Sheraton Hanoi West · Day 3 & 4", "blurb": "河內西區五星地標，現代典雅設計與頂級睡眠體驗。", "desc": "河內西區的五星地標，融合現代典雅設計風格與喜來登標誌性頂級睡眠體驗。館內設有戶外泳池、24 小時健身房、水療中心及多元異國風味餐廳。", "caps": ["飯店外觀全景", "迎賓入口夜景", "典雅客房", "大廳廊道", "大型宴會廳"], "src": "Tripadvisor 飯店實照"}};
  let curTheme=null, curIdx=0;

  function openGallery(theme, idx){
    curTheme=theme; curIdx=idx||0;
    const m=META[theme];
    document.getElementById('lbTitle').textContent=m.title;
    document.getElementById('lbSub').textContent=m.sub;
    document.getElementById('lbDesc').textContent=m.desc;
    document.getElementById('lbSrc').textContent='照片來源：'+m.src;
    const tw=document.getElementById('lbThumbs'); tw.innerHTML='';
    GAL[theme].forEach((src,i)=>{
      const t=document.createElement('img'); t.src=src; t.onclick=()=>setSlide(i);
      tw.appendChild(t);
    });
    setSlide(curIdx);
    document.getElementById('lb').classList.add('open');
    document.body.style.overflow='hidden';
  }
  function setSlide(i){
    const arr=GAL[curTheme]; curIdx=(i+arr.length)%arr.length;
    document.getElementById('lbImg').src=arr[curIdx];
    const caps=META[curTheme].caps||[];
    document.getElementById('lbCap').textContent=caps[curIdx]||'';
    document.getElementById('lbCounter').textContent=(curIdx+1)+' / '+arr.length;
    [...document.getElementById('lbThumbs').children].forEach((t,idx)=>t.classList.toggle('active',idx===curIdx));
  }
  function navGallery(d){ setSlide(curIdx+d); }
  function closeGallery(){ document.getElementById('lb').classList.remove('open'); document.body.style.overflow=''; }
  document.addEventListener('keydown',e=>{
    if(!document.getElementById('lb').classList.contains('open'))return;
    if(e.key==='Escape')closeGallery();
    if(e.key==='ArrowLeft')navGallery(-1);
    if(e.key==='ArrowRight')navGallery(1);
  });

  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');}),{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  /* ── 造訪人次計數器（Abacus，永久累計、跨 release 不歸零） ── */
  (function(){
    const numEl=document.getElementById('vcNum');
    const boxEl=document.getElementById('visitCounter');
    if(!numEl||!boxEl)return;
    const NS='titansoft-vietnam-2027', KEY='pageviews';
    // 進場淡入
    requestAnimationFrame(()=>setTimeout(()=>boxEl.classList.add('in'),120));
    function animateTo(target){
      const start=performance.now(), dur=1500;
      function frame(now){
        let p=Math.min((now-start)/dur,1);
        p=1-Math.pow(2,-10*p);                       // easeOutExpo
        numEl.textContent=Math.round(target*p).toLocaleString('en-US');
        if(p<1)requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
    fetch(`https://abacus.jasoncameron.dev/hit/${NS}/${KEY}`)
      .then(r=>r.json())
      .then(d=>{ if(d&&typeof d.value==='number')animateTo(d.value); else numEl.textContent='—'; })
      .catch(()=>{ numEl.textContent='—'; });
  })();

  /* ── 各梯次出發倒數天數 ── */
  (function(){
    const els=document.querySelectorAll('.b-countdown[data-depart]');
    if(!els.length)return;
    const now=new Date();
    const today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
    els.forEach(el=>{
      const p=el.dataset.depart.split('-');
      const dep=new Date(+p[0],+p[1]-1,+p[2]);
      const days=Math.round((dep-today)/86400000);
      const strong=el.querySelector('strong');
      if(days>1){ el.innerHTML='距出發 <strong>'+days+'</strong> 天'; }
      else if(days===1){ el.innerHTML='就在 <strong>明天</strong> 出發'; }
      else if(days===0){ el.innerHTML='<strong>今天</strong> 出發！'; }
      else { el.innerHTML='本梯次已出發'; }
    });
  })();

  /* ── Hero 背景輪播（crossfade） ── */
  (function(){
    const slides=document.querySelectorAll('.hero-slide');
    if(slides.length<2)return;
    let i=0;
    setInterval(()=>{
      slides[i].classList.remove('active');
      i=(i+1)%slides.length;
      slides[i].classList.add('active');
    },5000);
  })();
