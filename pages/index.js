import Image from 'next/image'
import { Bakbak_One } from 'next/font/google'
import { motion } from "framer-motion"

const bakbak_one = Bakbak_One({ subsets: ['latin'], weight: '400' })

import HomeInfo from '@/components/HomeInfo'
import HomeTitle from '@/components/HomeTitle'
import Head from 'next/head'

export default function Home() {
  return (
    <section className={`${bakbak_one.className}`}>
      <Head>
        <title>Home Web3</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <motion.main
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        exit={{ opacity: 1 }}
        className='text-[#030202] absolute flex flex-col w-full h-screen bg-[#F5F1EF] pb-16 px-3 sm:px-12 lg:px-48'
      >
        <div className='h-screen  flex  justify-end items-center'>
          <HomeTitle />
        </div>

        <HomeInfo />

      </motion.main>
    </section>
  )
}
