import styles from "./index.module.css";

type Props = {
   date:string;
}

export default function Date({date}:Props){
   return(
      <div className="news-box__day">{date}</div>
   )
}