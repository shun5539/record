import { BigQuery } from "@google-cloud/bigquery"

import { initLogger } from "../logger/index"

const { infoLogger, errorLogger } = initLogger("logger/index.ts")

export const insertRowsAsStream = async () => {
  const bigQuery = new BigQuery()
  const costGraphData = [
    { date: "01-01", cost: 1100 },
    { date: "01-02", cost: 1200 },
    { date: "01-03", cost: 1000 },
    { date: "01-04", cost: 800 },
    { date: "01-05", cost: 1700 },
    { date: "01-06", cost: 1000 },
    { date: "01-07", cost: 1000 },
    { date: "01-08", cost: 600 },
    { date: "01-09", cost: 800 },
    { date: "01-10", cost: 400 },
    { date: "01-11", cost: 1600 },
    { date: "01-12", cost: 1400 },
    { date: "01-13", cost: 1100 },
    { date: "01-14", cost: 1200 },
    { date: "01-15", cost: 900 },
  ]

  try {
    infoLogger("Big Query にレコードのインサート開始")
    await bigQuery.dataset("データセット名").table("テーブル名").insert(costGraphData)
    infoLogger("Big Query にレコードのインサート完了")
    return Promise.resolve()
  } catch (error) {
    errorLogger("インサート失敗", { error })
    return Promise.reject(error)
  }
}
