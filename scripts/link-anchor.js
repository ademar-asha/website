var o=document.querySelectorAll('a[href^="#"]'),c=t=>{t.preventDefault();let e=t.target.closest("a").getAttribute("href");if(e&&e!=="#"){let l=e.substring(1),n=document.getElementById(l);n&&n.scrollIntoView()}else window.scrollTo({top:0})};o.forEach(t=>{t.addEventListener("click",c)});