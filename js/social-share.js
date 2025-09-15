(()=>{let o={twitter:function(e){e=`https://twitter.com/intent/tweet?text=${encodeURIComponent(e.title)}&url=`+encodeURIComponent(e.url);window.open(e,"_blank","width=600,height=400")},facebook:function(e){e="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e.url);window.open(e,"_blank","width=600,height=400")},linkedin:function(e){e="https://www.linkedin.com/sharing/share-offsite/?url="+encodeURIComponent(e.url);window.open(e,"_blank","width=600,height=400")},telegram:function(e){e=`https://t.me/share/url?url=${encodeURIComponent(e.url)}&text=`+encodeURIComponent(e.title);window.open(e,"_blank","width=600,height=400")},copy:function(e){var t;navigator.clipboard?navigator.clipboard.writeText(e.url).then(()=>{n("Link copied to clipboard!")}):((t=document.createElement("textarea")).value=e.url,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),n("Link copied to clipboard!"))}};function n(e){let t=document.createElement("div");t.textContent=e,t.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #333;
      color: white;
      padding: 12px 24px;
      border-radius: 6px;
      z-index: 10000;
      opacity: 0;
      transition: opacity 0.3s ease;
    `,document.body.appendChild(t),setTimeout(()=>t.style.opacity="1",10),setTimeout(()=>{t.style.opacity="0",setTimeout(()=>document.body.removeChild(t),300)},2e3)}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("[data-share]").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();var e=this.getAttribute("data-share"),t={url:window.location.href,title:document.title,description:document.querySelector('meta[name="description"]')?.content||"",image:document.querySelector('meta[property="og:image"]')?.content||""};o[e]&&o[e](t)})})})})();