import Image from 'next/image'
import { Bakbak_One } from 'next/font/google'
import { motion } from "framer-motion"

const bakbak_one = Bakbak_One({ subsets: ['latin'], weight: '400' })
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <section className={`${bakbak_one.className}`}>
      <motion.main
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        exit={{ opacity: 1 }}
        className='text-[#030202] absolute top-0 left-0 w-full h-full bg-[#F5F1EF] py-12 px-16 lg:px-48'
      >
        <div className='my-96 p-1'>
          <h1 className='text-6xl text-right lg:text-right lg:text-8xl'>
            Web3 Needs <br /><span className='web3'>Transitions</span>
          </h1>
        </div>
        <div className='flex justify-between'>
          <div>
            <h2>
              Development
            </h2>
            <h2>
              DApps and DeFi
            </h2>
            <h2>
              2023
            </h2>
          </div>
          <div>
            <h3>
              Web3 development and DeFi
            </h3>
            <h3>
              Contact to improve your UI and UX
            </h3>
          </div>
        </div>
      </motion.main>
    </section>
  )
}
