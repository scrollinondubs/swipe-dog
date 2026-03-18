"use client";

import { useRef, useImperativeHandle, forwardRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationControls,
  PanInfo,
} from "framer-motion";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { DogProfile } from "@/types/dog";
import { Badge } from "@/components/ui/badge";
import { SwipeDirection } from "@/lib/use-swipe-store";

const SWIPE_THRESHOLD = 100;
const VELOCITY_THRESHOLD = 500;
const EXIT_X = 500;

export interface SwipeCardHandle {
  triggerSwipe: (direction: SwipeDirection) => Promise<void>;
}

interface SwipeCardProps {
  dog: DogProfile;
  onSwipe: (direction: SwipeDirection) => void;
  isTop?: boolean;
  stackIndex?: number;
}

export const SwipeCard = forwardRef<SwipeCardHandle, SwipeCardProps>(
  function SwipeCard({ dog, onSwipe, isTop = false, stackIndex = 0 }, ref) {
    const controls = useAnimationControls();
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-300, 0, 300], [-15, 0, 15]);
    const likeOpacity = useTransform(x, [0, SWIPE_THRESHOLD], [0, 1]);
    const passOpacity = useTransform(x, [-SWIPE_THRESHOLD, 0], [1, 0]);
    const dragStartRef = useRef({ x: 0, y: 0 });
    const router = useRouter();

    const scale = 1 - stackIndex * 0.05;
    const translateY = stackIndex * 10;

    async function triggerSwipe(direction: SwipeDirection) {
      const exitX = direction === "right" ? EXIT_X : -EXIT_X;
      await controls.start({
        x: exitX,
        rotate: direction === "right" ? 15 : -15,
        opacity: 0,
        transition: { duration: 0.3 },
      });
      onSwipe(direction);
    }

    useImperativeHandle(ref, () => ({ triggerSwipe }));

    function handleDragStart(_: unknown, info: PanInfo) {
      dragStartRef.current = { x: info.point.x, y: info.point.y };
    }

    function handleDragEnd(_: unknown, info: PanInfo) {
      const dx = Math.abs(info.point.x - dragStartRef.current.x);
      const dy = Math.abs(info.point.y - dragStartRef.current.y);

      if (dx < 5 && dy < 5) {
        router.push(`/dog/${dog.id}`);
        return;
      }

      const swipedRight =
        info.offset.x > SWIPE_THRESHOLD || info.velocity.x > VELOCITY_THRESHOLD;
      const swipedLeft =
        info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -VELOCITY_THRESHOLD;

      if (swipedRight) {
        triggerSwipe("right");
      } else if (swipedLeft) {
        triggerSwipe("left");
      } else {
        controls.start({
          x: 0,
          rotate: 0,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        });
      }
    }

    return (
      <motion.div
        className="absolute inset-0"
        style={{
          scale,
          y: translateY,
          zIndex: 10 - stackIndex,
        }}
        initial={false}
      >
        <motion.div
          className="relative h-full w-full cursor-grab select-none overflow-hidden rounded-2xl bg-white shadow-lg active:cursor-grabbing"
          style={{ x, rotate, touchAction: "none" }}
          drag={isTop ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {/* Dog image */}
          <div className="relative h-[65%] w-full overflow-hidden bg-pink-light">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={dog.imageUrl}
              alt={dog.name}
              className="h-full w-full object-cover"
              draggable={false}
            />
            <motion.div
              className="absolute inset-0 z-10 flex items-start justify-center pt-16 pointer-events-none"
              style={{ opacity: likeOpacity }}
            >
              <span className="text-4xl font-extrabold tracking-wider px-4 py-2 border-4 rounded-lg rotate-[-15deg] text-green-500 border-green-500 bg-white/80">
                LIKE
              </span>
            </motion.div>
            <motion.div
              className="absolute inset-0 z-10 flex items-start justify-center pt-16 pointer-events-none"
              style={{ opacity: passOpacity }}
            >
              <span className="text-4xl font-extrabold tracking-wider px-4 py-2 border-4 rounded-lg rotate-[15deg] text-red-500 border-red-500 bg-white/80">
                PASS
              </span>
            </motion.div>
          </div>

          {/* Dog info */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {dog.name}, {dog.age} yrs
              </h2>
              <Badge variant="secondary" className="bg-pink text-coral font-medium">
                {dog.size}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">{dog.breed}</p>
            <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span>
                {dog.shelter.name} &middot; {dog.shelter.location}
              </span>
            </div>
            <div className="flex gap-1.5 mt-3 flex-wrap">
              {dog.traits.map((trait) => (
                <Badge key={trait} variant="outline" className="text-xs">
                  {trait}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
);
