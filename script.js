const Core = {
    data: { 
        prods:[], rips:[], leads:[], cart:[], orders:[], history:[], 
        cats:["Top Up","App Prem","Nokos"], 
        vous:[{c:"MAX",v:5000}], 
        sets:{
            name:"MaxShop", title:"MaxShop OS", slogan:"Digital Store", 
            color:"#ffffff", wa:"6289660770777", wacs:"6289660770777", group:"", banner:"",
            foot:"&copy; 2026 MaxShop", info:"Selamat Datang", gar:"Aman 100%", lic:"Official License",
            soc:{fb:"", ig:"", tt:"", yt:""}
        }, 
        auth:{u:"admin", p:"admin123"} 
    },
    init() {
        try {
            const s = localStorage.getItem('max_os_v1_02');
            if(s) this.data = JSON.parse(s);
            else {
                const t = localStorage.getItem('max_os_v1') || localStorage.getItem('max_os_v1_01');
                if(t) this.data = Object.assign(this.data, JSON.parse(t));
                // Clean old maintenance data if exists
                if(this.data.sets.maintenance !== undefined) delete this.data.sets.maintenance;
                this.save();
            }
        } catch(e){ console.log("DB Init"); this.save(); }
    },
    save() { localStorage.setItem('max_os_v1_02', JSON.stringify(this.data)); },
    reset() { if(confirm("Reset Total?")) { localStorage.clear(); location.reload(); } },
    fmt: (n) => "Rp "+parseInt(n).toLocaleString('id-ID'),
    dt: () => { const d=new Date(); return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`; }
};

const Utils = {
    compress: (f) => new Promise(r => { const d=new FileReader(); d.readAsDataURL(f); d.onload=e=>{ const i=new Image(); i.src=e.target.result; i.onload=()=>{ const c=document.createElement('canvas'); const x=c.getContext('2d'); const s=720/Math.max(i.width,i.height); c.width=i.width*(s<1?s:1); c.height=i.height*(s<1?s:1); x.drawImage(i,0,0,c.width,c.height); r(c.toDataURL('image/jpeg',0.6)); } } }),
    toast: (m, t='success') => { const d=document.createElement('div'); d.className='toast'; d.style.borderLeftColor=t==='error'?'red':'var(--primary)'; d.innerHTML=m; document.getElementById('toast-box').appendChild(d); setTimeout(()=>d.remove(),3000); },
    copy: (t) => { navigator.clipboard.writeText(t); Utils.toast("Kode Disalin!"); }
};

const Format = {
    buy(p, pay, vCode, vDisc) {
        const idT = "TX" + Date.now().toString().slice(-6);
        const total = p.price - vDisc;
        let m = `*─── [ PESANAN BARU ] ───*\n\n`;
        m += `🆔 ID: ${idT}\n⌚ Waktu: ${Core.dt()}\n📦 Produk: ${p.name}\n💳 Pay: ${pay}\n`;
        if(vCode) m += `🎫 Voucher: ${vCode} (-${Core.fmt(vDisc)})\n`;
        m += `💰 *TOTAL: ${Core.fmt(total)}*\n\n`;
        m += `*INFO CS:* ${Core.data.sets.group || 'Hubungi Admin'}\n`;
        m += `--------------------------\n_Mohon proses pesanan ini_`;
        return encodeURIComponent(m);
    },
    kritik() {
        return encodeURIComponent(`*─── [ KRITIK & SARAN ] ───*\nHalo Admin, saya ingin menyampaikan:\n\n(Isi pesan Anda)`);
    }
};

let tempP=[], tempR=[], tempH=[], curId=null, disc=0;

const App = {
    start() {
        Core.init();
        setTimeout(()=>{document.getElementById('loader').style.display='none'},1000);
        this.apply(); this.home(); this.ord(); this.lead();
        setTimeout(()=>{document.getElementById('resetBtn').style.display='block'},3000);
    },
    apply() {
        const s=Core.data.sets;
        document.documentElement.style.setProperty('--primary', s.color);
        document.getElementById('navTitle').innerText=s.name;
        document.getElementById('heroT').innerText=s.name;
        document.getElementById('heroD').innerText=s.slogan;
        document.getElementById('fText').innerHTML=s.foot;
        document.getElementById('fabWa').href=`https://wa.me/${s.wa}`;
        document.getElementById('accInfoText').innerText=s.info;
        if(s.banner) document.getElementById('heroBanner').style.backgroundImage = `url('${s.banner}')`;
        if(s.info) document.getElementById('accInfoBox').style.display='block';
        document.getElementById('webTitle').innerText = s.title;
        
        document.getElementById('fFb').href = s.soc.fb || "#";
        document.getElementById('fIg').href = s.soc.ig || "bidzz.railways";
        document.getElementById('fTt').href = s.soc.tt || " lemondangaram ";
        document.getElementById('fYt').href = s.soc.yt || "#";

        document.getElementById('sTitle').value=s.title;
        document.getElementById('sName').value=s.name; document.getElementById('sSlogan').value=s.slogan;
        document.getElementById('sBanner').value=s.banner||"";
        document.getElementById('sFoot').value=s.foot; document.getElementById('sColor').value=s.color;
        document.getElementById('sWa').value=s.wa; document.getElementById('sWaCs').value=s.wacs;
        document.getElementById('sGroup').value=s.group; document.getElementById('sInfo').value=s.info;
        document.getElementById('sFb').value=s.soc.fb; document.getElementById('sIg').value=s.soc.ig;
        document.getElementById('sTt').value=s.soc.tt; document.getElementById('sYt').value=s.soc.yt;
    },
    home(cat='all') {
        const cf=document.getElementById('catList'); cf.innerHTML=`<div class="chip ${cat==='all'?'active':''}" onclick="App.home('all')">All</div>`;
        Core.data.cats.forEach(c=>cf.innerHTML+=`<div class="chip ${cat===c?'active':''}" onclick="App.home('${c}')">${c}</div>`);
        const g=document.getElementById('prodGrid'); g.innerHTML='';
        const l=cat==='all'?Core.data.prods:Core.data.prods.filter(x=>x.cat===cat);
        if(l.length === 0) g.innerHTML = `<div class="text-c text-m" style="grid-column:1/-1;padding:20px">Belum ada produk.</div>`;
        l.forEach(p=>{
            const img=p.imgs[0]||'';
            if(p.stock>0 || p.sold) {
                g.innerHTML+=`<div class="card" onclick="App.det(${p.id})">
                    <div class="card-img-box"><img src="${img}" class="card-img"><div class="card-badge">${p.cat}</div>${p.sold?'<div class="badge-sold">TERJUAL</div>':''}</div>
                    <div class="card-body"><div class="card-title">${p.name}</div><div class="card-price">${Core.fmt(p.price)}</div></div>
                </div>`;
            }
        });
        document.getElementById('cartBadge').innerText=Core.data.cart.length;
    },
    det(id) {
        curId=id; const p=Core.data.prods.find(x=>x.id===id); if(!p)return;
        const s=document.getElementById('detSlider'); s.innerHTML='';
        p.imgs.forEach(i=>s.innerHTML+=`<div class="slide"><img src="${i}"></div>`);
        document.getElementById('detName').innerText=p.name;
        document.getElementById('detPrice').innerText=Core.fmt(p.price);
        document.getElementById('detCat').innerText=p.cat;
        document.getElementById('detDesc').innerText=p.desc;
        document.getElementById('detStock').innerText=p.stock;
        
        document.getElementById('detVou').value = ''; disc = 0; 

        const btn=document.getElementById('btnBuyWa');
        if(p.sold||p.stock<1){ btn.innerText="HABIS"; btn.style.background="#333"; btn.disabled=true; }
        else {
            btn.innerText="BELI WA"; btn.style.background="var(--primary)"; btn.disabled=false;
            btn.onclick=()=>{
                const pay=document.getElementById('detPay').value;
                const vCode = document.getElementById('detVou').value;
                window.open(`https://wa.me/${Core.data.sets.wa}?text=${Format.buy(p, pay, vCode, disc)}`,'_blank');
            }
        }
        Modal.open('modalDetail');
    },
    checkVou() {
        const code = document.getElementById('detVou').value;
        const v = Core.data.vous.find(x => x.c === code);
        if(v) { disc = v.v; Utils.toast(`Hemat ${Core.fmt(v.v)}`); }
        else { disc = 0; Utils.toast("Invalid", "error"); }
    },
    renderVou() {
        const d=document.getElementById('pubVouList'); d.innerHTML='';
        Core.data.vous.forEach(v=>{ d.innerHTML+=`<div class="card" style="padding:15px;text-align:center;border:1px dashed gold;color:gold;margin-bottom:10px"><b>${v.c}</b><br>Disc ${Core.fmt(v.v)}<br><small style="color:#888;cursor:pointer" onclick="Utils.copy('${v.c}')">Salin</small></div>`; });
    },
    ord(){
        const c=document.getElementById('orderList'); c.innerHTML='';
        const all = [...Core.data.orders, ...(Core.data.history||[])].sort((a,b)=>b.id.localeCompare(a.id));
        if(all.length === 0) c.innerHTML = `<div class="text-c text-m" style="padding:20px">Belum ada riwayat.</div>`;
        all.forEach(o=>{
            let h = `<div style="background:#1a1a1a;padding:15px;border-radius:12px;border:var(--border);margin-bottom:10px"><div class="between flex"><b>${o.buyer||'User'}</b><small class="text-m">${o.date}</small></div><hr style="border:0;border-top:1px solid #333;margin:5px 0"><p class="text-p">${o.items||'Manual'}</p><div class="between flex mt-2"><span>Total</span><b class="text-g">${Core.fmt(o.total)}</b></div>`;
            if(o.ss) h += `<div style="margin-top:10px;text-align:center"><img src="${o.ss}" style="max-height:100px;border-radius:4px"></div>`;
            h += `</div>`; c.innerHTML += h;
        });
    },
    lead(){
        const b=document.getElementById('leadTable'); b.innerHTML='';
        Core.data.leads.forEach((l,i)=>b.innerHTML+=`<tr style="border-bottom:1px solid #222"><td style="padding:12px;font-family:'Rajdhani';font-size:1.2rem;color:var(--primary)">#${i+1}</td><td>${l.name}</td><td style="text-align:right;padding-right:10px;color:var(--gold)">${l.total}</td></tr>`);
    },
    search(v){
        const l=Core.data.prods.filter(x=>x.name.toLowerCase().includes(v.toLowerCase()));
        const g=document.getElementById('prodGrid'); g.innerHTML='';
        l.forEach(p=>{ g.innerHTML+=`<div class="card" onclick="App.det(${p.id})"><div class="card-img-box"><img src="${p.imgs[0]}" class="card-img"></div><div class="card-body"><div class="card-title">${p.name}</div><div class="card-price">${Core.fmt(p.price)}</div></div></div>`; });
    },
    cs(){ window.open(`https://wa.me/${Core.data.sets.wacs}?text=Halo%20Admin%20BidzzStore`, '_blank'); },
    kritik() { window.open(`https://wa.me/${Core.data.sets.wacs}?text=${Format.kritik()}`, '_blank'); }
};

