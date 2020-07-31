import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

async function create(videoObject) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  }).then(async (responseServer) => {
    if (responseServer.ok) {
      const response = await responseServer.json();

      return response;
    }

    throw new Error('Não foi possível se conectar ao servidor!');
  });
}

export default {
  create,
};
