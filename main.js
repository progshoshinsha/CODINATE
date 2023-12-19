"use strict"
{
   // body要素
   const bodyElement = document.querySelector("body");
   // メニューを開く要素
   const menuOpenElement = document.querySelector(".menuOpen");
   // メニュー背景
   const menuMaskElement = document.querySelector(".menuMask");
   // メニューリスト
   const menuNavElement = document.querySelector(".menuNav");
   // メニュー閉じる要素
   const menuCloseElements = document.querySelectorAll(".menuClose")
   // メニュー開くとき
   menuOpenElement.addEventListener("click", () => {
      menuMaskElement.classList.add("show");
      menuNavElement.classList.add("animation");
      bodyElement.classList.add("notScroll");
   });
   // メニュー閉じるとき
   menuCloseElements.forEach((element) => {
      element.addEventListener("click", () => {
         menuMaskElement.classList.remove("show");
         menuNavElement.classList.remove("animation");
         bodyElement.classList.remove("notScroll");
      });
   });


   // ページ内スクロール
   const menuItemElements = document.querySelectorAll(".menuItem a[href^='#']");
   menuItemElements.forEach((menuItem) => {
      menuItem.addEventListener("click",(element) => {
         element.preventDefault();

         const target = document.querySelector(menuItem.hash);
         const targetTop = target.getBoundingClientRect().top;
         const offsetTop = window.scrollY + targetTop;
         
         
         window.scrollTo({
            top:offsetTop,
            behavior:"smooth"
         })
      })
   })
}