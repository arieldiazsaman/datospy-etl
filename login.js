import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const authEndpoint = `${process.env.INFORMACION_PUBLICA_API_URL}/auth/token`;
const data = { clientSecret: process.env.INFORMACION_PUBLICA_CLIENT_SECRET };
const config = {
  headers: {
    Authorization: `Basic ${process.env.INFORMACION_PUBLICA_REQUEST_TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

axios
  .post(authEndpoint, data, config)
  .then((res) => console.log(res.data.accessToken))
  .catch((e) => console.log(e));
