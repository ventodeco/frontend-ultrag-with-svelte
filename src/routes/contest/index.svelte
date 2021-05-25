<svelte:head>
    <title>About</title>
</svelte:head>
<script context="module">
export async function preload(page, session) {
    const res = await this.fetch('/contest.json');
    const contest = await res.json();

    return { contest };
}
</script>
<script>
export let contest;
</script>
<style>
    .card-title {
        font-size: 1.75rem; 
    }
    .rectangle {
        background-color: #F1CD69;
        height: 10px;
    }  
    .points {
        position:absolute;
        bottom:0;
        right:0;
    }
    .par-points {
        position:relative;
    }
    .w3-animate-bottom {
        animation-duration: 1s;
    }
    .bot-con {
        font-size: 1.35rem;
    }
    .bg-bar {
        background-color: #EDEDED;
        margin-left: 0;
        padding-left: 0;
    }
    .link-but {
        text-decoration: none;
        color: black;
    }
</style>
{#each contest as con}
<a href="." class="row mt-4 w3-animate-bottom link-but">
    <div class="card w-100">
        <div class="card-body">
            <div class="row par-points">
                <h5 class="card-title col-md-6">{con.title}</h5>    
                <h5 class="col-md-6 text-right points">{con.getPoint} / {con.points} points</h5>
            </div>
            <div class="row text-center mx-1">
                <div class="col bg-bar">
                    <div class="rectangle" style="width: {con.persen}%;"></div>
                </div>
            </div>

            <div class="row pt-2 bot-con">
                <div class="col-md-6 text-muted">{con.solved} / {con.total} problems solved</div>
                <div class="col-md-6">
                    <div class="row text-right">
                        <div class="col">
                            <img src="time.svg" alt="">    
                        </div>
                        <div class="pr-3 text-muted">{con.deadline.day} day {con.deadline.hour} hours {con.deadline.minute} minutes</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</a>
{/each}