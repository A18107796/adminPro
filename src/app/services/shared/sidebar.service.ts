import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard', },
        { titulo: 'PogressBard', url: '/progress', },
        { titulo: 'Graficas', url: '/graficas1', },
        { titulo: 'Promesas', url: '/promesas', },
        { titulo: 'Rxjs Observables', url: '/rxjs', },
      ]
    }
  ];

  constructor() { 
    console.log('SIDEBAR SERVICE');
    
  }
}
