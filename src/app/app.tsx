import { useEffect } from 'react'
import { i18n } from '@lingui/core'
import { t } from '@lingui/macro'
import { I18nProvider } from '@lingui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from 'react-router-dom'

import { defaultLocale, loadCatalog } from '@/lib/i18n'
import { ColorModeProvider } from '@/context/color-mode-provider'
import { ErrorElement } from '@/components/error-element'
import { Header } from '@/components/header'
import { TailwindIndicator } from '@/components/tailwind-indicator'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function Root() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <TailwindIndicator />
    </div>
  )
}

function RootError() {
  const error = useRouteError()

  return (
    <div className="container grid min-h-screen items-center">
      <ErrorElement error={error} />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RootError />,
    children: [
      {
        index: true,
        element: <h1>{t`Hello World`}</h1>,
      },
    ],
  },
])

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

export function App() {
  useEffect(() => {
    loadCatalog(defaultLocale)
  }, [])

  return (
    <I18nProvider i18n={i18n}>
      <ColorModeProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
      </ColorModeProvider>
    </I18nProvider>
  )
}
