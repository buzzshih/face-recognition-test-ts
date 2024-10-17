import { defineConfig  , loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const cherryPickedKeys = ['REACT_APP_ENV', 'REACT_APP_API_URL'];
  const processEnv: Record<string, string> = {};
  cherryPickedKeys.forEach((key) => (processEnv[key] = env[key]!));

  return {
    plugins: [react()],
    define: {
      'process.env': processEnv,
    },
  };
});
