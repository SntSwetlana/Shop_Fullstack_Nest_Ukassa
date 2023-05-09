import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { useTheme } from '@/hooks/useTheme'
import { $mode } from '@/context/mode'
import styles from '@/styles/modeToggle/index.module.scss'

const ModeToggler = () => {
  const { toggleTheme } = useTheme()
  const mode = useStore($mode)

  const handleToggleMode = () => {
    toggleTheme()
    document.body.classList.toggle('dark_mode')
  }
  useEffect(() => {
    document.body.classList.add(mode === 'dark' ? 'dark_mode' : 'body')
  }, [mode])

  return (
    <div className={styles.theme}>
      <input
        className={styles.theme__input}
        type="checkbox"
        checked={mode === 'light'}
        onChange={handleToggleMode}
      />
    </div>
  )
}

export default ModeToggler
