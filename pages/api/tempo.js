async function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();
    const timeCache = 5; // Tempo em segundos

    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
    const subscribersJson = await subscribersResponse.json();
    const subscribers = subscribersJson.total_subscribers;

    // Cache para as requisições
    response.setHeader('Cache-Control', `s-maxage=${timeCache}`, 'stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        subscribers: subscribers,
        time_cache: timeCache
    })
}

export default tempo;