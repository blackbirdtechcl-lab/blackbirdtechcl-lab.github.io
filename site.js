(function () {
  var html = document.documentElement;
  var es = document.getElementById("lang-es");
  var en = document.getElementById("lang-en");
  function setLang(l) {
    html.setAttribute("data-lang", l);
    html.setAttribute("lang", l);
    if (!es || !en) return;
    es.classList.toggle("on", l === "es");
    en.classList.toggle("on", l === "en");
    es.setAttribute("aria-selected", l === "es");
    en.setAttribute("aria-selected", l === "en");
    try { localStorage.setItem("bbt-lang", l); } catch (e) {}
  }
  var saved = "";
  try { saved = localStorage.getItem("bbt-lang") || ""; } catch (e) {}
  if (saved === "en" || saved === "es") setLang(saved);
  else if ((navigator.language || "es").slice(0, 2).toLowerCase() === "en") setLang("en");
  if (es) es.addEventListener("click", function () { setLang("es"); });
  if (en) en.addEventListener("click", function () { setLang("en"); });
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
  var els = document.querySelectorAll(".rv");
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (e) { e.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  els.forEach(function (e) { io.observe(e); });
})();
