<script>
	import { goto } from '$app/navigation';

	let title;
	let description;
	const addGuide = async () => {
		await fetch('/guides/create.json', {
			method: 'POST',
			body: JSON.stringify({
				title,
				description
			})
		});
		goto('/guides');
	};
</script>

<style>
	.form {
		max-width: 500px;
		margin: 0 auto;
	}

	label {
		margin: 10px;
		font-size: 20px;
	}

	input {
		display: block;
		margin: 10px;
		border-style: none;
		width: 300px;
	}

	input:focus {
		outline: none;
	}

	button {
		margin: 10px;
		background-color: black;
		padding: 8px;
		font-size: 15px;
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

<div class="form">
	<label for="title">Title</label>
	<input bind:value={title} type="text" name="title" id="title" />

	<label for="description">Body</label>
	<input bind:value={description} type="text" name="description" id="description" />

	<button on:click={addGuide}>Add Guide</button>
</div>
<div class="links">
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/guides">View Guides</a>
</div>
