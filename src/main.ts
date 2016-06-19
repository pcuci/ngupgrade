import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { upgradeAdapter } from './upgrade-adapter';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);
