gsap.registerPlugin(MorphSVGPlugin);

document.querySelectorAll('.add-to-cart').forEach(button => {
    let morph = button.querySelector('.morph path'),
        shirt = button.querySelector('.shirt'),
        cart = button.querySelector('.cart'),
        text = button.querySelector('span');

    button.addEventListener('pointerdown', e => {
        if (button.classList.contains('active')) {
            return;
        }
        gsap.to(button, {
            '--background-scale': .97,
            duration: .15
        });
        gsap.to(text, {
            opacity: 0,
            duration: 0.35
        });
    });

    button.addEventListener('click', e => {
        e.preventDefault();
        if (button.classList.contains('active')) {
            return;
        }

        button.classList.add('active');

        gsap.to(button, {
            keyframes: [{
                '--background-scale': .97,
                duration: .15
            }, {
                '--background-scale': 1,
                delay: .125,
                duration: 1.2,
                ease: 'elastic.out(1, .6)',
                onComplete: () => {
                    // Animation completed, now redirect to YouTube
                    window.location.href = "../views/addcart.html";
                }
            }]
        });

        gsap.to(button, {
            keyframes: [{
                '--shirt-scale': 1,
                '--shirt-y': '-42px',
                '--cart-x': '0px',
                '--cart-scale': 1,
                duration: .4,
                ease: 'power1.in'
            }, {
                '--shirt-y': '-40px',
                duration: .3
            }, {
                '--shirt-y': '16px',
                '--shirt-scale': .9,
                duration: .25,
                ease: 'none'
            }, {
                '--shirt-scale': 0,
                duration: .3,
                ease: 'none'
            }]
        });

        gsap.to(shirt, {
            keyframes: [{
                '--shirt-second-y': '0px',
                delay: .835,
                duration: .12
            }]
        });

        gsap.to(button, {
            keyframes: [{
                '--cart-clip': '12px',
                '--cart-clip-x': '3px',
                delay: .9,
                duration: .06
            }, {
                '--cart-y': '2px',
                duration: .1
            }, {
                '--cart-tick-offset': '0px',
                '--cart-y': '0px',
                duration: .2,
                onComplete: () => {
                    button.style.overflow = 'hidden';
                    text.style.visibility = 'hidden';
                }
            }, {
                '--cart-x': '52px',
                '--cart-rotate': '-15deg',
                duration: .2
            }, {
                '--cart-x': '104px',
                '--cart-rotate': '0deg',
                duration: .2,
                clearProps: true,
                onComplete: () => {
                    button.style.overflow = 'hidden';
                    button.style.setProperty('--text-o', 0);
                    button.style.setProperty('--text-x', '0px');
                    button.style.setProperty('--cart-x', '-104px');
                }
            }, {
                '--text-o': 1,
                '--text-x': '12px',
                '--cart-x': '-48px',
                '--cart-scale': .75,
                duration: .25,
                clearProps: true,
                onComplete: () => {
                    button.classList.remove('active');
                    text.style.visibility = 'visible';
                }
            }]
        });

        gsap.to(button, {
            keyframes: [{
                '--text-o': 0.4,
                duration: .8
            }]
        });

        gsap.to(morph, {
            keyframes: [{
                morphSVG: 'M0 12C6 12 20 10 32 0C43.9024 9.99999 58 12 64 12V13H0V12Z',
                duration: .25,
                ease: 'power1.out'
            }, {
                morphSVG: 'M0 12C6 12 17 12 32 12C47.9024 12 58 12 64 12V13H0V12Z',
                duration: .15,
                ease: 'none'
            }]
        });
    });
});
gsap.registerPlugin(MorphSVGPlugin);

document.querySelectorAll('.product button').forEach(button => {
    let morph = button.querySelector('.morph path'),
        shirt = button.querySelectorAll('.shirt svg > path');

    gsap.set(morph, { morphSVG: ".morph" });

    button.addEventListener("click", () => {
        button.classList.toggle("active");
        gsap.to(button, { '--background-scale': button.classList.contains('active') ? 1.2 : 1 });
        gsap.to(morph, { duration: 0.3, morphSVG: button.classList.contains('active') ? ".cart" : ".morph" });

        if (button.classList.contains('active')) {
            gsap.to(shirt, { '--shirt-y': 0, '--shirt-scale': 1 });
        } else {
            gsap.to(shirt, { '--shirt-y': -16, '--shirt-scale': 0 });
        }
    });
});



document.querySelectorAll('.truck-button').forEach(button => {
    button.addEventListener('click', e => {

        e.preventDefault();

        let box = button.querySelector('.box'),
            truck = button.querySelector('.truck');

        if (!button.classList.contains('done')) {

            if (!button.classList.contains('animation')) {

                button.classList.add('animation');

                gsap.to(button, {
                    '--box-s': 1,
                    '--box-o': 1,
                    duration: .3,
                    delay: .5
                });

                gsap.to(box, {
                    x: 0,
                    duration: .4,
                    delay: .7
                });

                gsap.to(button, {
                    '--hx': -5,
                    '--bx': 50,
                    duration: .18,
                    delay: .92
                });

                gsap.to(box, {
                    y: 0,
                    duration: .1,
                    delay: 1.15
                });

                gsap.set(button, {
                    '--truck-y': 0,
                    '--truck-y-n': -26
                });

                gsap.to(button, {
                    '--truck-y': 1,
                    '--truck-y-n': -25,
                    duration: .2,
                    delay: 1.25,
                    onComplete() {
                        gsap.timeline({
                            onComplete() {
                                button.classList.add('done');
                                // Add the redirection to YouTube here
                                window.location.href = '../Views/orderDetails.html';
                            }
                        }).to(truck, {
                            x: 0,
                            duration: .4
                        }).to(truck, {
                            x: 40,
                            duration: 1
                        }).to(truck, {
                            x: 20,
                            duration: .6
                        }).to(truck, {
                            x: 96,
                            duration: .4
                        });
                        gsap.to(button, {
                            '--progress': 1,
                            duration: 2.4,
                            ease: "power2.in"
                        });
                    }
                });

            }

        } else {
            button.classList.remove('animation', 'done');
            gsap.set(truck, {
                x: 4
            });
            gsap.set(button, {
                '--progress': 0,
                '--hx': 0,
                '--bx': 0,
                '--box-s': .5,
                '--box-o': 0,
                '--truck-y': 0,
                '--truck-y-n': -26
            });
            gsap.set(box, {
                x: -24,
                y: -6
            });
        }

    });
});

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
