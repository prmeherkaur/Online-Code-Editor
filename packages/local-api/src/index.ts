import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
export const serve = (port: number, filename: String, dir: string, useProxy: boolean) => {
	const app = express();
	const packagePath = require.resolve('local-client/build/index.html');
	useProxy
		? app.use(
				createProxyMiddleware({
					target: 'http://localhost:3000',
					ws: true,
					logLevel: 'silent'
				})
			)
		: app.use(express.static(path.dirname(packagePath)));
	return new Promise<void>((resolve, reject) => {
		app.listen(port, resolve).on('error', reject);
	});
};
