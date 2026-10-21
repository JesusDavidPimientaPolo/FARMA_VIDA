document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnScrollInteligente');
  if (!btn) return;

  let timer;

  function actualizar() {
    const y = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;

    if (y < 200) {
      btn.innerHTML = '<i class="bi bi-chevron-down"></i>';
      btn.onclick = () => window.scrollTo({ top: total, behavior: 'smooth' });
    } else {
      btn.innerHTML = '<i class="bi bi-chevron-up"></i>';
      btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function mostrar() {
    btn.classList.add('visible');
    clearTimeout(timer);
    timer = setTimeout(() => {
      btn.classList.remove('visible');
    }, 2500);
  }

  window.addEventListener('scroll', () => {
    actualizar();
    mostrar();
  });

  actualizar();
});