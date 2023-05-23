import { t } from '@lingui/macro'
import { AlertCircleIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { Button } from './ui/button'

export function ErrorElement({ error }: { error: unknown }) {
  return (
    <Alert variant="destructive">
      <AlertTitle className="flex gap-2">
        <AlertCircleIcon className="h-4 w-4" />
        {t`Error`}
      </AlertTitle>
      <AlertDescription>
        {t`Sorry, an unexpected error has occurred:`}
        {/* @ts-ignore */}
        <pre className="p-6">{error.statusText || error.message}</pre>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => window.location.reload()}
        >
          {t`Retry`}
        </Button>
      </AlertDescription>
    </Alert>
  )
}
