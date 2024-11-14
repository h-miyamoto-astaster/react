import Image from "next/image";
import styles from "./index.module.css";

let btnClick = () =>{
   console.log("ok");
};

export default function Header(){

   
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
         <ul className="header-spmenu">
            <div className="header-spmenu__inner">
               <li className="header-spmenu__item"><a href="#">ホーム</a></li>
               <li className="header-spmenu__item"><a href="./message/index.html">メッセージ</a></li>
               <li className="header-spmenu__item"><a href="./about/index.html">会社概要</a></li>
            </div>
         </ul>
         <div className="header__btn" onClick="btnClick">
            <div className="openbtn1"><span></span><span></span><span></span></div>
         </div>
      </header>
    )
}