import express from "express"

const app = express()

app.use(express.json())

app.get("/", async (_req, res) => {
  res.end("Hello World")
})

const port = 8080
app.listen(port, () => {
  // eslintでconsoleのエラーが出ないよう下記を追加
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`)
})
