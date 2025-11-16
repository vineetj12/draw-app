import {z} from "zod";

export const createuserschema=z.object({
    username:z.string().min(3).max(20),
    password:z.string(),
    name:z.string()
});

export const siginschema=z.object({
    username:z.string().min(3).max(20),
    password:z.string()
})

export const createroomschema=z.object({
    roomid:z.string().min(3).max(20)
})