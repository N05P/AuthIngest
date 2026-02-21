'use client'

import {SignIn} from "@/lib/actions/auth.actions";

import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import { toast } from "sonner"

 function Page() {

     const router = useRouter();
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
    } = useForm<SignInFormData>({
        defaultValues:{
        email:'',
        password:''
        },
    mode:"onBlur"
    })

     async function onSubmit(data: SignInFormData) {
         try {
             const result = await SignIn(data);

             if (!result?.success) {
                 toast.error(result?.message ?? "Invalid credentials");
                 return;
             }

             toast.success("Successfully logged in");
             router.push("/");
         } catch (err) {
             console.log(err);
             toast.error("Something went wrong");
         }
     }


     return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 text-sm">
                    Sign in to your account
                </p>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        {...register('email')}
                    />
                </div>

                {/* Password */}
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        {...register('password')}
                    />
                </div>


                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl"
                >
                    Log In
                </button>

                {/* Signup link */}
                <p className="text-center text-sm text-gray-500">
                    Don’t have an account?{" "}
                    <a href="/sign-up" className="text-indigo-600 font-medium hover:underline">
                        Sign up
                    </a>
                </p>
            </form>
        </div>
    );
}


export default Page;