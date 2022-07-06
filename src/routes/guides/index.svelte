<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/guides.json');
		const { guides } = await res.json();

		if (res.ok) {
			return {
				props: {
					guides
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not fetch the guides')
		};
	}
</script>

<script>
	export let guides;
</script>

<style>
	.guides {
		margin-top: 20px;
	}

	.guides ul {
		list-style-type: none;
		padding: 0;
	}

	.guides a {
		display: inline-block;
		margin-top: 10px;
		padding: 10px;
		border: 1px dotter rgba(255, 255, 255, 0.2);
	}

	.links {
		text-align: center;
		display: block;
		margin: 20px auto;
	}
	.links a {
		margin: 10px;
	}
</style>

<div class="guides">
	{#each guides as guide}
		<ul>
			<li>
				<a href="/guides/{guide.id}">{guide.title}</a>
			</li>
		</ul>
	{/each}
	<div class="links">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/guides/create">Add Guide</a>
	</div>
</div>
