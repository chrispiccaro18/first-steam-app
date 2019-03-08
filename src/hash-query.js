export function writeIDToHash(existingQuery, userID) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('id', userID);
    return searchParams.toString();
}

export function readIDFromHash(query) {
    const searchParams = new URLSearchParams(query);
    return searchParams.get('id');
}