import Head from 'next/head'
// import Image from 'next/image'
import home from '../styles/Home.module.scss'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

// const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_BASE_PATH)
  return (
    <div className={home.container}>
      <Head>
        <title>Junior Caucus</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Stuyvesant High School Junior Caucus" />
        <link rel="shortcut icon" href="./static/JuniorCaucusWhite.png" />
      </Head>

      <div className={home.content}>
        <Navbar />

        <section className={home.cardcontainer}>
          <img className={home.cardstuyimg} src="./static/stuy.jpg"/>
          <img className={home.cardlogo} src="./static/JuniorCaucusWhite.png"/>
        </section>

        <Footer />
      </div>
    </div>
  )
}
