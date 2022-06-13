import express from "express"
import { insertRowsAsStream } from "./bq"

const app = express()

app.use(express.json())

app.get("/", insertRowsAsStream)

const port = 8080
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`)
})
