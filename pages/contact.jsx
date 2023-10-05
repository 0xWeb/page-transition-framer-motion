"use client"
import { motion } from "framer-motion"

function page() {
    return (

        <motion.main
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
            className="text-[#092A20] absolute top-0 left-0 w-full h-full bg-[#D9F7EE] py-12 px-16 lg:px-48">
            <div className="my-96 p-1">
                <h1 className="text-6xl text-right lg:text-right lg:text-8xl">
                    Let&apos;s talk
                </h1>
            </div>
            <div className="flex gap-40">
                <div className="lg:text-2xl text-base">
                    <h4>
                        Find me:
                    </h4>
                </div>
                <div className="lg:text-6xl text-2xl underline">
                    <ul>
                        <li className="pb-2">
                            Twitter
                        </li>
                        <li className="pb-2">
                            Telegram
                        </li>
                        <li className="pb-2">
                            GitHub
                        </li>

                    </ul>
                </div>
            </div>
        </motion.main>
    )
}

export default page