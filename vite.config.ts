import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { loadEnv } from 'vite';
import path from 'path';
import postCssPxToRem from 'postcss-pxtorem';
// 路径
const pathSrc = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
		}),
		AutoImport({
			// Auto import functions from Vue, e.g. ref, reactive, toRef...
			// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
			imports: ['vue'],

			// Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
			// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
			resolvers: [
				ElementPlusResolver(),

				// Auto import icon components
				// 自动导入图标组件
				IconsResolver({
					prefix: 'Icon',
				}),
			],

			dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
		}),

		// 自动导入 Element Plus 组件
		Components({
			resolvers: [
				// Auto register icon components
				// 自动注册图标组件
				IconsResolver({
					prefix: 'icon', // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
					enabledCollections: ['ep'],
				}),
				// Auto register Element Plus components

				ElementPlusResolver(),
			],

			dts: path.resolve(pathSrc, 'components.d.ts'),
		}),
		// 图标
		Icons({
			autoInstall: true,
		}),
	],
	resolve: {
		// 配置路径别名
		alias: {
			'@': pathSrc,
		},
	},
	css: {
		// css预处理器
		/*preprocessorOptions: {
			scss: {
				additionalData: '@import "@/assets/styles/global.scss";'
			}
		}*/
		preprocessorOptions: {
			less: {
				charset: false,
				additionalData: '@import "./src/assets/style/global.less";',
			},
		},
		// 此代码为适配移动端px2rem
		postcss: {
			plugins: [
				postCssPxToRem({
					rootValue: 37.5, // 1rem的大小（控制1rem的大小  点位：px）
					propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
				}),
			],
		},
	},
	build: {
		chunkSizeWarningLimit: 1500, // 分块打包，分解块，将大块分解成更小的块
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString();
					}
				},
			},
		},
	},
});
