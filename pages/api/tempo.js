async function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
    const subscribersJson = await subscribersResponse.json();
    const subscribers = subscribersJson.total_subscribers;

    // 10 segundos de cache para as requisições
    response.setHeader('Cache-Control', 's-maxage=10', 'stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        subscribers: subscribers
    })
}

export default tempo;