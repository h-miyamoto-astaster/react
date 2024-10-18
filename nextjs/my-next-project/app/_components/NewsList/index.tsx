import Image from "next/image";
import styles from "./index.module.css";

import { News } from "@/app/_libs/microcms";

type Props ={
    news:News[];
};

export default function NewsList({news}:Props) {

  return (

    <ul>
      {news.map((article) =>(
        <li key={article.id}  className={styles.list}>
          <div className={styles.link}>
            <Image
              className={styles.image}
              src="/no-image.png"
              alt="NO Image"
              width={1200}
              height={630}
            />
            <dl className={styles.content}>
              <dt className={styles.newsItemTitle}>{article.title}</dt>
              <dd className={styles.meta}>
                <span className={styles.tag}>{article.category.name}</span>
                <span className={styles.data}>
                  <Image
                    src="/clock.svg"
                    alt=""
                    width={16}
                    height={16}
                    priority
                  />
                  {article.publishedAt}
                </span>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>

 );
}
