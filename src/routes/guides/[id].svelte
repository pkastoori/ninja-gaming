<script context="module">
	export async function load({ fetch, params }) {
		const id = params.id;
		const res = await fetch(`/guides/${id}.json`);
		const { guide } = await res.json();

		if (res.ok) {
			return {
				props: {
					guide
				}
			};
		}

		return {
			status: 301,
			redirect: '/guides'
		};
	}
</script>

<script>
	export let guide;
</script>

<style>
	.guide {
		margin-top: 40px;
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

<div class="guide">
	<h2>{guide.title}</h2>
	<p>{guide.body}</p>
</div>
<div class="links">
	<a href="/">Home</a>
	<a href="/guides">View Guides</a>
	<a href="/about">About</a>
</div>
