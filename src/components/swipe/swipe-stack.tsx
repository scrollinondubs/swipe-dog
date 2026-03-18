"use client";

import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { PawPrint } from "lucide-react";
import { useSwipeStore } from "@/lib/use-swipe-store";
import { SwipeCard, SwipeCardHandle } from "./swipe-card";
import { SwipeActions } from "./swipe-actions";

export function SwipeStack() {
  const { currentDog, nextDog, thirdDog, isFinished, handleSwipe } = useSwipeStore();
  const cardRef = useRef<SwipeCardHandle>(null);

  if (isFinished) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 text-muted-foreground px-8">
        <PawPrint className="h-16 w-16 text-coral/40" />
        <p className="text-lg font-medium text-center">No more dogs to show!</p>
        <p className="text-sm text-center">
          Check back later for more adorable pups looking for a home.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="relative flex-1 mx-4 my-2 overflow-hidden" style={{ overscrollBehavior: "none" }}>
        <AnimatePresence>
          {thirdDog && (
            <SwipeCard
              key={thirdDog.id}
              dog={thirdDog}
              onSwipe={handleSwipe}
              stackIndex={2}
            />
          )}
          {nextDog && (
            <SwipeCard
              key={nextDog.id}
              dog={nextDog}
              onSwipe={handleSwipe}
              stackIndex={1}
            />
          )}
          {currentDog && (
            <SwipeCard
              key={currentDog.id}
              ref={cardRef}
              dog={currentDog}
              onSwipe={handleSwipe}
              isTop
              stackIndex={0}
            />
          )}
        </AnimatePresence>
      </div>
      <SwipeActions
        onPass={() => cardRef.current?.triggerSwipe("left")}
        onLike={() => cardRef.current?.triggerSwipe("right")}
        isDisabled={isFinished}
      />
    </>
  );
}
