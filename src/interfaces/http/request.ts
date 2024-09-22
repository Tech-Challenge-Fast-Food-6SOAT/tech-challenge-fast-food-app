export type HttpRequest<T = any> = {
  body: T
  headers: T
  params?: T
  query?: T
}
