"use client";

import React from "react";
import Image from "next/image";
import { useSuspenseQuery } from "@tanstack/react-query";
import { testOptions } from "@/lib/queries/queries";

export function RenderDebugPokemon() {
  const { data } = useSuspenseQuery(testOptions);

  return (
    <div>
      <h3>{data.name.toUpperCase()}</h3>
      <Image
        src={data.sprites.front_default || ""}
        alt={data.name}
        width={200}
        height={200}
      />
      <p>{data.height} feet</p>
      <p>{data.weight} lbs</p>
    </div>
  );
}
