import { pubRedis } from '../../services/Redis.service';

export const pubRedisTest = async (message: string) => {
  try {
    await pubRedis('purchase-event', JSON.stringify(message));
  } catch (error) {
    console.error('Error publishing purchase message:', error);
    throw error;
  }
};
pubRedisTest('test message 2');
