"use client";
import { useRef } from 'react';
import { useState } from "react";
import cx from "classnames";

import Image from "next/image";
import styles from "./index.module.css";

export default function Header(){

   /*let header_btnRef = useRef(null);
   let header_spmenuRef = useRef(null);
   let openbtnRef = useRef(null);*/

   let [isActive,setActive] = useState<boolean>(false);

   let toActive = () => setActive(true);
   /*let btnClick = () =>{
   
      console.log("ok");
      header_btn.addEventListener('click',function(){
         if(header_btnRef.classList.contains("active")){
            openbtnRef.classList.remove("active");
            header_btnRef.classList.remove("active");
            header_spmenuRef.classList.remove("active");
         }else{
            openbtnRef.classList.add("active");
            header_btnRef.classList.add("active");
            header_spmenuRef.classList.add("active");
         }
      });
   };*/

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
         <ul id="header-spmenu" className={cx(styles.header_spmenu, isActive && styles.active)}>
            <div className="header-spmenu__inner">
               <li className="header-spmenu__item"><a href="#">ホーム</a></li>
               <li className="header-spmenu__item"><a href="./message/index.html">メッセージ</a></li>
               <li className="header-spmenu__item"><a href="./about/index.html">会社概要</a></li>
            </div>
         </ul>
         <div id="header__btn" className={cx(styles.header__btn, isActive && styles.active)} onClick={toActive}>
            <div className={cx(styles.openbtn1, isActive && styles.active)}><span></span><span></span><span></span></div>
         </div>
      </header>
    )
}