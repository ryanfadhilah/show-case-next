import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import AuthProviders from './AuthProviders'

const Navbar = () => {

    const session = {}

    return (
        <nav className='flex justify-between py-5 px-8 border-b gap-4'>

            <div className='flex gap-10'>
                <Link href="/" className=' font-semibold'>
                    Show-Case
                </Link>
                <ul className='xl:flex hidden text-sm gap-7 items-center'>
                    {NavLinks.map((v, i, a) => {
                        return (<Link href={v.href} key={v.key} className='hover:text-teal-500 hover:underline hover:underline-offset-2 transition-all ease-linear duration-100'>{v.text}</Link>)
                    })}
                </ul>
            </div>

            <div className='flex gap-4'>
                {session
                    ? (<> UserPhoto <Link href="/create-project"> Share Work </Link> </>)
                    : (<AuthProviders></AuthProviders>)}
            </div>

        </nav>
    )
}

export default Navbar