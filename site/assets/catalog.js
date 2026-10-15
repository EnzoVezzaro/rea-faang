"use strict";
(function () {
  var PAGE_SIZE = 20;
  var rows = Array.prototype.slice.call(document.querySelectorAll("#product-rows .prow"));
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".chips .chip"));
  var search = document.getElementById("catalog-search");
  var statusLine = document.getElementById("filter-status");
  var empty = document.getElementById("catalog-empty");
  var reset = document.getElementById("catalog-reset");
  var list = document.getElementById("product-rows");
  var pager = document.getElementById("catalog-pager");
  var pagerPrev = document.getElementById("pager-prev");
  var pagerNext = document.getElementById("pager-next");
  var pagerStatus = document.getElementById("pager-status");
  var page = 1;

  function readHash() {
    var company = "all";
    var status = "all";
    (location.hash || "").replace(/^#/, "").split("+").forEach(function (part) {
      if (part.indexOf("c-") === 0) company = part.slice(2);
      if (part.indexOf("s-") === 0) status = part.slice(2);
    });
    return { company: company, status: status };
  }

  function writeHash(state) {
    var parts = [];
    if (state.company !== "all") parts.push("c-" + state.company);
    if (state.status !== "all") parts.push("s-" + state.status);
    var hash = parts.length ? "#" + parts.join("+") : "";
    if (location.hash !== hash) history.replaceState(null, "", location.pathname + hash);
  }

  function setPressed(state) {
    buttons.forEach(function (b) {
      var isCompany = b.hasAttribute("data-filter-company");
      var value = isCompany ? b.getAttribute("data-filter-company") : b.getAttribute("data-filter-status");
      var active = value === (isCompany ? state.company : state.status);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function apply(state) {
    var q = search ? search.value.trim().toLowerCase() : "";
    var matches = rows.filter(function (row) {
      if (state.company !== "all" && row.getAttribute("data-company") !== state.company) return false;
      if (state.status !== "all" && row.getAttribute("data-status") !== state.status) return false;
      if (q && row.textContent.toLowerCase().indexOf(q) === -1) return false;
      return true;
    });

    var count = matches.length;
    var totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE));
    if (page > totalPages) page = totalPages;
    var start = (page - 1) * PAGE_SIZE;
    var end = Math.min(start + PAGE_SIZE, count);

    rows.forEach(function (row) { row.style.display = "none"; });
    matches.slice(start, end).forEach(function (row) { row.style.display = ""; });

    if (statusLine) {
      statusLine.textContent = count
        ? "Showing " + (start + 1) + "–" + end + " of " + count + " products"
        : "Showing 0 products";
    }
    if (empty) empty.hidden = count !== 0;
    if (list) list.hidden = count === 0;

    if (pager) {
      pager.hidden = totalPages <= 1;
      if (pagerPrev) pagerPrev.disabled = page <= 1;
      if (pagerNext) pagerNext.disabled = page >= totalPages;
      if (pagerStatus) pagerStatus.textContent = "Page " + page + " of " + totalPages + " · " + count + " products";
    }
  }

  var state = readHash();
  setPressed(state);
  apply(state);

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.hasAttribute("data-filter-company")) state.company = b.getAttribute("data-filter-company");
      else state.status = b.getAttribute("data-filter-status");
      page = 1;
      setPressed(state);
      writeHash(state);
      apply(state);
    });
  });

  if (search) search.addEventListener("input", function () { page = 1; apply(state); });

  if (pagerPrev) pagerPrev.addEventListener("click", function () { page -= 1; apply(state); });
  if (pagerNext) pagerNext.addEventListener("click", function () { page += 1; apply(state); });

  if (reset) reset.addEventListener("click", function () {
    state = { company: "all", status: "all" };
    page = 1;
    if (search) search.value = "";
    setPressed(state);
    writeHash(state);
    apply(state);
    if (search) search.focus();
  });
})();