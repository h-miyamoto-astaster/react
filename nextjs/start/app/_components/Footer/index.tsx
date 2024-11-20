import styles from "./index.module.css";
import { Root_path } from "@/app/_libs/microcms";


type Props = {
    root_path:Root_path["root_path"];
}

export default function Footer({root_path}:Props){
    return(
    <footer className="footer">
        <div className="footer__inner">
            <ul className="footer__menu">
                <li className="footer__menuitem"><a href={root_path}>ホーム</a></li>
                <li className="footer__menuitem"><a href={root_path + "message/"}>メッセージ</a></li>
                <li className="footer__menuitem"><a href={root_path + "about/"}>会社概要</a></li>
            </ul>
            <div className="footer__copy">©START</div>
        </div>
    </footer>
    );
}