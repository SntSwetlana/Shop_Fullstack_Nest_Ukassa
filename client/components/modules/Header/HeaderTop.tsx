import CityButton from '@/components/elements/CityButton/CityButton'
import Link from 'next/link'
import ProfileDropDown from './ProfileDropDown'
import styles from '@/styles/header/index.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import ModeToggler from '@/components/elements/ModeToggler/ModeToggler'
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import { usePopup } from '@/hooks/usePopup'

const HeaderTop = () => {
  const isMedia950 = useMediaQuery(950)
  const { toggleOpen, open, closePopup } = usePopup()
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <div className={styles.header__top}>
      <div className={`container ${styles.header__top__container}`}>
        {!isMedia950 && <CityButton />}
        {isMedia950 && (
          <button
            onClick={toggleOpen}
            className={`${styles.burger__menu} ${
              open ? styles.open : ''
            } ${darkModeClass}`}
          >
            <span />
            <span />
            <span />
          </button>
        )}
        <nav
          className={` ${styles.header__nav} ${
            open ? styles.open : ''
          } ${darkModeClass}`}
        >
          <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__list__item}>
              <Link href="/shopping-payment" passHref legacyBehavior>
                <a
                  className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                  onClick={closePopup}
                >
                  Shipping and payment
                </a>
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link href="/about" passHref legacyBehavior>
                <a
                  className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                  onClick={closePopup}
                >
                  About Us
                </a>
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link href="/catalog" passHref legacyBehavior>
                <a
                  className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                  onClick={closePopup}
                >
                  Catalog
                </a>
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link href="/contacts" passHref legacyBehavior>
                <a
                  className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                  onClick={closePopup}
                >
                  Contacts
                </a>
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link href="/wholesale-byers" passHref legacyBehavior>
                <a
                  className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                  onClick={closePopup}
                >
                  Wholesalers
                </a>
              </Link>
            </li>
            {isMedia950 && (
              <li className={styles.header__nav__list__item}>
                <CityButton />
              </li>
            )}
            {isMedia950 && (
              <li className={styles.header__nav__list__item}>
                <ModeToggler />
              </li>
            )}
          </ul>
        </nav>
        <ProfileDropDown />
      </div>
    </div>
  )
}

export default HeaderTop
