import mdi from "markdown-it";
const md = mdi({ breaks: true });
import mk from "@iktakahiro/markdown-it-katex";
import mp from "markdown-it-prism";

import { Buffer } from "node:buffer";

import type { ShoutData } from "./types.js";

const macros = {
    "\\f": "#1(#2)",
    "\\diff": "\\frac{d#1}{dx}(#2)",
    "\\Hdiff": "\\frac{d^{#2}#1}{dx^#2}(#3)"
};

md.use(mk, { macros, });
md.use(mp);

md.enable(['newline']);

export const load = async ({ params }) => {
    const data: Promise<ShoutData> = fetch(`https://api.techhh.ca/shout/${params.name}`).then(res => res.json());
    const decodedContent = Buffer.from((await data).content, "base64").toString("utf-8");

    return { content: md.render(decodedContent), title: (await data).title, description: (await data).description, variation: (await data).variation, timestamp: new Date((await data).timestamp).toLocaleString(), authors: (await data).authors };
}