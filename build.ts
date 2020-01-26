import 'zone.js/dist/zone-node';
// import 'core-js/es7/reflect';
 import 'core-js/es/reflect';
 import "core-js/proposals/reflect-metadata";

import { renderModule} from '@angular/platform-server';
import { AppServerModule} from './src/app/app-server.module';
import * as fs from 'fs';

renderModule(AppServerModule, {
  document: fs.readFileSync('src/index.html').toString()
}).then(result => {
  fs.writeFileSync('dist/index.html', result);
})