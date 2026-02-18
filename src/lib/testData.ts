import type { Competition } from '$lib/types';

const baseUrl = '/competition/';

export const competitions: Competition[] = [
	{
		id: 1,
		name: 'Oslo Agility Masters',
		image_url: baseUrl + '1/thumbnail.jpg',
		address: 'Holmenkollveien 140',
		city: 'Oslo',
		country: 'Norway',
		event_start: new Date('2026-05-10T09:00:00.000Z'),
		event_end: new Date('2026-05-10T17:00:00.000Z')
	},
	{
		id: 2,
		name: 'Trondheim Puppy Cup',
		image_url: baseUrl + '2/thumbnail.jpg',
		address: 'Gløshaugen Campus',
		city: 'Trondheim',
		country: 'Norway',
		event_start: new Date('2026-06-14T10:30:00.000Z'),
		event_end: new Date('2026-06-14T15:00:00.000Z')
	},
	{
		id: 3,
		name: 'Stockholm Kennel Club Open',
		image_url: baseUrl + '3/thumbnail.jpg',
		address: 'Gärdet Field',
		city: 'Stockholm',
		country: 'Sweden',
		event_start: new Date('2026-07-01T08:00:00.000Z'),
		event_end: new Date('2026-07-03T18:00:00.000Z')
	},
	{
		id: 4,
		name: 'Bergen Rain Run',
		image_url: baseUrl + '4/thumbnail.jpg',
		address: 'Fløyen Plateau',
		city: 'Bergen',
		country: 'Norway',
		event_start: new Date('2026-08-12T11:00:00.000Z'),
		event_end: new Date('2026-08-12T14:30:00.000Z')
	},
	{
		id: 5,
		name: 'Copenhagen Greyhound Sprint',
		image_url: baseUrl + '5/thumbnail.jpg',
		address: 'Fælledparken',
		city: 'Copenhagen',
		country: 'Denmark',
		event_start: new Date('2026-09-05T13:00:00.000Z'),
		event_end: new Date('2026-09-05T19:00:00.000Z')
	},
	{
		id: 6,
		name: 'Stavanger Beach Frisbee',
		image_url: baseUrl + '6/thumbnail.jpg',
		address: 'Sola Beach',
		city: 'Stavanger',
		country: 'Norway',
		event_start: new Date('2026-05-20T10:00:00.000Z'),
		event_end: new Date('2026-05-21T16:00:00.000Z')
	},
	{
		id: 7,
		name: 'Gothenburg Obedience Trials',
		image_url: baseUrl + '7/thumbnail.jpg',
		address: 'Slottsskogen Park',
		city: 'Gothenburg',
		country: 'Sweden',
		event_start: new Date('2026-10-15T09:00:00.000Z'),
		event_end: new Date('2026-10-15T12:00:00.000Z')
	}
];
