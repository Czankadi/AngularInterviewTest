import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@model/user';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userList: User[] = [{ id: 1, name: 'Pisti', email: 'semmi@semmi.hu', address: 'Teszt cím', birthdate: new Date() }];
	private selected: number;
    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return of(this.userList);
    }
	
	setUser(n: string, e: string, a: string, b: Date ) {
        this.userList.push({ id: this.userList.length+1, name: n, email: e, address: a, birthdate: b })
    }
	
	setUsers(u: User[]){
			this.userList=u;
	}
	setSelected(i: number){
		this.selected=i;
	}
	
	getSelected(): Observable<number>{
		return of (this.selected);
	}
	editUser(i:number, n: string, e: string, a: string, b: Date ){
		this.userList[i].name=n;
		this.userList[i].address=a;
		this.userList[i].email=e;
		this.userList[i].birthdate=b;
	}
}
