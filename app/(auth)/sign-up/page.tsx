'use client'

import {useForm} from "react-hook-form";
import {SignUp} from "@/lib/actions/auth.actions";
import {useRouter} from "next/navigation";

const Page = () => {

    const router = useRouter()
    const {register,handleSubmit,formState:{isSubmitting} } = useForm<SignUpFormData>({
        defaultValues:{
            fullName:'',
            email:'',
            password:''
        }
    });


    async function onSubmit(data: SignUpFormData){
        try{
            const result = await SignUp(data)
            if(result.success){
                router.push("/")
            }
        }
        catch(err){
            console.log(err)
        }
    }


    return (
        <div className='min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4'>
            <form className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>

                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Create Account
                </h2>
                <p className="text-center text-gray-500 text-sm">
                    Join us and get started
                </p>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full text-black/70 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        required
                        {...register('fullName')}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full text-black/70 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        required
                        {...register('email')}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full text-black/70 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        required
                        {...register('password')}
                    />
                </div>

                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl"
                >
                    Sign Up
                </button>

                <p className="text-center text-sm text-gray-500">
                    Already have an account?
                    <a
                        href="/sign-in"
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        Log in
                    </a>
                </p>

            </form>
        </div>
    )
}
export default Page
