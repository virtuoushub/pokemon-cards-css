<script>
	import CardList from './cards.svelte';
	import Card from './lib/components/card.svelte';

	let basics;
	let holos;
	let galaxies;
	let radiant;
	let basicGallery;
	let vee;
	let veeUltra;
	let veeAlt;
	let veeMax;
	let veeMaxAlt;
	let veeStar;
	let trainerHolo;
	let rainbow;
	let gold;
	let veeGallery;

	const getCards = async () => {
		let cardFetch = await fetch('/data.json');
		let cards = await cardFetch.json();
		// window.cards = cards;

		basics = cards.slice(0, 6);
		holos = cards.slice(6, 12);
		galaxies = cards.slice(12, 15);
		radiant = cards.slice(15, 18);
		basicGallery = cards.slice(60, 63);
		vee = cards.slice(18, 21);
		veeUltra = cards.slice(21, 24);
		veeAlt = [...cards.slice(27, 30), ...cards.slice(33, 36)];
		veeMax = cards.slice(24, 27);
		veeMaxAlt = [cards[36], cards[31], cards[37]];
		veeStar = cards.slice(39, 42);
		trainerHolo = cards.slice(42, 48);
		rainbow = cards.slice(48, 51);
		gold = cards.slice(51, 60);
		veeGallery = cards.slice(63, 69);

		return cards;
	};
</script>

