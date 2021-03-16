import { Command } from 'commander';
import { serve } from 'local-api';
import path from 'path';

export const serveCommand = new Command()
	.command('serve [filename]')
	.description('Open a file for editing')
	.option('-p, --port <number>', 'port to run server on', '4005')
	.action(async(filename = 'notebook.js', options) => {
		try{
		const dir = path.join(process.cwd(), path.dirname(filename));
		await serve(parseInt(options.port), path.basename(filename), dir);
		console.log(`Opened ${filename}.Navigate to http://localhost:${parseInt(options.port)} to edit the file`)
	} catch(err){
			if(err.code==='EADDRINUSE'){
				console.log('Port is in use. Try running on a different port')
			}
			else console.log("Sorry there's a problem \n",err.message);
			process.exit(1);
		}
	});