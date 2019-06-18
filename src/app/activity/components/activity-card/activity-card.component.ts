import {Component, Input, OnInit} from '@angular/core';
import { IActivity } from '../../activity.model';

@Component({
	selector: 'app-activity-card',
	templateUrl: './activity-card.component.html',
	styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent implements OnInit {
	@Input() activity: IActivity;

	constructor() { }

	ngOnInit() {
	}

}
