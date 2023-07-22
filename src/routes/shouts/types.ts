interface LimitedShout {
    name: string,
    title: string,
    description: string,
    timestamp: string,
    variation: string,
    has_content: boolean,
}

interface ShoutsData {
    hasNext: boolean,
    shouts: number,
    pageData: LimitedShout[],
}

export type { LimitedShout, ShoutsData }