import Client from "@searchkit/api";
import { NextRequest, NextResponse } from 'next/server';
 
const apiConfig = {
  connection: {
    host: "http://localhost:3000/api/articles",
    // if you are authenticating with an api key
    // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-api-key
    // apiKey: '###'
    // if you are authenticating with a username/password combo
    // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-usernamepassword
    // auth: {
    //   username: "elastic",
    //   password: "changeme"
    // },
  },
  search_settings: {
    highlight_attributes: ["title", "actors"],
    search_attributes: ["title", "actors"],
    result_attributes: ["title", "actors"],
    facet_attributes: ["type", "rated"],
  },
};
 
const apiClient = Client(apiConfig);
 
export async function POST(req, res) {
  try {
    const data = await req.json();
    const results = await apiClient.handleRequest(data);
    return res.json(results);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
