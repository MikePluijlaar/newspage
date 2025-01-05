import Link from "next/link"
import styles from "./actions-menu.module.scss"

export const ActionsMenu = () => {
    return (
        <div className={styles['actions-menu']}>
            <span className={styles['action-menu__account']}>Mijn Account</span>
            <ul className={styles['actions-menu__dropdown']}>
                <li>Inloggen</li>
                <li>U</li>
            </ul>
            <Link href="/search"><svg className={styles['actions-menu__search']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.853 14.303c.917-1.152 1.487-2.592 1.487-4.178a6.75 6.75 0 1 0-6.75 6.75c1.599 0 3.049-.58 4.205-1.509l5.258 5.259h2.121zM4.34 10.125a5.256 5.256 0 0 1 5.25-5.25 5.256 5.256 0 0 1 5.25 5.25 5.256 5.256 0 0 1-5.25 5.25 5.256 5.256 0 0 1-5.25-5.25"></path></svg></Link>
        </div>
    )
}