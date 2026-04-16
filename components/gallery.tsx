"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { X, ArrowRight } from "lucide-react"
import { paintings, type Painting } from "@/lib/paintings"

export function Gallery() {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null)

  return (
    <section id="gallery" className="py-24 px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Selected Works
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {paintings.map((painting, index) => (
            <button
              key={painting.id}
              onClick={() => setSelectedPainting(painting)}
              className={`group relative overflow-hidden text-left ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <Image
                  src={painting.image}
                  alt={painting.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-xl text-foreground">{painting.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {painting.year} · {painting.medium}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors group"
          >
            View All Works
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selectedPainting && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-6"
          onClick={() => setSelectedPainting(null)}
        >
          <button
            onClick={() => setSelectedPainting(null)}
            className="absolute top-6 right-6 text-foreground hover:text-muted-foreground transition-colors"
          >
            <X className="w-8 h-8" />
            <span className="sr-only">Close</span>
          </button>
          
          <div 
            className="max-w-5xl w-full flex flex-col lg:flex-row gap-8 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full lg:w-2/3 aspect-[4/3]">
              <Image
                src={selectedPainting.image}
                alt={selectedPainting.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="lg:w-1/3 text-center lg:text-left">
              <h3 className="font-serif text-3xl text-foreground mb-2">
                {selectedPainting.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {selectedPainting.year} · {selectedPainting.medium}
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                {selectedPainting.dimensions}
              </p>
              <p className="font-serif text-foreground/80 italic mt-6">
                {selectedPainting.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
