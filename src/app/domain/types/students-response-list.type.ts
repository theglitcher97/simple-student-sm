import { studentType } from "./student.type"
import { supportType } from "./support.type"

export type studentResponseListType = {
  data: studentType[],
  page: number,
  per_page: number,
  support: supportType,
  total: number,
  total_pages: number
}