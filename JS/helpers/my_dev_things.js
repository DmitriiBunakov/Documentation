class slider {
    constructor(obj) {
        let {
            sliderSelector,
            sliderArrowLeft,
            sliderArrowRight,
            slidesToShow,
            mediaRequstes,
            swipeSlidesCount,
            dots,
            scrollByMouse,
            scrollByTouch,
            dragByTouch,
            dragByMouse,
            distanceToScrollToSwipe,
            scrollByWheel,
            transitionDuration,
            transitionProperty,
            adaptiveHeight,
            autoPlay,
            autoPlayingInterval,
            waitForAnimation,
            arrows,
            infinity,
            centerMode,
            progressLine,
        } = obj;
        this.sliderSelector = sliderSelector;
        this.sliderArrowLeft = sliderArrowLeft;
        this.sliderArrowRight = sliderArrowRight;
        this.infinity = infinity;
        this.centerMode = centerMode;
        this.progressLine = progressLine;
        this.slidesToShow = slidesToShow;
        this.swipeSlidesCount = swipeSlidesCount;
        if (this.swipeSlidesCount > this.slidesToShow) {
            this.swipeSlidesCount = this.slidesToShow;
        }
        this.dots = dots;
        this.scrollByMouse = scrollByMouse;
        this.scrollByTouch = scrollByTouch;
        this.dragByTouch = dragByTouch;
        this.dragByMouse = dragByMouse;
        this.distanceToScrollToSwipe = distanceToScrollToSwipe;
        this.scrollByWheel = scrollByWheel;
        this.transitionDuration = transitionDuration;
        this.transitionProperty = transitionProperty;
        this.adaptiveHeight = adaptiveHeight;
        this.autoPlay = autoPlay;
        this.autoPlayingInterval = autoPlayingInterval;
        this.waitForAnimation = waitForAnimation;
        if (this.infinity) {
            this.waitForAnimation = true;
        }
        this.arrows = arrows;
        this.mediaRequstes = mediaRequstes;

        this.slider = document.querySelector(this.sliderSelector);
        this.inner = this.slider.querySelector(`${this.sliderSelector}_inner`);
        this.wrapper = this.slider.querySelector(`${this.sliderSelector}_wrapper`);
        this.slides = this.slider.querySelectorAll(`${this.sliderSelector}_item`);
        if (this.slidesToShow > this.slides.length) {
            this.slidesToShow = this.slides.length;
        }
        if (this.arrows) {
            this.arrowPrev = this.slider.querySelector(this.sliderArrowLeft);
            this.arrowNext = this.slider.querySelector(this.sliderArrowRight);
        }
        this.mediasReqs();

        this.wrapperWidth = parseFloat(window.getComputedStyle(this.wrapper).width);
        this.btnsWrapper = document.createElement('ul');
        this.btnsWrapper.classList.add('slider_btns');
        this.slideWidth = this.wrapperWidth / this.slidesToShow;
        this.translateInnerByWidthSlide = this.slideWidth * this.swipeSlidesCount;
        this.translateInner = this.translateInnerByWidthSlide;

        this.arrowPrev;
        this.arrowNext;
        this.btns = [];
        this.currentSlide = 0;
        this.prevCountSlide = this.currentSlide;
        this.startPos;
        this.endPos;
        this.timer;
        this.canClickToNextSlide = true;
        this.nullTransinionsTimer;
        this.distanceToSwipeByLeftSlides = 0;
        this.centerSlide = Math.floor(this.slidesToShow / 2);
        this.wheelCounterDistance = 0;
    }

    render() {
        // инициализация
        this.inner.style.width = this.slides.length * this.slideWidth + 'px';
        this.slides.forEach((item, i) => {
            item.style.flex = `0 0 ${this.slideWidth + 'px'}`;
        });
        this.createDotsInit();
        this.centerModeInit();
        this.adaptiveHeightInit();
        this.autoPlayingInit();
        this.progressLineInit();
        // инициализация кнопок и стрелок
        this.classArrowsOnEnd();
        this.activeDotsClass();
        this.transitionsInner();
        // работа
        this.wheelScrollingInit();
        if (this.dots) {
            this.btns.forEach((item, i) => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    /*для анимации нужно, чтобы не ждать конца действия(при dragBy)*/
                    if (this.currentSlide == i) {
                        return;
                    }
                    if (this.canClickToNextSlide === false) {
                        return;
                    }
                    // 
                    this.currentSlide = i;
                    this.centerSlide = Math.floor(this.slidesToShow / 2) + this.currentSlide;
                    // 
                    if (this.currentSlide == 0) {
                        this.distanceToSwipeByLeftSlides = 0;
                    }
                    // 
                    this.calcItemsLeft();
                    if (this.itemsLeft < 0) {
                        this.itemsLeft = this.swipeSlidesCount - Math.abs(this.itemsLeft);
                        this.calcDistanceToSwipeByLeftSlides();
                    }
                    // 
                    this.centerModeTransitions();
                    this.activeDotsClass();
                    this.classArrowsOnEnd();
                    this.adaptiveHeightSlider();
                    this.autoPlaying();
                    this.transitionsInner();
                    this.progressLineTransition();
                });
            });
        }

        if (this.arrows) {
            this.arrowPrev.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                /*это убрать, если хотим ITEMSleft только в конце листания вправо */
                if (this.currentSlide == 1) {
                    this.distanceToSwipeByLeftSlides = 0;
                }
                // 
                if (this.currentSlide == 0) {
                    return;
                }
                if (this.canClickToNextSlide === false) {
                    return;
                }
                if (this.currentSlide != 0) {
                    this.currentSlide--;
                }
                if (this.centerMode) {
                    this.centerSlide--;
                }
                this.centerModeTransitions();
                this.activeDotsClass();
                this.adaptiveHeightSlider();
                this.autoPlaying();
                this.transitionsInner();
                this.classArrowsOnEnd();
                this.progressLineTransition();
            });
            this.arrowNext.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                // остаток слайдов, если их меньше, чем в свайпах
                /*когда остается сладов меньше, чем слайдов прокрутки за "раз", то я высчитываю, сколько их осталось, и от количества слайдов показанных отнимаю оставшийся слайд, затем перемножаю на ширину слайде, получаю значение на сколько нужно сдвинуть "иннер", а затем отнимаю в методе transitioniner это значение*/
                this.calcItemsLeft();
                if (this.itemsLeft < this.swipeSlidesCount && this.itemsLeft > 0) {
                    this.calcDistanceToSwipeByLeftSlides();
                }
                // 
                if (this.itemsLeft == 0 || this.itemsLeft < 0) {
                    return;
                }
                if (this.canClickToNextSlide === false) {
                    return;
                }
                if (this.slides.length - 1 < this.swipeSlidesCount) {
                    return;
                }
                if (this.itemsLeft > 0) {
                    this.currentSlide++;
                }
                // if (this.currentSlide < Math.floor((this.slides.length - 1) / this.swipeSlidesCount)) {
                //     this.currentSlide++;
                // } тут баг(неверный расчет был при  slidesToShow: 1.4,swipeSlidesCount: 1.1, и при 7 слайдах)
                if (this.centerMode) {
                    this.centerSlide++;
                }
                // 
                this.centerModeTransitions();
                this.activeDotsClass();
                this.adaptiveHeightSlider();
                this.autoPlaying();
                this.transitionsInner();
                this.classArrowsOnEnd();
                this.progressLineTransition();
            });
        }

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (this.scrollByTouch) {
                this.wrapper.addEventListener('touchstart', (e) => {
                    this.startPos = e.touches[0].pageX;
                    clearInterval(this.nullTransinionsTimer);
                    clearInterval(this.timer);
                });
                this.wrapper.addEventListener('touchend', (e) => {
                    this.calcItemsLeft();
                    if (this.itemsLeft < this.swipeSlidesCount && this.itemsLeft > 0) {
                        this.calcDistanceToSwipeByLeftSlides();
                    }
                    // 
                    if (this.slides.length - 1 < this.swipeSlidesCount) {
                        return;
                    }
                    if (this.canClickToNextSlide === false) {
                        return;
                    }
                    // 
                    this.endPos = e.changedTouches[0].pageX;
                    if (this.endPos >= this.startPos + this.distanceToScrollToSwipe) {
                        if (this.itemsLeft == 0 || this.itemsLeft < 0) {
                            return;
                        }
                        if (this.itemsLeft > 0) {
                            this.currentSlide++;
                        }
                    }
                    if (this.endPos <= this.startPos - this.distanceToScrollToSwipe) {
                        if (this.currentSlide != 0) {
                            this.currentSlide--;
                        }
                    }
                    if (this.currentSlide == 0) {
                        this.distanceToSwipeByLeftSlides = 0;
                    }
                    this.startPos = undefined;
                    this.centerModeTransitions();
                    this.activeDotsClass();
                    this.adaptiveHeightSlider();
                    this.autoPlaying();
                    this.transitionsInner();
                    this.classArrowsOnEnd();
                    this.progressLineTransition();
                });
                this.wrapper.addEventListener('touchmove', this.dragTouch);
            }
        } else {
            if (this.scrollByMouse) {
                this.wrapper.addEventListener('selectstart', (e) => {
                    e.preventDefault();
                });
                this.wrapper.addEventListener('mousedown', (e) => {
                    if (!this.canClickToNextSlide) {
                        return;
                    }
                    this.startPos = e.pageX;
                    if (this.dragByMouse) {
                        this.inner.addEventListener('mousemove', this.dragMouse);
                    }
                    clearInterval(this.timer);
                    clearInterval(this.nullTransinionsTimer);
                });
                this.wrapper.addEventListener('mouseup', this.scrollByMouseTransition);
                this.wrapper.addEventListener('mouseleave', this.scrollByMouseTransition);
            }
        }
    }
    // 
    // 
    // 
    calcDistanceToSwipeByLeftSlides = () => {
        this.distanceToSwipeByLeftSlides = (this.swipeSlidesCount - this.itemsLeft) * -this.slideWidth;
    }
    calcItemsLeft = () => {
        this.itemsLeft = this.slides.length - this.slidesToShow - (this.currentSlide * this.swipeSlidesCount);
    }
    // 
    mediasReqs = () => {
        for (let key in this.mediaRequstes) {
            if (window.matchMedia(`(max-width: ${key})`).matches) {
                let {
                    slidesToShow,
                    swipeSlidesCount
                } = this.mediaRequstes[key];
                this.slidesToShow = slidesToShow;
                this.swipeSlidesCount = swipeSlidesCount;
                if (this.slidesToShow > this.slides.length) {
                    this.slidesToShow = this.slides.length;
                }
                if (this.swipeSlidesCount > this.slidesToShow) {
                    this.swipeSlidesCount = this.slidesToShow;
                }
            }
        }
    }
    // 
    scrollByMouseTransition = (e) => {
        this.calcItemsLeft();
        if (this.itemsLeft < this.swipeSlidesCount && this.itemsLeft > 0) {
            this.calcDistanceToSwipeByLeftSlides();
        }
        // 
        if (this.slides.length - 1 < this.swipeSlidesCount) {
            return;
        }
        if (this.canClickToNextSlide === false) {
            return;
        }
        // 
        if (this.scrollByMouse) {
            this.endPos = e.pageX;
            if (this.endPos >= this.startPos + this.distanceToScrollToSwipe) {
                if (this.itemsLeft > 0) {
                    this.currentSlide++;
                }
            }
            if (this.endPos <= this.startPos - this.distanceToScrollToSwipe) {
                if (this.currentSlide != 0) {
                    this.currentSlide--;
                }
            }
            if (this.currentSlide == 0) {
                this.distanceToSwipeByLeftSlides = 0;
            }
        }
        // 
        if (this.dragByMouse) {
            this.inner.removeEventListener('mousemove', this.dragMouse);
        }
        this.startPos = undefined; //потому что будет считаться относительно 0 при событии mouseleave;
        this.centerModeTransitions();
        this.activeDotsClass();
        this.adaptiveHeightSlider();
        this.autoPlaying();
        this.transitionsInner();
        this.classArrowsOnEnd();
        this.progressLineTransition();
    }
    // 
    wheelScrollingInit = () => {
        if (this.scrollByWheel) {
            this.wrapper.addEventListener('wheel', (e) => {
                e.preventDefault();
                this.wheelCounterDistance = this.wheelCounterDistance + e.deltaY;
                if (this.wheelCounterDistance < 0 && this.currentSlide == 0) {
                    this.wheelCounterDistance = 0;
                    return;
                }
                if (this.wheelCounterDistance > 0 && (this.itemsLeft < 0 || this.itemsLeft == 0)) {
                    this.wheelCounterDistance = 0;
                    return;
                }
                // 
                if (this.wheelCounterDistance > 0 && this.wheelCounterDistance > 100) {
                    this.wheelCounterDistance = 0;
                    this.calcItemsLeft();
                    if (this.itemsLeft < this.swipeSlidesCount && this.itemsLeft > 0) {
                        this.calcDistanceToSwipeByLeftSlides();
                    }
                    // 
                    if (this.canClickToNextSlide === false) {
                        return;
                    }
                    if (this.slides.length - 1 < this.swipeSlidesCount) {
                        return;
                    }
                    if (this.itemsLeft > 0) {
                        this.currentSlide++;
                    }
                    if (this.centerMode) {
                        this.centerSlide++;
                    }
                    this.centerModeTransitions();
                    this.activeDotsClass();
                    this.adaptiveHeightSlider();
                    this.autoPlaying();
                    this.transitionsInner();
                    this.classArrowsOnEnd();
                    this.progressLineTransition();
                }
                if (this.wheelCounterDistance < 0 && this.wheelCounterDistance < -100) {
                    this.wheelCounterDistance = 0;
                    if (this.currentSlide == 1) {
                        this.distanceToSwipeByLeftSlides = 0;
                    }
                    // 
                    if (this.canClickToNextSlide === false) {
                        return;
                    }
                    if (this.currentSlide != 0) {
                        this.currentSlide--;
                    }
                    if (this.centerMode) {
                        this.centerSlide--;
                    }
                    this.centerModeTransitions();
                    this.activeDotsClass();
                    this.adaptiveHeightSlider();
                    this.autoPlaying();
                    this.transitionsInner();
                    this.classArrowsOnEnd();
                    this.progressLineTransition();
                }
            });
        }
    }
    // 
    classArrowsOnEnd = () => {
        if (this.arrows) {
            this.calcItemsLeft();
            this.arrowPrev.classList.remove('nonActive');
            this.arrowNext.classList.remove('nonActive');
            // 
            if (this.currentSlide == 0) {
                this.arrowPrev.classList.add('nonActive');
            }
            if (this.itemsLeft == 0 || this.itemsLeft < 0) {
                this.arrowNext.classList.add('nonActive');
            }
        }
    }
    // 
    autoPlayingInit = () => {
        if (this.autoPlay) {
            this.autoPlaying();
            this.wrapper.addEventListener('mouseenter', () => {
                clearInterval(this.timer);
            });
            this.wrapper.addEventListener('mouseleave', () => {
                this.autoPlaying();
            });
        }
    }
    autoPlaying = () => {
        if (this.autoPlay) {
            clearInterval(this.timer);
            this.timer = setTimeout(() => {
                this.calcItemsLeft();
                if (this.itemsLeft < this.swipeSlidesCount && this.itemsLeft > 0) {
                    this.calcDistanceToSwipeByLeftSlides();
                }
                // 
                if (this.itemsLeft > 0) {
                    this.currentSlide++;
                }
                if (this.itemsLeft == 0 || this.itemsLeft < 0) {
                    this.currentSlide = 0;
                    this.distanceToSwipeByLeftSlides = 0;
                    if (this.centerMode) {
                        this.centerSlide = 0;
                    }
                }
                // 
                if (this.centerMode) {
                    this.centerSlide++;
                }
                // 
                this.centerModeTransitions();
                this.activeDotsClass();
                this.transitionsInner();
                this.adaptiveHeightSlider();
                this.autoPlaying();
            }, this.autoPlayingInterval);
        }
    }
    // 
    dragMouse = (e) => {
        if (this.dragByMouse) {
            let move = e.pageX - this.startPos;
            let translate = +this.inner.style.transform.match(/\d+/g)[0];
            if (translate > (this.slides.length - this.slidesToShow) * this.slideWidth) {
                return;
            }
            if (!this.canClickToNextSlide) {
                return;
            }
            this.calcItemsLeft()
            if ((this.itemsLeft == 0 || this.itemsLeft) < 0 && e.pageX > this.startPos) {
                return;
            }
            this.inner.style.transform = `translateX(-${this.currentSlide * this.translateInner + this.distanceToSwipeByLeftSlides + move + 'px'})`;
        }
    }
    dragTouch = (e) => {
        if (this.dragByTouch) {
            let move = e.targetTouches[0].pageX - this.startPos;
            let translate = +this.inner.style.transform.match(/\d+/g)[0];
            if (translate > (this.slides.length - this.slidesToShow) * this.slideWidth) {
                return;
            }
            if (!this.canClickToNextSlide) {
                return;
            }
            this.calcItemsLeft();
            if ((this.itemsLeft == 0 || this.itemsLeft) < 0 && e.targetTouches[0].pageX > this.startPos) {
                return;
            }
            this.inner.style.transform = `translateX(-${this.currentSlide * this.translateInner + this.distanceToSwipeByLeftSlides + move + 'px'})`;
        }
    }
    // 
    transitionsInner = () => {
        this.inner.style.transition = `${this.transitionDuration}ms all ${this.transitionProperty}`;
        this.inner.style.transform = `translateX(-${this.currentSlide * this.translateInnerByWidthSlide +
            this.distanceToSwipeByLeftSlides + 'px'})`;
        /*Если мы хотим , чтобы работа "оставшихся слайдов была только в конце листания вправо, то добавляем это действие, и убираем условие в PREVBTN , где сравниваем первый слайд , а затем обнуляем"*/
        // this.distanceToSwipeByLeftSlides = 0; 

        /*условие проверяет, если предыдущий слайд не равняется настоящему, после события, то мы двигаем inner , а затем в предыдущий слайд устанавливаем значение настоящего и получается круг
        без этого условия, при клике на активный уже слайд , все равно надо будет ждать вреия transition inner, чтобы затем снова попробовать переключить слайд*/
        if (this.prevCountSlide != this.currentSlide) {
            if (this.waitForAnimation) {
                this.canClickToNextSlide = false;
                setTimeout(() => {
                    this.canClickToNextSlide = true;
                }, this.transitionDuration);
            }
            this.prevCountSlide = this.currentSlide;
        }

        /*предствим ситуацию: пользователь кликает несколько раз по точке, где сейчас слайд и находится, каждый раз 
        запускается интервал обнуления стилей, чтобы можно было перетаскивать слайды без задержки, но если он сразу после
        этого кликнет в другую точку, то слайдер начнет перелистываться, и он не дойдя до конца анимации прервется, т.к.
        сработает обнуление стилей. Чтобы такого не было, каждый раз при клике на любую точку вызываем сначала clearIntreval
        и затем, если дальше кликов не последовало, то устанавливаем таймер на обнуление*/
        clearInterval(this.nullTransinionsTimer);
        this.nullTransinionsTimer = setTimeout(() => {
            this.inner.style.transition = ``;
        }, this.transitionDuration);
        // 
    }
    // 
    adaptiveHeightInit = () => {
        if (this.adaptiveHeight && this.slidesToShow == 1) {
            let heightInner = window.getComputedStyle(this.slides[this.currentSlide]).height;
            this.inner.style.height = heightInner;
        } else {
            this.adaptiveHeight = false;
        }
    }
    adaptiveHeightSlider = () => {
        if (this.adaptiveHeight) {
            this.slides.forEach((slide, j) => {
                if (this.currentSlide == j) {
                    let heightSlide = window.getComputedStyle(slide).height;
                    this.inner.style.height = heightSlide;
                }
            })
        }
    }
    // 
    activeDotsClass = () => {
        if (this.dots) {
            this.btns.forEach((item, i) => {
                item.classList.remove('active');
                item.classList.remove('nonActive');
                if (i == this.currentSlide) {
                    item.classList.add('active');
                    if (this.currentSlide == 0 || this.currentSlide == (this.slides.length - 1) / this.swipeSlidesCount) {
                        item.classList.add('nonActive');
                    }
                }
            });
        }
    }
    createDotsInit = () => {
        if (this.dots) {
            this.quantityDotsAndSlides = 0;
            // логика такая: к слайдам на странице прибавляю слайды в свайпе, и каждый цикл увеличиваю счетчик на один, и когда сумма слайдов в цике больше общего количества по факу, останавливаю 
            for (let sumSlides = this.slidesToShow; ; sumSlides = sumSlides + this.swipeSlidesCount) {
                this.quantityDotsAndSlides++;
                if (sumSlides >= this.slides.length) {
                    break;
                }
            }
            for (let i = 0; i < this.quantityDotsAndSlides; i++) {
                let btn = document.createElement('li');
                btn.classList.add('slider_btn');
                this.btnsWrapper.append(btn);
                this.btns.push(btn);
            }
            this.wrapper.append(this.btnsWrapper);
            this.activeDotsClass();
        }
    }
    // 
    centerModeInit = () => {
        if (this.centerMode && this.slidesToShow % 2 != 0 &&
            this.slidesToShow != 1 && this.swipeSlidesCount == 1) {
            this.slides.forEach(item => {
                let backgroundOfItem = document.createElement('div');
                backgroundOfItem.classList.add('_center_mode_element');
                item.querySelector('.slider_main_item_body').append(backgroundOfItem);
            });
            this.centerModeTransitions();
        } else {
            this.centerMode = false;
        }
    }
    centerModeTransitions = () => {
        if (this.centerMode) {
            this.slides.forEach(item => {
                item.classList.remove('_center_mode');
            });
            setTimeout(() => {
                this.slides[this.centerSlide].classList.add('_center_mode');
            }, this.transitionDuration / 1.5);
        }
    }
    // 
    progressLineInit = () => {
        if (this.progressLine) {
            let line = document.createElement('div');
            let afterLine = document.createElement('div');
            afterLine.classList.add('_slider_progress_line_after');
            line.classList.add('_slider_progress_line');
            line.append(afterLine);
            this.slider.append(line);
            this.progressLineElement = document.querySelector(`${this.sliderSelector} ._slider_progress_line`);
            this.progressLineElementAfter = this.progressLineElement.querySelector('._slider_progress_line_after');
            this.widthOneSlideInProgressLine = this.wrapperWidth / (this.quantityDotsAndSlides - 1);
        }
    }
    progressLineTransition = () => {
        if (this.progressLine) {
            this.progressLineElementAfter.style.width = `${this.wrapperWidth - (this.currentSlide * this.widthOneSlideInProgressLine)}px`;
            // фикс пропажи бордера слева
            if (this.currentSlide == 0) {
                this.progressLineElementAfter.style.width = `100%`
            }
        }
    }
}
let main_slider = new slider({
    sliderSelector: '.slider_main',
    arrows: true,
    sliderArrowLeft: '.slider_main .arrow_left',
    sliderArrowRight: '.slider_main .arrow_right',
    dots: true,
    scrollByMouse: false,
    dragByMouse: false,
    scrollByTouch: true,
    dragByTouch: true,
    transitionDuration: 2000,
    transitionProperty: 'ease-in-out',
    adaptiveHeight: false,
    autoPlay: false,
    autoPlayingInterval: 2000,
    waitForAnimation: false,
    slidesToShow: 1,
    swipeSlidesCount: 1
});
main_slider.render();
//
//
function ibg() {
    let ibg = document.querySelectorAll('.ibg');
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = `url(${ibg[i].querySelector('img').getAttribute('src')})`;
        }
    }
}
//
//
function placeholderInputs() {
    let inputs = document.querySelectorAll('.form_input');
    inputs.forEach(input => {
        let prevPlaceholder = input.placeholder;
        input.value = prevPlaceholder;
        input.addEventListener('focus', () => {
            if (input.value == prevPlaceholder) {
                input.value = '';
                input.placeholder = '';
            }
        });
        input.addEventListener('blur', () => {
            if (input.value == '' || input.value == prevPlaceholder) {
                input.value = prevPlaceholder;
                input.placeholder = prevPlaceholder;
            }
        });
    });
}
//
//
function burgerMenu() {
    let burger_menu = document.querySelector('.burger_menu');
    let burger_page = document.querySelector('.burger_page');
    let wrapper = document.querySelector('.wrapper');
    burger_menu.addEventListener('click', () => {
        burger_menu.classList.toggle('active');
        burger_page.classList.toggle('active');
        document.body.classList.toggle('lock');
        wrapper.classList.toggle('lock');
    });
}
burgerMenu();
//
//
function timer({
    deadline,
    timerSelector
}) {
    let timer = document.querySelector(timerSelector);
    let days = timer.querySelector('#days');
    let hours = timer.querySelector('#hours');
    let minutes = timer.querySelector('#minutes');
    let seconds = timer.querySelector('#seconds');
    let timerID = setInterval(writeValueTimer, 1000);
    writeValueTimer();


    function writeValueTimer() {
        let r = calcRemainTime(deadline);
        days.textContent = setZero(r.days);
        hours.textContent = setZero(r.hours);
        minutes.textContent = setZero(r.minutes);
        seconds.textContent = setZero(r.seconds);
        if (r.mms <= 0) {
            clearInterval(timerID);
            days.textContent = setZero(0);
            hours.textContent = setZero(0);
            minutes.textContent = setZero(0);
            seconds.textContent = setZero(0);
        }
    }

    function calcRemainTime(endTime) {
        let mms = Date.parse(endTime) - Date.parse(new Date);
        let monthses = Math.floor(mms / (1000 * 60 * 60 * 24 * 7 * 4));
        let weeks = Math.floor(mms / (1000 * 60 * 60 * 24 * 7));
        let days = Math.floor(mms / (1000 * 60 * 60 * 24));
        let hours = Math.floor((mms / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((mms / (1000 * 60)) % 60);
        let seconds = Math.floor((mms / 1000) % 60);
        return {
            mms,
            monthses,
            weeks,
            days,
            hours,
            minutes,
            seconds
        }
    }

    function setZero(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
}
//
//
function scrollTo({
    triggerSel,
    speed = 10,
    multiplySpeed = 0,
    ableToStopScroll = false
}) {
    let triggers = document.querySelectorAll(triggerSel);
    let canClick = true;
    let timer;
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            if (!canClick) {
                return;
            }
            canClick = false;
            let targetScrollTo = document.querySelector(`${trigger.hash}`);
            addKindOfListener();

            let targetOffset = targetScrollTo.offsetTop;
            let speedMulti = 0;

            timer = setInterval(() => {
                if (targetOffset > document.documentElement.scrollTop) {
                    document.documentElement.scrollTop += speed + speedMulti;
                    if (document.documentElement.scrollTop >= targetOffset ||
                        document.documentElement.clientHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
                        nullAfterEnd();
                    }
                } else {
                    document.documentElement.scrollTop -= speed + speedMulti;
                    if (document.documentElement.scrollTop <= targetOffset) {
                        nullAfterEnd();
                    }
                }
                speedMulti += multiplySpeed;
            }, 1)
        });
    });

    function stopScrolling(e) {
        if (!ableToStopScroll) {
            e.preventDefault();
        } else {
            nullAfterEnd();
        }
    }

    function nullAfterEnd() {
        clearInterval(timer);
        canClick = true;
        removeKindOfListener();
    }

    function addKindOfListener() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            document.addEventListener('touchstart', stopScrolling, {
                passive: false
            });
        } else {
            document.addEventListener('wheel', stopScrolling, {
                passive: false
            });
        }
    }

    function removeKindOfListener() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            document.removeEventListener('touchstart', stopScrolling);
        } else {
            document.removeEventListener('wheel', stopScrolling);
        }
    }
}
//
//
function emailValidation(inputSelector) {
    let inputs = document.querySelectorAll(inputSelector);
    inputs.forEach(item => {
        item.addEventListener('blur', checkEmail);
        item.addEventListener('focus', checkEmail);
        item.addEventListener('input', checkEmailOnWords);
    });

    function checkEmail() {
        if (!/[@.]/.test(this.value) && this.value.length != 0) {
            this.style.boxShadow = 'inset 0 0 0 2px red';
        }
    }

    function checkEmailOnWords(e) {
        if (/[а-яё]/g.test(this.value)) {
            this.value = this.value.substring(0, this.value.length - 1);
        }
        if (this.value.length == 0) {
            this.style.boxShadow = '';
        }
    }
}
//
//
class Service {
    getData = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error();
        }
        return await res.json();
    }
    postData = async (url, body) => {
        let res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            }
        });
        if (!res.ok) {
            throw new Error();
        }
        return await res.json();
    }
    putData = async (url, body) => {
        let res = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            }
        });
        if (!res.ok) {
            throw new Error();
        }
        return await res.json();
    }
    deleteData = async (url) => {
        let res = await fetch(url, {
            method: "DELETE"
        });
        if (!res.ok) {
            throw new Error();
        }
        return await res.json();
    }
}
//
//
function phoneMask(inputSelector) {
    let inputs = document.querySelectorAll(inputSelector);
    inputs.forEach(input => {
        input.addEventListener('focus', createMask);
        input.addEventListener('input', createMask);
        input.addEventListener('blur', createMask);
    });

    function createMask(e) {
        e.preventDefault();
        let mask = '(___)  ___  __  __';
        let i = 0;
        let value = this.value.replace(/\D/g, '');
        this.value = mask.replace(/./g, (a) => {
            if (/_/.test(a) && i < value.length) {
                return value.charAt(i++);
            } else {
                return a;
            }
        });
        //
        let position;
        if (/\d/.test(this.value)) {
            this.value.match(/./g).forEach((item, i) => {
                if (/\d/.test(item)) {
                    position = i + 1;
                }
            });
        }
        this.setSelectionRange(position, position)
    }
}
//
//
function tabs() {
    let triggers = document.querySelectorAll('._tab_trigger_');
    let content = document.querySelectorAll('._tab_content_');
    hideContent();
    showContent();

    triggers.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            hideContent();
            showContent(i);
        });
    });

    function hideContent() {
        content.forEach((item, i) => {
            item.style.display = 'none';
            item.classList.remove('animationOnCreatingItem');
        });
        triggers.forEach((item, i) => {
            item.classList.remove('active');
        });
    }

    function showContent(i = 0) {
        triggers[i].classList.add('active');
        content[i].style.display = 'block';
        content[i].classList.add('animationOnCreatingItem');
    }
}
//
//
let learnWidthScroll = (state) => {
    document.body.classList.toggle('lock');
    if (!state.modalIsOpen) {
        let elem = document.createElement('div');
        elem.style.width = '50px';
        elem.style.height = '50px';
        elem.style.visibility = 'hidden';
        elem.style.opacity = '0';
        elem.style.overflowY = 'scroll';
        document.body.append(elem);
        let width = elem.offsetWidth - elem.clientWidth;
        document.body.style.paddingRight = width + 'px';
        elem.remove();
    } else {
        document.body.style.paddingRight = '0px';
    }
}


let arr = [];
