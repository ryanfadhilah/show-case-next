import { footerLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

type ColumnProps = {
    title: string,
    links: Array<string>
}

const FooterColumn = ({ title, links }: ColumnProps) => {
    return (
        <div className=''>
            <h4 className='font-semibold py-3'>{title}</h4>
            <ul className='flex flex-col gap-2'>
                {links.map((v, i, a) => {
                    return (<Link href="/" key={i} className=' hover:text-teal-500 hover:underline hover:underline-offset-2 transition-all ease-linear duration-100'>{v}</Link>)
                })}
            </ul>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className=' bg-gray-50 py-6 lg:px-10 p-5'>
            <div className='flex flex-col gap-12 w-full'>
                <div>
                    <h1 className=' text-lg font-semibold'>Show-Case</h1>
                    <p>a worlds leading platform for developer to show case their skills</p>
                </div>

                <div className='flex justify-between gap-12'>
                    <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}></FooterColumn>
                    <div className=' flex-col gap-4'>
                        <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links}></FooterColumn>
                        <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links}></FooterColumn>
                    </div>
                    <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links}></FooterColumn>
                    <div className='flex-col gap-4'>
                        <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links}></FooterColumn>
                        <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links}></FooterColumn>
                    </div>
                    <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}></FooterColumn>
                </div>
                <div className='flex justify-between'>
                    <h1 className=' font-semibold text-sm'>© 2023 Show-Case. All rights reserved</h1>
                    <p className='font-semibold text-sm text-gray-500'>dqwdq</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer