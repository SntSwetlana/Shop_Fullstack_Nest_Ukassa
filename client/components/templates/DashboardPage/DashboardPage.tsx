import { getBestsellersOrNewPartsFx } from '@/app/api/boilerParts'
import BrandSlider from '@/components/modules/DashboardPage/BrandSlider'
import CartAlert from '@/components/modules/DashboardPage/CartAlerts'
import DashboardSlider from '@/components/modules/DashboardPage/DashboardSlider'
import { $mode } from '@/context/mode'
import { $shoppingCart } from '@/context/shopping-cart'
import styles from '@/styles/dashboard/index.module.scss'
import { IBoilerParts } from '@/types/boilerparts'
import { useStore } from 'effector-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const DashboardPage = () => {
  const [newParts, setNewParts] = useState<IBoilerParts>({} as IBoilerParts)
  const [bestSellers, setBestSellers] = useState<IBoilerParts>(
    {} as IBoilerParts
  )
  const [spinner, setSpinner] = useState(false)
  const shoppingCart = useStore($shoppingCart)
  const [showAlert, setShowAlert] = useState(!!shoppingCart.length)

  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  useEffect(() => {
    loadBloilerParts()
  }, [])

  const loadBloilerParts = async () => {
    try {
      setSpinner(true)
      const bestsellers = await getBestsellersOrNewPartsFx(
        '/boiler-parts/bestsellers'
      )
      const newParts = await getBestsellersOrNewPartsFx(
        '/boiler-parts/bestsellers'
      )

      setBestSellers(bestsellers)
      setNewParts(newParts)
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setSpinner(false)
    }
  }
  const closeAlert = () => setShowAlert(false)

  console.log()
  return (
    <section className={styles.dashboard}>
      <div className={`container ${styles.dashboard__container}`}>
        <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`${styles.dashboard__alert} ${darkModeClass}`}
            >
              <CartAlert count={shoppingCart.length} closeAlert={closeAlert} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={styles.dashboard__brands}>
          <BrandSlider />
        </div>
        <h2 className={`${styles.dashboard__title} ${darkModeClass}`}>
          Gas boiler parts
        </h2>
        <div className={styles.dashboard__parts}>
          <h3 className={`${styles.dashboard__title} ${darkModeClass}`}>
            Hits
          </h3>
          <DashboardSlider
            items={bestSellers.rows || []}
            spinner={spinner}
            goToPartPage={false}
          />
        </div>
        <div className={styles.dashboard__parts}>
          <h3 className={`${styles.dashboard__title} ${darkModeClass}`}>
            New parts
          </h3>
          <DashboardSlider
            items={newParts.rows || []}
            spinner={spinner}
            goToPartPage={false}
          />
        </div>
        <div className={styles.dashboard__about}>
          <h3
            className={`${styles.dashboard__parts__title} ${styles.dashboard__about__title}  ${darkModeClass}`}
          >
            About company
          </h3>
          <p className={`${styles.dashboard__about__text}`}>
            Instructions and schematic diagrams will assist in understanding the
            operation, diagnosing malfunctions, and accurately selecting the
            replacement part for your gas equipment's repair. Parts for gas
            boiler repairs can be purchased throughout the Russian Federation.
            We facilitate parts delivery to gas boilers in cities including
            Moscow and St. Petersburg.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
