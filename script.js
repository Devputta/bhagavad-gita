// Small, deliberate touch: confirm the APK file actually exists at build/deploy
// time, so a missing upload shows a clear message instead of a silent 404 for
// visitors. Runs once on load, no polling, nothing else on the page moves on
// its own.
(function () {
  var meta = document.getElementById("apk-meta");
  var link = document.querySelector('a[download][href$=".apk"]');
  if (!meta || !link) return;

  fetch(link.getAttribute("href"), { method: "HEAD" })
    .then(function (res) {
      if (!res.ok) throw new Error("missing");
      var bytes = Number(res.headers.get("content-length"));
      if (bytes) {
        var mb = (bytes / (1024 * 1024)).toFixed(1);
        meta.textContent = "Android APK · " + mb + " MB";
      } else {
        meta.textContent = "Android APK";
      }
    })
    .catch(function () {
      meta.textContent = "⚠ No APK uploaded yet — add bhagavad-gita.apk to /downloads before deploying.";
      meta.style.color = "#F0A868";
    });
})();
