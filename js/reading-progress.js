(()=>{let i=document.createElement("div");function e(){var e="/"===window.location.pathname||"/index.html"===window.location.pathname,n=document.documentElement.scrollHeight,t=window.innerHeight;i.style.display=e||n<=1.2*t?"none":"block"}i.className="reading-progress-bar",i.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #0ea5e9, #3b82f6);
    z-index: 9999;
    transition: width 0.1s ease;
  `,document.body.appendChild(i),window.addEventListener("scroll",function(){var e=window.innerHeight,e=document.documentElement.scrollHeight-e,e=window.pageYOffset/e*100;i.style.width=Math.min(e,100)+"%"}),window.addEventListener("load",e),window.addEventListener("resize",e),e()})();