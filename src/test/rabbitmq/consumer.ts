import amqplib from 'amqplib';

export const runConsumer = async () => {
  try {
    const connection = await amqplib.connect('amqp://admin:admin123@localhost');
    const channel = await connection.createChannel();
    const queueName = 'test_topic';
    await channel.assertQueue(queueName, {
      durable: true,
    });

    channel.consume(
      queueName,
      (message) => {
        if (message !== null) {
          console.log(`Message received: ${message.content.toString()}`);
        }
      },
      {
        noAck: true,
      },
    );
  } catch (error) {
    console.error('Error in producer:', error);
  }
};
runConsumer().catch((error) => {
  console.error('Error in producer:', error);
});
