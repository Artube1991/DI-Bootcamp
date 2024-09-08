import { createClient } from 'pexels';

const client = createClient('fKxgTp156XGeUiYt1NHQLu3759QxjeQeV9dbBAYdciycAIW7qRPP95mL');
const query = 'Nature';

client.photos.search({ query, per_page: 1}).then(photos => {
    console.log(photos);
  })
  .catch(e=>{
    console.log(e.message);
  });

