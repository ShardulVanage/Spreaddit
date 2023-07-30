import { Icons } from '@/components/Icons'
import UserAuthForm from './UserAuthForm'
import Link from 'next/link'
import logo from '../../public/logo1.png'
import Image from 'next/image'
const SignIn = () => {
    return (
        <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
            <div className='flex flex-col space-y-2 text-center'>
                <Image src={logo} alt='logo' className='mx-auto h-20 w-20 drop-shadow-2xl' />
                <h1 className='text-2xl font-semibold tracking-tight'>Sign up</h1>
                <p className='text-sm max-w-xs mx-auto'>
                    By continuing, you are setting up a SpreadĐit account and agree to our
                    User Agreement and Privacy Policy.
                </p>
            </div>
            <UserAuthForm />
            <p className='px-8 text-center text-sm text-muted-foreground'>
                Already a SpreadĐittor?{' '}
                <Link
                    href='/sign-in'
                    className='hover:text-brand text-sm underline underline-offset-4'>
                    Sign In
                </Link>
            </p>
        </div>
    )
}

export default SignIn