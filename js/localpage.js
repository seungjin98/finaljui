   // 프로그램 소개 - 더보기/접기 작동
   $('.program_list li .btn_more').click(function() {
       if ($(this).parent().find('.subtxt').css('display') == 'none') {
           $(this).parent().find('.subtxt').css('display', 'inline');
           $(this).text('Fold');
       } else {
           $(this).parent().find('.subtxt').css('display', 'none');
           $(this).text('More');
       }
   });

   function fnMove(seq) {
       var offset = $(".sub" + seq).offset();
       $('html, body').animate({
           scrollTop: offset.top
       }, 500);
   }

   const SideMenuEl = document.querySelector(".SideMenu")
   const toTopEl = document.querySelector("#to-top")

   window.addEventListener('scroll', _.throttle(function() {
           // console.log(scrollY)
           if (scrollY > 50) {
               //배지보여주기
               // gsap.to(요소명, 지속시간(초), 옵션)
               gsap.to(SideMenuEl, .6, {
                   opacity: 1,
                   display: 'block'
               })

               //Home버튼 보여지기
               gsap.to(toTopEl, .2, {
                   x: 0,
                   opacity: 1,
               })
           } else {
               //배지숨기기
               // gsap.to(요소명, 지속시간(초), 옵션)
               gsap.to(SideMenuEl, .6, {
                       opacity: 0,
                       display: 'none'
                   })
                   //Home버튼 숨기기
               gsap.to(toTopEl, .2, {
                   x: 100,
                   opacity: 0
               })
           }
       }, 300)) //300:300밀리세컨드

   toTopEl.addEventListener('click', () => {
       // gsap.to(요소명, 지속시간(초), 옵션)
       gsap.to(window, .7, {
           scrollTo: 0
       });
   })