"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Heart, MapPin, Calendar, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockDogs } from "@/lib/mock-data";

export default function DogProfilePage() {
  const params = useParams();
  const router = useRouter();
  const dog = mockDogs.find((d) => d.id === params.id);

  if (!dog) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-muted-foreground">Dog not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col bg-white">
      {/* Hero image with back button */}
      <div className="relative h-[50vh] w-full overflow-hidden bg-pink-light">
        <button
          onClick={() => router.back()}
          className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dog.imageUrl}
          alt={dog.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 -mt-6 bg-white rounded-t-3xl relative z-10">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{dog.name}</h1>
            <p className="text-muted-foreground">{dog.breed}</p>
          </div>
          <button className="p-2 text-coral hover:text-coral-light transition-colors">
            <Heart className="h-6 w-6" />
          </button>
        </div>

        {/* Info pills */}
        <div className="flex gap-2 mt-4">
          <Badge variant="secondary" className="bg-pink text-coral">
            Age: {dog.age} yrs
          </Badge>
          <Badge variant="secondary" className="bg-pink text-coral">
            {dog.breed}
          </Badge>
          <Badge variant="secondary" className="bg-pink text-coral">
            {dog.size}
          </Badge>
        </div>

        {/* Traits */}
        <div className="flex gap-1.5 mt-3 flex-wrap">
          {dog.traits.map((trait) => (
            <Badge key={trait} variant="outline" className="text-xs">
              {trait}
            </Badge>
          ))}
        </div>

        {/* About */}
        <div className="mt-5">
          <h3 className="font-semibold mb-1">About</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {dog.description}
          </p>
        </div>

        {/* Shelter info */}
        <div className="mt-5 p-3 rounded-lg bg-pink-light">
          <h3 className="font-semibold mb-1">Shelter</h3>
          <p className="text-sm font-medium">{dog.shelter.name}</p>
          <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{dog.shelter.location}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto pt-5 pb-2">
          <Button className="flex-1 bg-coral hover:bg-coral-light text-white">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Visit
          </Button>
          <Button variant="outline" className="flex-1">
            <MessageCircle className="h-4 w-4 mr-2" />
            Message
          </Button>
        </div>
      </div>
    </div>
  );
}
