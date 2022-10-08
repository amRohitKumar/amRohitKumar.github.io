const line = document.querySelector(".theLine");
const root = document.querySelector("#root");
const currHeight = window.innerHeight;
document.addEventListener('scroll', (e) => {
    let diff = (currHeight/2) - (line.getBoundingClientRect().top);
    if(diff > 0){
        line.setAttribute("style", `stroke-dashoffset: 0; stroke-dasharray: ${diff*0.8}px, ${2053-diff}px;`)
    }
})