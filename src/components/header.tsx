import { GithubIcon, LinkedinIcon, PenToolIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ColorModeToggle } from './color-mode-toggle'
import { LanguageMenu } from './language-menu'
import { MainNav } from './main-nav'
import { buttonVariants } from './ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link to="https://eckertalex.dev" target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}
              >
                <PenToolIcon className="h-5 w-5" />
                <span className="sr-only">Blog</span>
              </div>
            </Link>
            <Link
              to="https://linkedin.com/in/eckertalex"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}
              >
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>
            <Link
              to="https://github.com/eckertalex"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}
              >
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <LanguageMenu />
            <ColorModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