const Nav = {
    to(id, el) {
        window.scrollTo(0,0);
        document.querySelectorAll('.page').forEach(e=>e.classList.remove('active'));
        document.getElementById('p-'+id).classList.add('active');
        if(el) { document.querySelectorAll('.d-link').forEach(e=>e.classList.remove('active')); el.classList.add('active'); }
        if(window.innerWidth < 768) { document.querySelectorAll('.nav-item').forEach(e=>e.classList.remove('active')); }
    }
};

const Modal = {
    open(id) { 
        const el = document.getElementById(id);
        if(el) {
            el.style.display = 'flex'; 
            if(id==='modalCart') Cart.render();
            if(id==='modalVou') App.renderVou();
            if(id==='modalInfo') document.getElementById('iCon').innerText=`GARANSI:\n${Core.data.sets.gar}\n\nLIC:\n${Core.data.sets.lic}`;
        }
    },
    close(id) { 
        const el = document.getElementById(id);
        if(el) { el.style.display = 'none'; }
    }
};

const Auth = {
    login() {
        if(document.getElementById('u').value===Core.data.auth.u && document.getElementById('p').value===Core.data.auth.p) {
            Modal.close('modalLogin'); 
            setTimeout(() => Admin.open(), 300);
        } else Utils.toast('Login Gagal!','error');
    }
};

