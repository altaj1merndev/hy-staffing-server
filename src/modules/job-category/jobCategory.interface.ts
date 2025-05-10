import { ObjectId } from "mongoose"

export interface TJobCategory  {
    agentId:ObjectId
    logo:string
    title:string
    buttonText:string
    slug:string
}