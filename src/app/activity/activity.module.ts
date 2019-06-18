import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../api';
import { ActivityService } from './activity.service';
import { ActivityComponent } from './activity.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		ApiModule,
	],
	providers: [
		ActivityService,
	],
	declarations: [
		ActivityComponent,
		ActivityCardComponent
	],
	exports: [
		ActivityComponent
	]
})
export class ActivityModule {}
