import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { LanguagesIcon } from 'lucide-react'

import { loadCatalog, locales } from '@/lib/i18n'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function LanguageMenu() {
  const { i18n } = useLingui()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <LanguagesIcon />
          <span className="sr-only">{t`Select language`}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t`Language`}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={i18n.locale}
          onValueChange={(value: string) => loadCatalog(value)}
        >
          {locales.map((locale) => (
            <DropdownMenuRadioItem key={locale.key} value={locale.key}>
              {locale.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
