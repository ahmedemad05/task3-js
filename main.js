function setColorAndSize() {
    let setColor = prompt("Enter your color")
    let setSize = prompt("Enter size of text that you want in pixels EX:20px");
    let color = document.getElementsByClassName('Enact');
    let size = document.getElementsByClassName('Enact');
    for (let i = 0; i< color.length; i++) {
       color[i].style.color=setColor;
       size[i].style.fontSize=setSize;
    }
    
}