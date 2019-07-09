import { Response } from "express";

export const newResResponse = (res: Response, data: any) => res.status(200).json(data);
export const newResError = (res: Response, err: any) => res.status(400).json({ err });
