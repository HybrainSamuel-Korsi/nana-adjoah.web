
const openBtn = document.querySelector('#closeBtn');
const nav_items = document.querySelector('#navItems')
const nav_active = document.querySelectorAll('nav li a');






function windowWidth() {

    if (window.innerWidth > 600) {
        nav_items.style.display = 'flex'
    } else {
        nav_items.style.display = "none";
    }
}

window.addEventListener('resize', () => {
    windowWidth();
    

})


// function to open and close our navbar
function navOpenClose() {
    openBtn.addEventListener('click', () => {

        if (nav_items.style.display == "none") {
            nav_items.style.display = "inline-block"
            // openBtn.innerHTML = `&times;`
        } else {
            nav_items.style.display = 'none'
            openBtn.innerHTML = `&#9776;`
        }


    });
}

navOpenClose();



// Add active class

nav_active.forEach(item => {

    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active');


    })

})

//  remove active class

function removeActive() {

    nav_active.forEach(items => {

        items.classList.remove('active')
    })


}



const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    let count = 0;
    const updateCounter = () => {
        const increment = target / 100;
        count += increment;
        if (count < target) {
            counter.textContent = Math.ceil(count);

            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    }
    
    updateCounter();
});



const stats = document.querySelector(".stats");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            stats.classList.add("animate");
        }

    });

}, {
    threshold: 0.3
});
observer.observe(stats);



const questions = document.querySelectorAll('#faq-question');
const answers = document.querySelectorAll("#answer");
questions.forEach((question, index )=> {
    question.addEventListener("click", () => {
        
        answers[index].classList.toggle("show");

        
        
    })
})