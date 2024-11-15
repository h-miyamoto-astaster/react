import Image from "next/image";
import styles from "./index.module.css";

export default function Header(){

   let btnClick = () =>{
   
      console.log("ok");
      let header_btn = document.getElementById("header__btn");
      let header_spmenu = document.getElementById("header-spmenu");
      let openBtn1 = document.querySelector("#header__btn #openbtn1");
      header_btn.addEventListener('click',function(){
         if(header_btn.classList.contains("active")){
            openBtn1.classList.remove("active");
            header_btn.classList.remove("active");
            header_spmenu.classList.remove("active");
         }else{
            openBtn1.classList.add("active");
            header_btn.classList.add("active");
            header_spmenu.classList.add("active");
         }
      });
   };

   return(
      <header className="header">
         <div className="header__container">
            <a className="header__logo" href="#">
               <Image
               className="nextjsimage"
               src="/img/logo.png"
               alt="start"
               fill
               />
            </a>
            <ul className="header__menulist">
               <li className="header__menu"><a href="#">ホーム</a></li>
               <li className="header__menu"><a href="./message/index.html">メッセージ</a></li>
               <li className="header__menu"><a href="./about/index.html">会社概要</a></li>
            </ul>
         </div>
         <ul id="header-spmenu" className="header-spmenu">
            <div className="header-spmenu__inner">
               <li className="header-spmenu__item"><a href="#">ホーム</a></li>
               <li className="header-spmenu__item"><a href="./message/index.html">メッセージ</a></li>
               <li className="header-spmenu__item"><a href="./about/index.html">会社概要</a></li>
            </div>
         </ul>
         <div id="header__btn" className="header__btn" onClick={btnClick}>
            <div className="openbtn1"><span></span><span></span><span></span></div>
         </div>
      </header>
    )
}