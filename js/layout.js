// Shared layout for every page: phone frame, sliding photo background, top bar, footer and lightbox.
// Each page file only contains its own <main>; this script wraps it in the common parts.
// Set <body data-page="home"> on the home page, or <body data-title="Page Name"> on inner pages.

(function () {
  const isHome = document.body.dataset.page === "home";
  const main = document.querySelector("main");

  const SLIDES = ["images/hero/1.jpg", "images/hero/2.jpg", "images/hero/3.jpg"];
  const SLIDE_MS = 5000;

  // Phone frame (desktop only, see css) + background + top bar
  const device = document.createElement("div");
  device.className = "device";
  device.innerHTML = `
    <div class="bg" aria-hidden="true">
      ${SLIDES.map(src => `<img src="${src}" alt="">`).join("")}
    </div>
    <div class="app">
      <header class="topbar">
        <a class="icon-btn back" href="index.html" aria-label="Back to home">
          <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>
        </a>
        <span class="topbar-title"></span>
        <a class="icon-btn" href="https://www.instagram.com/lcc.unico" target="_blank" rel="noopener" aria-label="Instagram @lcc.unico">
          <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>
        </a>
      </header>
    </div>`;

  const app = device.querySelector(".app");
  device.querySelector(".topbar-title").textContent = isHome ? "" : document.body.dataset.title || "";
  app.appendChild(main);
  if (!isHome) {
    app.insertAdjacentHTML("beforeend", "<footer><p>© UNICO SIBLCC · SIB Life Community Church</p></footer>");
  }
  document.body.prepend(device);
  document.body.classList.toggle("inner", !isHome);

  // Background slideshow. The starting slide comes from the clock,
  // so moving between pages continues the slideshow instead of restarting it.
  const slides = [...device.querySelectorAll(".bg img")];
  const dots = [...document.querySelectorAll(".dots i")];
  let current = Math.floor(Date.now() / SLIDE_MS) % slides.length;
  function show(i) {
    slides.forEach((s, n) => s.classList.toggle("active", n === i));
    dots.forEach((d, n) => d.classList.toggle("active", n === i));
  }
  show(current);
  setInterval(() => show(current = (current + 1) % slides.length), SLIDE_MS);

  // Lightbox: tap any gallery image to view it full screen
  document.body.insertAdjacentHTML("beforeend", `
    <div class="lightbox" role="dialog" aria-modal="true">
      <button class="close" aria-label="Close">✕</button>
      <img alt="">
    </div>`);
  const lb = document.querySelector(".lightbox");
  const lbImg = lb.querySelector("img");
  document.addEventListener("click", e => {
    const btn = e.target.closest(".gallery button");
    if (btn) { lbImg.src = btn.querySelector("img").src; lb.classList.add("open"); }
  });
  lb.addEventListener("click", e => { if (e.target !== lbImg) lb.classList.remove("open"); });
})();
