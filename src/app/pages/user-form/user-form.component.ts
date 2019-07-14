import { Component, OnInit } from '@angular/core';
import { User } from '@model/user';
import { UserService } from '@service/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

    public users: User[];
	private selectedId: number;
	private name: string;
	private email: string;
	private addr: string;
	private dob: Date;
	

    constructor(private userService: UserService,
				private router: Router
				){ }

    ngOnInit() {
        this.reload();
		
		if(this.selectedId!=-1 && this.selectedId){
			this.name = this.users[this.selectedId-1].name;
			this.email = this.users[this.selectedId-1].email;
			this.addr = this.users[this.selectedId-1].address;
			
			this.dob = new Date( this.users[this.selectedId-1].birthdate);
		}
    }

    reload() {
        this.userService.getUsers().subscribe(res => this.users = res);
		this.userService.getSelected().subscribe(res => this.selectedId = res);
    }
	
	submitBtnClick= function ()  {
		if(this.userService.getSelected().value==-1){
		this.userService.setUser(this.name, this.email,this.addr,this.dob);
		localStorage.setItem('users', JSON.stringify(this.users));
        this.router.navigateByUrl('/users');
		}
		else{
			this.userService.editUser(this.userService.getSelected().value-1,this.name, this.email,this.addr,this.dob);
			localStorage.setItem('users', JSON.stringify(this.users));
			this.router.navigateByUrl('/users');
		}
	};
}
