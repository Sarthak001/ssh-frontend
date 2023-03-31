import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RxTokens, RxEyeClosed, RxEyeOpen, RxInput, RxLockClosed, RxLockOpen1 } from "react-icons/rx";


import forgotpassword from '../assets/forgotpassword.svg';

interface ResetPasswordFormData {
    resetToken: string;
    password: string;
    confirmPassword: string;
}
interface PasswordVisiblity{
    password:boolean;
    confirmPassword:boolean;
}

const ResetPassword = () => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [isVisible, setIsVisible] = useState<PasswordVisiblity>({
        password:false,
        confirmPassword:false,
    })
    const { register, formState: { errors }, handleSubmit, reset, watch, getValues } = useForm<ResetPasswordFormData>({
        defaultValues: { resetToken: "", password: "", confirmPassword: "" }
    });
    const watchAllFields = watch();
    const onSubmit: SubmitHandler<ResetPasswordFormData> = data => {
        setIsProcessing(prev => !prev)
        setTimeout(() => {
            console.log(data)
            reset()
            setIsProcessing(prev => !prev)
        }, 2000)

    };

    useEffect(() => {
        document.title = `WEB SSH - Reset Password`
    }, [])


    return (<>
        <div className="flex justify-center items-center min-h-screen bg-slate-50 space-x-6">
            <div className="space-y-6 w-full max-w-md hidden md:block">
                <p>For your password to be up to the latest security standards,
                    please make sure to consider the following aspects when creating you password:
                </p>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li className="flex items-center">
                        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        The password should consist of a minimum of 8 characters.
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        It should include capital and lower case letters,as wekk as at least one special character.
                    </li>
                    <li className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        Please choose a random combination of the before-mentioned characters.
                    </li>
                    <li className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        Please make sure not to use one password for all your other service providers.
                    </li>
                </ul>

            </div>
            <div className="w-full max-w-md md:max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Reset Your Password</h5>
                    <div>
                        <label htmlFor="resetToken" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Reset Token</label>
                        <div className="flex border-2 focus-within:border-blue-500 focus-within:outline-blue-500 rounded-md">
                            <span className="inline-flex items-center rounded-l-md bg-gray-50 px-3 text-sm text-gray-900 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <RxTokens size={20}></RxTokens>
                            </span>
                            <input type="text" id="resetToken" className="border-0 rounded-r-md bg-gray-50 focus:ring-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="Token String" {...register("resetToken", { required: true })} />
                        </div>
                        {errors.resetToken ? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, snapp!</span> Token is required.</p> : watchAllFields.resetToken && <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Look's Good</span></p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter New Password</label>
                        <div className="flex border-2 focus-within:border-blue-500 focus-within:outline-blue-500 rounded-md">
                            <span className="inline-flex items-center rounded-l-md bg-gray-50 px-3 text-sm text-gray-900 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <RxLockClosed size={20}></RxLockClosed>
                            </span>
                            <input type={isVisible.password ? "text" : "password"} id="password" className="border-0 rounded-r-md bg-gray-50 focus:ring-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="••••••••" {...register("password", { required: true })} />
                            <span onClick={() => { setIsVisible({...isVisible,password:!isVisible.password}) }}className="inline-flex items-center rounded-r-md bg-gray-50 px-3 text-sm text-gray-900 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 ">
                                {isVisible.password ? <RxEyeOpen size={20}></RxEyeOpen> : <RxEyeClosed size={20}></RxEyeClosed>}
                            </span>
                        </div>
                        {errors.password ? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, snapp!</span> Password is required.</p> : watchAllFields.password && <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Look's Good</span></p>}
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <div className="flex border-2 focus-within:border-blue-500 focus-within:outline-blue-500 rounded-md">
                            <span className="inline-flex items-center rounded-l-md bg-gray-50 px-3 text-sm text-gray-900 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <RxLockClosed size={20}></RxLockClosed>
                            </span>
                            <input type={isVisible.confirmPassword ? "text" : "password"} id="confirmPassword" className="border-0 rounded-r-md bg-gray-50 focus:ring-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="••••••••" {...register("confirmPassword", { required: true, validate: { match: value => getValues("password") === value || "Passowrd didn't match" } })} />
                            <span onClick={() => { setIsVisible({...isVisible,confirmPassword:!isVisible.confirmPassword}) }} className="inline-flex items-center rounded-r-md bg-gray-50 px-3 text-sm text-gray-900 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 ">
                                {isVisible.confirmPassword ? <RxEyeOpen size={20}></RxEyeOpen> : <RxEyeClosed size={20}></RxEyeClosed>}
                            </span>
                        </div>
                        {errors.confirmPassword ? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, snapp!</span> Password didn't matched</p> : watchAllFields.password && <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Matched</span></p>}
                    </div>

                    {!isProcessing ?
                        (<button type="submit" className="w-full flex items-center space-x-2 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <RxLockOpen1 size={20}></RxLockOpen1><span className="">Reset Your Password</span>
                        </button>) :
                        <button disabled type="button" className="w-full flex items-center space-x-2 justify-center text-white bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                            Processing...
                        </button>
                    }
                </form>
            </div>
        </div>
    </>)
}

export default ResetPassword;