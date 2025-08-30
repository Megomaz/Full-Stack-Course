import express from "express";
import axios from "axios";  

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";


const yourUsername = "Megomaz";
const yourPassword = "Spencer1010";
const yourAPIKey = "d5fb3bdd-ed91-4e45-ae5c-1570623c02e5";
const yourBearerToken = "d9982008-268d-471b-865a-6fb79c58a24f";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  
  try {
    const response = await axios.get(API_URL + "random");

    // Converts object to string
    const content = JSON.stringify(response.data);
    res.render("index.ejs", { content: content });
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
 });

app.get("/basicAuth", async (req, res) => {
    const response = await axios.get(API_URL + 'all?page=2', {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    const content = JSON.stringify(response.data);
    res.render("index.ejs", { content: content });
});
 
app.get("/apiKey", async (req, res) => {
  const response = await axios.get(API_URL + 'filter?', {
    params: {
      apiKey: yourAPIKey,
      score: 5,
    },
  });
  const content = JSON.stringify(response.data);
  res.render("index.ejs", { content: content });
});

app.get("/bearerToken", async (req, res) => {
  const response = await axios.get(API_URL + 'secrets/42', {
    headers: { 
      Authorization: `Bearer ${yourBearerToken}` 
    },
  });
  const content = JSON.stringify(response.data);
  res.render("index.ejs", { content: content });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
