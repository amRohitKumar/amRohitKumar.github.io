const fadeIn = document.querySelectorAll('.fade-in');
const fadeInPara = document.querySelectorAll('.fade-in-p');
const focusAbout = document.querySelector('.about-intro-div p');

const appearOptions = {
    thresold: 1,
    rootMargin: "0px 0px -250px 0px"
}
const appearOptionsPara = {
    thresold: 0,
    rootMargin: "0px 0px -200px 0px"
}
const focusAboutOptions = {
    thresold: 1,
    rootMargin: "0px 0px -200px  0px"
}

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("appeared");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions)

fadeIn.forEach(fader => {
    appearOnScroll.observe(fader);
})


const appearOnScrollPara = new IntersectionObserver(function (entries, appearOnScrollPara) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("appeared-p");
            appearOnScrollPara.unobserve(entry.target);
        }
    })
}, appearOptionsPara)

fadeInPara.forEach(fader => {
    appearOnScrollPara.observe(fader);
})


const focusAb = new IntersectionObserver(function (entries, focusAb) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("focus-about");
            // focusAb.unobserve(entry.target);
        }
    })
}, focusAboutOptions)

focusAb.observe(focusAbout);