---
layout: page
title: Personal
permalink: /personal/
nav: true
nav_order: 5
description: A gallery of life beyond research, including travel, outdoor activities, celebrations, and time with friends.
---

<h2 class="hj-section-title">Beyond the Lab</h2>

<p class="hj-personal-intro">
  Outside the lab, I enjoy badminton, swimming, traveling, and cooking. This page is a small collection of places I have been, people I have met, and ordinary moments that keep life fun between research deadlines.
</p>

<h2 class="hj-section-title">Gallery</h2>

{% assign gallery_items = site.data.personal_gallery %}

<div class="hj-personal-carousel" data-personal-carousel aria-label="Personal photo gallery" aria-roledescription="carousel" tabindex="0">
  <div class="hj-carousel-viewport">
    {% for item in gallery_items %}
      <figure class="hj-carousel-slide{% if forloop.first %} is-active{% endif %}" data-carousel-slide aria-hidden="{% if forloop.first %}false{% else %}true{% endif %}">
        <img
          src="{{ item.image | relative_url }}"
          alt="{{ item.caption }}"
          loading="{% if forloop.first %}eager{% else %}lazy{% endif %}"
          decoding="async"
          {% if forloop.first %}
            fetchpriority="high"
          {% endif %}
        >
        <figcaption>{{ item.caption }}</figcaption>
      </figure>
    {% endfor %}

    <button class="hj-carousel-button hj-carousel-previous" type="button" data-carousel-previous aria-label="Previous photo">
      <span aria-hidden="true">&#10094;</span>
    </button>
    <button class="hj-carousel-button hj-carousel-next" type="button" data-carousel-next aria-label="Next photo">
      <span aria-hidden="true">&#10095;</span>
    </button>

    <div class="hj-carousel-counter" aria-live="polite">
      <span data-carousel-current>1</span>
      <span aria-hidden="true"> / </span>
      <span class="sr-only">of</span>
      <span>{{ gallery_items.size }}</span>
    </div>

  </div>

  <div class="hj-carousel-dots" data-carousel-dots aria-label="Choose a photo"></div>
</div>

<div class="hj-media-video-card">
  <div class="hj-media-video-copy">
    <h2 class="hj-section-title">Media Coverage</h2>
    <p>Selected video features and interviews related to my work.</p>
  </div>

  <article class="hj-media-video-item">
    <h3 class="hj-media-video-title">CCTV Feature (Chinese)</h3>
    <p>
      In 2016, I presented my robot fish project on CCTV-1 (China Central Television), China's top national television
      programs, and discussed the project with a chief underwater robot designer.
    </p>
    <div class="hj-media-video-frame">
      <video controls preload="metadata" playsinline poster="{{ '/assets/img/media/cctv1-program-cover.jpg' | relative_url }}">
        <source src="{{ '/assets/video/cctv1-robot-fish-program-2016.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <p class="hj-media-video-link">
      <a href="{{ '/assets/video/cctv1-robot-fish-program-2016.mp4' | relative_url }}">Open the CCTV feature video</a>
    </p>
  </article>

  <article class="hj-media-video-item">
    <h3 class="hj-media-video-title">EU MSCA Project</h3>
    <p>
      This MSCA-ITN project video summarizes my work on self-healing soft robots in September 2023.
    </p>
    <div class="hj-media-video-frame">
      <iframe
        title="EU MSCA project video featuring Huijiang Wang's self-healing soft robot work"
        src="https://www.youtube.com/embed/v22b67mLh0k"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <p class="hj-media-video-link">
      <a href="https://www.youtube.com/watch?v=v22b67mLh0k" target="_blank" rel="noopener noreferrer">Watch the EU MSCA project video on YouTube</a>
    </p>
  </article>
</div>

