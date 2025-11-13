import { useState, useEffect } from 'react'

function Test() {
  const [backendStatus, setBackendStatus] = useState('checking...')
  const [backendUrl, setBackendUrl] = useState('')
  const [databaseStatus, setDatabaseStatus] = useState(null)

  useEffect(() => {
    checkBackendConnection()
  }, [])

  const checkBackendConnection = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      setBackendUrl(baseUrl)

      const response = await fetch(`${baseUrl}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })

      if (response.ok) {
        const data = await response.json()
        setBackendStatus(`Connected - ${data.message || 'OK'}`)
        await checkDatabaseConnection(baseUrl)
      } else {
        setBackendStatus(`Failed - ${response.status} ${response.statusText}`)
        setDatabaseStatus({ error: 'Backend not accessible' })
      }
    } catch (error) {
      setBackendStatus(`Error - ${error.message}`)
      setDatabaseStatus({ error: 'Backend not accessible' })
    }
  }

  const checkDatabaseConnection = async (baseUrl) => {
    try {
      const response = await fetch(`${baseUrl}/test`, { headers: { 'Content-Type': 'application/json' } })
      if (response.ok) {
        const dbData = await response.json()
        setDatabaseStatus(dbData)
      } else {
        setDatabaseStatus({ error: `Failed to check database - ${response.status}` })
      }
    } catch (error) {
      setDatabaseStatus({ error: `Database check failed - ${error.message}` })
    }
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-8">
          <h1 className="font-heading text-3xl tracking-tight">Backend & Database Test</h1>
          <p className="mt-2 text-sm text-zinc-600">Quick connectivity diagnostics for the API and database.</p>
        </div>

        <div className="grid gap-6">
          <div className="rounded-md border border-zinc-200 p-5">
            <h3 className="text-sm font-medium text-zinc-700">Backend URL</h3>
            <p className="mt-1 text-sm text-zinc-600 break-all">{backendUrl || 'Detecting...'}</p>
          </div>

          <div className="rounded-md border border-zinc-200 p-5">
            <h3 className="text-sm font-medium text-zinc-700">Backend Status</h3>
            <p className="mt-1 text-sm font-mono">{backendStatus}</p>
          </div>

          <div className="rounded-md border border-zinc-200 p-5">
            <h3 className="text-sm font-medium text-zinc-700">Database Status</h3>
            <div className="mt-1 text-sm">
              {databaseStatus ? (
                databaseStatus.error ? (
                  <p className="text-red-600 font-mono">{databaseStatus.error}</p>
                ) : (
                  <div className="space-y-1">
                    <p><span className="font-medium">Backend:</span> {databaseStatus.backend}</p>
                    <p><span className="font-medium">Database:</span> {databaseStatus.database}</p>
                    <p><span className="font-medium">DB URL:</span> {databaseStatus.database_url}</p>
                    <p><span className="font-medium">DB Name:</span> {databaseStatus.database_name}</p>
                    <p><span className="font-medium">Connection:</span> {databaseStatus.connection_status}</p>
                    {databaseStatus.collections && databaseStatus.collections.length > 0 && (
                      <p><span className="font-medium">Collections:</span> {databaseStatus.collections.join(', ')}</p>
                    )}
                  </div>
                )
              ) : (
                <p className="text-zinc-500 font-mono">Checking database...</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={checkBackendConnection} className="inline-flex items-center h-10 px-4 rounded-md bg-accent text-white hover:opacity-90 transition-opacity">
              Test Again
            </button>
            <a href="/" className="inline-flex items-center h-10 px-4 rounded-md border border-zinc-300 hover:bg-zinc-50 transition-colors">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
