export async function fetchJson(url) {
    try {
        let request = await fetch(url);
        let text = await request.text();
        return text;
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

