import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(
    async (responseServer) => {
      if (responseServer.ok) {
        const response = await responseServer.json();

        return response;
      }

      throw new Error('Não foi possível se conectar ao servidor!');
    }
  );
}

export default {
  getAllWithVideos,
};
