import { Logger } from "winston"

/**
 * @typedef CustomLogger
 * @description カスタムロガーの型定義
 * @param message ログメッセージ
 * @param data ログ出力データ
 */
export type CustomInfoLogger = (message: string, data?: Record<string, unknown>) => void
export type CustomErrorLogger = (message: string, error: unknown) => void
/**
 * @typedef InitLoggerReturn
 * @description InitLoggerの戻り値の型
 */
export type InitLoggerReturn = {
  infoLogger: CustomInfoLogger
  errorLogger: CustomErrorLogger
}

/**
 * @typedef CreateCustomLoggerDataReturn
 * @description CreateCustomLoggerDataの戻り値の型
 */
export type CreateCustomLoggerDataReturn = { logger: Logger; msg: string }

/**
 * winston準拠のログレベル
 */
type LogLevel = "error" | "warn" | "info" | "http" | "verbose" | "debug" | "silly"

/**
 * @typedef CreateCustomLoggerData
 * @description カスタムロガーと文字列化された出力メッセージ
 * @param logLevel ログレベル
 * @param message メインメッセージ
 * @param data オプショナルデータ
 */
export type CreateCustomLoggerData = (
  logLevel: LogLevel,
  message: string,
  data?: Record<string, unknown>,
) => CreateCustomLoggerDataReturn
