
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("spa-content");
  const links = document.querySelectorAll("[data-page]");
  const menu = document.querySelector(".menu");

  async function loadPage(page, push = true) {
    try {
      const res = await fetch(`static/pages/${page}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      content.innerHTML = html;

      links.forEach(link => {
        const linkPage = link.getAttribute("data-page");
        if (linkPage === page) {
          link.classList.add("active-page");
          link.removeAttribute("href");
          link.style.pointerEvents = "none";
          link.style.opacity = "0.8";
        } else {
          link.classList.remove("active-page");
          link.setAttribute("href", "#");
          link.style.pointerEvents = "auto";
          link.style.opacity = "1";
        }
      });

      if (push) {
        const cleanPath = page.replace('.html', '');
        history.pushState({ page }, '', cleanPath);
      }

    } catch (err) {
      try {
        const res404 = await fetch(`static/pages/404.html`);
        const html404 = await res404.text();
        content.innerHTML = html404;
        history.pushState({ page: '404.html' }, '', '404');
      } catch (err2) {
        content.innerHTML = "<p>404 – Seite nicht gefunden.</p>";
      }
    }
  }

  const rawPath = window.location.pathname.split('/').pop();
  const page = (rawPath === '' || rawPath === 'index.php') ? 'start.html' : `${rawPath}.html`;
  loadPage(page);

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      loadPage(page);
    });
  });

  window.addEventListener("popstate", (e) => {
    const page = e.state?.page || 'start.html';
    loadPage(page, false);
  });
});