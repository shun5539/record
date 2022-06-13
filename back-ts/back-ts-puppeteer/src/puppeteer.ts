import puppeteer from "puppeteer"
import dotenv from "dotenv"

import { initLogger } from "../logger/index"

dotenv.config()
const { infoLogger, errorLogger } = initLogger("src/logger/index.ts")

type ScrapingData = () => Promise<void>
export const scrapingData: ScrapingData = async () => {
  const { URL, USERNAME, PASSWORD } = process.env
  if (!URL || !USERNAME || !PASSWORD) throw new Error("ログイン情報がありません")
  const browser = await puppeteer.launch({
    //開発時はヘッドレスモードオフで行う
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })
  const page = await browser.newPage()

  try {
    infoLogger("ログイン開始")

    await page.setViewport({ width: 2000, height: 800 })

    await page.goto(URL, { waitUntil: "load" })

    await page.type('input[name="user_name"]', USERNAME)
    await page.type('input[name="password"]', PASSWORD)

    await Promise.all([page.waitForNavigation({ waitUntil: "load" }), page.click('input[type="submit"]')])

    const list = await page.$eval("要素", (value) => {
      return value.textContent
    })

    console.log(list)

    infoLogger("ログインに成功")
    return Promise.resolve()
  } catch (error) {
    errorLogger("ログイン失敗", { error })
    return Promise.reject(error)
  } finally {
    infoLogger("ブラウザクローズ開始")
    browser.close().then(() => infoLogger("ブラウザクローズ終了"))
  }
}
