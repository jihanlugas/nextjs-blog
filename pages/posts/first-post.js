import Link from 'next/link'
import Head from 'next/head';
import Layout from '../../componens/layout'


export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>My App</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href={'/'}><a href="">Back to home</a></Link>
            </h2>
        </Layout>
    )
}