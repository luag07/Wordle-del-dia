import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Wordle-del-dia/', // 👈 reemplazá por tu nombre de repositorio exacto si es distinto
  plugins: [react()],
})
