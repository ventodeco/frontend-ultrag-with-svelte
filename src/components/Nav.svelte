<script>
    export let segment;
</script>
<style>
    nav {
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: #F1CD69;
		display: block;
		bottom: -1px;
	}

	a {
		color: black;
	}

	img {
		margin: 10px 20px 0 20px; 
	}
</style>
<nav class="navbar navbar-expand-lg navbar-light p-2 pl-4">
    <img src="logo.png" alt="ULTRAG">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto pt-2 pl-2">
            <li class="nav-item active">
                <a aria-current="{segment === undefined ? 'page' : undefined}" href="." class="nav-link">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="{segment === 'contest' ? 'page' : undefined}" href="contest">Contest</a>
            </li>
        </ul>
        <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Yosep Novento Nugroho
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Settings</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Logout</a>
                </div>
            </li>
    </div>
</nav>