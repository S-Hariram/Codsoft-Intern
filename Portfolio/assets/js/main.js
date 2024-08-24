const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        // Debugging logs
        console.log(`Section ID: ${sectionId}, Section Top: ${sectionTop}, Section Height: ${sectionHeight}, ScrollY: ${scrollY}`)

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

function downloadResume() {
    const link = document.createElement('a')
    link.href = 'C:/HTML project/responsive-portfolio-website-JhonDoe-master/assets/js/Hariram-Resume.pdf'
    link.download = 'Hariram-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

document.getElementById('download-resume-button').addEventListener('click', downloadResume)
document.getElementById('download-resume-button').addEventListener('click', function() {
    this.classList.add('clicked')
})


sr.reveal('.home__title', {})
sr.reveal('.home__scroll', { delay: 200 })
sr.reveal('.home__img', { origin: 'right', delay: 400 })

sr.reveal('.about__img', { delay: 500 })
sr.reveal('.about__subtitle', { delay: 300 })
sr.reveal('.about__profession', { delay: 400 })
sr.reveal('.about__text', { delay: 500 })
sr.reveal('.about__social-icon', { delay: 600, interval: 200 })

sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', { distance: '40px', delay: 400, interval: 100 })
sr.reveal('.skills__img', { delay: 400 })

sr.reveal('.portfolio__img', { interval: 200 })

sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', { interval: 200 })
sr.reveal('.contact__input', { delay: 400 })
sr.reveal('.contact__button', { delay: 600 })
