// make global typings in this file
import { User } from "@prisma/client";
export {};

declare global {
  namespace Express {
    interface Request {
      User?: User;
    }
  }
}