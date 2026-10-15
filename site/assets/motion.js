"use strict";
// Small progressive-enhancement layer for the generated public site.
(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var graph = document.querySelector(".hero-graph");
  var filters = document.querySelectorAll("[data-coverage-filter]");

  function each(list, callback) {
    Array.prototype.forEach.call(list, callback);
  }

  function initReveals() {
    var targets = document.querySelectorAll(".reveal-target");
    if (reduceMotion.matches || !("IntersectionObserver" in window)) return;
    var observer = new IntersectionObserver(function (entries) {
      each(entries, function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    each(targets, function (target) { observer.observe(target); });
  }

  function initBuildPass() {
    var pass = document.querySelector("[data-build-pass]");
    var select = document.getElementById("build-pass-product");
    if (!pass || !select) return;
    var name = pass.querySelector("[data-pass-name]");
    var company = pass.querySelector("[data-pass-company]");
    var foundation = pass.querySelector("[data-pass-foundation]");
    var coverage = pass.querySelector("[data-pass-coverage]");
    var coverageState = pass.querySelector("[data-pass-coverage-state]");
    var id = pass.querySelector("[data-pass-id]");
    var skill = pass.querySelector("[data-pass-skill]");
    var dossier = pass.querySelector("[data-pass-dossier]");
    var announcement = pass.querySelector("[data-pass-announcement]");
    var labels = {
      available: "Mature alternative listed",
      partial: "Partial coverage",
      pending: "No verified alternative"
    };

    function update() {
      var option = select.options[select.selectedIndex];
      if (!option) return;
      var productId = option.value;
      var productName = option.textContent;
      var state = option.getAttribute("data-coverage") || "pending";
      if (name) name.textContent = productName;
      if (company) company.textContent = option.getAttribute("data-company") || "Company not recorded";
      if (foundation) foundation.textContent = option.getAttribute("data-foundation") || "No candidate listed";
      if (coverage) coverage.textContent = labels[state] || "Research status not verified";
      if (coverageState) coverageState.setAttribute("data-pass-coverage-state", state);
      if (id) id.textContent = productId;
      if (skill) skill.href = "catalog/" + encodeURIComponent(productId) + "/agent-kit.md";
      if (dossier) dossier.href = "catalog/" + encodeURIComponent(productId) + "/";
      if (announcement) announcement.textContent = productName + " selected. " + (labels[state] || "Research status not verified") + ". Downloadable product skill ready.";
      var card = pass.querySelector(".build-pass");
      if (card) card.setAttribute("aria-label", "Product Build Pass for " + productName);
    }

    select.addEventListener("change", update);
  }

  function initGraphFilters() {
    if (!graph || !filters.length) return;
    var routes = graph.querySelectorAll("[data-coverage]");
    var status = graph.querySelector(".graph-status");
    var toggle = graph.querySelector(".graph-motion-toggle");
    var paused = reduceMotion.matches;

    function isPaused() {
      return paused || document.visibilityState === "hidden";
    }

    function syncMotion() {
      var moving = !isPaused();
      graph.setAttribute("data-motion", moving ? "on" : "off");
      if (toggle && !reduceMotion.matches) {
        toggle.setAttribute("aria-pressed", String(!moving));
        toggle.textContent = moving ? "Pause" : "Play";
        toggle.setAttribute("aria-label", moving ? "Pause relationship motion" : "Resume relationship motion");
      }
    }

    each(filters, function (button) {
      button.addEventListener("click", function () {
        var selected = button.getAttribute("data-coverage-filter");
        var visible = 0;
        each(filters, function (filter) {
          filter.setAttribute("aria-pressed", String(filter === button));
        });
        each(routes, function (route) {
          var show = selected === "all" || route.getAttribute("data-coverage") === selected;
          route.hidden = !show;
          if (show) visible++;
        });
        if (status) status.textContent = "Showing " + visible + " of " + routes.length + " catalog examples";
      });
    });

    if (toggle) {
      if (reduceMotion.matches) {
        paused = true;
        graph.setAttribute("data-paused", "true");
        toggle.setAttribute("aria-pressed", "true");
        toggle.textContent = "Motion off";
      } else {
        toggle.addEventListener("click", function () {
          paused = !paused;
          graph.setAttribute("data-paused", String(paused));
          syncMotion();
        });
        document.addEventListener("visibilitychange", syncMotion);
        reduceMotion.addEventListener("change", function (event) {
          paused = event.matches;
          graph.setAttribute("data-paused", String(paused));
          syncMotion();
        });
      }
      syncMotion();
    }
  }

  function initPointerFeedback() {
    if (reduceMotion.matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    each(document.querySelectorAll(".pcard"), function (card) {
      card.addEventListener("pointermove", function (event) {
        if (event.pointerType !== "mouse") return;
        var rect = card.getBoundingClientRect();
        card.style.setProperty("--pointer-x", (event.clientX - rect.left) + "px");
        card.style.setProperty("--pointer-y", (event.clientY - rect.top) + "px");
      });
    });
  }

  function boot() {
    initReveals();
    initBuildPass();
    initGraphFilters();
    initPointerFeedback();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
})();
