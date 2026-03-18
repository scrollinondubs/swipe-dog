"use client";

import { useState, useCallback } from "react";
import { DogProfile } from "@/types/dog";
import { mockDogs } from "@/lib/mock-data";

export type SwipeDirection = "left" | "right";

export function useSwipeStore() {
  const [dogs] = useState<DogProfile[]>(mockDogs);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedDogs, setLikedDogs] = useState<DogProfile[]>([]);
  const [passedDogs, setPassedDogs] = useState<DogProfile[]>([]);

  const currentDog = dogs[currentIndex] ?? null;
  const nextDog = dogs[currentIndex + 1] ?? null;
  const thirdDog = dogs[currentIndex + 2] ?? null;
  const isFinished = currentIndex >= dogs.length;

  const handleSwipe = useCallback(
    (direction: SwipeDirection) => {
      const dog = dogs[currentIndex];
      if (!dog) return;

      if (direction === "right") {
        setLikedDogs((prev) => [...prev, dog]);
      } else {
        setPassedDogs((prev) => [...prev, dog]);
      }
      setCurrentIndex((prev) => prev + 1);
    },
    [dogs, currentIndex]
  );

  return {
    dogs,
    currentDog,
    nextDog,
    thirdDog,
    currentIndex,
    likedDogs,
    passedDogs,
    isFinished,
    handleSwipe,
  };
}
