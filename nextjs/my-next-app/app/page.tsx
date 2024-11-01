import Image from "next/image";
import styles from "./page.module.css";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";

const data:{
  contents:News[] } = {
    contents:[
      {
        id:"1",
        title:"渋谷にオフィスを移転しました",
        category:{
          name:"更新情報",
        },
        publishedAt:"2023/05/19",
        createdAt:"2023/05/19",
      },
      {
        id:"2",
        title:"当社CEOが業界リーダーTOP30に選出されました。",
        category:{
          name:"更新情報",
        },
        publishedAt:"2023/05/19",
        createdAt:"2023/05/19",
      },
      {
        id:"3",
        title:"テストの記事です。",
        category:{
          name:"更新情報",
        },
        publishedAt:"2023/04/19",
        createdAt:"2023/04/19",
      },
    ],
  };
export default async function  Home() {
  
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  
  const name = "世界";
 
  return (
    <>
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
        <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
    </div>
    <Image
      className={styles.bgimg}
      src="/img-mv.jpg"
      alt=""
      width={4000}
      height={1200}
      />
  </section>
  <section className={styles.news}>
    <h2 className={styles.newsTitle}>News</h2>
    <NewsList news={data.contents} />

    <div className={styles.newsLink}>
      <ButtonLink href="/news">もっと見る</ButtonLink>
    </div>
  </section>
  </>
 );
}