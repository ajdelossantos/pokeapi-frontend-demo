import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { RenderDebugPokemon } from "@/lib/components/RenderDebugPokemon";
import { getQueryClient } from "@/lib/queries/get-query-client";
import { testOptions } from "@/lib/queries/queries";

export default function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(testOptions);

  return (
    <div>
      <main>
        <h2>PokeAPI Demo</h2>
        <p>
          A demo of NextJS, OpenAPI TS, and Tanstack Query using the PokeAPI.
        </p>
        <br />
        <hr />
        <br />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <RenderDebugPokemon />
        </HydrationBoundary>
      </main>
      <footer>
        <p>Footer goes here</p>
      </footer>
    </div>
  );
}
