"use client";
import { useRef } from 'react';
import { useState } from "react";
import cx from "classnames";
import { Root_path } from "@/app/_libs/microcms";


import Image from "next/image";
import styles from "./index.module.css";

type Props = {
   root_path:Root_path["root_path"]
}
export default function Header({root_path}:Props){

   /*let header_btnRef = useRef(null);
   let header_spmenuRef = useRef(null);
   let openbtnRef = useRef(null);*/

   let [isActive,setActive] = useState<boolean>(false);

   let toActive = () => setActive(!isActive);
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
            <a className="header__logo" href={root_path}>
               <Image
               className="nextjsimage"
               src="/img/logo.png"
               alt="start"
               fill
               />
            </a>
            <ul className="header__menulist">
               <li className="header__menu"><a href={root_path}>ホーム</a></li>
               <li className="header__menu"><a href={root_path + "message/"}>メッセージ</a></li>
               <li className="header__menu"><a href={root_path + "about/"}>会社概要</a></li>
            </ul>
         </div>
         <ul id="header-spmenu" className={cx(styles.header_spmenu, isActive && styles.active)}>
            <div className="header-spmenu__inner">
               <li className="header-spmenu__item"><a href={root_path}>ホーム</a></li>
               <li className="header-spmenu__item"><a href={root_path + "message/"}>メッセージ</a></li>
               <li className="header-spmenu__item"><a href={root_path + "about/"}>会社概要</a></li>
            </div>
         </ul>
         <div id="header__btn" className={cx(styles.header__btn, isActive && styles.active)} onClick={toActive}>
            <div className={cx(styles.openbtn1, isActive && styles.active)}><span></span><span></span><span></span></div>
         </div>
      </header>
    )
}