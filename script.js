import textSplit from './textSplit.js';
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);

function init() {
    initScroll();
    initNavigation();
    initHeader();
    // initProducts();
}

function initScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true,
        // multiplier: 0.5,
        lerp: 0.05,
    });
    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('.main', {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: document.querySelector('.main').style.transform
            ? 'transform'
            : 'fixed',
    });

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

    ScrollTrigger.refresh();
}

function initNavigation() {
    //Animating Link Hover Effect
    const mainNavLinks = gsap.utils.toArray('.navbar__items li');
    gsap.from(mainNavLinks, {
        y: '100%',
        stagger: 0.3,
        duration: 1.5,
        autoAlpha: 0,
        ease: 'Power4.easeOut',
    });
    mainNavLinks.forEach((link) => {
        link.addEventListener('mouseleave', () => {
            link.classList.add('animate-out');
        });
        link.ontransitionend = function () {
            link.classList.remove('animate-out');
        };
    });
}

function initHeader() {
    // const headerText = select('.header h1');
    // const splitText = textSplit(headerText, '<br/>');
    // console.log(splitText);
    // const tl = gsap.timeline();
    // tl.from(selectAll('.header__wrappper'), {
    //     height: '0%',
    //     duration: 1,
    //     ease: 'Power4.easeIn',
    // });
    // tl.from(
    //     selectAll('.header h1'),
    //     {
    //         y: '100%',
    //         duration: 1.5,
    //         stagger: 0.3,
    //         autoAlpha: 0,
    //         ease: 'Power4.easeOut',
    //     },
    //     'same'
    // );

    // tl.from(
    //     selectAll('.header__btns button'),
    //     {
    //         y: '100%',
    //         duration: 1.5,
    //         stagger: {
    //             amount: 0.5,
    //         },
    //         autoAlpha: 0,
    //         ease: 'Power4.easeOut',
    //     },
    //     'same'
    // );

    // const tl2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.header',
    //         scroller: '.main',
    //         start: '50% center',
    //         end: '50%% 25%',
    //         scrub: 3,
    //         // markers: true,
    //         pin: true,
    //     },
    // });
    // tl2.to(
    //     '.header',
    //     {
    //         scale: 0.9,
    //         ease: 'Power4.easeOut',
    //     },
    //     'same'
    // );

    // tl2.from(
    //     '.product',
    //     {
    //         scale: 0.8,
    //         ease: 'Power4.easeOut',
    //     },
    //     'same'
    // );
    // tl2.to(
    //     '.header__first',
    //     {
    //         x: 100,
    //         ease: 'Power4.easeOut',
    //     },
    //     'same'
    // );
    // tl2.to(
    //     '.header__second',
    //     {
    //         x: -100,
    //         ease: 'Power4.easeOut',
    //     },
    //     'same'
    // );
    gsap.from(
        [
            select('.header__first'),
            select('.header__second'),
            selectAll('.header__btns button'),
        ],
        {
            autoAlpha: 0,
            y: 200,
            stagger: 0.1,
            duration: 1,
        }
    );
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.cards',
            scroller: '.main',
            start: 'top 90%',
            end: 'top 10%',
            scrub: 1,
            // markers: true,
        },
    });
    tl3.from(selectAll('.card'), {
        y: 100,
        stagger: 0.1,
        autoAlpha: 0,
    });

    const cards = gsap.utils.toArray('.card');
    cards.forEach((card) => {
        card.addEventListener('mouseenter', (e) => {
            gsap.to(card, {
                scale: 1.05,
                ease: 'Power4.easeOut',
                duration: 0.5,
            });
        });
        card.addEventListener('mouseleave', (e) => {
            gsap.to(card, {
                scale: 1,
                ease: 'Power4.easeOut',
                duration: 0.5,
            });
        });
    });

    const videoTimeLine = gsap.timeline({
        scrollTrigger: {
            trigger: '.video',
            scroller: '.main',
            start: 'top 90%',
            end: 'top top',
            scrub: 1,
            // markers: true,
        },
    });
    videoTimeLine.to('.video video', {
        width: '90%',
        ease: 'Power4.easeOut',
    });

    const productFeaturedTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.product_feature',
            scroller: '.main',
            start: 'top bottom',
            end: 'top 25%',
            scrub: 0.5,
            // markers: true,
        },
    });

    productFeaturedTl.from(
        '.line',
        {
            width: '0%',
        },
        'same'
    );
    productFeaturedTl.from(
        [
            select('.product_feature h1'),
            select('.product_feature-desc'),
            select('.product_feature-img img'),
        ],
        {
            autoAlpha: 0,
            scale: 0.1,
            ease: 'Power4.easeOut',
            y: -20,
        },
        'same'
    );
    const boxTimline = gsap.timeline({
        scrollTrigger: {
            trigger: '.box',
            scroller: '.main',
            start: 'top 90%',
            end: 'top 15%',
            scrub: 1,
            // markers: true,
        },
    });
    const boxTimline2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.box-2',
            scroller: '.main',
            start: 'top 90%',
            end: 'top 15%',
            scrub: 1,
            // markers: true,
        },
    });
    console.log(selectAll('.box .content > *'));
    boxTimline.from(
        [
            select('.content h1'),
            select('.content p'),
            select('.content button'),
        ],
        {
            y: 200,
            autoAlpha: 0,
            stagger: 0.1,
        }
    );
    boxTimline2.from(selectAll('.box-2 .content > *'), {
        y: 200,
        autoAlpha: 0,
        stagger: 0.1,
    });
    const expTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.exp',
            scroller: '.main',
            start: 'top 90%',
            end: 'top 25%',
            scrub: 1,
            // markers: true,
        },
    });
    const exp2Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.exp2',
            scroller: '.main',
            start: 'top 90%',
            end: 'top 10%',
            scrub: 1,
            // markers: true,
        },
    });
    const expH1 = textSplit(select('.exp h1'), '<br />');
    const expP = textSplit(select('.exp P'), '<br />');
    gsap.set('.exp h1 br', { display: 'none' });
    gsap.set('.exp p br', { display: 'none' });
    expTimeline.from(
        [...expH1, ...expP],
        {
            y: 100,
            stagger: 0.1,
            autoAlpha: 0,
        },
        'same'
    );

    const exp2H1 = textSplit(select('.exp2 h1'), '<br />');
    const exp2P = textSplit(select('.exp2 P'), '<br />');
    gsap.set('.exp2 h1 br', { display: 'none' });
    gsap.set('.exp2 p br', { display: 'none' });
    gsap.set('.exp2-img img', { autoAlpha: 0 });

    exp2Timeline.from(
        [...exp2H1, ...exp2P],
        {
            y: 100,
            stagger: 0.1,
            autoAlpha: 0,
        },
        'same'
    );

    exp2Timeline.to(
        '.exp2-img-1',
        {
            top: '25%',
            left: '25%',
            autoAlpha: 1,
        },
        'same'
    );
    exp2Timeline.to(
        '.exp2-img-2',
        {
            top: '25%',
            right: '0%',
            autoAlpha: 1,
        },
        'same'
    );

    exp2Timeline.to(
        '.exp2-img-3',
        {
            bottom: '25%',
            left: '25%',
            autoAlpha: 1,
        },
        'same'
    );
    exp2Timeline.to(
        '.exp2-img-4',
        {
            bottom: '25%',
            right: '0%',
            autoAlpha: 1,
        },
        'same'
    );

    const brandTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.brand',
            scroller: '.main',
            start: 'top center',
            end: 'top top',
            scrub: false,
            markers: true,
            duration: 2,
        },
    });
    brandTimeline.from('.brand-bg', {
        width: '0%',
    });
    const paraText = select('.product div');
    const splitText = textSplit(paraText, ' ');

    gsap.set(splitText, { autoAlpha: 0.3 });
    const textRevealTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.product',
            scroller: '.main',
            start: 'top 30%',
            end: 'top -300%',
            scrub: 0.1,
            pin: true,
        },
    });
    textRevealTimeline.to(splitText, {
        autoAlpha: 1,
        stagger: 0.1,
    });
}

// function initProducts() {
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: '.product',
//             scroller: '.main',
//             start: 'top bottom',
//             end: 'bottom top',
//             scrub: 5,
//             // markers: true,
//         },
//     });
//     console.log(selectAll('.product'));

//     tl.from(
//         '.product__even',
//         {
//             y: 100,
//             ease: 'Power4.easeOut',
//             autoAlpha: 0,
//             scale: 0.8,
//         },
//         'same'
//     );
//     tl.from(
//         '.product__odd',
//         {
//             y: -100,
//             ease: 'Power4.easeOut',
//             autoAlpha: 0,
//             scale: 0.8,
//         },
//         'same'
//     );
// }

window.addEventListener('load', () => {
    init();
});
