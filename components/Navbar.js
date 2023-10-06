import Link from 'next/link'

import { Bakbak_One } from 'next/font/google'

const inter = Bakbak_One({ subsets: ['latin'], weight: '400' })

function Navbar() {
    return (
        <nav className={`${inter.className} text-gray-950 text-2xl font-medium z-20 absolute py-12 px-16 lg:px-48 `}>
            <ul className='flex gap-12'>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/contact'}><li>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar