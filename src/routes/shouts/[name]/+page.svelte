<script lang="ts">
    import "./markdown.css";
    import "./prism.css";
    import type { ShoutData } from "./types";
    export let data: ShoutData = {
        content: '',
        title: '',
        description: '',
        variation: '',
        timestamp: '',
        authors: [],
    };
</script>

<div class="container mx-auto p-5 my-5 text-white quicksand-reg rounded-3xl justify-center" id="main-container">
    <div class="container mx-auto p-5 mb-5 flex flex-wrap text-white rounded-3xl" id="mid-section">
        <div class="rounded-3xl p-3" id="top-section">
            <h1 class="text-3xl">{data.title}</h1>
            <div class="text-sm">{data.description}</div>
        </div>
        <div class="ml-auto grid rounded-3xl p-3" id="top-section">
            <div class="flex justify-left">
                <p class="pr-1">Authors:</p>
                {#each data.authors as author}
                    <a href={author.github_url} class={`pr-2 ${author.github_url ? "underline" : ""}`}><i class={author.official ? "nf nf-md-shield" : "nf nf-md-account_question"} /> {author.name}</a>
                {/each}
            </div>
            <div class="flex justify-between">
                <div>{data.timestamp}</div>
                <div class="pl-1"><i class={data.variation == "Shout" ? "nf nf-fa-bullhorn" : "nf nf-md-newspaper"} /> {data.variation}</div>
            </div>
        </div>
    </div>
    <div class="p-5 rounded-3xl markdown" id="mid-section">
        {@html data.content}
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
    .quicksand-reg {
        font-family: 'Quicksand', sans-serif;
        font-weight: 400;
    }
</style>

<svelte:head>
    <title>rts4 Shouts: {data.title}</title>
</svelte:head>