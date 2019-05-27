import axios from 'axios';


const KEY ="AIzaSyB7JHPRkOkCogqkmsmVLuei_GGcw4XT8q8";
 export default axios.create({
     baseURL: "https://www.googleapis.com/youtube/v3",
     params:{
         part: 'snippet' ,
         maxResults : 5 ,
         key: KEY
     }
 })