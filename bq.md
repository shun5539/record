## BQ

    const {BigQuery} = require('@google-cloud/bigquery')
    require('dotenv').config()

    const bigQuery = new BigQuery({
    keyFilename:process.env.GOOGLE_APPLICATION_CREDENTIALS,
    projectId: "xxxxxxxxxxxxxxxx"
    })

    const insertRowsAsStream = async (insertData) => {
      try{
        console.log("Big Query にレコードのインサート開始")

        await bigQuery
        .dataset("データセット名")
        .table("テーブル名").insert(insertData)

        console.log("Big Query にレコードのインサート完了")
        }catch(error){
        console.log(error)
        const err = error.errors
        err.map(e => console.log(e.errors))
        }
    }
