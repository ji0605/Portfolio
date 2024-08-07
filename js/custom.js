MainFullpage();
menuBtnAction();
profileSlide();

function MainFullpage() {
    let tt = false;
    const nav = document.querySelectorAll('.gnb li');

    const tl = gsap.timeline({ pause: true, });

    let t = 0.5;


    tl
        .from('.intro .design strong:nth-child(5)', {
            x: 500,
            rotate: 720,
            duration: t * 1
        })
        .from('.intro .design strong:nth-child(4)', {
            x: 500,
            rotate: 720,
            duration: t * 2
        }).from('.intro .design strong:nth-child(3)', {
            x: -1500,
            rotate: 720,
            duration: t * 3
        })
        .from('.intro .design em:nth-child(6)', {
            x: -1500,
            opacity: 0,
            duration: t * 3,
            onComplete: function () {
                document.querySelector('.intro .design').classList.add('on'); // then only replace with blue div with new height and width
            }
        }, "<")







    const portFolio = new fullpage('.content', {
        anchors: ['intro', 'pt01', 'pt02', 'pt03', 'profile'],
        onLeave: function (origin, destination, direction) {
            let idx = destination.index;
            nav.forEach(it => it.classList.remove('on'))
            nav[idx].classList.add('on');
            if (idx !== 0) {
                tl.kill()
            } else {
                tl.restart()
            }
        }
    });
}


function menuBtnAction() {
    const btn = document.querySelector('.menu .btn');
    const cover = document.querySelector('.cover');
    const lnk = document.querySelectorAll('.lnb a');

    function coverAnimation() {
        cover.classList.toggle('on');
        btn.parentElement.classList.toggle('on');
    }

    function linkMove() {
        cover.classList.remove('on');
        btn.parentElement.classList.remove('on');
    }

    btn.addEventListener('click', coverAnimation);

    lnk.forEach(el => {
        el.addEventListener('click', linkMove)
    });

    cover.addEventListener('wheel', function (e) {
        e.stopPropagation();
    })

}

function profileSlide() {
    const slide = new Swiper('.profileSlide', {
        effect: "cube",
        loop: true,
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: false,
            shadowOffset: 80,
            shadowScale: 0.7,
        },
    })
}




