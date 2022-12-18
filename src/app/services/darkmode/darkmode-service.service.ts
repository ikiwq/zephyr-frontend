import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeServiceService {

  darkMode : BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(true);

  constructor() { }

  toggle() : void{
    document.getElementById('mainBody')?.classList.toggle('dark');
    document.getElementById('mainBody')?.classList.toggle('light');

    this.darkMode.next(!this.darkMode.value);
  }

}
