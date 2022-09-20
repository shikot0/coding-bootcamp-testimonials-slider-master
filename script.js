const nextBtn = document.getElementById('next-button'); 
const prevBtn = document.getElementById('previous-button');
const sections = document.querySelectorAll('section');
const main = document.querySelector('main');

sections.forEach((section, index) => {
    section.style.left = `${index * 100}%`;    
})

let counter = 0;

nextBtn.addEventListener('click', () => { 
    counter++; 
    slider();
}) 
prevBtn.addEventListener('click', () => { 
    counter--; 
    slider();
}) 

function slider() {
    if(counter === sections.length) {
        counter = 0;
    }
    if (counter < 0) { 
        counter = sections.length -1; 
    }
    sections.forEach(section => { 
        section.style.transform = `translateX(-${counter * 100}%)` 
    })
}