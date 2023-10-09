const env = import.meta.env.VUE_APP_ENV;

let envApiUrl = '';

if (env === 'production') {
  envApiUrl = `https://${import.meta.env.VUE_APP_DOMAIN_PROD}`;
} else if (env === 'staging') {
  envApiUrl = `https://${import.meta.env.VUE_APP_DOMAIN_STAG}`;
} else {
  envApiUrl = `http://${import.meta.env.VUE_APP_DOMAIN_DEV}`;
}

export const apiUrl = `http://localhost`;
export const appName = import.meta.env.VUE_APP_NAME;
