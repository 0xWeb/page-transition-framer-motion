
import '@/styles/globals.css'
import { Bakbak_One } from "next/font/google"
import Navbar from '@/components/Navbar';
import { AnimatePresence } from 'framer-motion';

const bakbak_one = Bakbak_One({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps, router }) {
  return (

    <div className={`${bakbak_one.className} `} >
      <Navbar />
      <AnimatePresence initial={false} >
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div >
  )
}