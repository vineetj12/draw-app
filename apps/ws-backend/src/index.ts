import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config"
const wss=new WebSocketServer({ port:8080 });
interface decode{
    userid:string;
}
wss.on('connection',(ws,request)=>{
    const url=request.url;
    if(!url){
        return;
    }
    const queryParams=new URLSearchParams(url.split('?')[1]);
    const token=queryParams.get('token')??"";
    const decode=jwt.verify(token,JWT_SECRET) as decode;
    if(!decode||!decode.userid){
        ws.close();
        return;
    }
    ws.on('error',()=>{console.error});
    ws.on('message',()=>{});
})