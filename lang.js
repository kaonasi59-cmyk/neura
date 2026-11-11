(function () {
  var stored = localStorage.getItem("neura-lang");
  var lang = stored === "ru" || stored === "en" ? stored : (document.documentElement.lang || "en");
  function apply(next) {
    lang = next;
    document.documentElement.lang = next;
    localStorage.setItem("neura-lang", next);
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-set-lang") === next ? "true" : "false");
    });
  }
  apply(lang);
  document.querySelectorAll(".lang button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.getAttribute("data-set-lang"));
    });
  });
})();
