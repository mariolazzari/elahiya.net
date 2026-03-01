"use client";
import dynamic from "next/dynamic";
import { MapProps } from "./MapProps";

const MyMap = dynamic(() => import("./Map").then(mod => mod.default), {
  ssr: false,
});

export const MapWrapper = (props: MapProps) => {
  return (
    <div className="w-full h-125">
      <MyMap {...props} />
    </div>
  );
};
