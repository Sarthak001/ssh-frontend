import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RxEyeClosed, RxEyeOpen, RxEnvelopeClosed, RxLockClosed, RxLockOpen1 } from "react-icons/rx";
import Loginsvg  from '../assets/login.svg';
import Welcomsvg  from '../assets/welcome.svg';


interface LoginFormData {
    email: string;
    password: string;
    remember: boolean;
}


const Login = () => {
    const [isAuthenticating, setIsAuthentucating] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset, watch } = useForm<LoginFormData>({
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        }
    });
    const watchAllFields = watch();
    const onSubmit: SubmitHandler<LoginFormData> = data => {
        setIsAuthentucating(prev => !prev)
        setTimeout(() => {
            console.log(data)
            reset()
            setIsAuthentucating(prev => !prev)
        }, 2000)

    };

    useEffect(() => {
        document.title = `WEB SSH - Login`
    }, [])

    return (<>
        <img className="absolute bottom-0 right-0 w-full max-w-xs hidden md:block" src={Loginsvg}></img>
        <div className="flex flex-col justify-center items-center min-h-screen bg-slate-50">
        <img className="w-full max-w-xs" src={Welcomsvg}></img>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <div className="flex border-2 focus-within:border-blue-500 focus-within:outline-blue-500 rounded-md">
                            <span className="inline-flex items-center rounded-l-md bg-gray-50 px-3 text-sm text-gray-900 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <RxEnvelopeClosed size={20}></RxEnvelopeClosed>
                            </span>
                            <input type="email" id="email" className="border-0 rounded-r-md bg-gray-50 focus:ring-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="hello@mail.com" {...register("email", { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })} />
                        </div>
                        {errors.email ? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, snapp!</span> Email is required.</p> : watchAllFields.email && <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Look's Good</span></p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                        <div className="flex border-2 focus-within:border-blue-500 focus-within:outline-blue-500 rounded-md">
                            <span className="inline-flex items-center rounded-l-md bg-gray-50 px-3 text-sm text-gray-900 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <RxLockClosed size={20}></RxLockClosed>
                            </span>
                            <input type={isVisible ? "text" : "password"} id="password" className="border-0 rounded-r-md bg-gray-50 focus:ring-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="••••••••" {...register("password", { required: true })} />
                            <span onClick={() => { setIsVisible(prev => !prev) }} className="inline-flex items-center rounded-r-md bg-gray-50 px-3 text-sm text-gray-900 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 ">
                                {isVisible ? <RxEyeOpen size={20}></RxEyeOpen> : <RxEyeClosed size={20}></RxEyeClosed>}
                            </span>
                        </div>
                        {errors.password ? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, snapp!</span> Password is required.</p> : watchAllFields.password && <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Look's Good</span></p>}
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" {...register("remember")} />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    {!isAuthenticating ?

                        (<button type="submit" className="w-full flex items-center space-x-2 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <RxLockOpen1 size={20}></RxLockOpen1><span className="">Login to your account</span>
                        </button>) :
                        <button disabled type="button" className="w-full flex items-center space-x-2 justify-center text-white bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                            Authenticating...
                        </button>
                    }
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    </>)
}

export default Login;