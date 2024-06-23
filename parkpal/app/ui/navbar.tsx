"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from '@/public/logo.png'

export default function Navbar() {
    const pathname = usePathname()
    return (
        
        <nav className="fixed top-0 px-32 w-full h-14 z-1000 border-b flex justify-between items-center bg-white">
            <div className='w-96 flex justify-between items-center text-[#183456]'>
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/"><p>Home</p></Link>
                <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about"><p>About</p></Link>
                <Link className={`link ${pathname === '/hiw' ? 'active' : ''}`} href="/hiw"><p>How it works</p></Link>
                <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact"><p>Contact</p></Link>
            </div>
            <div>
                <p className='text-[#183456] text-2xl font-semibold'>myparkpal</p>
            </div>
            <div className='w-96 h-10'></div>

        </nav>
    );
}