// Category dial filter
const dialNav = document.getElementById('dialNav');
const items = document.querySelectorAll('.menu-item');
dialNav.addEventListener('click', (e) => {
  const btn = e.target.closest('.dial-btn');
  if(!btn) return;
  dialNav.querySelectorAll('.dial-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  items.forEach(item => {
    item.hidden = filter !== 'all' && item.dataset.cat !== filter;
  });
});
