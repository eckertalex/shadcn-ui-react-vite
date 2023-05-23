import { t } from '@lingui/macro'
import { Moon as MoonIcon, Sun as SunIcon } from 'lucide-react'

import { useColorMode } from '@/context/color-mode-provider'
import { Button } from '@/components/ui/button'

export function ColorModeToggle() {
  const { toggleColorMode } = useColorMode()

  return (
    <Button variant="ghost" size="sm" onClick={toggleColorMode}>
      <SunIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">{t`Toggle color mode`}</span>
    </Button>
  )
}
