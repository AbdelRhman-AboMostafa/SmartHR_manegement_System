import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import QueryClientProvider  from './App/Providers/QueryClientProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider>
    <App />

    </QueryClientProvider>
  </StrictMode>,
)
