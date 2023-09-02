import { ICartAlertProps } from '@/types/dashboard'
import Link from 'next/link'
import styles from '@/styles/dashboard/index.module.scss'
import { formatPrice } from '@/utils/common'
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'

const CartAlert = ({ count, closeAlert }: ICartAlertProps) => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  const showCountMessage = (count: string) => {
    if (count.endsWith('1')) {
      return 'item'
    }
    if (count.endsWith('2') || count.endsWith('3') || count.endsWith('4')) {
      return 'items'
    }
    return 'items'
  }

  return (
    <>
      <div className={`${styles.dashboard__alert__left} ${darkModeClass}`}>
        <span>
          In basket {count} {showCountMessage(`${count}`)}
        </span>
        <span>Total {formatPrice(0)} P</span>
      </div>
      <div className={styles.dashboard__alert__right}>
        <Link href="/order" legacyBehavior passHref>
          <a className={styles.dashboard__alert__btn_cart}>To basket</a>
        </Link>
        <Link href="/order" legacyBehavior passHref>
          <a className={styles.dashboard__alert__btn_order}>
            procced to checkount
          </a>
        </Link>
      </div>
      <button
        className={styles.dashboard__alert__btn_close}
        onClick={closeAlert}
      />
    </>
  )
}

export default CartAlert
