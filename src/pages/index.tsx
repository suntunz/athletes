import Head from 'next/head'
import HeroTemplate from '@/components/templates/hero-template'
import { contentConfig } from '@/configs/content'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export default function Home() {
    return (
        <>
            <Head>
                <title>TPIP Assignment</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={roboto.className}>
                {contentConfig.map((content, index) => (
                    <HeroTemplate key={index} {...content} />
                ))}
            </main>
        </>
    )
}
