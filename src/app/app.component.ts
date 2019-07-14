import { Component, OnInit } from '@angular/core';
import { MenuService } from '@service/menu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'AngularInterviewTest';
	private toggle: boolean ;
	interval;
  constructor(private menuService: MenuService) { }

    ngOnInit() {
		this.toggle=true;
		this.reload();
		this.startTimer()
    }
	
	reload() {
	this.menuService.getToggle().subscribe(res => this.toggle = res);
	}
	
	startTimer() {
    this.interval = setInterval(() => {
		if (this.toggle==true && window.innerWidth<800){			
			this.menuService.setToggle();			
		}
    this.menuService.getToggle().subscribe(res => this.toggle = res);
	
    },100)
  }
}
