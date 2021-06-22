

const filterCon=document.querySelector(".portfolio-filter"),
      filterBtns=filterCon.children,
      totalFilBtns=filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio-item"),
      totalItems=portfolioItems.length;

      for (let i = 0; i < totalFilBtns; i++) {
          filterBtns[i].addEventListener("click",function(){
              filterCon.querySelector(".active").classList.remove("active");
              this.classList.add("active");



              const filterValue=this.getAttribute("data-filter");
              for (let k = 0; k < totalItems; k++) {
                  if (filterValue===portfolioItems[k].getAttribute("data-category")) {
                      portfolioItems[k].classList.add("show");
                      portfolioItems[k].classList.remove("hide");
                      
                  }else{
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show");


                  }
                  if (filterValue==="all") {
                    portfolioItems[k].classList.add("show");
                    portfolioItems[k].classList.remove("hide");
                  }
                  
              }


          })
          
      }


//-------------------------- Lightbox ------------------------------

const lightbox=document.querySelector(".lightbox"),
      lightImage=lightbox.querySelector(".lightbox-img"),
      lightText=lightbox.querySelector(".caption-text"),
      lightCount=lightbox.querySelector(".caption-count"),
      lightClose=lightbox.querySelector(".lightbox-close");

let index=0;

for (let i = 0; i < totalItems; i++) {
    portfolioItems[i].addEventListener("click",function(){
        index=i;
        changeItem();
        toggleLightbox();
    })
    
}

function changeItem() {
    imgSrc=portfolioItems[index].querySelector(".portfolio-img img").getAttribute("src");
    lightImage.src=imgSrc;
    lightText.innerHTML=portfolioItems[index].querySelector("h4").innerHTML;
    lightCount.innerHTML=(index+1)+" of "+totalItems;



}

function toggleLightbox() {
    lightbox.classList.toggle("open");
    
}

function nextItem() {
    if (index===totalItems-1) {
        index=0;
    } else {
        index++;
    }
    changeItem();
    
}

function prevItem() {
    if (index===0) {
        index=totalItems-1;
    } else {
        index--;
    }
    changeItem();
    
}


// ----------------------- Close -----------------
lightbox.addEventListener("click",function(event) {
    if (event.target===lightClose|| event.target===lightbox ) {
        toggleLightbox();
    }
    
})





const nav=document.querySelector(".nav"),
      list=nav.querySelectorAll("li"),
      totalList=list.length;
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;


for (let i = 0; i < totalList; i++) {
    const a=list[i].querySelector("a");
    a.addEventListener("click",function(){
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
              
          }

        for (let j = 0; j < totalList; j++) {
            if (list[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            list[j].querySelector("a").classList.remove("active");
            
        }
        this.classList.add("active");
        showSection(this);

        if (window.innerWidth<1200) {
            asideToggleBtn();
        }
    })

    
}
function showSection(element){
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("active");
        
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");


}

const navBtn=document.querySelector(".nav-toggler");
      aside=document.querySelector(".aside");

      navBtn.addEventListener("click",()=>{
          asideToggleBtn();
      })


function asideToggleBtn() {
    aside.classList.toggle("open");
    navBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
          
    }
}











