import { subRedis } from '../../services/Redis.service';

export const subRedisTest = async () => {
  try {
    await subRedis('purchase-event', (message: string) => {
      console.log(`Received message on purchase-event channel: ${message}`);
    });
  } catch (error) {
    console.error('Error publishing purchase message:', error);
    throw error;
  }
};
subRedisTest();
