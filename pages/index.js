import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../images/logo.svg'
import hikingCouple from '../images/hiking-couple-img.png'

import pinIcon from '../images/pin-icon.svg'
import bootIcon from '../images/boot-icon.svg'
import bagIcon from '../images/bag-icon.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Highking - Hiking & Outdoor</title>
        <meta name="description" content="We envision a world where everyone feels welcome in the American hiking community." />
        <link rel="icon" href="/highking.svg" />
      </Head>

      <div className={styles.main__content}>
        <header className={styles.header}>
          <Image src={logo} className={styles.logo} height={30} />
          <nav className={styles.nav__links}>
            <ul>
              <li><a href='#'>Location</a></li>
              <li><a href='#'>Blogs</a></li>
              <li><a href='#'>Testimonials</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className={styles.main__wrapper}>
          <div className={styles.box__side}>
            <h1>Be prepared for the mountains and beyond.</h1>
            <p>Are you looking for amazing hiking travel? Don’t worry! We got it for you!</p>
            <div className={styles.box__side__cta}>
              <button>Contact Us</button>
              <button className={styles.outline__button}>Watch Video</button>
            </div>
          </div>
          <div className={styles.box__image}>
            <Image src={hikingCouple} />
          </div>
          <div className={styles.popup__wrapper}>
            <div className={styles.popup}>
              <div>
                <Image src={pinIcon} height={42} width={42} />
                <h1>Secret Locations</h1>
                <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
                <a>Read More</a>
              </div>
              <div>
                <Image src={bootIcon} height={42} width={42} />
                <h1>Safe Adventure</h1>
                <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
                <a>Read More</a>             
              </div>
              <div>
                <Image src={bagIcon} height={42} width={42} />
                <h1>Professional Hikers</h1>
                <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
                <a>Read More</a>
              </div>
            </div>        
          </div>
          <div className={styles.main__footer}>
            <p>Don’t hesitate to contact us to get better Information. <strong>EXPLORE ALL TREKKING.</strong></p>
          </div>
        </main>
      </div>
      <section id="safety">
        
      </section>
      <section id="reviews"></section>
      <footer></footer>
    </div>
  )
}
