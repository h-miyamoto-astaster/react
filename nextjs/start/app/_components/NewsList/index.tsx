import Image from  "next/image";
import styles from  "./index.module.css"
import { News } from "@/app/_libs/microcms"

type Props ={
    news:News[];
}

export default function NewsList({ news }:Props){
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
                        <div className="news-box__day">{article.publishedAt}</div><p className="news-box__text">{article.title}</p>
                    </a>
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}