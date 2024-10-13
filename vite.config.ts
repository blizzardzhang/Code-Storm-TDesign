import {ConfigEnv, loadEnv, UserConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/

const CWD = process.cwd();

export default ({ mode }: ConfigEnv):UserConfig => {

  const { VITE_BASE_URL, VITE_API_URL_PREFIX } = loadEnv(mode, CWD);
  console.log(mode,VITE_BASE_URL, VITE_API_URL_PREFIX);
  return {
    base: VITE_BASE_URL,
    plugins: [
        vue(),
        vueJsx(),
        svgLoader()
    ],
    server: {
      port: 3001,
      host: '0.0.0.0',
      // proxy: {
      //   [VITE_API_URL_PREFIX]: {
      //     target: 'http://localhost:8080',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(new RegExp(`^${VITE_API_URL_PREFIX}`), '')
      //   }
      // }
      proxy: {
        [VITE_API_URL_PREFIX]: 'http://127.0.0.1:3000/',
      },
    }
  }


}
