import { useGetCategories } from "../hooks/useGetCategories";

export const Category = () => {
  const { categories } = useGetCategories();
  return <>{JSON.stringify(categories)}</>;
};
