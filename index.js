import{a as f,S as m,i as l}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y=async t=>{var s;const o={key:"39333237-f77d150ef836646332effe3a5",image_type:"photo",per_page:40,safesearch:!0,orientation:"horizontal",q:t};try{return(await f.get("https://pixabay.com/api/",{params:o})).data}catch(a){throw new Error(`HTTP error! ${((s=a.response)==null?void 0:s.status)||""} ${a.message}`)}},d={gallery:document.querySelector(".gallery")},g=new m(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",doubleTapZoom:1,maxZoom:1,fadeSpeed:250,widthRatio:.85}),h=()=>{d.gallery.innerHTML=""},v=t=>{const o=t.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:i,comments:p,downloads:u})=>`
        <li class="card">
          <a class="gallery-link" href="${a}">
            <img src="${s}" alt="${e}" loading="lazy" />
            <div class="stats">
              <div><span>${r}</span> Likes</div>
              <div><span>${i}</span> Views</div>
              <div><span>${p}</span> Comments</div>
              <div><span>${u}</span> Downloads</div>
            </div>
          </a>
        </li>
      `).join("");d.gallery.innerHTML=o,g.refresh()},c=t=>l.error({title:"Error",message:t,position:"topRight"}),L=t=>l.info({title:"Info",message:t,position:"topRight"}),n={form:document.querySelector(".form"),loader:document.querySelector(".loader")},b=async t=>{t.preventDefault();const o=t.target.elements.search.value.trim();if(!o){L("Input please any word!");return}n.loader.classList.add("active"),h();try{const s=await y(o);if(s.totalHits===0){c("Sorry, there are no images matching your search query. Please try again!");return}v(s.hits)}catch{c("Error fetching photos. Try again!")}finally{n.loader.classList.remove("active")}};n.form.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
