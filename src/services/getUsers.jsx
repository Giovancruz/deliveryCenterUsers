const GET_USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  return fetch(GET_USERS_URL)
    .then(async response => {
      if (response.ok) {
        try {
          return response.json();
        }
        catch (error) {
          throw new Error('JSON Inválido: ' + error.message);
        }
      } else {
        if (response.status == 404) {
          throw new Error('Não encontrado: ' + GET_USERS_URL);
        }

        throw new Error('Erro na requisição');
      }
    }).catch(error => {
      throw new Error(error.message);
    });
}
