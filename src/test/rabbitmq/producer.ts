import amqplib from 'amqplib';
const message = 'hello rabbitmq from nodejs';

export const runProducer = async () => {
  try {
    const connection = await amqplib.connect('amqp://admin:admin123@localhost');
    const channel = await connection.createChannel();
    const queueName = 'test_topic';
    await channel.assertQueue(queueName, {
      durable: true,
    });
    // send message to the consumer channel
    channel.sendToQueue(queueName, Buffer.from(message));
    console.log(`Message sent: ${message}`);
  } catch (error) {
    console.error('Error in producer:', error);
  }
};
runProducer().catch((error) => {
  console.error('Error in producer:', error);
});
