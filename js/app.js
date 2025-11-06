<script>
/* Notifications dropdown */
(function(){
  const bell = document.getElementById('bell');
  const noti = document.getElementById('noti');
  if(!bell || !noti) return;
  bell.addEventListener('click', ()=>{
    const open = noti.classList.toggle('open');
    bell.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('click', (e)=>{
    if(!noti.contains(e.target) && !bell.contains(e.target)) noti.classList.remove('open');
  });
})();

/* Mobile nav */
(function(){
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mainnav');
  if(!btn || !nav) return;
  btn.addEventListener('click', ()=>{
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
})();

/* Optional Dark mode (persisted) */
(function(){
  const key = 'cdc-theme';
  const toggle = document.getElementById('modeToggle');
  if(!toggle) return;
  const apply = (mode)=>{
    document.documentElement.classList.toggle('dark', mode === 'dark');
    toggle.textContent = mode === 'dark' ? '☀️' : '🌙';
    localStorage.setItem(key, mode);
  };
  const saved = localStorage.getItem(key) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');
  apply(saved);
  toggle.addEventListener('click', ()=> apply(document.documentElement.classList.contains('dark') ? 'light' : 'dark'));
})();
</script>
