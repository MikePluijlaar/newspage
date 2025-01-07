import styles from './content-container.module.scss';
import { ReactNode } from 'react';

export const ContentContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles["content-container"]}>
            {children}
        </div>
    );
}