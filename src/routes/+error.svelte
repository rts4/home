<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="flex h-screen place-items-center">
    <div class="container mx-auto p-5 my-5 text-white rounded-3xl flex flex-wrap justify-center justify-items-center" id="error-container">
        <h1 class="text-2xl quicksand-reg">{$page.status}</h1>
        <p class="quicksand-reg w-full text-center p-1">{$page.error?.message ?? "An unknown error has occurred."}</p>
        <a href="https://techhh.ca/" class="p-2 my-1 rounded-3xl shadow-2xl border border-gray-400 w-full text-center" id="button">Home</a>
    </div>
</div>

<style lang="postcss">
    :global(html) {
        background-color: rgb(15, 15, 15);
    }
    #error-container {
        background-color: rgb(30, 30, 30);
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
    .quicksand-reg {
        font-family: "Quicksand", sans-serif;
        font-weight: 400;
    }
</style>