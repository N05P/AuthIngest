'use client'

import { useRouter } from "next/navigation";
import { SignOut } from "@/lib/actions/auth.actions";

export default function LogoutButton() {
    const router = useRouter();

    async function logOut() {
        await SignOut();
        router.push("/sign-in");
    }

    return (
        <button
            onClick={logOut}
            className="px-4 py-2 rounded-lg bg-red-600"
        >
            Logout
        </button>
    );
}