<section class="hj-visitor-footprints" aria-labelledby="visitor-footprints-title">
  <div class="hj-visitor-footprints-copy">
    <h2 class="hj-section-title" id="visitor-footprints-title">Visitor Footprints</h2>
    <p class="hj-visitor-number">
      You are visitor No. <strong data-personal-visitor-count>...</strong> to this Personal page.
    </p>
    <p class="hj-visitor-note" data-personal-visitor-status>
      The map below highlights countries that have visited this Personal page. Darker shades mean more visits, and your current country is shown with the alternate theme color.
    </p>
  </div>

  <div class="hj-visitor-map-meta">
    <p data-personal-current-country>Current visitor country: detecting...</p>
    <p data-personal-map-status>Loading visitor map...</p>
  </div>

  <div class="hj-visitor-map-card">
    <div class="hj-visitor-map-legend" aria-label="Visitor map color legend">
      <span class="hj-map-legend-item">
        <span class="hj-map-gradient" aria-hidden="true"></span>
        Visited countries
      </span>
      <span class="hj-map-legend-item">
        <span class="hj-map-current-swatch" aria-hidden="true"></span>
        Current visitor country
      </span>
    </div>

    <div class="hj-visitor-world-map" data-personal-visitor-map>
      <svg data-personal-visitor-map-svg viewBox="0 0 960 500" role="img" aria-label="World map of Personal page visitor countries"></svg>
      <div class="hj-visitor-map-tooltip" data-personal-map-tooltip hidden></div>
    </div>

    <div class="hj-visitor-map-summary">
      <span>Countries reached: <strong data-personal-country-count>...</strong></span>
      <span>Most visits: <strong data-personal-top-country>...</strong></span>
    </div>

  </div>

  <p class="hj-visitor-privacy-note">
    Counts are public page-view estimates recorded by this page. Country detection is based on country-level IP geolocation and may be affected by VPNs or private browsing tools.
  </p>
</section>

