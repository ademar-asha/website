var o=document.querySelector(".scroll-up");function l(){window.scrollY>window.innerHeight*1.5?o.classList.add("scroll-up--show"):o.classList.remove("scroll-up--show")}function s(){window.scrollTo({top:0})}window.addEventListener("scroll",l);o.addEventListener("click",s);