const Cart = {
    add() {
        const p=Core.data.prods.find(x=>x.id===curId);
        if(p&&p.stock>0){ Core.data.cart.push(p); Core.save(); App.render(); Utils.toast('Masuk Keranjang'); Cart.upd(); }
    },
    del(i) { Core.data.cart.splice(i,1); Core.save(); this.upd(); this.render(); },
    upd() { document.getElementById('cartBadge').innerText=Core.data.cart.length; },
    render() {
        const l=document.getElementById('cartList'); l.innerHTML=''; let t=0;
        Core.data.cart.forEach((p,i)=>{ t+=p.price; l.innerHTML+=`<div class="between flex" style="background:#1a1a1a;padding:10px;border-radius:8px"><span>${p.name}<br><small class="text-p">${Core.fmt(p.price)}</small></span><i class="fa-solid fa-trash text-d" onclick="Cart.del(${i})"></i></div>`; });
        document.getElementById('cTotal').innerText=Core.fmt(t-disc);
    },
    apply() {
        const v=Core.data.vous.find(x=>x.c===document.getElementById('vIn').value);
        if(v){disc=v.v;this.render();Utils.toast("Voucher OK");}else Utils.toast("Salah","error");
    },
    cout() {
        if(Core.data.cart.length===0) return;
        const id="T"+Date.now().toString().slice(-5);
        let m=`🧾 *ORDER CART*\nID: ${id}\nPay: ${document.getElementById('cartPay').value}\n\n`; let t=0;
        Core.data.cart.forEach(x=>{ m+=`- ${x.name} (${Core.fmt(x.price)})\n`; t+=x.price; });
        m+=`\nTotal: ${Core.fmt(t-disc)}`;
        Core.data.orders.unshift({id:id, buyer:'Saya', date:Core.dt(), items:`${Core.data.cart.length} Items`, total:t-disc});
        Core.data.cart=[]; disc=0; Core.save(); Cart.upd(); Modal.close('modalCart'); App.home(); App.ord();
        window.open(`https://wa.me/${Core.data.sets.wa}?text=${encodeURIComponent(m)}`,'_blank');
    }
};

