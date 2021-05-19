import { Component } from '@angular/core';
import { LifeCycles, registerApplication, start } from 'single-spa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}

registerApplication({
  name: '@kruger/app-base',
  app: (): Promise<LifeCycles> =>
    (window as any).System.import('@kruger/app-base'),
  activeWhen: ['/'],
});

// registerApplication({
//   name: '@kruger/login',
//   app: (): Promise<LifeCycles> =>
//     (window as any).System.import('@kruger/login'),
//   activeWhen: ['/login'],
// });

// registerApplication({
//   name: '@kruger/app1',
//   app: (): Promise<LifeCycles> => (window as any).System.import('@kruger/app1'),
//   activeWhen: ['/app1'],
// });

// registerApplication({
//   name: '@kruger/app2',
//   app: (): Promise<LifeCycles> => (window as any).System.import('@kruger/app2'),
//   activeWhen: ['/app2'],
// });

start({
  urlRerouteOnly: true,
});
