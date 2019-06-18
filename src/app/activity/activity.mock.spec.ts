import { IActivity } from './activity.model';

export const BarceloneActivities = [
	{
		id: '10',
		destinationId: '4',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ligula commodo, vehicula felis eu, ' +
			'malesuada enim. Pellentesque vitae orci nec purus laoreet pulvinar nec in ex. Quisque non molestie orci, quis laoreet ' +
			'nibh. Cras posuere porttitor augue eget euismod. Aenean facilisis lacus a neque facilisis, at pulvinar enim gravida. ' +
			'Aenean in porttitor odio. Suspendisse non eleifend enim. Duis consequat nulla non turpis consectetur, ac pretium orci commodo.' +
			' Nullam egestas ac turpis eu elementum. Aenean laoreet, diam in sagittis scelerisque, tortor metus fringilla nisl, nec egestas ' +
			'massa odio quis magna.',
		name: 'Balade sur les quais',
		thumbnail: '//cdn.lucca.fr/tourism/balade/thumbnail.jpg'
	},
	{
		id: '11',
		destinationId: '4',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ligula commodo, vehicula felis eu, malesuada' +
			' enim. Pellentesque vitae orci nec purus laoreet pulvinar nec in ex. Quisque non molestie orci, quis laoreet nibh. Cras posuere ' +
			'porttitor augue eget euismod. Aenean facilisis lacus a neque facilisis, at pulvinar enim gravida. Aenean in porttitor odio. ' +
			'Suspendisse non eleifend enim. Duis consequat nulla non turpis consectetur, ac pretium orci commodo. Nullam egestas ac turpis ' +
			'eu elementum. Aenean laoreet, diam in sagittis scelerisque, tortor metus fringilla nisl, nec egestas massa odio quis magna.',
		name: 'Café en terrasse',
		thumbnail: '//cdn.lucca.fr/tourism/cafe/thumbnail.jpg'
	}
] as IActivity[];
