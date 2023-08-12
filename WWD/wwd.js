fetch('WWD/wwd.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#wwd-section");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })

    