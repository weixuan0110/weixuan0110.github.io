(()=>{let e=document.createElement("button");e.innerHTML="↑",e.className="back-to-top-btn",e.style.cssText=`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: #0ea5e9;
    color: white;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1000;
    display: none;
  `,document.body.appendChild(e),window.addEventListener("scroll",function(){300<window.pageYOffset?(e.style.display="block",e.style.opacity="1"):(e.style.opacity="0",setTimeout(()=>{window.pageYOffset<=300&&(e.style.display="none")},300))}),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})})();