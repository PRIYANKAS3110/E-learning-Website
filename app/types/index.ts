import {user} from "@prisma/client";

export type SafeUser = Omit<user,"createdAt"|"updatedAt"> &{
    createdAt:string;
    updatedAt:string;
}