import React, { createContext, useContext, useEffect } from 'react'
import { useLocalStorageState } from 'ahooks'

type ColorMode = 'light' | 'dark'
type ColorModeContext = {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

function getInitialColorMode(): ColorMode {
  const persistedColorPreference = window.localStorage.getItem(
    '@applications_app_color_mode',
  )
  const hasPersistedPreference = typeof persistedColorPreference === 'string'

  if (hasPersistedPreference) {
    return persistedColorPreference as ColorMode
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light'
  }

  return 'light'
}

export const ColorModeContext = createContext<ColorModeContext | undefined>(
  undefined,
)

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [colorMode, setColorMode] = useLocalStorageState<ColorMode>(
    '@applications_color_mode',
    {
      defaultValue: getInitialColorMode(),
    },
  )

  function toggleColorMode() {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const root = window.document.documentElement

    if (colorMode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [colorMode])

  return (
    <ColorModeContext.Provider
      value={{ colorMode: colorMode ?? 'light', setColorMode, toggleColorMode }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}

export function useColorMode() {
  const context = useContext(ColorModeContext)

  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider')
  }

  return context
}
