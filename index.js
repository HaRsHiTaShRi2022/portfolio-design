var tl = gsap.timeline();
tl.to("#up", {
    height: 0,
    duration: 1.5,
    ease: Expo.easeInOut
})
tl.to("#up2", {
    height: 0,
    delay: -1.6,
    duration: 1.5,
    ease: Expo.easeInOut
})
tl.to("#up3", {
    height: "100%",
    delay: -1.5,
    duration: 1,
    backgroundColor: "#2d6a4f",
    ease: Expo.easeInOut
})
tl.to(".navbut", {
    y: 34,
    opacity: 1,
    duration: 1,
    stagger: 0.1,
})
tl.from("#BH2", {
    x: window.innerWidth < 768 ? 200 : 500,
    rotate: 270,
    opacity: 0,
    duration: 0.2
})
tl.to(".g", {
    opacity: 1,
    duration: 0.8,
    y: "50%",
    stagger: 0.2,
})
tl.from(".j", {
    opacity: 0,
    y: 56,
    duration: 0.9,
    stagger: 0.3
})

var main = document.querySelector('#up3');
var main1 = document.querySelector('#Home');
var cursor = document.querySelector('#cursor');
if (!('ontouchstart' in window)) {
    main.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            duration: 0.5,
            ease: "back.out(6)"
        });
    });

    main1.addEventListener("mousemove", function(dets) {
        const offsetX = window.innerWidth < 768 ? 200 : 550;
        const offsetY = window.innerWidth < 768 ? 150 : 350;
        gsap.to("#image", {
            x: offsetX - dets.x,
            y: offsetY - dets.y,
            duration: 0.5,
            ease: "back.out(6)"
        });
    });
} else {
    cursor.style.display = 'none';
    gsap.set("#image", {
        x: 0,
        y: 0
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

const createMobileNav = () => {
    if (!document.querySelector('.mobile-nav-toggle') && window.innerWidth < 768) {
        const navBar = document.querySelector('.navigation_bar');
        const toggle = document.createElement('button');
        toggle.className = 'mobile-nav-toggle';
        toggle.innerHTML = '☰';
        toggle.style.cssText = 'position: fixed; top: 15px; right: 15px; z-index: 10; background: rgba(0,0,0,0.7); color: white; border: none; font-size: 24px; padding: 5px 10px; border-radius: 5px; cursor: pointer;';
        
        document.body.appendChild(toggle);
        
        if (window.innerWidth < 768) {
            navBar.style.display = 'none';
        }
        
        toggle.addEventListener('click', () => {
            if (navBar.style.display === 'none') {
                navBar.style.display = 'flex';
                toggle.innerHTML = '✕';
            } else {
                navBar.style.display = 'none';
                toggle.innerHTML = '☰';
            }
        });

        document.querySelectorAll('.navbut').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    navBar.style.display = 'none';
                    toggle.innerHTML = '☰';
                }
            });
        });
    }
};

gsap.registerPlugin(ScrollTrigger);
gsap.from("#My_Skills .yum", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#My_Skills",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

const sections = ["#About_me", "#Work_XP", "#project"];
sections.forEach(section => {
    gsap.from(`${section} h1`, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});

gsap.from("#xp h2, #xp h3", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#Work_XP",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

gsap.from("#project1 h2", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#project",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

const preloadImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const newImg = new Image();
            newImg.src = src;
        }
    });
};

window.addEventListener('resize', () => {
    createMobileNav();
    if (window.innerWidth < 768) {
        cursor.style.display = 'none';
    } else if (!('ontouchstart' in window)) {
        cursor.style.display = 'block';
    }
});

window.addEventListener('load', () => {
    preloadImages();
    createMobileNav();
});

window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
