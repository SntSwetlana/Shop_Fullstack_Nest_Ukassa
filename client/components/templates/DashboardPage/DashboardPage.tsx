//import { getBestsellersOrNewPartsFx } from '@/app/api/boilerParts'
import BrandSlider from '@/components/modules/DashboardPage/BrandSlider'
import styles from '@/styles/dashboard/index.module.scss'
//import { IBoilerPart } from '@/types/boilerparts'
//import { useState } from 'react'

const DashboardPage = () => {
  // const [newParts, setNewParts] = useState<IBoilerPart[]>([])
  // const [bestSellers, setBestSellers] = useState<IBoilerPart[]>([])

  // const loadBloilerParts = async () => {
  //   const bestsellers = await getBestsellersOrNewPartsFx(
  //     '/boiler-parts/bestsellers'
  //   )
  //   const newParts = await getBestsellersOrNewPartsFx(
  //     '/boiler-parts/bestsellers'
  //   )
  // }
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
