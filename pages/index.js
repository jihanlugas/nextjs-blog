import Head from 'next/head'
import Layout, { siteTitle, name } from '../componens/layout'
import utilStyles from '../styles/utils.module.css'
import Link from "next/link";
import { getSortedPostsData } from '../lib/posts'
import Date from '../componens/date'

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hallo, I'm <strong>{ name }</strong>. I'm a software enginer and a translator (English/Indonesian). You can contact me on {' '}
                    <a href="https://wa.me/6285364631152">Whatsapp</a>.</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={'/posts/[id]'} as={`/posts/${id}`}>
                                <a href="">{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                        // <li className={utilStyles.listItem} key={id}>
                        //     {title}
                        //     <br />
                        //     {id}
                        //     <br />
                        //     {date}
                        // </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}