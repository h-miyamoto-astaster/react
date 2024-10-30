import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timzone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date:string) =>{
   return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
}