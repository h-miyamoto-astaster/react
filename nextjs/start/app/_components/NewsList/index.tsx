import Image from  "next/image";
import styles from  "./index.module.css";
import Date from "../Date";
import Button01 from "@/app/_components/Button01";
import { News } from "@/app/_libs/microcms";

type Props ={
    news:News[];
}

export default function NewsList({ news }:Props){
    console.log(news);
    if(news.length === 0){
        return <p>記事がありません</p>
    }
    return(
        <section className="news">
            <div className="news__inner">
                <div className="news__container">
                    <h2 className="news__title">ニュース</h2>
                    <div className="news-box">
                        {news.map((article) =>(
                        <a key={article.id} href="#" className="news-box__container">
                            <Date date={article.publishedAt} /><p className="news-box__text">{article.title}</p>
                        </a>
                        ))}
                    </div>
                </div>
                <Button01 href="#">もっと見る</Button01>
            </div>
        </section>
    )
}