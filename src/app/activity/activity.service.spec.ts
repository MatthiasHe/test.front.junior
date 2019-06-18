import { TestBed, inject } from '@angular/core/testing';

import { BarceloneActivities } from './activity.mock.spec';
import { ActivityService } from './activity.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ActivityService', () => {
	let service: ActivityService;
	let httpCtrl: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				ActivityService,
			]
		});
		httpCtrl = TestBed.get(HttpTestingController);
	});

	beforeEach(inject([ActivityService], (_service: ActivityService) => {
		service = _service;
	}));

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('getDestinationActivitiesById', () => {

		it('should return the result unscathed', () => {
			const id = '4';

			service.getDestinationActivitiesById(id).subscribe(d => {
				expect(d).toBe(BarceloneActivities);
			});

			const req = httpCtrl.expectOne(`/api/destination/${id}`);
			req.flush(BarceloneActivities);
		});
	});
});
