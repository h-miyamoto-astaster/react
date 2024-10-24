import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export default function Menu(){
   return (
      <div>
         <nav className={styles.nav}>
            <ul className={styles.items}>
               <li>
                  <Link href="/news">ニュース</Link>
               </li>
               <li>
                  <Link href="/members">メンバー</Link>
               </li>
               <li>
                  <Link href="/news">お問い合わせ</Link>
               </li>
            </ul>
         </nav>
         <button className={styles.button}>
            <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
         </button>
      </div>
   )
}