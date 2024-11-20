import Image from "next/image";
import styles from "./page.module.css";
import { Title } from "@/app/_libs/microcms"

import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Mvsingle from "@/app/_components/Mvsingle";

/*
MICROCMS_API_KEY=RpTlzi0UHaGjIWeT4r5YudvlhILeAsep7On4
MICROCMS_SERVICE_DOMAIN=mok19u4ete
*/
export default function Page(){
    return(
        <>
            <Header root_path={"../"}/>

            <Mvsingle title={"ニュース"}/>
            <section className="newspage">
                <div className="newspage__inner">
                    <h2 className="newspage__title">コーポレートサイトをリニューアルしました。</h2>
                    <div className="newspage__img">
                        <Image
                            className="nextjsimage"
                            src="/img/news/news-img01.jpg"
                            alt=""
                            fill
                        />
                    </div>
                    <p className="newspage__text">
                        平素より格別のご愛顧を賜り、誠にありがとうございます。<br />
                        このたび、当社はコーポレートサイトを全面的にリニューアルいたしました。<br />
                        <br />
                        新しいサイトでは、より一層使いやすく、視覚的に魅力的なデザインを採用し、企業情報やサービス内容の紹介をさらに充実させました。また、モバイル端末にも最適化され、どのデバイスからでも快適にご利用いただけるよう改善いたしました。<br />
                        <br />
                        今後とも、より一層の情報提供を行い、皆様にとって有益なコンテンツを発信してまいりますので、ぜひご覧ください。<br />
                        <br />
                        今後とも変わらぬご支援を賜りますようお願い申し上げます。
                    </p>
                </div>
            </section>

            <Footer root_path={"../"}/>
        </>
    )
}