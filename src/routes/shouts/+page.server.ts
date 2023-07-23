import { error } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

import type { ShoutsData } from "./types.js";

export const load = async ({ url }) => {
    const pageNum = Number(url.searchParams.get("page"));

    if (!pageNum) throw redirect(302, "https://techhh.ca/shouts?page=1");
    if (pageNum < 1) throw error(404, "Not Found");

    const data: Promise<ShoutsData> = fetch(`https://api.techhh.ca/shouts?page=${pageNum}`).then(res => res.json());
    
    if ((await data).pageData.length < 1) throw error(404, "Not Found");

    return (await data);
}