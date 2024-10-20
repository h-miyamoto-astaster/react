import Image from "next/image";
import styles from "./index.module.css";

export default function Header(){
   return(
      <header className={styles.header}>
         <a href="/" className={styles.logo}>
         <Image
         className={styles.logo}
         src="/logo.svg"
         alt="SIMPLE"
         width={348}
         height={133}
         priority
         />
      </a>
      </header>
   )
}