import Image from "next/image";
import Link from "next/link";
import { ActionsMenu } from "../../molecules/actions-menu/actions-menu"
import { Menu } from "../../molecules/menu/menu"
import { HeaderProps } from "./header-type";
import styles from './header.module.scss'


export const Header = ({menuData}: HeaderProps) => {
    return (
        <>
            <div className={styles['header-main']}>
                <Link href="/" className={styles['header-link']} >
                    <Image className={styles['header-logo']} src="/next.svg" alt="Next.js logo" width={180} height={38} />
                </Link>
                <Menu items={menuData[0].mainMenu}></Menu>
                <ActionsMenu></ActionsMenu>
            </div>
            <div className={styles['header-sub']}>
                <Menu items={menuData[0].subMenu}></Menu>
            </div>
        </>
    )
}