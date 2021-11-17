    // scroll
    // var s = skrollr.init();
    // window.addEventListener("scroll", () => {
    //     let scrollTop = document.documentElement.scrollTop || window.scrollY || window.PageYOffset;
    //     document.querySelector(".scroll").innerHTML = scrollTop;
    // });


    //가로
    const contentWrap = $("#contWrap");
    const contentItem = $(".content-item");

    let scrollTotalWidth = contentWrap.width();
    $("body").height(scrollTotalWidth);
        
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();

        let wWidth = $(window).width();
        let wHeight = $(window).height();

        let nWidth = scrollTotalWidth - $(window).width();
        let nHeight = $("body").height() - $(window).height();

        let ratio = nWidth / nHeight;
        let goLeft = scrollTop * ratio;

        contentWrap.css("left" , -goLeft);
    });
 