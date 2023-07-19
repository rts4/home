<script lang="ts">
    // Route: {name: string, href: string}
    const routes = [
        { name: "Elements", href: "https://element.techhh.ca" },
        { name: "Quadratics", href: "https://quadratics.techhh.ca" }
    ];
</script>

<div class="flex h-screen place-items-center">
    <div class="container mx-auto p-5 my-5 text-white rounded-3xl flex flex-wrap justify-center justify-items-center" id="main-container">
        <h1 class="text-2xl quicksand-reg">rts4</h1>
        <p class="quicksand-reg w-full text-center p-1">Below is a list of my previous or on-going projects.</p>
        {#each routes as route}
            <a href={route.href} class="p-2 my-1 rounded-3xl shadow-2xl border border-gray-400 w-full text-center" id="button">{route.name}</a>
        {/each}
        <div class="w-full justify-center p-2">
            <p class="quicksand-reg">Follow me on <a href="https://github.com/rts4" class="underline font-bold">GitHub</a>.</p>
        </div>
    </div>
</div>

<style lang="postcss">
    :global(html) {
        background-color: rgb(15, 15, 15);
    }
    #main-container {
        background-color: rgb(30, 30, 30);
    }
    #button {
        background-color: rgb(20, 20, 20);
    }
    #button:hover {
        background-color: rgb(10, 10, 10);
    }
    .quicksand-reg {
        font-family: 'Quicksand', sans-serif;
        font-weight: 400;
    }
</style>