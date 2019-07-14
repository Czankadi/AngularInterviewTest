import { Component, OnInit } from '@angular/core';
import { MenuService } from '@service/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
private toggle: boolean ;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

	toggleClick= function ()  {	
		this.menuService.setToggle();	
	}
	
	
}
