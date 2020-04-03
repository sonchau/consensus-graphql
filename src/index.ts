import initializeApp from './initialize-app';

//const PORT = process.env.PORT || 3000;
const PORT = 3001;

initializeApp()
  .then(httpServer => {
    httpServer.listen({ port: process.env.PORT || PORT }, () => {
      console.log('server is up')
    })
  })
  .catch(e => {
    console.error('Failed to start', e);
  });
