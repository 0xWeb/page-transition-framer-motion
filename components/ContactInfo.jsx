function ContactInfo() {
    return (
        <div className="flex justify-between">
            <div className="lg:text-2xl text-base">
                <h4>
                    Find me:
                </h4>
            </div>
            <div className="lg:text-6xl text-2xl underline">
                <ul>
                    <li className="pb-2">
                        <a href="https://twitter.com/0xRKX">Twitter</a>
                    </li>
                    <li className="pb-2">
                        <a href="https://twitter.com/0xRKX">Telegram</a>
                    </li>
                    <li className="pb-2">
                        <a href="https://github.com/0xWeb">GitHub</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default ContactInfo