import { studentType } from "./student.type";
import { supportType } from "./support.type";

export type studentResponseType = {
  data: studentType;
  support: supportType;

};
