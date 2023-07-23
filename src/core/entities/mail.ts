export type Mail = {
  uuid: string,
  to: string,
  from: string,
  cc: Array<string>,
  cco: Array<string>,
  subject: string,
  body: string,
  isMD: boolean,
  files: Array<string>,
  sendIn: Date,
  dateOfSend: Date
}