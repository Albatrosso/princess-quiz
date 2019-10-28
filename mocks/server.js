

const Hapi = require('@hapi/hapi');


const init = async () => {
  const server = Hapi.server({
    port: 9090,
    host: 'localhost',
    routes: {
      cors: true,
    },
  });

  server.route({
    method: 'GET',
    path: '/question/{id}',
    handler: (request, h) => ({
      simple: [
        {
          // eslint-disable-next-line no-undef
          id: 1,
          text: 'Город- Государство из Алладина',
          answer: 'Аграба',
          cost: 100,
        },
      ],
      medium: [
        {
          id: 1,
          text: 'Какая диснеевская принцесса была добавлена во франшизу самой последней?',
          answer: 'Моана',
          cost: 200,
        },
      ],
      hard: [
        {
          id: 1,
          text: 'Какая из принцесс крутила роман со злодеем?',
          answer: 'Анна из Холодного сердца',
          cost: 300,
        },
      ],
    }),
  });
server.route({
    method: 'GET',
    path: '/question/id',
    handler: (request, h) => ({
      simple: [
        {
          id: 1,
          text: 'Город- Государство из Алладина',
          answer: 'Аграба',
          cost: 100,
        },
      ],
      medium: [
        {
          id: 1,
          text: 'Какая диснеевская принцесса была добавлена во франшизу самой последней?',
          answer: 'Моана',
          cost: 200,
        },
      ],
      hard: [
        {
          id: 1,
          text: 'Какая из принцесс крутила роман со злодеем?',
          answer: 'Анна из Холодного сердца',
          cost: 300,
        },
      ],
    }),
  });
  server.route({
    method: 'GET',
    path: '/question',
    handler: (request, h) => ({
      simple: [
        {
          id: 1,
          text: 'Город- Государство из Алладина',
          answer: 'Аграба',
          cost: 100,
        },
      ],
      medium: [
        {
          id: 1,
          text: 'Какая диснеевская принцесса была добавлена во франшизу самой последней?',
          answer: 'Моана',
          cost: 200,
        },
      ],
      hard: [
        {
          id: 1,
          text: 'Какая из принцесс крутила роман со злодеем?',
          answer: 'Анна из Холодного сердца',
          cost: 300,
        },
      ],
    }),
  });

  await server.start();
  console.log('Server is running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
