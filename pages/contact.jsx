"use client"
import ContactInfo from "@/components/ContactInfo"
import ContactTitle from "@/components/ContactTitle"
import { motion } from "framer-motion"
import Head from "next/head"

function page() {
    return (

        <motion.main

            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
            className="text-[#092A20] absolute top-0 left-0 w-full h-full bg-[#D9F7EE] py-12 px-16 lg:px-48">
            <Head>
                <title>Contact Me</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <ContactTitle />
            <ContactInfo />
        </motion.main>
    )
}

export default page