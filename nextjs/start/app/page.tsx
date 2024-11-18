import styles from "./page.module.css";
import Image from "next/image";

import { News } from "@/app/_libs/microcms";

import NewsList from "@/app/_components/NewsList";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer"

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

export default function Home(){
  const sliceData = data.contents.slice(0,2);
  return (
  <>
  <Header root_path={"./"}/>
<div className="mv">
  <div className="mv__box">
    <h2 className="mv__title">START</h2>
    <p className="mv__sub">仕事に最高のスタートを。</p>
  </div>
</div>

<NewsList news={ sliceData } />

<section className="service">
  <div className="service__inner">
    <h2 className="service__title">サービス</h2>
    <div className="service__container">
      <div className="service-box">
        <div className="service-box__icon">
          <Image
            className="nextjsimage"
            src="/img/service-icon1.png"
            alt="アイコン"
            fill
          />
        </div>
        <h3 className="service-box__title">人材紹介業</h3>
        <p className="service-box__text">新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。</p>
      </div>
      <div className="service-box">
        <div className="service-box__icon">
          <Image
            className="nextjsimage"
            src="/img/service-icon2.png"
            alt="アイコン"
            fill
          />
        </div>
        <h3 className="service-box__title">スクール事業</h3>
        <p className="service-box__text">オンラインでWeb制作を学べるスクールを運営しています。</p>
      </div>
      <div className="service-box">
        <div className="service-box__icon">
          <Image
            className="nextjsimage"
            src="/img/service-icon3.png"
            alt="アイコン"
            fill
          />
        </div>
        <h3 className="service-box__title">Webメディア運営</h3>
        <p className="service-box__text">人事系メディアやWebデザイン関連のメディアなどを複数運営しています。</p>
      </div>
    </div>
  </div>
</section>
    <Footer />
  </>
  )
}