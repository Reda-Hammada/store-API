import app from "./app";

const port = process.env.port;
app.listen(port, () => {
  console.log(`App is  running in port ${port} 😎 `);
});
