import Link from 'next/link';
import Image from 'next/image'
import logo from '@/public/logo.png'

export default function Navbar() {
    return (
        // TODO: add links to about and contact
        <nav className="fixed top-0 px-32 w-full h-14 z-1000 border-b flex justify-between items-center bg-white">
            <div className='w-96 flex justify-between items-center text-[#183456]'>
                <Link href="/"><p>Home</p></Link>
                <Link href="/about"><p>About</p></Link>
                <Link href="/hiw"><p>How it works</p></Link>
                <Link href="/contact"><p>Contact</p></Link>
            </div>
            <div>
                <p className='text-[#183456] text-2xl font-semibold'>myparkpal</p>
            </div>
            <div className='w-96 h-10'></div>

        </nav>
    );
}