import { Component, Input } from '@angular/core';
import { IActivity } from './activity.model';

@Component({
	selector: 'app-activity',
	templateUrl: './activity.component.html',
	styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
	@Input() activities: IActivity[];

	constructor() { }
}
