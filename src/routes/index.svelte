<style>
	span {
		color: #F1CD69;
	}

	.head {
		font-weight: 700px;
		font-size: 3rem;
	}

	.text {
		font-size: 1.5rem;
		font-weight: 400px;
	}

	.solve-button {
		color: black;
		font-size: 1rem;
	}

	.w3-animate-opacity {
		animation:opac 2s;
	}

	.row {
		margin-top:5rem;
	}
</style>

<svelte:head>
	<title>ULTRAG</title>
</svelte:head>

<div class="row w3-animate-opacity">
	<div class="my-5 col-md-6">
		<p class="head font-weight-bold">Welcome to <span>ULTRAG</span></p>
    	<p class="text">ULTRAG is an online automated judge for coding
      problems hosted by Computing Laboratory,
      Telkom University.</p>
    	<p class="text">Improve your coding problem-solving skills here!</p>
    	<a href="contest" class="btn btn-outline-warning solve-button">Solve a problem</a>
	</div>

	<div class="col-md-6 my-5">
		<img src="manwithlaptop.png" alt="Man With Laptop">
	</div>
</div>