/* empty css                      */import{S as c}from"./assets/vendor-BiMJRTlQ.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const s=document.querySelector(".header-menu-btn"),i=document.querySelector(".close-btn"),r=document.querySelector(".backdrop");if(!s||!i||!r){console.warn("Missing DOM elements");return}const l=n=>{r.contains(n.target)||n.preventDefault()},e=()=>{document.body.classList.add("scroll-lock"),document.body.addEventListener("touchmove",l,{passive:!1})},t=()=>{document.body.classList.remove("scroll-lock"),document.body.removeEventListener("touchmove",l)},o=()=>{const n=s.getAttribute("aria-expanded")==="true";s.setAttribute("aria-expanded",!n),r.classList.toggle("is-open"),document.body.style.overflow=n?"":"hidden",r.style.overflow="auto",n?t():e(),document.querySelectorAll("a.modal-nav-link").forEach(a=>{n?a.removeEventListener("click",o):a.addEventListener("click",o)})};s.addEventListener("click",o),i.addEventListener("click",o);const d=window.matchMedia("(max-width: 1199px)"),u=n=>{!n.matches&&r.classList.contains("is-open")&&o()};d.addEventListener("change",u),r.classList.contains("is-open")?e():t()})();new c(".adv-swiper",{slidesPerView:"auto",spaceBetween:24,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{type:"bullets",el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new c(".reviews-slider",{slidesPerView:"auto",spaceBetween:24,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{type:"bullets",el:".swiper-pagination"}});new c(".gallery-slider",{effect:"coverflow",loop:!0,slidesPerView:"auto",spaceBetween:24,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{type:"bullets",el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{centeredSlides:!0,initialSlide:2}},coverflowEffect:{rotate:0,stretch:-44,depth:390,slideShadows:!1}});
//# sourceMappingURL=commonHelpers.js.map
