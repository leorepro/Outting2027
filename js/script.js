const GAL = {"halong": ["assets/images/img-02.jpg", "assets/images/img-13.jpg", "assets/images/img-12.jpg", "assets/images/img-14.jpg", "assets/images/img-15.jpg", "assets/images/img-16.jpg"], "oldquarter": ["assets/images/img-03.jpg", "assets/images/img-17.jpg", "assets/images/img-18.jpg", "assets/images/img-19.jpg", "assets/images/img-20.jpg", "assets/images/img-21.jpg"], "train": ["assets/images/img-04.jpg", "assets/images/img-22.jpg", "assets/images/img-23.jpg", "assets/images/img-24.jpg"], "food": ["assets/images/img-05.jpg", "assets/images/img-25.jpg", "assets/images/img-26.jpg", "assets/images/img-27.jpg", "assets/images/img-28.jpg", "assets/images/img-29.jpg"], "grandworld": ["assets/images/img-06.jpg", "assets/images/img-30.jpg", "assets/images/img-31.jpg"], "cruise": ["assets/images/img-07.jpg", "assets/images/img-32.jpg", "assets/images/img-33.jpg", "assets/images/img-34.jpg", "assets/images/img-35.jpg", "assets/images/img-36.jpg"], "doughhaus": ["assets/images/img-37.jpg", "assets/images/img-38.jpg"]};
  const META = {"halong": {"title": "下龍灣海上桂林", "sub": "Hạ Long Bay · 世界自然遺產", "blurb": "搭乘頂級遊輪出海，巡遊驚訝洞、鐘乳石洞與 TITOP 英雄島。", "desc": "1994 年列入 UNESCO 世界遺產，逾 1,600 座石灰岩島嶼散落翡翠海面。傳統遊船穿梭島礁、登 TITOP 島俯瞰整片海上桂林，是北越最具代表性的風景。", "caps": ["下龍灣全景", "TITOP 島俯瞰視角", "揚帆巡航島礁間", "壯麗石灰岩地貌", "清晨薄霧中的島群", "傳統木造遊船 Junk"], "src": "Wikimedia Commons · CC 授權"}, "oldquarter": {"title": "河內 36 古街", "sub": "Old Quarter · 千年古都", "blurb": "漫遊千年古都，搭電瓶車探訪聖約瑟夫大教堂與在地紀念品。", "desc": "76 條老街各以昔日行業命名（賣絲、賣銀、賣紙…）。鄰近新哥德式聖約瑟夫大教堂與還劍湖，街巷咖啡香與機車川流，是體驗越南庶民生活的最佳場域。", "caps": ["古街街景", "聖約瑟夫大教堂", "老街市集巷弄", "街邊小販日常", "還劍湖畔", "還劍湖落日"], "src": "Wikimedia Commons · CC BY 3.0"}, "train": {"title": "河內鐵道街 Train Street", "sub": "Train Street · 鐵道時光", "blurb": "造訪著名河內鐵道街，行程另含雙層觀光列車半日遊。", "desc": "法國殖民時期鋪設的鐵軌從民宅門前穿過，兩側緊鄰咖啡館，火車經過近在咫尺，是河內最具人氣的打卡景點之一。", "caps": ["鐵軌穿過民宅", "鐵道街咖啡座", "軌道與紅燈籠", "旅人沿軌散步"], "src": "Wikimedia Commons · CC 授權"}, "food": {"title": "米其林美食巡禮", "sub": "Vietnamese Cuisine · 味蕾之旅", "blurb": "米其林入選與推薦餐廳，從越南河粉到創意越式饗宴。", "desc": "以牛骨慢熬高湯的越南河粉、酥脆春卷、烤肉米線 Bún chả、法式越南三明治 Bánh mì…行程一路吃遍北越道地與創意風味。", "caps": ["越南河粉 Phở", "越式料理拼盤", "烤肉米線 Bún chả", "越式春卷 Gỏi cuốn", "新鮮春卷", "越南法包 Bánh mì"], "src": "Wikimedia Commons · CC 授權"}, "grandworld": {"title": "越南威尼斯 Grand World", "sub": "The Venice · 歐風娛樂城", "blurb": "沉浸式劇場奇幻秀《聖珠再現》與威尼斯運河造景。", "desc": "VinGroup 打造的歐風娛樂城，830 公尺翡翠運河搭配義式彩色樓房與貢多拉船，水上實景劇場《The Grand Voyage》是最大亮點。位於河內近郊 Ocean City。", "caps": ["威尼斯區彩色樓房夜景", "《The Grand Voyage》水上帆船", "東西橋與運河造景"], "src": "Vinhomes Ocean Park · Wikimedia Commons · CC 授權"}, "cruise": {"title": "奢享海上遊船", "sub": "Cruise · 驚訝洞 Sung Sot", "blurb": "出海遊船並停靠最大鐘乳石洞「驚訝洞」，船上享自助午餐。", "desc": "遊船巡航石灰岩島群，停靠下龍灣最大鐘乳石洞「驚訝洞 Sung Sot Cave」，洞內鐘乳石柱壯觀，午間於船上享用自助餐。", "caps": ["下龍灣遊船船隊", "巡航於翡翠海面", "驚訝洞鐘乳石", "驚訝洞內景", "傳統觀光遊船", "木造帆船 Junk"], "src": "Wikimedia Commons · CC 授權"}, "doughhaus": {"title": "LÌM LIM DOUGHHAUS 甜甜圈", "sub": "Hanoi · 人氣甜點名所", "blurb": "抵達河內第一站，先嚐人氣手作甜甜圈與咖啡。", "desc": "河內超人氣的手作甜甜圈專賣店，繽紛多彩的造型與多種口味是排隊打卡名所。抵達河內後的第一站，先以一份甜甜圈與越式咖啡揭開旅程序幕。", "caps": ["繽紛多彩的甜甜圈塔", "多款口味手作甜甜圈"], "src": "Wikimedia Commons · CC 授權（示意圖）"}};
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
