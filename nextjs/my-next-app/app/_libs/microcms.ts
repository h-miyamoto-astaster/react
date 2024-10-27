export type News = {
   id:string;
   title:string;
   category:{
     name:string;
   };
   publishedAt:string;
   createdAt:string;
};

export type Category = {
  name:string;
};

import { createClient } from "microcms-js-sdk";
import type{
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Member = {
  name:string;
  position:string;
  profile:string;
  image:MicroCMSImage;
} & MicroCMSListContent;