import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getOne(id) {
  return fetch(`${URL_CATEGORIES}/${id}`).then(async (responseServer) => {
    if (responseServer.ok) {
      const response = await responseServer.json();

      return response;
    }

    throw new Error('Não foi possível se conectar ao servidor!');
  });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (responseServer) => {
    if (responseServer.ok) {
      const response = await responseServer.json();

      return response;
    }

    throw new Error('Não foi possível se conectar ao servidor!');
  });
}

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

async function create(categoriaObject) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(categoriaObject),
  }).then(async (responseServer) => {
    if (responseServer.ok) {
      const response = await responseServer.json();

      return response;
    }

    throw new Error('Não foi possível se conectar ao servidor!');
  });
}

async function update(categoriaObject) {
  return fetch(`${URL_CATEGORIES}/${categoriaObject.id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(categoriaObject),
  }).then(async (responseServer) => {
    if (responseServer.ok) {
      const response = await responseServer.json();

      return response;
    }

    throw new Error('Não foi possível se conectar ao servidor!');
  });
}

async function remove(categoriaObject) {
  return fetch(`${URL_CATEGORIES}/${categoriaObject.id}`, {
    method: 'DELETE',
  }).then(async (responseServer) => {
    if (responseServer.ok) {
      const response = await responseServer.json();

      return response;
    }

    throw new Error('Não foi possível se conectar ao servidor!');
  });
}

export default {
  getAllWithVideos,
  getAll,
  getOne,
  create,
  remove,
  update,
};
