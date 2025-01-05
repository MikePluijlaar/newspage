import Image from "next/image"
import Link from "next/link"
import styles from "./logo.module.scss"

export const Logo = () => {
    return (
        <Link href="/" className={styles['header-link']} >
            <Image className={styles['header-logo']} src="/next.svg" alt="Next.js logo" width={180} height={38} />
        </Link>
    )
}