"use client";
import Link from 'next/link'
import { buttonVariants } from './ui/Button'
import logo from '../../public/logo1.png'
import Image from 'next/image'
import { getAuthSession } from '@/lib/auth'
import { setEngine } from 'crypto'
import { useSession } from 'next-auth/react'
import UserAccountNav from './ui/UserAccoutnNav';
const Navbar = () => {

    const { data: session } = useSession()

    return (

        <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
            <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
                {/* logo */}
                <Link href='/' className='flex gap-2 items-center'>
                    <Image src={logo} alt='logo' className='h-16 w-16 sm:h-20 sm:w-20' />
                    <p className='hidden text-zinc-700 text-sm font-medium md:block font-'>SpreadĐit</p>
                </Link>

                {/* search bar */}


                {/* actions */}

                {session?.user ? (
                    <UserAccountNav user={session.user} />
                ) : (
                    <Link href='/sign-in' className={buttonVariants()}>
                        Sign In
                    </Link>
                )}

            </div>
        </div>


    )
}

export default Navbar