
const links=document.querySelectorAll(".alternate-style"),
      totalLinks=links.length;



function setActivateStyle(color) {
    for (let i = 0; i < totalLinks; i++) {
       if (color===links[i].getAttribute("title")) {
        links[i].removeAttribute("disabled");
       }else{
        links[i].setAttribute("disabled","true");

       }
        
    }
}

const skin=document.querySelectorAll(".body-skin"),
      totalSkin=skin.length;

      for (let i = 0; i < totalSkin; i++) {
          skin[i].addEventListener("change",function(){
              if (this.value==="dark") {
                  document.body.className="dark";
              }else{
                document.body.className="";


              }
          })
          
      }
      





document.querySelector(".toggle-switch").addEventListener("click",()=>{
    document.querySelector(".style-switch").classList.toggle("open");
})