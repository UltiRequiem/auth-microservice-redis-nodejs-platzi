export function success(response, body = '', status = 200) {
  response.status(status).send({
    error: false,
    status,
    body,
  });
}

export function error(response, body = 'Internal Server Error', status = 500) {
  response.status(status).send({
    error: true,
    status,
    body,
  });
}

export default async function send(response, body, status) {
  try {
    success(response, await body(), status);
  } catch {
    error(response);
  }
}
