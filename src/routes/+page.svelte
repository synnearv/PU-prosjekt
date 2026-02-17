<script lang="ts">
	import Card from '$lib/ContestCard.svelte';
	import CompactCard from '$lib/ContestCardCompact.svelte';
	import type { Competition } from '$lib/types';

	const testData: Competition[] = $state([
		{
			id: 1,
			name: 'Gravlund Hundeshow',
			image_url: '',
			address: 'testdata Gate 16',
			city: 'Stavanger',
			country: 'Norway',
			event_start: new Date('2026-01-01T14:30:00.000Z'),
			event_end: new Date('2026-01-02T11:00:00.000Z')
		},
		{
			id: 2,
			name: '29 June Meet - Trondheim',
			image_url: '',
			address: 'Gloshaugen',
			city: 'Trondheim',
			country: 'Norway',
			event_start: new Date('2026-03-14T13:30:00.000Z'),
			event_end: new Date('2026-03-14T11:00:00.000Z')
		},
		{
			id: 3,
			name: 'Gravlund Hundeshow',
			image_url: '',
			address: 'testdata Gate 16',
			city: 'Stavanger',
			country: 'Norway',
			event_start: new Date('2026-01-01T14:30:00.000Z'),
			event_end: new Date('2026-01-02T11:00:00.000Z')
		},
		{
			id: 4,
			name: '29 June Meet - Trondheim',
			image_url: '',
			address: 'Gloshaugen',
			city: 'Trondheim',
			country: 'Norway',
			event_start: new Date('2026-03-14T13:30:00.000Z'),
			event_end: new Date('2026-03-14T11:00:00.000Z')
		},
		{
			id: 5,
			name: 'Gravlund Hundeshow',
			image_url: '',
			address: 'testdata Gate 16',
			city: 'Stavanger',
			country: 'Norway',
			event_start: new Date('2026-01-01T14:30:00.000Z'),
			event_end: new Date('2026-01-02T11:00:00.000Z')
		},
		{
			id: 6,
			name: '29 June Meet - Trondheim',
			image_url: '',
			address: 'Gloshaugen',
			city: 'Trondheim',
			country: 'Norway',
			event_start: new Date('2026-03-14T13:30:00.000Z'),
			event_end: new Date('2026-03-14T11:00:00.000Z')
		},
		{
			id: 7,
			name: 'Gravlund Hundeshow',
			image_url: '',
			address: 'testdata Gate 16',
			city: 'Stockholm',
			country: 'Sweden',
			event_start: new Date('2026-01-01T14:30:00.000Z'),
			event_end: new Date('2026-01-02T11:00:00.000Z')
		},
		{
			id: 8,
			name: '29 June Meet - Trondheim',
			image_url: '',
			address: 'Gloshaugen',
			city: 'New York',
			country: 'NY USA',
			event_start: new Date('2026-03-14T13:30:00.000Z'),
			event_end: new Date('2026-03-14T11:00:00.000Z')
		},
		{
			id: 9,
			name: '29 June Meet - Trondheim',
			image_url: '',
			address: 'Gloshaugen',
			city: 'Trondheim',
			country: 'Norway',
			event_start: new Date('2026-03-14T13:30:00.000Z'),
			event_end: new Date('2026-03-14T11:00:00.000Z')
		},
		{
			id: 10,
			name: 'Gravlund Hundeshow',
			image_url: '',
			address: 'testdata Gate 16',
			city: 'Stavanger',
			country: 'Norway',
			event_start: new Date('2026-01-01T14:30:00.000Z'),
			event_end: new Date('2026-01-02T11:00:00.000Z')
		},
		{
			id: 11,
			name: '29 June Meet - Trondheim',
			image_url: '',
			address: 'Gloshaugen',
			city: 'Trondheim',
			country: 'Norway',
			event_start: new Date('2026-03-14T13:30:00.000Z'),
			event_end: new Date('2026-03-14T11:00:00.000Z')
		},
		{
			id: 12,
			name: 'Gravlund Hundeshow',
			image_url: '',
			address: 'testdata Gate 16',
			city: 'Stavanger',
			country: 'Norway',
			event_start: new Date('2026-01-01T14:30:00.000Z'),
			event_end: new Date('2026-01-02T11:00:00.000Z')
		},
		{
			id: 13,
			name: '29 June Meet - Trondheim',
			image_url: '',
			address: 'Gloshaugen',
			city: 'Trondheim',
			country: 'Norway',
			event_start: new Date('2026-03-14T13:30:00.000Z'),
			event_end: new Date('2026-03-14T11:00:00.000Z')
		},
		{
			id: 14,
			name: 'Gravlund Hundeshow',
			image_url: '',
			address: 'testdata Gate 16',
			city: 'Stavanger',
			country: 'Norway',
			event_start: new Date('2026-01-01T14:30:00.000Z'),
			event_end: new Date('2026-01-02T11:00:00.000Z')
		},
		{
			id: 15,
			name: '29 June Meet - Trondheim',
			image_url: '',
			address: 'Gloshaugen',
			city: 'Trondheim',
			country: 'Norway',
			event_start: new Date('2026-03-14T13:30:00.000Z'),
			event_end: new Date('2026-03-14T11:00:00.000Z')
		}
	]);
