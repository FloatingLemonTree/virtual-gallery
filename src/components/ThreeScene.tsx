'use client'; // если ты используешь App Router

import { useEffect, useRef } from "react";
import * as THREE from "three";

const Scene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  return <div ref={mountRef} />;
};

export default Scene;