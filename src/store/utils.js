export function parseData(data) {
    return Object.assign(
        {},
        {
            id: data.id,
            name: data.name,
            summary: data.summary,
            image: data.image.original,
            episodes: data._embedded.episodes
        }
    );
}
