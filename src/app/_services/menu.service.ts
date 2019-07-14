import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from '@model/menu-item';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
	
	private toggle: boolean =true;
	
    constructor(private http: HttpClient) { }

	 getToggle(): Observable<boolean> {
        return of(this.toggle);
    }
	
	setToggle() {
        this.toggle=!this.toggle;
		console.log(window.innerWidth);
    }
	

    getMenuList(): Observable<MenuItem[]> {
        return of([
            { id: 1, name: 'Felhasználók', icon: 'users', link: 'users' },
            { id: 2, name: 'Placeholder', icon: 'users', link: 'users' },
            { id: 3, name: 'Placeholder 2', icon: 'users', link: 'placeholder' }
        ]);

    }
}
