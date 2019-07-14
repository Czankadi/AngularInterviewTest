import { Component, OnInit } from '@angular/core';
import { User } from '@model/user';
import { UserService } from '@service/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    public users: User[];
	public selectedUser: any;
	private selectedId: number;
	
    constructor(private userService: UserService,
				private router: Router
				){ }

    ngOnInit() {
		
		
		
        this.reload();	
		
		
    }

    reload() {
        
		if (localStorage.getItem('users')){
			console.log("volt");
		this.userService.setUsers(JSON.parse(localStorage.getItem('users')));
		}
		this.userService.getUsers().subscribe(res => this.users = res);
    }

	newBtnClick= function ()  {
			this.userService.setSelected(-1);
        this.router.navigateByUrl('/users/:id');
	};
	
	editBtnClick= function ()  {
		 if (this.selectedId != -1 && this.selectedId) {
		this.userService.setSelected(this.selectedId);
        this.router.navigateByUrl('/users/:id');
		 }
	};
	
	delBtnClick= function ()  {
        console.log(this.selectedId);
		 if (this.selectedId != -1 && this.selectedId) {
        this.users.splice(this.selectedId-1, 1);
		localStorage.setItem('users', JSON.stringify(this.users));
		 }
	};
	
	onRowSelect(event) {
		console.log( event);
		this.selectedId=event.data;
	};
	
	onRowUnselect(event: any, template?: any) {	
		this.selectedId=-1;
	};
}
