import styles from "./index.module.css";
import type {Title} from "@/app/_libs/microcms";

type Props = {
    title:Title["title"];
}
export default function Mvsingle({title}:Props){
    return(
        <section className="mv-single">
            <h1 className="mv-single__title">{title}</h1>
        </section>
    )
}
