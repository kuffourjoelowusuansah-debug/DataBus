// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqg3E9tuKRcEnq2DdP6FjtG0LqnAjCHfM",
    authDomain: "joeldata-25d06.firebaseapp.com",
    projectId: "joeldata-25d06",
    storageBucket: "joeldata-25d06.firebasestorage.app",
    messagingSenderId: "555857869458",
    appId: "1:555857869458:web:db96a97fca5983b142044b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// App State & Assets
let currentNet = "MTN"; 
let selG = ""; 
let selP = 0;

const mtnLogo = 'https://upload.wikimedia.org/wikipedia/commons/a/af/MTN_Logo.svg';
const atLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAAD8/PwEBAT29vb5+fnw8PDm5ubS0tL09PS+vr7W1tbh4eHS0tLk5OTm5ubIyMi5ubm3t7fNzc3V1dXExMSsrKyamprAwMC/v79BQUFmZmZqamp3d3dycnJ9fX14eHhTU1NGRkZHR0dMTEyqjU8qAAAE90lEQVR4nO2daXeiOhSGE8Y5Yp0HnLHe///XHeocp62lbKAn66v9vS6W9SInuSR7QicAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgG+AnidG5N6T+S9Yk27S0v00YvT906f3TscP5mSbuv963I+9q/V7N6Rnu/tWp4DkZ89P/Y/nU7317Lne2iY16qZ3C8h+NvzUrB/N/u7Wc70NSXo1un999C7f+17Bf6YfBWh6YfBUl6Y58X1j6F7XFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4Vv3Fz6FbXFq4VvzFz6N3eA7VbT7uXp6MvX1O5+X1j3V7u79e95f68p96S6q765T2uT6pX/Nf8B9zX/BfgUvEIAAAAASUVORK5CYII='; 

// Bundle Data
const mtnData = [{g:"1 GB", p:5}, {g:"2 GB", p:10}, {g:"3 GB", p:15}, {g:"4 GB", p:20}, {g:"5 GB", p:25}, {g:"6 GB", p:30}, {g:"8 GB", p:40}, {g:"10 GB", p:50}, {g:"12 GB", p:55}, {g:"15 GB", p:65}, {g:"20 GB", p:85}, {g:"25 GB", p:105}, {g:"30 GB", p:130}, {g:"40 GB", p:165}, {g:"50 GB", p:200}];
const atData = [{g:"1GB",p:4.5}, {g:"2GB",p:9}, {g:"3GB",p:14}, {g:"4GB",p:18}, {g:"5GB",p:20.5}, {g:"6GB",p:25}, {g:"8GB",p:32}, {g:"10GB",p:40}, {g:"12GB",p:50}, {g:"15GB",p:60}, {g:"25GB",p:100}, {g:"30GB",p:125}, {g:"40GB",p:160}, {g:"50GB",p:205}];

// Initial Load
window.onload = () => {
    renderGrid('mtnGrid', mtnData, 'MTN', 'Non Expiry', mtnLogo);
    renderGrid('atGrid', atData, 'AT', '30 Days', atLogo);
    lucide.createIcons();
    startPopups();
};

// Auth Listener
auth.onAuthStateChanged(user => {
    const btn = document.getElementById('authBtn');
    const pBtn = document.getElementById('profileBtn');
    if (user) {
        btn.innerHTML = `<i data-lucide="log-out"></i> Log Out`;
        pBtn.style.display = 'flex';
        document.getElementById('buyerEmail').value = user.email;
    } else {
        btn.innerHTML = `<i data-lucide="user"></i> Sign In`;
        pBtn.style.display = 'none';
    }
    lucide.createIcons();
});

// UI Handlers
function toggleMenu() { document.getElementById('sideMenu').classList.toggle('active'); }
function closeModal() { document.getElementById('genericModal').style.display = 'none'; }
function toggleTheme() { document.body.classList.toggle('light-mode'); }
function showReceipt() { alert("Check your Dashboard for order history!"); }

function handleAuthClick() { auth.currentUser ? auth.signOut() : showModal('login'); }

function signInGoogle() {
    const p = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(p).then(() => closeModal());
}

