let imgs=document.getElementsByTagName("img"),img=Array.from(imgs),options={navbar:2,title:2,toolbar:{zoomIn:2,zoomOut:2,oneToOne:2,reset:2,prev:0,play:{show:2,size:"large"},next:0,rotateLeft:2,rotateRight:2,flipHorizontal:2,flipVertical:2},fullscreen:!1};img.filter((t=>t.getAttribute("alt"))).forEach((t=>{let e=t.getAttribute("alt");t.setAttribute("id",e);new Viewer(document.getElementById(e),options)}));