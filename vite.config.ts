import reactRefresh from '@vitejs/plugin-react-refresh'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [reactRefresh()],
  build: {
    // sourcemap: true,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1500
  }
}

export default config
