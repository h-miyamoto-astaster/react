import styles from "./page.module.css";
import Image from "next/image";

import { News } from "@/app/_libs/microcms";
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

export default function Home(){
  const sliceData = data.contents.slice(0,2);
  return (
  <>
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
  <div className="header__btn">
    <div className="openbtn1"><span></span><span></span><span></span></div>
  </div>
</header>
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

<footer className="footer">
  <div className="footer__inner">
    <ul className="footer__menu">
      <li className="footer__menuitem"><a href="#">ホーム</a></li>
      <li className="footer__menuitem"><a href="#">メッセージ</a></li>
      <li className="footer__menuitem"><a href="#">会社概要</a></li>
    </ul>
    <div className="footer__copy">©START</div>
  </div>
</footer>
  </>
  )
}