AOS.init();

// 메뉴드롭 슬라이드
const menulist=document.querySelectorAll(".login_right li");
const collect_list=document.querySelectorAll(".menu_scroll .hover_scroll");
// const collect_list=document.querySelectorAll(".content1 .swiper-wrapper");
console.log(menulist, collect_list);

for(let i=0;i<menulist.length;i++){
    menulist[i].addEventListener("click",e=>{
       e.preventDefault();
       console.log(i);
       for(let j=0;j<menulist.length;j++){
        collect_list[j].style.display="none"
       }
       collect_list[i].style.display="block";

      // // 버튼 클릭시 컨텐츠 전환
      // activeCont = this.getAttribute('href');
      // document.querySelector(activeCont).style.display = 'block';
    })
}

// 메인비주얼 슬라이드
var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // sns 밑 무한 루프 이미지
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 7,
    centeredSlides: true,
    loop: true,
    spaceBetween: 0,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