<script src="https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js"></script>
<script>
  (() => {
    const countTarget = document.querySelector("[data-personal-visitor-count]");
    const statusTarget = document.querySelector("[data-personal-visitor-status]");
    const currentCountryTarget = document.querySelector("[data-personal-current-country]");
    const mapStatusTarget = document.querySelector("[data-personal-map-status]");
    const countryCountTarget = document.querySelector("[data-personal-country-count]");
    const topCountryTarget = document.querySelector("[data-personal-top-country]");
    const mapElement = document.querySelector("[data-personal-visitor-map]");
    const svgElement = document.querySelector("[data-personal-visitor-map-svg]");
    const tooltip = document.querySelector("[data-personal-map-tooltip]");

    if (!countTarget || !mapElement || !svgElement) return;

    const countApiBase = "https://countapi.mileshilliard.com/api/v1";
    const siteKeyPrefix = "huijiang-wang-github-io-personal";
    const totalCounterKey = `${siteKeyPrefix}-page-visits`;
    const countryCounterKey = (numericCountryCode) => `${siteKeyPrefix}-country-${numericCountryCode}`;
    const numberFormatter = new Intl.NumberFormat("en-US");

    const setStatus = (message) => {
      if (mapStatusTarget) mapStatusTarget.textContent = message;
    };

    const fetchJson = async (url, options = {}) => {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Request failed: ${url}`);
      return response.json();
    };

    const hitCounter = async (key) => {
      const data = await fetchJson(`${countApiBase}/hit/${key}`, { cache: "no-store" });
      const value = Number(data.value);
      return Number.isFinite(value) ? value : null;
    };

    const getCounter = async (key) => {
      const response = await fetch(`${countApiBase}/get/${key}`, { cache: "no-store" });
      if (response.status === 404) return 0;
      if (!response.ok) throw new Error(`Counter unavailable: ${key}`);
      const data = await response.json();
      const value = Number(data.value);
      return Number.isFinite(value) ? value : 0;
    };

    const updateTotalCounter = async () => {
      try {
        const value = await hitCounter(totalCounterKey);
        if (value !== null) {
          countTarget.textContent = numberFormatter.format(value);
          return;
        }
        throw new Error("Total counter unavailable");
      } catch {
        countTarget.textContent = "many";
        if (statusTarget) {
          statusTarget.textContent =
            "The visitor number is temporarily unavailable, but the country map can still update independently.";
        }
      }
    };

    const parseCssColor = (value, fallback) => {
      const trimmed = (value || "").trim();
      const hex = trimmed.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
      if (hex) {
        const raw = hex[1].length === 3 ? hex[1].split("").map((char) => char + char).join("") : hex[1];
        return {
          r: parseInt(raw.slice(0, 2), 16),
          g: parseInt(raw.slice(2, 4), 16),
          b: parseInt(raw.slice(4, 6), 16),
        };
      }

      const rgb = trimmed.match(/^rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/i);
      if (rgb) {
        return {
          r: Number(rgb[1]),
          g: Number(rgb[2]),
          b: Number(rgb[3]),
        };
      }

      return fallback;
    };

    const colorToString = ({ r, g, b }) => `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

    const mixColor = (from, to, ratio) => ({
      r: from.r + (to.r - from.r) * ratio,
      g: from.g + (to.g - from.g) * ratio,
      b: from.b + (to.b - from.b) * ratio,
    });

    const getMapPalette = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      return {
        land: parseCssColor(rootStyles.getPropertyValue("--hj-map-land-color"), { r: 235, g: 239, b: 242 }),
        theme: parseCssColor(rootStyles.getPropertyValue("--global-theme-color"), { r: 199, g: 58, b: 100 }),
        current: parseCssColor(rootStyles.getPropertyValue("--hj-map-current-country-color"), { r: 54, g: 74, b: 136 }),
      };
    };

    const renderTooltip = (event, feature, count, countryName, isCurrentCountry) => {
      if (!tooltip) return;

      const title = document.createElement("strong");
      title.textContent = countryName;
      const visits = document.createElement("span");
      visits.textContent = `${numberFormatter.format(count)} recorded ${count === 1 ? "visit" : "visits"}`;
      tooltip.replaceChildren(title, visits);
      tooltip.hidden = false;
      tooltip.classList.toggle("is-current-country", isCurrentCountry);

      const mapRect = mapElement.getBoundingClientRect();
      tooltip.style.left = `${event.clientX - mapRect.left + 14}px`;
      tooltip.style.top = `${event.clientY - mapRect.top + 14}px`;
    };

    const hideTooltip = () => {
      if (tooltip) tooltip.hidden = true;
    };

    const getCountryCounts = async (countryIds) => {
      const counts = new Map();
      const queue = [...new Set(countryIds)];
      const workerCount = 8;

      const workers = Array.from({ length: workerCount }, async () => {
        while (queue.length) {
          const countryId = queue.shift();
          try {
            const count = await getCounter(countryCounterKey(countryId));
            if (count > 0) counts.set(countryId, count);
          } catch {
            // A missing country counter simply means no public visits have been recorded yet.
          }
        }
      });

      await Promise.all(workers);
      return counts;
    };

    const drawMap = ({ topology, countryMeta, visitorLocation, currentCountryId, currentCountryCount }) => {
      if (!window.d3 || !window.topojson) throw new Error("Map libraries are unavailable");

      const width = 960;
      const height = 500;
      const countries = topojson.feature(topology, topology.objects.countries).features.filter((feature) => feature.id !== "010");
      const countryMetaByNumeric = new Map(countryMeta.map((country) => [country.ccn3, country]));
      const countryName = (feature) => countryMetaByNumeric.get(feature.id)?.name?.common || feature.properties?.name || "Unknown country";

      const svg = d3.select(svgElement);
      svg.selectAll("*").remove();

      const projection = d3.geoNaturalEarth1().fitSize([width, height], { type: "Sphere" });
      const path = d3.geoPath(projection);

      svg
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .append("path")
        .datum({ type: "Sphere" })
        .attr("class", "hj-world-ocean")
        .attr("d", path);

      const countryPaths = svg
        .append("g")
        .attr("class", "hj-world-countries")
        .selectAll("path")
        .data(countries)
        .join("path")
        .attr("class", "hj-world-country")
        .attr("data-country-id", (feature) => feature.id)
        .attr("d", path)
        .on("mousemove", (event, feature) => {
          const count = countryCounts.get(feature.id) || 0;
          renderTooltip(event, feature, count, countryName(feature), feature.id === currentCountryId);
        })
        .on("mouseleave", hideTooltip)
        .on("focus", (event, feature) => {
          const count = countryCounts.get(feature.id) || 0;
          renderTooltip(event, feature, count, countryName(feature), feature.id === currentCountryId);
        })
        .on("blur", hideTooltip);

      countryPaths.append("title");

      let countryCounts = new Map();

      const applyColors = () => {
        const palette = getMapPalette();
        const maxCount = Math.max(1, ...Array.from(countryCounts.values()));

        countryPaths
          .classed("is-visited", (feature) => (countryCounts.get(feature.id) || 0) > 0)
          .classed("is-current-country", (feature) => feature.id === currentCountryId)
          .attr("fill", (feature) => {
            const count = countryCounts.get(feature.id) || 0;
            if (feature.id === currentCountryId) return colorToString(palette.current);
            if (count <= 0) return colorToString(palette.land);
            const intensity = 0.24 + (Math.log1p(count) / Math.log1p(maxCount)) * 0.76;
            return colorToString(mixColor(palette.land, palette.theme, intensity));
          })
          .select("title")
          .text((feature) => {
            const count = countryCounts.get(feature.id) || 0;
            const currentLabel = feature.id === currentCountryId ? " - current visitor country" : "";
            return `${countryName(feature)}: ${numberFormatter.format(count)} recorded ${count === 1 ? "visit" : "visits"}${currentLabel}`;
          });
      };

      const updateSummary = () => {
        const visitedEntries = Array.from(countryCounts.entries()).filter(([, count]) => count > 0);
        if (countryCountTarget) countryCountTarget.textContent = numberFormatter.format(visitedEntries.length);

        if (topCountryTarget) {
          const [topCountryId, topCount] = visitedEntries.sort((a, b) => b[1] - a[1])[0] || [];
          const topFeature = countries.find((feature) => feature.id === topCountryId);
          topCountryTarget.textContent = topFeature ? `${countryName(topFeature)} (${numberFormatter.format(topCount)})` : "waiting for visits";
        }
      };

      const updateFromCounters = async () => {
        setStatus("Updating country visit counts...");
        countryCounts = await getCountryCounts(countries.map((feature) => feature.id));
        if (currentCountryId && currentCountryCount !== null) {
          countryCounts.set(currentCountryId, Math.max(countryCounts.get(currentCountryId) || 0, currentCountryCount));
        }
        applyColors();
        updateSummary();
        setStatus("Map updated from live public page-view counters.");
      };

      applyColors();
      updateSummary();
      updateFromCounters().catch(() => {
        setStatus("Visitor map loaded, but live country counts are temporarily unavailable.");
      });

      const themeObserver = new MutationObserver(applyColors);
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

      const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
      colorScheme.addEventListener("change", applyColors);

      if (visitorLocation && currentCountryTarget) {
        const countryCode = visitorLocation.country_code ? ` (${visitorLocation.country_code})` : "";
        currentCountryTarget.textContent = `Current visitor country: ${visitorLocation.country || "detected"}${countryCode}`;
      }
    };

    const initializeVisitorMap = async () => {
      updateTotalCounter();
      setStatus("Detecting current visitor country...");

      const [topology, countryMeta, visitorLocation] = await Promise.all([
        fetchJson("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"),
        fetchJson("https://cdn.jsdelivr.net/npm/world-countries@5.1.0/countries.json"),
        fetchJson("https://ipwho.is/", { cache: "no-store" }).catch(() => null),
      ]);

      const alpha2ToNumeric = new Map(countryMeta.filter((country) => country.cca2 && country.ccn3).map((country) => [country.cca2.toUpperCase(), country.ccn3]));
      const currentCountryCode = visitorLocation?.success && visitorLocation.country_code ? visitorLocation.country_code.toUpperCase() : null;
      const currentCountryId = currentCountryCode ? alpha2ToNumeric.get(currentCountryCode) || null : null;
      const currentCountryCount = currentCountryId ? await hitCounter(countryCounterKey(currentCountryId)).catch(() => null) : null;

      if (!currentCountryId && currentCountryTarget) {
        currentCountryTarget.textContent = "Current visitor country: unavailable";
      }

      drawMap({
        topology,
        countryMeta,
        visitorLocation,
        currentCountryId,
        currentCountryCount,
      });
    };

    initializeVisitorMap().catch(() => {
      setStatus("World visitor map is temporarily unavailable.");
      if (countryCountTarget) countryCountTarget.textContent = "unavailable";
      if (topCountryTarget) topCountryTarget.textContent = "unavailable";
    });
  })();
