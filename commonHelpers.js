/* empty css                      */import{S as d}from"./assets/vendor-CD3JbTm1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const i=document.querySelector(".header-menu-btn"),o=document.querySelector(".close-btn"),s=document.querySelector(".backdrop");if(!i||!o||!s){console.warn("Missing DOM elements");return}const c=r=>{s.contains(r.target)||r.preventDefault()},e=()=>{document.body.classList.add("scroll-lock"),document.body.addEventListener("touchmove",c,{passive:!1})},t=()=>{document.body.classList.remove("scroll-lock"),document.body.removeEventListener("touchmove",c)},n=()=>{const r=i.getAttribute("aria-expanded")==="true";i.setAttribute("aria-expanded",!r),s.classList.toggle("is-open"),document.body.style.overflow=r?"":"hidden",s.style.overflow="auto",r?t():e(),document.querySelectorAll("a.modal-nav-link").forEach(a=>{r?a.removeEventListener("click",n):a.addEventListener("click",n)})};i.addEventListener("click",n),o.addEventListener("click",n);const p=window.matchMedia("(max-width: 1199px)"),f=r=>{!r.matches&&s.classList.contains("is-open")&&n()};p.addEventListener("change",f),s.classList.contains("is-open")?e():t()})();new d(".adv-swiper",{slidesPerView:"auto",spaceBetween:24,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{type:"bullets",el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});let l=0;const u=document.querySelector(".reviews-slider");document.querySelector(".reviews-next-btn").addEventListener("click",function(){l+=270,l>1200&&(l=0),u.style.left=-l+"px"});document.querySelector(".reviews-prev-btn").addEventListener("click",function(){l-=270,l<0&&(l=1200),u.style.left=-l+"px"});document.addEventListener("DOMContentLoaded",()=>{const i=window.innerWidth;let o;i>320&&i<1440?o=2:o=1,new d(".swiper-reviews",{slidesPerView:o,spaceBetween:0,slideToClickedSlide:!0,loop:!0,loopedSlides:1,keyboard:{enabled:!0,onlyInViewport:!0}})});new d(".gallery-slider",{effect:"coverflow",loop:!0,slidesPerView:"auto",spaceBetween:24,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},pagination:{type:"bullets",el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{centeredSlides:!0,initialSlide:2}},coverflowEffect:{rotate:0,stretch:-44,depth:390,slideShadows:!1}});
//# sourceMappingURL=commonHelpers.js.map
