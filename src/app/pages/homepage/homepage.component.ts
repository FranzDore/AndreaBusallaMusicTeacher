import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../../shared/components/about/about.component';
import { BaseComponent } from '../../shared/components/base-component/base-component.component';
import { ContactsComponent } from '../../shared/components/contacts/contacts.component';
import { CourseComponent } from '../../shared/components/course/course.component';
import { HomepageSharedComponent } from '../../shared/components/homepage-shared/homepage-shared.component';
import { SidenavService } from '../../shared/services/sidenav.service';

@Component({
	selector: 'app-homepage',
	standalone: true,
	imports: [HomepageSharedComponent, AboutComponent, NgClass, ContactsComponent, CourseComponent],
	templateUrl: './homepage.component.html',
	styleUrl: './homepage.component.css'
})
export class HomepageComponent extends BaseComponent implements OnInit {
	public currentSection: string = 'home';
	public opened: boolean = false;

	constructor(private sidenavService: SidenavService) {
		super();
	}

	ngOnInit(): void {
		this.sidenavService.opened.subscribe(opened => (this.opened = opened));
	}
}
