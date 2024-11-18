import styles from "./page.module.css";
import Image from "next/image";

import { Title } from "@/app/_libs/microcms";
import { News } from "@/app/_libs/microcms";
import { Root_path } from "@/app/_libs/microcms";

import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Mvsingle from "@/app/_components/Mvsingle";
import NewsList from "@/app/_components/NewsList";

const data:{
   contents:News[] } = {
     contents:[
       {
         id:"1",
         title:"コーポレートサイトをリニューアルしました。",
         publishedAt:"2023.02.10",
       },
       {
         id:"2",
         title:"採用を強化中です！一緒に働きませんか？",
         publishedAt:"2023.02.08",
       },
       {
         id:"3",
         title:"人材紹介SNS『スタート』をリリースしました。3/31まで新規登録キャンペーンを開催中です！サービス内で使える500ポイントをプレゼント！",
         publishedAt:"2023.02.02",
       },
     ],
   };

export default function Page(){
   const sliceData = data.contents.slice(0,2);
   
   return(
      <>
         <Header root_path={"../"} />

         <Mvsingle title={"会社概要"} />

         <section className="about-first">
            <div className="about-first__inner">
               <table className="about-first__table">
                  <thead>
                     <tr>
                        <th>社名</th><td>株式会社START</td>
                     </tr>
                  </thead>
                  <thead>
                     <tr>
                        <th>設立</th><td>2025.02.10</td>
                     </tr>
                  </thead>
                  <thead>
                     <tr>
                        <th>代表取締役</th><td>ショーン・デイビット・ジュニア</td>
                     </tr>
                  </thead>
                  <thead>
                     <tr>
                        <th>資本金</th><td>10,000,000円</td>
                     </tr>
                  </thead>
                  <thead>
                     <tr>
                        <th>所在地</th><td>〒555-5555 東京都千代田区 スタートビルディング 606</td>
                     </tr>
                  </thead>
               </table>
            </div>
         </section>

         <section className="about-second">
            <div className="about-second__inner">
               <div className="about-second__map">
               <picture>
                  <source srcSet="../img/about/about-second-sp.jpg" media="(max-width:767px)" />
                  <Image
                     className="nextjsimage"
                     src="/img/about/about-second.jpg"
                     alt=""
                     fill
                  />
               </picture>
               </div>
               <a href="#" className="about-second__maptext">Google mapで見る</a>
            </div>
         </section>

         <NewsList news={ sliceData }/>

         <Footer />
      </>
   )
}