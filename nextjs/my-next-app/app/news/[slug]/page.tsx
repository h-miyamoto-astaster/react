import { getNewsDetail } from "@/app/_libs/microcms";

type Props = {
    params:{
        slug:string;
    };
};

export default async function Page({params}:Props){
    const data = await getNewsDetail(params.slug);
    return <div>{data.title}</div>
}