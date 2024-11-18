import Image from "next/image";
import styles from "./page.module.css";
import { Title } from "@/app/_libs/microcms"

import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Mvsingle from "@/app/_components/Mvsingle";

export default function Page(){
    return(
        <>
            <Header root_path={"../"}/>

            <Mvsingle title={"メッセージ"}/>

            <section className="message-first">
            <div className="message-first__inner">
                <h2 className="message-first__title">「仕事」をきっかけに<br />
                    人生の新しいスタートを！
                </h2>
                <p className="message-first__sub">大事なお仕事探しを応援させてください</p>
                <div className="message-first__box">
                    <div className="message-first__img">
                        <Image
                            className="nextjsimage"
                            src="/img/message/message-img.png"
                            alt=""
                            fill
                        />
                    </div>
                    <p className="message-first__text">はじめまして。代表取締役社長のショーン・デイビット・ジュニアです。<br />
                        私はそこそこ幸せです。それは仕事が楽しいからです。もちろん仕事イコール人生ではありません。でも仕事は人生の大事な基盤のように思っています。<br />
                        株式会社STARTは、みなさんが仕事をきっかけに理想の人生を実現する手助けをしています。幸せにつながるお仕事紹介サービス『スタート』や、共通の目標を目指す仲間が見つかる人材紹介SNS『ゴール』を運営しています。また、Webデザインの基礎スキルを身につけられるスクール『Webの学校』も随時開講しています。
                    </p>
                </div>
            </div>
            </section>

            <section className="message-second">
            <picture>
                <source srcSet="/img/message/message-second-sp.jpg" media="(max-width:767px)" />
                <Image
                    className="nextjsimage"
                    src="/img/message/message-second.jpg"
                    alt=""
                    fill
                />
            </picture>
            </section>

            <Footer />
        </>
    )
}