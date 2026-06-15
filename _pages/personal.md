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
  A collection of moments beyond research, from travel and outdoor adventures to celebrations, friendships, and everyday life.
</p>

<div class="hj-personal-carousel" data-personal-carousel aria-label="Personal photo gallery" aria-roledescription="carousel" tabindex="0">
  <div class="hj-carousel-viewport">
    <figure class="hj-carousel-slide is-active" data-carousel-slide aria-hidden="false">
      <img
        src="{{ '/assets/img/personal/2025-12-dog-in-canteen-likes-me.webp' | relative_url }}"
        alt="Dec2025 Dog in Canteen likes me"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      >
      <figcaption>Dec2025 Dog in Canteen likes me</figcaption>
    </figure>

    <figure class="hj-carousel-slide" data-carousel-slide aria-hidden="true">
      <img
        src="{{ '/assets/img/personal/2025-12-hiking.webp' | relative_url }}"
        alt="Dec2025 Hiking"
        loading="lazy"
        decoding="async"
      >
      <figcaption>Dec2025 Hiking</figcaption>
    </figure>

    <figure class="hj-carousel-slide" data-carousel-slide aria-hidden="true">
      <img
        src="{{ '/assets/img/personal/2025-12-sichuan.webp' | relative_url }}"
        alt="Dec2025 SiChuan"
        loading="lazy"
        decoding="async"
      >
      <figcaption>Dec2025 SiChuan</figcaption>
    </figure>

    <figure class="hj-carousel-slide" data-carousel-slide aria-hidden="true">
      <img
        src="{{ '/assets/img/personal/2025-05-hainan.webp' | relative_url }}"
        alt="May2025 Hainan"
        loading="lazy"
        decoding="async"
      >
      <figcaption>May2025 Hainan</figcaption>
    </figure>

    <figure class="hj-carousel-slide" data-carousel-slide aria-hidden="true">
      <img
        src="{{ '/assets/img/personal/2025-03-lab.webp' | relative_url }}"
        alt="Mar2025 Lab"
        loading="lazy"
        decoding="async"
      >
      <figcaption>Mar2025 Lab</figcaption>
    </figure>

    <figure class="hj-carousel-slide" data-carousel-slide aria-hidden="true">
      <img
        src="{{ '/assets/img/personal/2023-09-cambridge-punting.webp' | relative_url }}"
        alt="Sep 2023 Cambridge Punting"
        loading="lazy"
        decoding="async"
      >
      <figcaption>Sep 2023 Cambridge Punting</figcaption>
    </figure>

    <figure class="hj-carousel-slide" data-carousel-slide aria-hidden="true">
      <img
        src="{{ '/assets/img/personal/2023-02-understanding-intelligence-workshop.webp' | relative_url }}"
        alt="February 2023 Understanding Intelligence Workshop"
        loading="lazy"
        decoding="async"
      >
      <figcaption>February 2023 Understanding Intelligence Workshop</figcaption>
    </figure>

    <figure class="hj-carousel-slide" data-carousel-slide aria-hidden="true">
      <img
        src="{{ '/assets/img/personal/2022-12-darwin-snow.webp' | relative_url }}"
        alt="Dec2022 Darwin Snow"
        loading="lazy"
        decoding="async"
      >
      <figcaption>Dec2022 Darwin Snow</figcaption>
    </figure>

    <figure class="hj-carousel-slide" data-carousel-slide aria-hidden="true">
      <img
        src="{{ '/assets/img/personal/2022-08-pisa-msca-training.webp' | relative_url }}"
        alt="Aug2022 Pisa MSCA Training"
        loading="lazy"
        decoding="async"
      >
      <figcaption>Aug2022 Pisa MSCA Training</figcaption>
    </figure>

    <figure class="hj-carousel-slide" data-carousel-slide aria-hidden="true">
      <img
        src="{{ '/assets/img/personal/2022-06-trinity-mayball.webp' | relative_url }}"
        alt="June 2022 Trinity MayBall"
        loading="lazy"
        decoding="async"
      >
      <figcaption>June 2022 Trinity MayBall</figcaption>
    </figure>

    <figure class="hj-carousel-slide" data-carousel-slide aria-hidden="true">
      <img
        src="{{ '/assets/img/personal/2022-04-robosoft-conference-1.webp' | relative_url }}"
        alt="April 2022 RoboSoft Conference (1)"
        loading="lazy"
        decoding="async"
      >
      <figcaption>April 2022 RoboSoft Conference (1)</figcaption>
    </figure>

    <figure class="hj-carousel-slide" data-carousel-slide aria-hidden="true">
      <img
        src="{{ '/assets/img/personal/2021-12-smart-winter-school.webp' | relative_url }}"
        alt="December 2021 SMART Winter School"
        loading="lazy"
        decoding="async"
      >
      <figcaption>December 2021 SMART Winter School</figcaption>
    </figure>

    <figure class="hj-carousel-slide" data-carousel-slide aria-hidden="true">
      <img
        src="{{ '/assets/img/personal/2021-06-graduation-pub.webp' | relative_url }}"
        alt="June 2021 Graduation Pub"
        loading="lazy"
        decoding="async"
      >
      <figcaption>June 2021 Graduation Pub</figcaption>
    </figure>

    <figure class="hj-carousel-slide" data-carousel-slide aria-hidden="true">
      <img
        src="{{ '/assets/img/personal/2021-04-ohmc-demo.webp' | relative_url }}"
        alt="April 2021 OHMC Demo"
        loading="lazy"
        decoding="async"
      >
      <figcaption>April 2021 OHMC Demo</figcaption>
    </figure>

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
      <span>14</span>
    </div>

  </div>

  <div class="hj-carousel-dots" data-carousel-dots aria-label="Choose a photo"></div>
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
