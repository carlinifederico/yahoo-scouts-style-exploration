(function () {
  var lb = document.getElementById("lb");
  var lbImg = document.getElementById("lbImg");
  var lbCap = document.getElementById("lbCap");
  var closeBtn = document.getElementById("lbClose");

  function open(full, alt) {
    lbImg.src = full + ".webp";
    lbImg.onerror = function () { lbImg.onerror = null; lbImg.src = full + ".jpg"; };
    lbImg.alt = alt || "";
    lbCap.textContent = alt || "";
    lb.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function close() {
    lb.hidden = true;
    lbImg.src = "";
    document.body.style.overflow = "";
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".thumb");
    if (btn) { open(btn.dataset.full, btn.dataset.alt); return; }
    if (e.target === lb || e.target === closeBtn) close();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lb.hidden) close(); });
})();
