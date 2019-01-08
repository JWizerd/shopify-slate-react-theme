import Client from 'shopify-buy';

const client = Client.buildClient({
        domain: 'slate-dev-1.myshopify.com',
        storefrontAccessToken: 'db530ea866193201c4dd356ffeaf3f9d'
});

export { client }