import styles from './footer.module.scss';

export const Footer = () => {
    return (
        <footer className={`${styles['rtlFooterBlock']} ${styles['css-1wtvmr3']} ${styles['footer']}`}>
            <div className={styles['css-uivrsz']}>
                <h4 className={styles['css-gesvmm']}>Blijf op de hoogte van de nieuwste RTL programma's</h4>
                <p className={styles['css-1kkf3k2']}>Ontvang wekelijks updates over nieuwe programma's, exclusieve acties en persoonlijke tips in je mailbox</p>
                <form action="#" method="POST" className={styles['css-ymfplx']}>
                    <div className={styles['css-143whuu']}>
                        <div className={`${styles['MuiFormControl-root']} ${styles['MuiTextField-root']} ${styles['css-7yp0vh']} ${styles['MuiFormControl-fullWidth']}`}>
                            <div className={`${styles['MuiInputBase-root']} ${styles['MuiInput-root']} ${styles['MuiInput-underline']} ${styles['MuiInputBase-fullWidth']} ${styles['MuiInput-fullWidth']} ${styles['MuiInputBase-formControl']} ${styles['MuiInput-formControl']}`}>
                                <input type="text" aria-invalid="false" name="email" placeholder="E-mailadres"  className={`${styles['MuiInputBase-input']} ${styles['MuiInput-input']}`} wfd-id="id0" />
                            </div>
                        </div>
                    </div>
                    <button className={`${styles['MuiButtonBase-root']} ${styles['MuiButton-root']} ${styles['MuiButton-contained']} ${styles['css-16he636']} ${styles['Mui-disabled']} ${styles['Mui-disabled']}`} type="submit">
                        <span className={styles['MuiButton-label']}>
                            Aanmelden
                        </span>
                    </button>
                </form>
                <p className={styles['css-l11xzh']}>Bekijk ons <a href="https://privacy.rtl.nl/privacy-statement" target="_blank" rel="noopener noreferrer" className={styles['css-zi5uy3']}>privacy beleid</a> voor meer informatie over hoe wij je gegevens verwerken. Je kunt je op elk moment onderaan de e-mail uitschrijven.</p>
            </div>
            <div className={styles['css-18w4gdq']}>
                <div className={styles['css-kjorb3']}>
                    <a className={styles['css-s581ez']} href="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 114 20">
                            <path fill="#FE9726" d="M113.798 0H78.233v20h35.565z"></path>
                            <path fill="#fff" d="M89.285 4.597h2.471v8.674h10.99v2.132h-13.46V4.597Z"></path>
                            <path fill="#16B8FE" d="M74.681 0H39.117v20H74.68z"></path>
                            <path fill="#fff" d="M55.664 6.727h-6.251v-2.13h14.972v2.13h-6.25v8.676h-2.471z"></path>
                            <path fill="#0975F3" d="M35.565 0H0v20h35.565z"></path>
                            <path fill="#fff" d="M10.103 4.597h9.477c2.888 0 4.492 1.297 4.492 3.474 0 1.867-1.203 3.118-3.256 3.41l4.646 3.922h-3.566l-4.368-3.782h-4.956v3.782h-2.469zm9.154 5.001c1.527 0 2.27-.493 2.27-1.497s-.741-1.483-2.27-1.483h-6.685v2.979z"></path>
                        </svg>
                    </a>
                    <span className={styles['css-1i5bdz']}>© 2025 - RTL Nederland. Alle rechten voorbehouden. Geen tekst- en datamining.</span>
                    <ul data-testid="social-links-container" className={styles['css-ng38ku']}>
                        <li className={styles['css-ffhm6p']}>
                            <a href="https://www.instagram.com/rtl.nl/" target="_blank" rel="noopener noreferrer" title="Bekijk op Instagram" data-testid="social-link" className={styles['css-at6ebt']}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 8.337a3.695 3.695 0 0 1 3.687 3.686A3.694 3.694 0 0 1 12 15.71a3.694 3.694 0 0 1-3.687-3.687A3.695 3.695 0 0 1 12 8.337"></path>
                                    <path fillRule="evenodd" d="M17.25 1.5H6.75A5.26 5.26 0 0 0 1.5 6.75v10.5a5.26 5.26 0 0 0 5.25 5.25h10.5a5.26 5.26 0 0 0 5.25-5.25V6.75a5.26 5.26 0 0 0-5.25-5.25M12 6.75A5.26 5.26 0 0 0 6.75 12 5.26 5.26 0 0 0 12 17.25 5.26 5.26 0 0 0 17.25 12 5.26 5.26 0 0 0 12 6.75m4.503-.42c0-.653.537-1.19 1.19-1.19.654 0 1.19.537 1.19 1.19s-.536 1.19-1.19 1.19-1.19-.537-1.19-1.19"></path>
            
                                </svg>
                            </a>
                        </li>
                        <li className={styles['css-ffhm6p']}>
                            <a href="https://www.facebook.com/rtl.nl" target="_blank" rel="noopener noreferrer" title="Bekijk op Facebook" data-testid="social-link" className={styles['css-at6ebt']}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M22.5 12.064C22.5 6.23 17.799 1.5 12 1.5S1.5 6.23 1.5 12.064c0 5.273 3.84 9.643 8.86 10.436v-7.382H7.692v-3.054h2.666V9.737c0-2.648 1.568-4.11 3.966-4.11 1.15 0 2.35.206 2.35.206v2.6h-1.323c-1.305 0-1.711.814-1.711 1.65v1.981h2.912l-.466 3.054H13.64V22.5c5.02-.793 8.859-5.163 8.859-10.436Z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className={styles['css-1f6a9tn']}>Handige links</h3>
                    <nav>
                        <a href="/auth/login" target="_self" rel="noopener noreferrer" className={styles['css-1jzqknh']}>Inloggen</a>
                        <a href="https://account.rtl.nl/oidc/register?client_id=rtlnl&amp;theme=rtl" target="_self" rel="noopener noreferrer" className={styles['css-1jzqknh']}>Registreren</a>
                        <a href="https://account.rtl.nl/oidc/reset-password?client_id=rtlnl&amp;theme=rtl" target="_self" rel="noopener noreferrer" className={styles['css-1jzqknh']}>Wachtwoord vergeten</a>
                        <a href="https://cloud.email.rtl.nl/nieuwsbrief-aanmelden?source=footer-rtlnl" target="_blank" rel="noopener noreferrer" className={styles['css-1jzqknh']}>Aanmelden RTL updates</a>
                        <button type="button" className={styles['css-bblatl']}><span>Cookie instellingen</span></button>
                    </nav>
                </div>
                <div>
                    <h3 className={styles['css-1f6a9tn']}>Help</h3>
                    <nav>
                        <a href="https://www.rtl.nl/rtl-home/artikel/5367931/contact" target="_blank" rel="noopener noreferrer" className={styles['css-1jzqknh']}>Contact</a>
                        <a href="https://rtl.nl/rtl-home/artikel/5326943/bedrijfsgegevens" target="_blank" rel="noopener noreferrer" className={styles['css-1jzqknh']}>Bedrijfsgegevens</a>
                        <a href="/rtl-home/artikel/5407047/faq-rtlnl" target="_blank" rel="noopener noreferrer" className={styles['css-1jzqknh']}>Veel gestelde vragen</a>
                        <a href="https://www.facebook.com/rtl.nl/" target="_blank" rel="noopener noreferrer" className={styles['css-1jzqknh']}>Facebook support</a>
                        <a href="https://twitter.com/rtlnl" target="_blank" rel="noopener noreferrer" className={styles['css-1jzqknh']}>Twitter support</a>
                    </nav>
                </div>

                <div>
                    <h3 className={styles['css-1f6a9tn']}>Over RTL.nl</h3>
                    <nav>
                        <a href="https://privacy.rtl.nl/gebruikers-voorwaarden" target="_blank" rel="noopener noreferrer" className={styles['css-1jzqknh']}>Gebruikersvoorwaarden</a>
                        <a href="https://privacy.rtl.nl/privacy-statement" target="_blank" rel="noopener noreferrer" className={styles['css-1jzqknh']}>Privacy en cookie voorwaarden</a>
                        <a href="https://adalliance.nl/" target="_blank" rel="noopener noreferrer" className={styles['css-1jzqknh']}>Adverteren bij RTL</a>
                        <a href="https://www.rtl.nl/over/over-rtl/V8gmwCgAAL1tBaEY" target="_blank" rel="noopener noreferrer" className={styles['css-1jzqknh']}>Ga naar RTL Nederland</a>
                    </nav>
                </div>
            </div> 
        </footer>
    )
}