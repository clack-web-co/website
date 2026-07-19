"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealSelector = "[data-reveal]";

    function getRevealElements() {
      return Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    }

    if (reducedMotion.matches) {
      getRevealElements().forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.14
      }
    );

    const observedElements = new Set<Element>();

    function observeRevealElements() {
      getRevealElements().forEach((element) => {
        if (observedElements.has(element)) return;

        observedElements.add(element);
        observer.observe(element);
      });
    }

    observeRevealElements();

    const mutationObserver = new MutationObserver(observeRevealElements);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.documentElement.classList.remove("reveal-ready");
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
