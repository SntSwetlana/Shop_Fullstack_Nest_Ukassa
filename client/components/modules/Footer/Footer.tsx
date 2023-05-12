/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/footer/index.module.scss'
import FooterLogo from './FooterLogo'
import OnlineStoreContent from './OnlineStoreContent'
import CompanyContent from './CompanyContent'
import MarkerSvg from '@/components/elements/MarkerSvg/MarkerSvg'
import PhoneSvg from '@/components/elements/PhoneSvg/PhoneSvg'
import MailSvg from '@/components/elements/MailSvg/MailSvg'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Accordion from '@/components/elements/Accordion/Accordion'

const Footer = () => {
  const isMedia750 = useMediaQuery(750)
  const isMedia500 = useMediaQuery(500)

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          {!isMedia750 && <FooterLogo />}
          <div className={styles.footer__top__inner}>
            <div className={styles.footer__top__item}>
              {!isMedia500 && (
                <>
                  <h3 className={styles.footer__top__item__title}>
                    Online store
                  </h3>
                  <OnlineStoreContent />
                  <div style={{ height: 17 }} />
                </>
              )}
              {isMedia500 && (
                <Accordion
                  title="Online store"
                  titleClass={styles.footer__top__item__title}
                  arrowOpenClass={styles.open}
                >
                  <OnlineStoreContent />
                  <div style={{ height: 17 }} />
                </Accordion>
              )}
            </div>
            <div className={styles.footer__top__item}>
              {!isMedia500 && (
                <>
                  <h3 className={styles.footer__top__item__title}>Company</h3>
                  <CompanyContent />
                  <div style={{ height: 17 }} />
                </>
              )}
              {isMedia500 && (
                <Accordion
                  title="Company"
                  titleClass={styles.footer__top__item__title}
                  arrowOpenClass={styles.open}
                >
                  <CompanyContent />
                  <div style={{ height: 17 }} />
                </Accordion>
              )}
            </div>
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
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom__block}>
            <div className={styles.footer__bottom__block__left}>
              <h3 className={styles.footer__bottom__block__title}>
                Accept for payment
              </h3>
              <ul className={styles.footer__bottom__block__pay}>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/01ApplePay.png" alt="ApplePay" />
                </li>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/02GooglePay.png" alt="GooglePay" />
                </li>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/03Mastercard.png" alt="Mastercard" />
                </li>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/04VisaCard.png" alt="VisaCard" />
                </li>
              </ul>
            </div>
            <div className={styles.footer__bottom__block__right}>
              <h3 className={styles.footer__bottom__block__title}>
                Social networks
              </h3>
              <ul className={styles.footer__bottom__block__social}>
                <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="#"
                    className={styles.footer__bottom__block__social__item_vk}
                  />
                </li>
                <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="#"
                    className={styles.footer__bottom__block__social__item_fb}
                  />
                </li>
                <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="#"
                    className={styles.footer__bottom__block__social__item_inst}
                  />
                </li>
                <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="#"
                    className={styles.footer__bottom__block__social__item_ytube}
                  />
                </li>
              </ul>
            </div>
          </div>
          {isMedia750 && <FooterLogo />}
          <div className={styles.footer__bottom__block}>
            <p className={styles.footer__bottom__block__copyright}>
              © «Gas items Inc» 2021-2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