</script>

<div id="header"></div>

<div id="body">
	<div id="left">
		<h2>You're signed up to</h2>
		<div id="compactCards" class="events">
			{#each testData as compactCard (compactCard.id)}
				<CompactCard competition={compactCard} />
			{/each}
		</div>
	</div>

	<div id="right">
		<div id="right-header">
			<h2>Upcoming Events</h2>
			<img id="search" alt="search competitions" src="_assets/competitions/search.svg" />
			<img id="filter" alt="filter competitions" src="_assets/competitions/filter.svg" />
			<img id="sort" alt="sort competitions" src="_assets/competitions/sort.svg" />
		</div>

		<div id="cards" class="events">
			{#each testData as card (card.id)}
				<Card competition={card} />
			{/each}
		</div>
	</div>
</div>

<style>
	:global(:root) {
		--color-background: #f7f8fa;
		--color-surface: #ffff;
		--color-surface-alt: #f1f3f6;
		--color-text-primary: #1f2937;
		--color-text-secondary: #4b5563;
		--color-text-muted: #9ca3af;
		--color-border: #d1d5db;
		--color-border-focus: #2563eb;
		--color-primary: #e982b5;
		--color-primary-hover: #e04d8f;
		--color-primary-active: #d13576;
		--color-danger: #dc2626;
		--color-danger-surface: #fee2e2;
		--color-accent: #fecfe8;

		--header-height: min(15vh, 90px);
	}

	:global(html, body) {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		margin: 0;

		font-family: 'Inter', sans-serif;
		font-size: 19px;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	#header {
		height: var(--header-height);
		border-bottom: 1px solid var(--color-border);
	}

	#body {
		display: flex;
		width: 100%;
		height: calc(100vh - var(--header-height));
	}

	#left {
		display: flex;
		flex-direction: column;
		width: min(40%, 500px);

		background: var(--color-background);
	}

	#right {
		display: flex;
		flex-direction: column;
		width: max(60%, calc(100% - 500px));

		background: var(--color-surface);
	}

	#right-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 50px;

		margin-right: 50px;
	}

	#right-header img:first-of-type {
		margin-left: auto;
	}

	#right-header > img {
		width: 32px;
	}

	h2 {
		font-weight: 500;
		font-size: 28px;
		margin-left: 10px;
	}

	.events {
		display: grid;
		grid-auto-rows: min-content;
		align-items: start;
		flex-grow: 1;

		padding: 10px 10px 0 10px;
		gap: 1rem;

		background: var(--color-background);
		overflow-y: auto;
	}

	#cards {
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		margin: 0 50px 0 50px;
	}
</style>
