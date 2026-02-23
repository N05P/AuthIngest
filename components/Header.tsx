import Link from "next/link";
import {auth} from "@/lib/better-auth/auth";
import LogoutButton from "@/components/LogoutButton";
import {headers} from "next/headers";

const Header = async() => {


    const session = await auth.api.getSession({headers: await headers()})


    return (
        <header className="w-full bg-gray-950 text-white border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-wide text-indigo-400"
                >
                    stockP
                </Link>

                {/* Buttons */}
                <div className="flex items-center gap-4">

                    {!session? (
                        <>
                            <Link
                                href="/sign-in"
                                className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                            >
                                Login
                            </Link>

                            <Link
                                href="/sign-up"
                                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-medium"
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <LogoutButton/>
                    )}

                </div>
            </div>
        </header>
    );
};

export default Header;
