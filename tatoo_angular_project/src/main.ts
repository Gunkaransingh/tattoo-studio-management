import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export function getBaseurl(){
  return 'http://localhost:5000'
}

const provider=[
  { provide: 'baseurl', useFactory: getBaseurl, deps: [] },
]

platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));
