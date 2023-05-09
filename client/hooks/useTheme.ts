import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $mode, setMode } from '@/context/mode'

export const useTheme = () => {
  const mode = useStore($mode)

  const toggleTheme = () => {
    if (mode === 'dark') {
      localStorage.setItem('mode', JSON.stringify('light'))
      setMode('light')
    } else {
      localStorage.setItem('mode', JSON.stringify('dark'))
      setMode('dark')
    }
  }

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem('mode') as string)
    if (localTheme) {
      setMode(localTheme)
    }
  }, [])

  return { toggleTheme }
}
