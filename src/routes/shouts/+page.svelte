<script lang="ts">
    import type { ShoutsData } from "./types";
    import { page } from "$app/stores"; 
    import { browser } from "$app/environment";
    import { lastPage } from "../../stores";
    let pageNum = Number($page.url.searchParams.get("page"));
    lastPage.set(pageNum);

    if (!pageNum && browser) window.location.href = `https://techhh.ca/shouts?page=1`;

    export let data: ShoutsData;

    function nextPage() {
        pageNum++;
        if (browser) window.location.href = `https://techhh.ca/shouts?page=${pageNum}`;
    }

    function previousPage() {
        pageNum--;
        if (browser) window.location.href = `https://techhh.ca/shouts?page=${pageNum}`;
    }
</script>

<div class="container mx-auto p-5 my-5 text-white quicksand-reg rounded-3xl justify-center" id="main-container">
    <h1 class="text-3xl text-center p-2 rounded-3xl" id="mid-section">Shouts: Page {pageNum}</h1>
        {#each data.pageData as shout}
            <div class="mx-auto p-5 my-5 flex flex-wrap rounded-3xl" id="mid-section">
                <div class="rounded-3xl p-3" id="top-section">
                    <h2 class="text-2xl"><a class={!shout.has_content ? "disabled" : "underline"} href={shout.has_content ? `https://techhh.ca/shouts/${shout.name}` : ""}>{shout.title}</a></h2>
                    <p class="text-sm">{shout.description}</p>
                </div>
                <div class="rounded-3xl p-3 ml-auto" id="top-section">
                    <div class="text-right"><i class={shout.variation == "Shout" ? "nf nf-fa-bullhorn" : "nf nf-md-newspaper"} /> {shout.variation}</div>
                    <p>{new Date(shout.timestamp).toLocaleString()}</p>
                </div>
            </div>
        {/each}
    <div class="p-2 mt-1 rounded-3xl flex flex-wrap justify-between" id="mid-section">
        <button class="p-2 my-1 rounded-3xl shadow-2xl border border-gray-400 text-center" id="button" disabled={pageNum == 1 ? true : false} on:click={previousPage}>Previous</button>
        <button class="p-2 my-2 rounded-3xl shadow-2xl border border-gray-400 text-center" id="button" disabled={!data.hasNext ? true : false} on:click={nextPage}>Next</button>
    </div>
</div>

<style lang="postcss">
    #main-container {
        background-color: rgb(30, 30, 30);
    }
    #mid-section {
        background-color: rgb(45, 45, 45);
    }
    #top-section {
        background-color: rgb(60, 60, 60);
    }
    #button {
        background-color: rgb(20, 20, 20);
    }
    #button:hover {
        background-color: rgb(10, 10, 10);
    }
    #button:active {
        background-color: rgb(5, 5, 5);
    }
    #button:disabled {
        background-color: rgb(60, 60, 60);
    }
    .quicksand-reg {
        font-family: 'Quicksand', sans-serif;
        font-weight: 400;
    }
    a.disabled {
        pointer-events: none;
    }
</style>

<svelte:head>
    <title>rts4 Shouts</title>
</svelte:head>