import { useQuery } from "react-query";
import { CatFact } from "@models/CatFact";

export const useCatFact = () => {
  const { data, isLoading, isFetching, isError } = useQuery<CatFact>({
    queryKey: "catFact",
    refetchOnWindowFocus: false,
    queryFn: () =>
      fetch("https://catfact.ninja/fact").then((res) => res.json()),
  });

  return {
    isLoading: isLoading || isFetching,
    isError,
    data,
  };
};
