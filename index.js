const pubSubHubbub = require('pubSubhubbub')

let pubSub = pubSubHubbub.createServer({
    callbackUrl: '71.121.234.198:1337'
})
pubSub.listen(1337)

pubSub.on('listen', () => {
    console.log('Server listening on port %s.', pubSub.port);
});

pubSub.on('error', error => {
    console.log('An error occurred:');
    console.log(error);
});

pubSub.on('subscribe', data => {
    console.log('Subscription successful:');
    console.log(data);
});

pubSub.on('unsubscribe', data => {
    console.log('Subscription cancelled:');
    console.log(data);
});

pubSub.on('denied', data => {
    console.log('Subscription denied:');
    console.log(data);
});

pubSub.on('feed', data => {
    console.log(data);
    console.log(data.feed.toString());
});