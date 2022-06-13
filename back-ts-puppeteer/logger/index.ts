import { createLogger, format, transports } from "winston"
import { CreateCustomLoggerData, CustomInfoLogger, CustomErrorLogger, InitLoggerReturn } from "./type"

const displayFormat = format.printf(({ level, message }) => {
  return `${level}: ${message}`
})
const color = format.colorize({ all: true })
/**
 * @typedef InitLogger
 * @description ロガーのインスタンス生成
 * @param filePath ログ実行時ファイルパス
 * @returns InitLoggerReturn
 */
type InitLogger = (filePath: string) => InitLoggerReturn
export const initLogger: InitLogger = (filePath) => {
  const createCustomLoggerData: CreateCustomLoggerData = (logLevel, message, data) => {
    const logger = createLogger({
      level: logLevel,
      format: format.combine(color, displayFormat),
      transports: [new transports.Console()],
    })

    return {
      logger,
      msg: JSON.stringify({
        message,
        data,
        filePath,
      }),
    }
  }

  const infoLogger: CustomInfoLogger = (message, data) => {
    const { logger, msg } = createCustomLoggerData("info", message, data)
    logger.info(msg)
  }
  const errorLogger: CustomErrorLogger = (message, error) => {
    const stringError = JSON.stringify(error, Object.getOwnPropertyNames(error))

    const { logger, msg } = createCustomLoggerData("error", message, { error: stringError })
    logger.error(msg)
  }

  return { infoLogger, errorLogger }
}
