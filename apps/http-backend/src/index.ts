import express from "express";
// import { JWT_SECRET } from "@repo/back end-common/config"
import { createroomschema, createuserschema, siginschema } from "@repo/common/types"
import { middleware } from "./middleware";
const app=express();

app.post('/signup',(req,res)=>{
    const data=createuserschema.safeParse(req.body);
    if(!data){
        res.json({
            "message":"incorrect inputs"
        })
        return;
    }
    //check it in the db logic
    res.json({
        "userid":"123",
    })
})

app.post('/signin',(req,res)=>{
    const data=siginschema.safeParse(req.body);
    if(!data){
        res.json({
            "message":"incorrect inputs"
        })
        return;
    }
})

app.post('/room',middleware,(req,res)=>{
    const data=createroomschema.safeParse(req.body);
    if(!data){
        res.json({
            "message":"incorrect inputs"
        })
        return;
    }
    //db call
    res.json({
        "roomid":"123",
    });
})

app.listen(3000,()=>{console.log("http-backend is up")}); 