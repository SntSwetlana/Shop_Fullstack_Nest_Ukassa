import BrandSlider from '@/components/modules/DashboardPage/BrandSlider'
import styles from '@/styles/dashboard/index.module.scss'
import { useState } from 'react'

const DashboardPage = () => {
  const [newParts, setNewParts] = useState([])
  const [bestSellers, setBestSellers] = useState<[]>([])
  console.log()
  return (
    <section className={styles.dashboard}>
      <div className={`container ${styles.dashboard__container}`}>
        <div className={styles.dashboard__brands}>
          <BrandSlider />
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
