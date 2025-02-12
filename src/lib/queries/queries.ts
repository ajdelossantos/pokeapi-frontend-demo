import createFetchClient from "openapi-fetch";
import type { paths } from "../api/openapi";
import { queryOptions } from "@tanstack/react-query";

export const fetchClient = createFetchClient<paths>({
  baseUrl: "https://pokeapi.co/",
});

async function test() {
  const { data, error } = await fetchClient.GET(
    "/api/v2/pokemon/{id}/",
    {
      params: {
        path: {
          id: "1",
        },
      },
    },
  );

  if (error) throw(error);
  
  return data;
}

export const testOptions = queryOptions({
  queryKey: ["test"],
  queryFn: test,
})