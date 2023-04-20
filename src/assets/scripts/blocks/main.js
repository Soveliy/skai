gsap.registerPlugin(ScrollTrigger);
let newSwiper = new Swiper(".prodTizer__slider", {
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    speed: 1,
    // loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },

    
      pauseOnMouseEnter:true,
    rewind:true,
    observer: true, 
    observeParents: true,
    watchSlidesProgress:true,
    // threshold:30,
    // cssMode:true,
    effect: 'fade',
  
    // fadeEffect: {
    //   crossFade: true
    // },
  });

  newSwiper.setTransition(0)
  $(".prodTizer__slider .swiper-button-next").click(function(){
    newSwiper.slideNext(0);
    newSwiper.updateProgress()

  })
  $(".prodTizer__slider .swiper-button-prev").click(function(){
    newSwiper.slidePrev(0);
    newSwiper.updateProgress()

  })


  $(".prodTizer-item__list-elem").click(function(){

    newSwiper.slideTo($(this).index(), 0)
    newSwiper.updateProgress()
  })
  let tl = gsap.timeline()
  let tl2 = gsap.timeline()
  let tl3 = gsap.timeline()
  let tl4 = gsap.timeline()
  let logoAbout = gsap.timeline()

  logoAbout.to(".aboutProd__logo", 
  {
    x: "250%",

    scrollTrigger:{
      // duration:1,
      trigger:".aboutProd__item--orange",
      scrub:true,
      start:'top center',
      end:"+=1800",
       ease: "none",
    }
  });


  tl2.to(".newMethod__logo", 
  {
    x: "250%",

    scrollTrigger:{
      // duration:1,
      trigger:".newMethod",
      scrub:true,
      start:'top center',
      end:"+=1800",
       ease: "none",
    }
  });

  let st = ScrollTrigger.create({
    trigger: ".aboutProd__images-list",
    pin: ".aboutProd__images-list",
    start: "center center",
    end: "+=100",
    // markers:true
  });

  ScrollTrigger.matchMedia({
    "(min-width: 320px) and (max-width: 1023px)": function minWidth320pxAndMaxWidth1023px() {
      tl.to(".aboutProd__item--pink", 
      {
        backgroundImage: "linear-gradient(180deg, rgba(254,210,51,1) 0%, rgba(253,155,36,1) 100%)",
        clearProps:true,
        scrollTrigger:{
       
          trigger:".aboutProd__item--pink",
          scrub:true,
          start:'top center',
          end:"+=70",
          // ease: "none",
 
          toggleClass: {targets: ".aboutProd__images-list", className: "aboutProd__images-list--1"}
      
        }
      });
    
      tl2.to(".aboutProd__item--blue", 
      {
        backgroundImage: " linear-gradient(90deg, #77BBE8 0%, #C7A4EB 52.55%, #FF5238 100%)",
        clearProps:true,
        scrollTrigger:{
       
          trigger:".aboutProd__item--blue",
          scrub:true,
          start:'top center',
          end:"+=70",
          // markers:true,
          toggleClass: {targets: ".aboutProd__images-list", className: "aboutProd__images-list--2"}
         
        }
      });
      tl3.to(".aboutProd__item--purple", 
      {
        backgroundImage: "linear-gradient(90deg, #CFA4F3 0%, #FBB28E 100%)",
        clearProps:true,
        scrollTrigger:{
      
          trigger:".aboutProd__item--purple",
          scrub:true,
          start:'top center',
          end:"+=70",
      
          toggleClass: {targets: ".aboutProd__images-list", className: "aboutProd__images-list--3"}
        }
      });
      
      tl4.to(".aboutProd__item--orange", 
      {
        backgroundImage: "linear-gradient(90deg, #F9CF0A 0%, #F73C59 100%)",
        clearProps:true,
        scrollTrigger:{
    
          trigger:".aboutProd__item--orange",
          scrub:true,
          start:'top center',
          end:"+=70",
       
          toggleClass: {targets: ".aboutProd__images-list", className: "aboutProd__images-list--4"}
        }
      });
      
      tl.to(".newMethod__item--mask-1", 
      {
        // backgroundColor: "#F5F5F7",
        // clearProps:true,
        scrollTrigger:{
       
          trigger:".newMethod__item--mask-1",
          scrub:true,
          start:'top center',
          end:"+=100",
          // markers:true,
          // ease: "none",
          toggleClass: {targets: ".newMethod__item--mask-1", className: "newMethod__item--isCurrent"}
         
        }
      });
    
      tl2.to(".newMethod__item--mask-2", 
      {
        // backgroundColor: "#F5F5F7",
        // clearProps:true,
        scrollTrigger:{
       
          trigger:".newMethod__item--mask-2",
          scrub:true,
          start:'top center',
          end:"+=100",
          // markers:true,
          // ease: "none",
          toggleClass: {targets: ".newMethod__item--mask-2", className: "newMethod__item--isCurrent"}
         
        }
      });
      tl3.to(".newMethod__item--mask-3", 
      {
        // backgroundColor: "#F5F5F7",
        // clearProps:true,
        scrollTrigger:{
       
          trigger:".newMethod__item--mask-3",
          scrub:true,
          start:'top center',
          end:"+=100",
          // markers:true,
          // ease: "none",
          toggleClass: {targets: ".newMethod__item--mask-3", className: "newMethod__item--isCurrent"}
         
        }
      });
     
    },

    "(min-width: 1024px)": function minWidth1024() {
      tl.to(".aboutProd__item--pink", 
      {
        backgroundImage: "linear-gradient(180deg, rgba(254,210,51,1) 0%, rgba(253,155,36,1) 100%)",
        clearProps:true,
        scrollTrigger:{
       
          trigger:".aboutProd__item--pink",
          scrub:true,
          start:'top center',
          end:"+=100",
          // ease: "none",
          toggleClass: {targets: ".aboutProd__images-list", className: "aboutProd__images-list--1"}
      
        }
      });
    
      tl2.to(".aboutProd__item--blue", 
      {
        backgroundImage: " linear-gradient(90deg, #77BBE8 0%, #C7A4EB 52.55%, #FF5238 100%)",
        clearProps:true,
        scrollTrigger:{
       
          trigger:".aboutProd__item--blue",
          scrub:true,
          start:'top center',
          end:"+=100",
          toggleClass: {targets: ".aboutProd__images-list", className: "aboutProd__images-list--2"}
         
        }
      });
      tl3.to(".aboutProd__item--purple", 
      {
        backgroundImage: "linear-gradient(90deg, #CFA4F3 0%, #FBB28E 100%)",
        clearProps:true,
        scrollTrigger:{
      
          trigger:".aboutProd__item--purple",
          scrub:true,
          start:'top center',
          end:"+=100",
          toggleClass: {targets: ".aboutProd__images-list", className: "aboutProd__images-list--3"}
        }
      });
      
      tl4.to(".aboutProd__item--orange", 
      {
        backgroundImage: "linear-gradient(90deg, #F9CF0A 0%, #F73C59 100%)",
        clearProps:true,
        scrollTrigger:{
    
          trigger:".aboutProd__item--orange",
          scrub:true,
          start:'top center',
          end:"+=100",
         
          toggleClass: {targets: ".aboutProd__images-list", className: "aboutProd__images-list--4"}
        }
      });
      
      
    
    
      //  Вариант с пином элементов
      // let st = ScrollTrigger.create({
      //   trigger: ".newMethod__list",
      //   pin: ".newMethod__list",
      //   start: "top center",
      //   end: "+=300"
      // });
     //  Вариант с пином элементов
     
      
      tl.to(".newMethod__item--mask-1", 
      {
        // backgroundColor: "#F5F5F7",
        // clearProps:true,
        scrollTrigger:{
       
          trigger:".newMethod__item--mask-1",
          scrub:true,
          start:'top-=300px center',
          end:"center-80px center",
          // markers:true,
          // ease: "none",
          toggleClass: {targets: ".newMethod__item--mask-1", className: "newMethod__item--isCurrent"}
         
        }
      });
    
      tl2.to(".newMethod__item--mask-2", 
      {
        // backgroundColor: "#F5F5F7",
        // clearProps:true,
        scrollTrigger:{
       
          trigger:".newMethod__item--mask-2",
          scrub:true,
          start:'top center',
          end:"center+=100px center",
          // markers:true,
          // ease: "none",
          toggleClass: {targets: ".newMethod__item--mask-2", className: "newMethod__item--isCurrent"}
         
        }
      });
      tl3.to(".newMethod__item--mask-3", 
      {
        // backgroundColor: "#F5F5F7",
        // clearProps:true,
        scrollTrigger:{
       
          trigger:".newMethod__item--mask-3",
          scrub:true,
          start:'center+=101px center',
          end:"center+=250px center",
          // markers:true,
          // ease: "none",
          toggleClass: {targets: ".newMethod__item--mask-3", className: "newMethod__item--isCurrent"}
         
        }
      });
    
    
    

      
     
    },
 
  });
  $(".drawPc__btn").click(function(){
    $(this).toggleClass("js-active")
    $(".drawConditions").slideToggle(400);
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 400);
  })