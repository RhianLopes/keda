const express = require('express');
const Kafka = require('node-rdkafka');

const app = express();

const consumer = new Kafka.KafkaConsumer({
  'group.id': 'my-group',
  'metadata.broker.list': 'your-kafka-broker:port',
});

consumer.connect();

consumer
  .on('ready', () => {
    console.log('Consumer is ready');
    consumer.subscribe(['your-topic']);
    consumer.consume();
  })
  .on('data', (message) => {
    const msg = message.value.toString();
    console.log('Received message:', msg);

    app.emit('kafkaMessage', msg);
  })
  .on('error', (err) => {
    console.error('Error:', err);
  });

app.get('/messages', (req, res) => {
  res.json({ status: 'Messages processed or processing logic here' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

process.on('SIGINT', () => {
  console.log('Closing consumer');
  consumer.disconnect();
});