// Data Rendering
function renderGrid(id, data, net, exp, logo) {
    const grid = document.getElementById(id);
    data.forEach(d => {
        const card = document.createElement('div');
        card.className = 'bundle-card';
        card.innerHTML = `
            <div class="plate-header">
                <div class="plate-amt">${d.g}</div>
                <img src="${logo}" class="plate-logo">
            </div>
            <div class="plate-details">
                <div class="detail-item"><span class="detail-label">Price</span><span class="detail-val">₵${d.p.toFixed(2)}</span></div>
                <div class="detail-item"><span class="detail-label">Stock</span><span class="detail-val" style="color:#2ecc71">In Stock</span></div>
                <div class="detail-item"><span class="detail-label">Duration</span><span class="detail-val">${exp}</span></div>
                <div class="detail-item"><span class="detail-label">Delivery</span><span class="detail-val">Instant</span></div>
            </div>
            <button class="plate-buy-btn">BUY BUNDLE</button>`;
        
        card.onclick = () => {
            document.querySelectorAll('.bundle-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selG = d.g; selP = d.p;
            document.getElementById('orderForm').style.display = 'block';
            document.getElementById('orderLabel').innerText = `Buying ${d.g} ${net}`;
            window.scrollTo({ top: document.getElementById('orderForm').offsetTop - 100, behavior: 'smooth' });
        };
        grid.appendChild(card);
    });
}

function switchTab(net) {
    currentNet = net.toUpperCase();
    const f = document.getElementById('mainFeatures');
    const m = document.getElementById('mtnTab');
    const a = document.getElementById('atTab');
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active', 'mtn-active', 'at-active'));
    
    if(net === 'mtn') {
        f.className = 'features-box mtn-theme';
        m.classList.add('active', 'mtn-active');
        document.getElementById('mtnGrid').style.display = 'grid';
        document.getElementById('atGrid').style.display = 'none';
    } else {
        f.className = 'features-box at-theme';
        a.classList.add('active', 'at-active');
        document.getElementById('mtnGrid').style.display = 'none';
        document.getElementById('atGrid').style.display = 'grid';
    }
}

// Payment Logic
function handlePayment() {
    const phone = document.getElementById('recipientPhone').value;
    const email = document.getElementById('buyerEmail').value;
    
    if(phone.length < 10) return alert("Enter valid phone.");
    
    // Fee calculation logic
    let total = selP + (selP < 30 ? 0.3 : 0.9);
    
    const h = PaystackPop.setup({
        key: 'pk_live_90305707d30b6282979eac837bbbc9509da579af',
        email: email, 
        amount: Math.round(total * 100), 
        currency: 'GHS',
        callback: (res) => {
            if(auth.currentUser) {
                db.collection('orders').add({
                    email: auth.currentUser.email,
                    amount: selP,
                    bundle: `${selG} ${currentNet}`,
                    ref: res.reference,
                    date: new Date().toLocaleDateString('en-GB'),
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
            }
            window.location.href = `https://wa.me/233248745662?text=ORDER: ${selG} ${currentNet} to ${phone}. Ref: ${res.reference}`;
        }
    });
    h.openIframe();
}

// Modal System
async function showModal(type) {
    const body = document.getElementById('modalBody');
    if(type === 'profile') {
        const u = auth.currentUser;
        body.innerHTML = '<h3>Syncing Data...</h3>';
        const snap = await db.collection('orders').where('email', '==', u.email).orderBy('timestamp', 'desc').get();
        let total = 0; let list = '';
        snap.forEach(d => { 
            total += d.data().amount; 
            list += `<div style="background:var(--glass); padding:10px; border-radius:10px; margin-bottom:10px; font-size:12px;"><b>${d.data().bundle}</b> - ₵${d.data().amount.toFixed(2)}<br><small>${d.data().date}</small></div>`; 
        });
        body.innerHTML = `
            <div style="text-align:center">
                <img src="${u.photoURL}" style="width:60px; border-radius:50%; border:2px solid var(--accent)">
                <h2 style="margin:5px 0">${u.displayName.split(' ')[0]}'s Profile</h2>
                <div style="background:var(--accent-grad); padding:15px; border-radius:15px; color:white; margin:15px 0">
                    <small>Total Invested</small><h1 style="margin:0">₵${total.toFixed(2)}</h1>
                </div>
            </div>
            <div class="menu-item" onclick="showModal('work')"><i data-lucide="briefcase"></i> Work With Us</div>
            <h4 style="margin-bottom:10px">Recent Orders</h4>
            <div style="max-height:180px; overflow-y:auto">${list || 'No orders yet.'}</div>`;
    } else if(type === 'login') {
        body.innerHTML = `<h2>Sign In</h2><p>Sign in to track orders and save your details.</p><button class="pay-btn" style="background:#4285F4" onclick="signInGoogle()">GOOGLE SIGN IN</button>`;
    } else if(type === 'work') {
        body.innerHTML = `<h2>Join the Team</h2><p>Contact us on WhatsApp to become a vendor.</p><button class="pay-btn" onclick="window.location.href='https://wa.me/233248745662'">MESSAGE JOEL</button>`;
    } else if(type === 'help') {
        body.innerHTML = `<h2>How to Buy</h2><p>1. Select Bundle<br>2. Enter Phone & Email<br>3. Pay with MoMo/Card<br>4. Instant Activation</p>`;
    } else if(type === 'terms') {
        body.innerHTML = `<h2>Policy</h2><p>Strictly no refunds for wrong numbers. Verify before payment.</p>`;
    }
    lucide.createIcons();
    document.getElementById('genericModal').style.display = 'flex';
}

// "Social Proof" Popups
function startPopups() {
    const locs = ["Accra", "Kumasi", "Tema", "Kasoa", "Ho", "Tamale"];
    setInterval(() => {
        const l = locs[Math.floor(Math.random() * locs.length)];
        const isMtn = Math.random() > 0.4;
        document.getElementById('toastLogo').src = isMtn ? mtnLogo : atLogo;
        document.getElementById('toastMsg').innerHTML = `Someone from <span>${l}</span><br>bought <b>${isMtn?'MTN':'AT'} Data</b>`;
        document.getElementById('toast').classList.add('show');
        setTimeout(() => document.getElementById('toast').classList.remove('show'), 4000);
    }, 10000);
}
