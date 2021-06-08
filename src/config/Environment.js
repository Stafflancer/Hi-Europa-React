const url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_BASE_URL
    : process.env.REACT_APP_DEV_API_BASE_URL;

const PAYMENT_WIDGET =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_IMA_PAYMENT_WIDGET_PROD_URL
    : process.env.REACT_APP_IMA_PAYMENT_WIDGET_PREPROD_URL;

const API_ADMIN_URL = `${url}/api/admin`;
const API_URL = url;
export { API_ADMIN_URL, API_URL, PAYMENT_WIDGET };