</script>

<script>
  (() => {
    const initializeCarousel = () => {
      const carousel = document.querySelector("[data-personal-carousel]");
      if (!carousel) return;

      const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
      const dotsContainer = carousel.querySelector("[data-carousel-dots]");
      const currentLabel = carousel.querySelector("[data-carousel-current]");
      const previousButton = carousel.querySelector("[data-carousel-previous]");
      const nextButton = carousel.querySelector("[data-carousel-next]");
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let currentIndex = 0;
      let timer = null;
      let pointerStart = null;

      slides.forEach((slide) => {
        slide.querySelector("img").loading = "eager";
      });

      const dots = slides.map((slide, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "hj-carousel-dot";
        dot.setAttribute("aria-label", `Show photo ${index + 1}: ${slide.querySelector("figcaption").textContent}`);
        dot.addEventListener("click", () => {
          showSlide(index, index >= currentIndex ? 1 : -1);
          restartAutoplay();
        });
        dotsContainer.appendChild(dot);
        return dot;
      });

      const showSlide = (nextIndex, direction = 1) => {
        const normalizedIndex = (nextIndex + slides.length) % slides.length;
        if (normalizedIndex === currentIndex) return;

        const previousSlide = slides[currentIndex];
        const nextSlide = slides[normalizedIndex];
        slides.forEach((slide) => slide.classList.remove("is-entering-left", "is-entering-right", "is-exiting-left", "is-exiting-right"));

        previousSlide.classList.remove("is-active");
        previousSlide.classList.add(direction > 0 ? "is-exiting-left" : "is-exiting-right");
        previousSlide.setAttribute("aria-hidden", "true");

        nextSlide.classList.add(direction > 0 ? "is-entering-right" : "is-entering-left");
        nextSlide.setAttribute("aria-hidden", "false");
        void nextSlide.offsetWidth;
        nextSlide.classList.remove("is-entering-left", "is-entering-right");
        nextSlide.classList.add("is-active");

        window.setTimeout(() => {
          previousSlide.classList.remove("is-exiting-left", "is-exiting-right");
        }, 550);

        currentIndex = normalizedIndex;
        currentLabel.textContent = String(currentIndex + 1);
        dots.forEach((dot, index) => {
          dot.classList.toggle("is-active", index === currentIndex);
          dot.setAttribute("aria-current", index === currentIndex ? "true" : "false");
        });
      };

      const stopAutoplay = () => {
        window.clearInterval(timer);
        timer = null;
      };

      const startAutoplay = () => {
        stopAutoplay();
        if (reducedMotion.matches || document.hidden) return;
        timer = window.setInterval(() => showSlide(currentIndex + 1, 1), 3000);
      };

      const restartAutoplay = () => {
        stopAutoplay();
        startAutoplay();
      };

      previousButton.addEventListener("click", () => {
        showSlide(currentIndex - 1, -1);
        restartAutoplay();
      });

      nextButton.addEventListener("click", () => {
        showSlide(currentIndex + 1, 1);
        restartAutoplay();
      });

      carousel.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showSlide(currentIndex - 1, -1);
          restartAutoplay();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          showSlide(currentIndex + 1, 1);
          restartAutoplay();
        }
      });

      carousel.addEventListener("pointerdown", (event) => {
        pointerStart = event.clientX;
      });

      carousel.addEventListener("pointerup", (event) => {
        if (pointerStart === null) return;
        const distance = event.clientX - pointerStart;
        pointerStart = null;
        if (Math.abs(distance) < 45) return;
        showSlide(currentIndex + (distance < 0 ? 1 : -1), distance < 0 ? 1 : -1);
        restartAutoplay();
      });

      carousel.addEventListener("mouseenter", stopAutoplay);
      carousel.addEventListener("mouseleave", startAutoplay);
      carousel.addEventListener("focusin", stopAutoplay);
      carousel.addEventListener("focusout", () => window.setTimeout(() => {
        if (!carousel.contains(document.activeElement)) startAutoplay();
      }, 0));
      document.addEventListener("visibilitychange", startAutoplay);
      reducedMotion.addEventListener("change", startAutoplay);

      dots[0].classList.add("is-active");
      dots[0].setAttribute("aria-current", "true");
      startAutoplay();
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeCarousel, { once: true });
    } else {
      initializeCarousel();
    }
  })();
</script>
