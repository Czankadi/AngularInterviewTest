import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@model/menu-item';
import { MenuService } from '@service/menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    public menuList: MenuItem[];

    constructor(private menuService: MenuService) { }

    ngOnInit() {
        this.menuService.getMenuList().subscribe(res => this.menuList = res);
    }

}
