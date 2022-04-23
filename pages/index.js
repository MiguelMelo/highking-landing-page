import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../images/logo.svg'

import hikingCouple from '../images/hiking-couple-img.png'
import girl from '../images/girl.png'

import booking from '../images/booking.png'
import unitedTravel from '../images/united-travel.png'
import travelAdvisor from '../images/travel-advisor.png'
import travelChannel from '../images/travel-channel.png'
import tripraja from '../images/triprajacom.png'

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
      <section className={styles.safety__wrapper}>
        <div className={styles.sidebox__left}>
          <Image src={girl} />
        </div>
        <div className={styles.sidebox__right}>
          <h1>Safe, Affordable, And Trusted</h1>
          <p>Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</p>
          <button className={styles.primary__button}>Contact Us</button>
        </div>
        <div className={styles.trust__wrapper}>
          <h5>Safe Journey</h5>
          <h2>Trusted by Big Companies</h2>
          <div className={styles.business__wrapper}>
            <div className={styles.business__img_1}>
              <Image src={travelAdvisor} />
            </div>
            <div className={styles.business__img_2}>
              <Image src={unitedTravel} />
            </div>
            <div className={styles.business__img_3}>
              <Image src={travelChannel} />
            </div>
            <div className={styles.business__bottom}>
              <div>
                <Image src={tripraja} />
              </div>
              <div>
                <Image src={booking} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  )
}
