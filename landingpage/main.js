const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container .letter-m", {
    duration: 1000,
    delay: 1000,
});

ScrollReveal().reveal(".container img", {
    duration: 1000,
    delay: 1500,
});

ScrollReveal().reveal(".container .text__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
});

ScrollReveal().reveal(".container .text__right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
});

ScrollReveal().reveal(".container .explore", {
    duration: 1000,
    delay: 2500,
});

ScrollReveal().reveal(".container .brochure", {
    duration: 1000,
    delay: 3500,
});

ScrollReveal().reveal(".container .contact", {
    duration: 1000,
    delay: 4000,
});

ScrollReveal().reveal(".container h5", {
    duration: 1000,
    interval: 500,
    delay: 3000,
});

ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 5000,
});