const Admin = {
    open() { 
        document.getElementById('admin-layer').style.display = 'flex'; 
        this.view('home'); 
        this.render(); 
    },
    close() { document.getElementById('admin-layer').style.display = 'none'; },
    view(id) {
        document.querySelectorAll('.adm-page').forEach(e=>e.classList.remove('active'));
        const el = document.getElementById('adm-'+id);
        if(el) el.classList.add('active'); 
        if(id==='list') this.list(); if(id==='lead') this.lead(); if(id==='hist') this.loadH();
    },
    back() { this.view('home'); },
    async proc(inp,t) {
        const btn=document.getElementById('btnPost'); if(btn)btn.innerText="COMPRESS...";
        const arr=[]; for(let f of inp.files) arr.push(await Utils.compress(f));
        if(t==='prod') { tempP=[...tempP,...arr]; this.grid('upGrid',tempP,'prod'); }
        if(t==='hist') { tempH=[...tempH,...arr]; this.grid('upGridH',tempH,'hist'); }
        if(t==='rip') { tempR=[...tempR,...arr]; this.grid('upGridR',tempR,'rip'); }
        if(btn)btn.innerText="POSTING";
    },
    grid(id,arr,t) {
        const g=document.getElementById(id); const btn=g.querySelector('.up-box'); g.innerHTML=''; g.appendChild(btn);
        arr.forEach((x,i)=>{ g.innerHTML+=`<div style="aspect-ratio:1;background:url(${x}) center/cover;border-radius:8px;position:relative"><div onclick="Admin.delI('${t}',${i})" style="position:absolute;top:2px;right:2px;background:red;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;cursor:pointer">X</div></div>`; });
    },
    delI(t,i){ 
        if(t==='prod'){ tempP.splice(i,1);this.grid('upGrid',tempP,'prod'); }
        if(t==='hist'){ tempH.splice(i,1);this.grid('upGridH',tempH,'hist'); }
        if(t==='rip'){ tempR.splice(i,1);this.grid('upGridR',tempR,'rip'); }
    },
    render() {
        const s=document.getElementById('pCat'); s.innerHTML=''; const c=document.getElementById('admCatList'); c.innerHTML='';
        Core.data.cats.forEach((x,i)=>{ s.innerHTML+=`<option value="${x}">${x}</option>`; c.innerHTML+=`<div class="chip" style="font-size:0.8rem">${x} <span style="color:red;cursor:pointer" onclick="Admin.delC(${i})">x</span></div>`; });
        const v=document.getElementById('admVouList'); v.innerHTML='';
        Core.data.vous.forEach((x,i)=>{ v.innerHTML+=`<div class="between flex" style="background:#222;padding:5px 10px;border-radius:4px"><span>${x.c} - ${Core.fmt(x.v)}</span><span style="color:red;cursor:pointer" onclick="Admin.delV(${i})">x</span></div>`; });
        document.getElementById('stProd').innerText=Core.data.prods.length;
        document.getElementById('stOrd').innerText=Core.data.orders.length;
    },
    addP() {
        Core.data.prods.unshift({ id:Date.now(), name:document.getElementById('pName').value, cat:document.getElementById('pCat').value, price:parseInt(document.getElementById('pPrice').value), stock:parseInt(document.getElementById('pStock').value), desc:document.getElementById('pDesc').value, imgs:[...tempP], sold:false });
        Core.save(); Utils.toast("Sukses"); tempP=[]; this.grid('upGrid',[],'prod'); this.view('list'); App.home();
    },
    list(){ const c=document.getElementById('admListP'); c.innerHTML=''; Core.data.prods.forEach(p=>{ c.innerHTML+=`<div class="between flex" style="background:#222;padding:10px;border-radius:8px"><span>${p.name} <small>(${p.stock})</small></span><div><button class="btn-s btn-sm" onclick="Admin.tog(${p.id})">STOK</button> <button class="btn-d btn-sm" onclick="Admin.del(${p.id})">DEL</button></div></div>`; }); },
    tog(id){ const p=Core.data.prods.find(x=>x.id===id); p.stock=p.stock>0?0:1; p.sold=p.stock<=0; Core.save(); this.list(); App.home(); },
    del(id){ if(confirm('Del?')){Core.data.prods=Core.data.prods.filter(x=>x.id!==id);Core.save();this.list();App.home()} },
    save(){ 
        const s=Core.data.sets; 
        s.title=document.getElementById('sTitle').value; s.name=document.getElementById('sName').value; s.slogan=document.getElementById('sSlogan').value; s.banner=document.getElementById('sBanner').value;
        s.foot=document.getElementById('sFoot').value; s.color=document.getElementById('sColor').value;
        s.wa=document.getElementById('sWa').value; s.wacs=document.getElementById('sWaCs').value; s.group=document.getElementById('sGroup').value; s.info=document.getElementById('sInfo').value;
        s.soc.fb=document.getElementById('sFb').value; s.soc.ig=document.getElementById('sIg').value; s.soc.tt=document.getElementById('sTt').value; s.soc.yt=document.getElementById('sYt').value;
        Core.save(); App.apply(); Utils.toast("Saved");
    },
    changePass() { const o=document.getElementById('oldPass').value; const n=document.getElementById('newPass').value; if(o===Core.data.auth.p && n){ Core.data.auth.p=n; Core.save(); Utils.toast("Pass Updated"); } else Utils.toast("Gagal","error"); },
    addH() {
        const nm = document.getElementById('hName').value; const tt = document.getElementById('hTotal').value;
        if(nm && tt) {
            if(!Core.data.history) Core.data.history = [];
            Core.data.history.unshift({ id: "M"+Date.now(), buyer: nm, total: parseInt(tt), date: Core.dt(), items: "Riwayat Manual", ss: tempH[0] || null });
            Core.save(); Utils.toast("Riwayat Added"); tempH=[]; this.grid('upGridH',[],'hist'); this.loadH(); App.ord();
        }
    },
    loadH() { const c=document.getElementById('admHistList'); c.innerHTML=''; (Core.data.history||[]).forEach((x,i)=>{ c.innerHTML+=`<div class="between flex" style="background:#222;padding:10px"><span>${x.buyer} - ${Core.fmt(x.total)}</span><button class="text-d" onclick="Admin.delH(${i})">x</button></div>`; }); },
    delH(i) { Core.data.history.splice(i,1); Core.save(); this.loadH(); App.ord(); },
    addC(){ const v=document.getElementById('cNew').value; if(v){Core.data.cats.push(v);Core.save();this.render();App.home();document.getElementById('cNew').value=''} },
    delC(i){ if(confirm('Del?')){Core.data.cats.splice(i,1);Core.save();this.render();App.home()} },
    addV(){ Core.data.vous.push({c:document.getElementById('vC').value, v:parseInt(document.getElementById('vD').value)}); Core.save(); this.render(); },
    delV(i){ Core.data.vous.splice(i,1); Core.save(); this.render(); },
    addL(){ Core.data.leads.push({name:document.getElementById('lName').value, total:document.getElementById('lTotal').value}); Core.save(); this.lead(); App.lead(); },
    lead(){ const c=document.getElementById('admL'); c.innerHTML=''; Core.data.leads.forEach((l,i)=>c.innerHTML+=`<div class="between flex" style="background:#222;padding:10px;border-radius:8px"><span>${l.name}</span><button class="text-d" onclick="Admin.delL(${i})">X</button></div>`); },
    delL(i){ Core.data.leads.splice(i,1); Core.save(); this.lead(); App.lead(); },
    addR(){ Core.data.rips.unshift({n:document.getElementById('rName').value, i:document.getElementById('rInfo').value, imgs:[...tempR]}); Core.save(); tempR=[]; this.grid('upGridR',[],'rip'); this.back(); }
};

window.onload = App.start;