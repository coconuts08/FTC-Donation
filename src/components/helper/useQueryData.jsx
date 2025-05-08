import { useQuery } from "@tanstack/react-query";
import { queryData } from "./queryData";

const useQueryData = (
  endpoint,
  method,
  key = "",
  fd = {},
  id = null,
  refetchonWindowFocus = false
) => {
  return useQuery({
    queryKey: [key, id],
    queryFn: async () => await queryData(endpoint, method, fd),
    retry: false,
    refetchonWindowFocus,
    cacheTime: 200,
  });
};

export default useQueryData;
