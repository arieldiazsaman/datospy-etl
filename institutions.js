import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const institutionsEndpoint = `${process.env.INFORMACION_PUBLICA_API_URL}/instituciones?page=1`;
const config = {
  headers: {
    Authorization: `Bearer ${process.env.INFORMACION_PUBLICA_ACCESS_TOKEN}`,
    Accept: "application/json",
  },
};

axios
  .get(institutionsEndpoint, config)
  .then((res) => console.log(res.data.results))
  .catch((e) => console.log(e));
