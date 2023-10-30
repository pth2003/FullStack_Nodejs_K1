import { config } from "./config";
import { client } from "./client";

const { SERVER_AUTH_API } = config;
client.setUrl(SERVER_AUTH_API);
