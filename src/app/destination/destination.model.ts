import { IActivity } from '../activity/activity.model';

export interface IDestination {
	id: string;
	name: string;
	description: string;
	country: string;
	priceRange: string;
	rating: number;
	tags: string[];
	img: string;
	bg: string;
	thumbnail: string;
	gallery: string[];
	activities?: IActivity[];
}
