interface Author {
    name: string,
    official: boolean,
    github_url: string|null,
}

interface ShoutData {
    title: string,
    description: string,
    variation: string,
    timestamp: string,
    content: string,
    authors: Author[],
}

export type { Author, ShoutData }