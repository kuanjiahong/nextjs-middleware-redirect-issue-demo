
"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function myServerAction() {
    redirect("/");
}

export async function removeSession() {
    (await cookies()).delete('session')
    return "Session removed"
}