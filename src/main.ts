import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { upgradeAdapter } from './app/upgrade_adapter';
import "angular2-materialize";

if (environment.production) {
  enableProdMode();
}

upgradeAdapter.bootstrap(document.body, ['contacts-app']);
