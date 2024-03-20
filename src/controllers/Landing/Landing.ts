import { Request, Response } from 'express';
import prisma from 'prisma/prismaClient';
import * as Success from "../../globals/success";


const land = async (req:Request , res: Response) => {
  
const data = await prisma.url.findMany();
const {msg,status}=Success.System.api;
const response={
  msg,
  status,
  data
}
  return res.json(response);
};

export { land };
