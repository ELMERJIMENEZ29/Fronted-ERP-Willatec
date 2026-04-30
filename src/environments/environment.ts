interface Env {
  production: boolean;
  apiUrl: string;
}

export const environment: Env = {
  production: false,
  apiUrl: 'http://127.0.0.1:8080/api',
};
