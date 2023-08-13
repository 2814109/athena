import { useRecoilState } from "recoil";
import { MonthlyState } from "~/states/atoms/monthly";

export const useMonthly = () => {
    const [monthly, setMonthly] = useRecoilState(MonthlyState);
    const handleSetMontly = (date: Date | undefined) => {
        void setMonthly(date ?? new Date())
    }
    return {monthly,handleSetMontly}
}