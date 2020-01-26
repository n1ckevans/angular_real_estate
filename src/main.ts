import 'zone.js/dist/zone';
import 'core-js/es7/reflect';
// import 'core-js/es/reflect';
import "core-js/proposals/reflect-metadata";


import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule( AppModule);