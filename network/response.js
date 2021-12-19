export function success(res, body = "", status = 200) {
  res.status(status).send({
    error: false,
    status,
    body,
  });
}

export function error(res, body = "Internal Server Error", status = 500) {
  res.status(status).send({
    error: true,
    status,
    body,
  });
}

export default function response(res, body, status) {
  try {
    success(res, body, status);
  } catch {
    error(res, body, status);
  }
}
