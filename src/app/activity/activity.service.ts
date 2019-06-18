import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IActivity } from './activity.model';

@Injectable()
export class ActivityService {
	constructor(protected http: HttpClient) {}

	getDestinationActivitiesById(destinationId: string): Observable<IActivity[]> {
		return this.http.get<IActivity[]>(`/api/activities?destinationId=${destinationId}`);
	}
}
