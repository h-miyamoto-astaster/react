import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";

/*export type News = {
    id:string;
    title:string;
    content:string;
    image:MicroCMSImage;
    publishedAt:string;
}*/

export type News = {
    id:string;
    title:string;
    publishedAt:string;
} & MicroCMSListContent;

export type Title = {
    title:string;
}
export type Root_path = {
    root_path:string;
}

if(!process.env.MICROCMS_SERVICE_DOMAIN){
    throw new Error("MICROCMS_SERVICE_DOMAIN is requierd");
}

if(!process.env.MICROCMS_API_KEY){
    throw new Error("MICROCMS_API_KEY is requierd");
}

const client = createClient({
    serviceDomain:process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey:process.env.MICROCMS_API_KEY,
});

export const getNewsList = async(queries?:MicroCMSQueries) =>{
    const listData = await client
    .getList<News>({
        endpoint:"news",
        queries,
    });
    return listData;
}