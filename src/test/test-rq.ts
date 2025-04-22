import autocannon from 'autocannon';

autocannon(
  {
    url: 'http://localhost:3000',
    connections: 500,
    duration: 20,
  },
  console.log,
);