<main>
	<header>
		<h1>Pokemon Cards <sup>V2</sup></h1>

		<p class="author">
			By <a href="https://twitter.com/simeydotme"
				><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
					><title>Twitter</title><path
						d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
					/></svg
				> @simeydotme</a
			>
			|
			<em
				><a href="https://github.com/simeydotme/pokemon-cards-css"
					><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
						><title>GitHub</title><path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						/></svg
					> Simon Goellner</a
				></em
			>
		</p>

		<section class="intro">
			<p>
				A collection of <mark>advanced CSS</mark> styles to create
				<mark>realistic-looking effects</mark> for the faces of Pokemon cards.
			</p>
			<br />
			<p>
				The cards use <mark>3d transforms</mark>, <mark>filters</mark>, <mark>blend modes</mark>,
				<mark>css gradients</mark> and interactions to provide a unique experience when taking a closer
				look!
			</p>
		</section>

		<div class="showcase">
			{#await getCards()}
				loading...
			{:then cards}
				<Card
					name={cards[23].name}
					img={cards[23].images.large}
					number={cards[23].number}
					supertype={cards[23].supertype}
					subtypes={cards[23].subtypes}
					rarity={cards[23].rarity}
					showcase={true}
				/>
			{/await}
		</div>

		<section class="info">
			<h2><em>(Go ahead, try clicking a card, or press 'c' to take a closer look!)</em></h2>

			<hr />

			<p class="small">
				Under the hood, I'm using SvelteJS to handle interactivity and state; assigning values to
				css custom properties (variables) which in-turn drive the effects and 3d transforms. <a
					href="https://github.com/simeydotme/pokemon-cards-css">Source code is in the repository</a
				>, but it's subject to change as I morph it in to an actual App.
			</p>
		</section>
	</header>

	<h2>Common &amp; Uncommon</h2>
	<p>
		All cards get a 3d rotation with CSS based on the cursor position.<br /> The default basic
		non-holo cards simply apply a <mark>flare/glare effect</mark> to the card which follows the mouse.
	</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each basics as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>Holofoil Rare</h2>
	<p>
		Holo cards have an additional <mark>vertical beam holo effect</mark>. <br /> This uses a
		combintation of <mark>repeating gradients and filters</mark>, with <mark>clip-path</mark> to mask
		the holo areas for each stage. To get the holo effect to change while rotating the card I set the
		background-position of each gradient layer based on cursor.
	</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each holos as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>Galaxy/Cosmos Holofoil</h2>
	<p>
		Similar to the Holofoil, but this uses a special image <mark>background of a galaxy effect</mark
		>
		with a <mark>gradient rainbow set to color-dodge &amp; color-burn</mark> on top.
	</p>
	<h3>An instant classic for any PTCG fan!</h3>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each galaxies as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>Radiant Holofoil</h2>
	<p>
		The newest holofoil added to the series! <br /> The radiant effect proved
		<mark>very difficult to emulate</mark>
		without crazy math, so I settled with a <mark>criss-cross linear gradient pattern</mark> that moves
		across the card.
	</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each radiant as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>Trainer Gallery Holofoil</h2>
	<p>
		The effect for Trainer Gallery holofoils gives it a <mark
			>kind of metallic effect with iridescent shine</mark
		>. This is achieved with a <mark>large color dodge linear gradient</mark>, and a
		<mark>hard-light radial gradient</mark> on top, at the cursor position, to give the shimmer.
	</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each basicGallery as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>Pokemon V</h2>
	<p>
		V cards have a <mark>diagonal holographic effect</mark> which that appears to travel in opposite
		directions when you tilt the card into the light.
	</p>
	<p>
		This effect is achieved with <mark>multiple background gradients</mark> and I change the background
		positions based on the cursor x/y. The gradients are set to color-dodge, and there's a subtle svg
		noise effect.
	</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each vee as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>Pokemon V <sup>(Full Art)</sup></h2>
	<p>
		Similar to the Pokemon V effect, Full-Art cards <mark>use diagonal gradients</mark>, but they
		have <mark>additional texture</mark> when looked at from certain angles. This is achieved with
		an <mark>additional background image with an exclusion filter</mark>. The effect is also more
		vibrant which adds to the metallic look.
	</p>
	<p>
		The texture effect is not identical to reality as the real cards each have a unique pattern that
		follows the art.
	</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each veeUltra as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>Pokemon V <sup>(Alternate Art)</sup></h2>
	<p>
		Alternate Art Pokemon V cards have <mark
			>practically the same holo effect as the Ultra Rare (Full Art) cards</mark
		>. The only difference is the pattern texture.
	</p>
	<p>The effect looks somewhat different though due to the type of artwork.</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each veeAlt as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>VMax</h2>
	<p>
		The gradient effect of Pokemon VMax is more subtle, using a <mark
			>larger background gradient</mark
		>
		which moves more slowly. But the <mark>texture effect is more pronounced</mark>.
	</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each veeMax as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>VMax <sup>(Alternate/Rainbow)</sup></h2>
	<p>
		There's some VMax cards which show a <mark>full, or alternate artwork</mark>. These are
		<mark>classed as "raindbow rare"</mark>
		and have a similar effect to the rainbow cards. It's a really
		<mark>vibrant and glittery overlay</mark>.
	</p>
	<p>
		This is achieved with a <mark>background image of glitter/sparkles</mark>, and a texture pattern
		background image, sandwiching the usual linear gradients.
	</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each veeMaxAlt as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>VStar</h2>
	<p>
		Again back to the <mark>diagonal gradients overlaying a texture</mark>, VStar are quite
		<mark>similar to teh Ultra Rare</mark>
		(Full/Alt) cards. The cards are generally <mark>brighter with a pastel hue</mark>, though, which
		makes the gradient and texture more subtle.
	</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each veeStar as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>Trainer Holo <sup>(Full Art)</sup></h2>
	<p>
		Again back to the <mark>diagonal gradients overlaying a texture</mark>, VStar are quite
		<mark>similar to teh Ultra Rare</mark>
		(Full/Alt) cards. The cards are generally <mark>brighter with a pastel hue</mark>, though, which
		makes the gradient and texture more subtle.
	</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each trainerHolo as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>Rainbow Rare <sup>(VMax, VStar)</sup></h2>
	<p>
		The Rainbow Rare is a <mark>super glittery effect on top of pastel gradients</mark>. This is
		achieved with a background image of glitter/sparkles and a
		<mark>color-burn/hard-light background blend</mark> for some pastel gradients.
	</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each rainbow as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>Secret Rare <sup>(Gold)</sup></h2>
	<p>
		GOLD! The effect from Rainbow is borrowed, except the color of the gradients, and the filter
		effects (hue) are different. There's also a different background image with a more subtle
		overlay. This gives a sparkly gold look which is very similar to reality!
	</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each gold as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>

	<h2>Trainer Gallery <sup>(V / VMax)</sup></h2>
	<p>
		The V and VMax cards in the Trainer Gallery are generally quite similar to the normal V and VMax
		cards, so here I've just tweaked the values a little and added a different background texture.
	</p>

	<CardList>
		{#await getCards()}
			loading...
		{:then cards}
			{#each veeGallery as card, id}
				<Card
					name={card.name}
					img={card.images.large}
					number={card.number}
					supertype={card.supertype}
					subtypes={card.subtypes}
					rarity={card.rarity}
				/>
			{/each}
		{/await}
	</CardList>
</main>

<style>
	main {
		color: white;
		padding: 50px;
		max-width: 1200px;
		margin: auto;
	}

	header {
		margin-bottom: 4rem;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 30px;
		max-width: 900px;
		margin: auto;
	}

	header h2 {
		margin-top: 0;
		font-weight: 100;
	}
	header svg {
		width: 1em;
		fill: currentColor;
		position: relative;
		top: 2px;
		margin: 0 5px;
		display: inline-block;
	}

	@media screen and (min-width: 600px) {
		header {
			grid-template-columns: 50% 1fr;
		}
		.showcase {
			grid-column: 2;
			grid-row: 1/5;
		}
		.intro,
		.info,
		.author {
			grid-column: 1;
		}
	}

	@media screen and (min-width: 900px) {
		header {
			grid-template-columns: 60% 1fr;
		}
	}

	.showcase {
		z-index: 99;
		max-width: min(330px, 80vw);
		margin: auto;
	}

	h1 {
		margin-top: 0;
		margin-bottom: 0.25em;
	}

	p {
		margin: 0 0 0.25em;
		line-height: 1.5;
	}

	p.small {
		font-size: 0.875rem;
		opacity: 0.75;
	}

	h1,
	h2,
	h3 {
		font-family: 'Roboto Condensed';
	}

	h2 {
		margin-top: 4em;
		margin-bottom: 0.25em;
	}

	h2 + p,
	h2 + p + p {
		font-style: italic;
		margin-bottom: 1em;
	}

	hr {
		border: none;
		background: white;
		height: 1px;
		opacity: 0.25;
		margin: 1em -1em;
	}

	h1 sup {
		font-weight: 300;
		font-size: 0.5em;
	}

	h2 sup {
		font-weight: 300;
		font-size: 0.75em;
	}

	mark {
		background: #006065;
		color: white;
		font-style: italic;
		font-weight: bold;
		padding-inline: 0.25em;
		border-radius: 3px;
	}
</style>