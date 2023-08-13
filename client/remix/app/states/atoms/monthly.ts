import { atom } from "recoil";

export const MonthlyState = atom({
  key: 'monthlyState', 
  default: new Date(), 
});