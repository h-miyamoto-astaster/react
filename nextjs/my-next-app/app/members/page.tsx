import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";

const data = {
    contents:[
        {
            id:"1",
            image:{
                url:"/img-member1.jpg",
                width:240,
                height:240,
            },
            name:"デイビッド・チャン",
            position:"CEO",
            profile:"グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。自身の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長をけん引している。",
        },
        {
            id:"2",
            image:{
                url:"/img-member2.jpg",
                width:240,
                height:240,
            },
            name:"エミリー・サンダース",
            position:"COO",
            profile:"グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。自身の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長をけん引している。",
        },
        {
            id:"3",
            image:{
                url:"/img-member3.jpg",
                width:240,
                height:240,
            },
            name:"ジョン・ウィルソン",
            position:"CTO",
            profile:"グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。自身の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長をけん引している。",
        },
    ],
};

export default  async function Page(){
    const data = await getMembersList({ limit:MEMBERS_LIST_LIMIT });
    return (
        <div className={styles.container}>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>メンバーが登録されていません。</p>
            ) : (
                <ul>
                    {data.contents.map((member) => (
                        <li key={member.id} className={styles.list}>
                            <Image
                                src={member.image.url}
                                alt=""
                                width={member.image.width}
                                height={member.image.height}
                                className={styles.image}
                            />
                            <dl>
                                <dt className={styles.name}>{member.name}</dt>
                                <dt className={styles.position}>{member.position}</dt>
                                <dt className={styles.profile}>{member.profile}</dt>
                            </dl>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}