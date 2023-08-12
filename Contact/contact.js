fetch('Contact/contact.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#contact-section");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })

    
    function toggleAnswerVisibility(parent) {
        const answer = parent.querySelector('.answer');
        if (answer.style.height === '0px' || answer.style.height === '') {
            answer.style.height = 'auto';
        } else {
            answer.style.height = '0px';
        }

    }

    function toggleQuestion(questionElement) {
        questionElement.classList.toggle('open');
    }