import { useUser } from "@clerk/remix";

export default function PredictCostPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  return <h1>hello : {user?.id}</h1>;
}
