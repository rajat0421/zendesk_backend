const axios = require("axios");

const {
  ZENDESK_EMAIL,
  ZENDESK_TOKEN,
  ZENDESK_SUBDOMAIN,
} = process.env;

if (!ZENDESK_EMAIL || !ZENDESK_TOKEN || !ZENDESK_SUBDOMAIN) {
  throw new Error("Missing required Zendesk environment variables");
}

const zendesk = axios.create({
  baseURL: `https://${ZENDESK_SUBDOMAIN}.zendesk.com/api/v2`,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  auth: {
    username: `${ZENDESK_EMAIL}/token`,
    password: ZENDESK_TOKEN,
  },
});

zendesk.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error(
      "Zendesk API Error:",
      err?.response?.status,
      err?.response?.data || err.message
    );
    return Promise.reject(err);
  }
);

module.exports = zendesk;
