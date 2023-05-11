import styles from '@/styles/footer/index.module.scss'
import FooterLogo from './FooterLogo'
import OnlineStoreContent from './OnlineStoreContent'
import CompanyContent from './CompanyContent'
import MarkerSvg from '@/components/elements/MarkerSvg/MarkerSvg'
import PhoneSvg from '@/components/elements/PhoneSvg/PhoneSvg'
import MailSvg from '@/components/elements/MailSvg/MailSvg'
import Link from 'next/link'

const Footer = () => {
  console.log('')
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          <FooterLogo />
          <div className={styles.footer__inner}>
            <div className={styles.footer__top__item}>
              <h3 className={styles.footer__top__item__title}>online store</h3>
              <OnlineStoreContent />
            </div>
            <div className={styles.footer__top__item}>
              <h3 className={styles.footer__top__item__title}>Company</h3>
              <CompanyContent />
            </div>
            <div className={styles.footer__top__item}>
              <h3 className={styles.footer__top__item__title}>Contacts</h3>
              <ul
                className={`${styles.footer__top__item__list} ${styles.footer__top__item__contacts}`}
              >
                <li className={styles.footer__top__item__list__item}>
                  <Link href="/contacts" passHref legacyBehavior>
                    <a
                      href="#"
                      className={styles.footer__top__item__list__item__link}
                    >
                      <span>Address:</span>
                      <span>Moscow, Sadovaya str. 5</span>
                      <span>
                        <MarkerSvg />
                      </span>
                    </a>
                  </Link>
                </li>
                <li className={styles.footer__top__item__list__item}>
                  <a
                    href="tel:+7(905) 657-09-76"
                    className={styles.footer__top__item__list__item__link}
                  >
                    <span>Contact phone:</span>
                    <span>+7(905) 555-55-55</span>
                    <span>
                      <PhoneSvg />
                    </span>
                  </a>
                </li>
                <li className={styles.footer__top__item__list__item}>
                  <a
                    href="mailto:snt.swetlana@gmail.com"
                    className={styles.footer__top__item__list__item__link}
                  >
                    <span>E-mail:</span>
                    <span>info@swetlana.site</span>
                    <span>
                      <MailSvg />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom__block}></div>
          <div className={}></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
