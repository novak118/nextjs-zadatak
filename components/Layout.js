import Head from "next/head";
import styles from '../styles/layout.module.css'

function Layout ({header,footer,articles,blog}) {
return(
    <div className={styles.container}>
           <Head>
            <title>Creative Market</title>
           </Head>
           <header className={styles.header}>
            {header}
           </header>
           <main>
           <section className={styles.blog}>
                {blog}
            </section>
            <section className={styles.articles}>
                {articles}
            </section>
            <section className={styles.footer}>
                {footer}
            </section>
           </main>
    </div>

)

}
export default Layout