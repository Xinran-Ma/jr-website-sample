document.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll('img.svg').forEach(svg => {
        var imgClass = svg.classList;
        var imgSrc = svg.src;
    
        fetch(imgSrc)
        .then(res => res.text())
        .then(newSvg => {
            var svgSpan = document.createElement('span');
            svgSpan.innerHTML = newSvg;
    
            svgSpan.querySelector('svg').classList.add(imgClass);
            svgSpan.querySelector('svg').removeAttribute('xmlns:a');
            svg.parentNode.replaceChild(svgSpan.firstChild, svg);
        })
    })
})