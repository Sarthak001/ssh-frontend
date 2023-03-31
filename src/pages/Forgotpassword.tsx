import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RxEnvelopeClosed,RxLockOpen1 } from "react-icons/rx";


import forgotpassword  from '../assets/forgotpassword.svg';

interface ForgotPasswordFormData {
    email: string;
}

const ForgotPassword = () => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset, watch } = useForm<ForgotPasswordFormData>({
        defaultValues: { email: "" }
    });
    const watchAllFields = watch();
    const onSubmit: SubmitHandler<ForgotPasswordFormData> = data => {
        setIsProcessing(prev => !prev)
        setTimeout(() => {
            console.log(data)
            reset()
            setIsProcessing(prev => !prev)
            setIsValid(prev => !prev)
        }, 2000)

    };

    useEffect(() => {
        document.title = `WEB SSH - Forgot Password`
    }, [])


    return (<>
        <div className="flex justify-center items-center min-h-screen bg-slate-50 space-x-6">
        <img className="w-full max-w-md hidden md:block" src={forgotpassword}></img>
            <div className="w-full max-w-md md:max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                {!isValid ?
                    (<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Forgot Your Password ? </h5>
                        <p>If you have forgotten your password, please enter your account's email address below and click the <span className="font-bold">Get Password Reset Link</span> button.
                            You will receive an email that contains a link to set a new password.
                        </p>
                        <div>
                            <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Registered Email</label>
                            <div className="flex border-2 focus-within:border-blue-500 focus-within:outline-blue-500 rounded-md">
                                <span className="inline-flex items-center rounded-l-md bg-gray-50 px-3 text-sm text-gray-900 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <RxEnvelopeClosed size={20}></RxEnvelopeClosed>
                                </span>
                                <input type="email" id="email" className="border-0 rounded-r-md bg-gray-50 focus:ring-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="hello@mail.com" {...register("email", { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })} />
                            </div>
                            {errors.email ? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, snapp!</span> Email is required.</p> : watchAllFields.email && <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Look's Good</span></p>}
                        </div>
                        {!isProcessing ?
                            (<button type="submit" className="w-full flex items-center space-x-2 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <RxLockOpen1 size={20}></RxLockOpen1><span className="">Get Password Reset Link</span>
                            </button>) :
                            <button disabled type="button" className="w-full flex items-center space-x-2 justify-center text-white bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                                Processing...
                            </button>
                        }
                    </form>) :
                    <div className="space-y-6">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Password Reset Email Sent</h5>
                        <p>
                            If an account is found with the provided email address, a message with instructions for resetting your
                            password will be sent momentarily, if you do not receive an email within an hour, please try to reset
                            your password again. <br/><br/>
                            If you continue to have trouble with resetting your password,please contact us.
                            <br/><br/>
                            <span className="inline-flex w-full text-right justify-end font-medium text-sm"><a href="/login" className="text-blue-700 hover:underline">Return to login page </a></span>
                        </p>
                    </div>
                }
            </div>
        </div>
    </>)
}

export default ForgotPassword;