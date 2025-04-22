import Redis from 'ioredis';
const redisClient = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379,
});

export const pubRedis = async (channel: string, message: string) => {
  const publisher = redisClient.duplicate();
  await publisher.on('ready', () => {
    console.log('✅ Publisher connected');
  });
  await publisher.on('error', (err: unknown) => {
    console.error('❌ Redis publisher error:', err);
  });
  return publisher.publish(channel, message);
};
export const subRedis = async (channel: string, callback: any) => {
  const subscribe = redisClient.duplicate();
  await subscribe.on('ready', () => {
    console.log('✅ Subscriber connected');
  });
  await subscribe.on('error', (err: unknown) => {
    console.error('❌ Redis subscriber error:', err);
  });
  subscribe.subscribe(channel, (err: unknown, count: any) => {
    if (err) {
      console.error('Error subscribing to channel:', err);
    } else {
      console.log(`📡 Subscribed to channel: ${channel}`);
    }
  });
  subscribe.on('message', (receivedChannel: string, message: string) => {
    console.log(`message on ${receivedChannel}:`, message);
    if (receivedChannel === channel) {
      callback(message);
    }
  });
};
