import{a as d,i as c,S as p}from"./assets/vendor-DDdXnYQq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=async t=>{var s;const o={key:"39333237-f77d150ef836646332effe3a5",image_type:"photo",per_page:40,safesearch:!0,orientation:"horizontal",q:t};try{return(await d.get("https://pixabay.com/api/",{params:o})).data}catch(a){throw new Error(`HTTP error! ${((s=a.response)==null?void 0:s.status)||""} ${a.message}`)}},f=({webformatURL:t,largeImageURL:o,tags:s,likes:a,views:e,comments:r,downloads:i})=>`
    <li class="card">
     <a class="gallery-link" href="${o}">
        <img src="${t}" alt="${s}" loading="lazy" />
        <div class="stats">
          <div><span>${a}</span> Likes</div>
          <div><span>${e}</span> Views</div>
          <div><span>${r}</span> Comments</div>
          <div><span>${i}</span> Downloads</div>
        </div>
      </a>
    </li>
  `,l=t=>c.error({title:"Error",message:t,position:"topRight"}),m=t=>c.info({title:"Info",message:t,position:"topRight"}),n={form:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")},y=new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",doubleTapZoom:1,maxZoom:1,fadeSpeed:250,widthRatio:.85}),g=t=>{t.preventDefault();const o=t.target.elements.search.value.trim();if(!o){m("Input please any word!");return}n.loader.classList.add("active"),n.gallery.innerHTML="",u(o).then(s=>{if(s.totalHits===0){l("Sorry, there are no images matching your search query. Please try again!");return}const a=s.hits.map(e=>f(e)).join("");n.gallery.innerHTML=a,y.refresh()}).catch(s=>{l("Error fetching photos. Try again!")}).finally(()=>{n.loader.classList.remove("active")})};n.form.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
