import{i as c,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=t=>{const a=new URLSearchParams({key:"39333237-f77d150ef836646332effe3a5",image_type:"photo",per_page:40,safesearch:!0,orientation:"horizontal",q:t});return fetch(`https://pixabay.com/api/?${a}`).then(o=>{if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return o.json()})},f=({webformatURL:t,largeImageURL:a,tags:o,likes:s,views:e,comments:r,downloads:i})=>`
    <li class="card">
     <a class="gallery-link" href="${a}">
        <img src="${t}" alt="${o}" loading="lazy" />
        <div class="stats">
          <div><span>${s}</span> Likes</div>
          <div><span>${e}</span> Views</div>
          <div><span>${r}</span> Comments</div>
          <div><span>${i}</span> Downloads</div>
        </div>
      </a>
    </li>
  `,l=t=>c.error({title:"Error",message:t,position:"topRight"}),p=t=>c.info({title:"Info",message:t,position:"topRight"}),n={form:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")},m=new d(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",doubleTapZoom:1,maxZoom:1,fadeSpeed:250,widthRatio:.85}),y=t=>{t.preventDefault();const a=t.target.elements.search.value.trim();if(!a){p("Input please any word!");return}n.loader.classList.add("active"),n.gallery.innerHTML="",u(a).then(o=>{if(o.totalHits===0){l("Sorry, there are no images matching your search query. Please try again!");return}const s=o.hits.map(e=>f(e)).join("");n.gallery.innerHTML=s,m.refresh()}).catch(o=>{l("Error fetching photos. Try again!")}).finally(()=>{n.loader.classList.remove("active")})};n.form.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
