import { useQuery } from "react-query";
import { CatFact } from "@models/CatFact";
import { Endpoints } from "@constants/Endpoints";

export const useCatFact = () => {
  const { data, isLoading, isFetching, isError } = useQuery<CatFact>({
    queryKey: ["catFact"],
    refetchOnWindowFocus: false,
    queryFn: () =>
      fetch(Endpoints.CatFact).then((res) => res.json()),
  });

  return {
    isLoading: isLoading || isFetching,
    isError,
    data,
  };
};
