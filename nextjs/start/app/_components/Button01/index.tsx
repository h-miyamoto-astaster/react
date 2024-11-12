import styles from "./index.module.css";

type Props = {
   href:string;
   children:React.ReactNode;
};

export default function Button01({href,children}:Props){
   return(
      <a href={href} className={styles.button01}>
         {children}
      </a>
   )
}