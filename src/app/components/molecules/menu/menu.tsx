import Link from "next/link";
import styles from "./menu.module.scss";
import { MenuItem } from "./menu-types";

export const Menu = ({ items }: { items: MenuItem[] }) => {
    return (
        <nav className={styles['menu']} >
            {items?.map((item: MenuItem) => (
                <Link className={styles['menu__item']} key={item.id} href={item.url}>{item.name}</Link>
            ))}
        </nav>
    );
}