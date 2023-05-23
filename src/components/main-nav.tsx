import { t } from '@lingui/macro'
import { Link } from 'react-router-dom'

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <nav className="hidden gap-6 md:flex">
        <Link
          to="/"
          className="flex items-center text-lg font-semibold text-muted-foreground sm:text-sm"
        >
          {t`Home`}
        </Link>
      </nav>
    </div>
  )
}
