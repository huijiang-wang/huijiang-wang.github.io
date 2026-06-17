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
