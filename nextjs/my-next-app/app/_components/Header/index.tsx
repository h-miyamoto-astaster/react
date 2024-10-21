import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header(){
   return(
      <header className={styles.header}>
         <Link href="/" className={styles.logo}>
            <Image
               className={styles.logo}
               src="/logo.svg"
               alt="SIMPLE"
               width={348}
               height={133}
               priority
            />
         </Link>
      <nav>
         <ul className={styles.item}>
            <li>
               <Link href="/members">メンバー</Link>
            </li>
         </ul>
      </nav>
      </header>
   )
}