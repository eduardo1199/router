import Redis from 'ioredis'

export const TTL = 60 * 60 * 24; // 24hrs

export const cache = new Redis({
    host: '127.0.0.1',
    port: 6378,
    db: 0,
});