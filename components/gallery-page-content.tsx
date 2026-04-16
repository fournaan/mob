"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { X, ArrowLeft } from "lucide-react"
import { paintings, type Painting } from "@/lib/paintings"

const categories = ["All", ...Array.from(new Set(paintings.map(p => p.category)))]

export function GalleryPageContent() {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPaintings = activeCategory === "All" 
    ? paintings 
    : paintings.filter(p => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-widest uppercase">Back</span>
          </Link>
          <Link href="/" className="font-serif text-xl tracking-wide text-foreground">
            Mary O&apos;Brien
          </Link>
          <div className="w-16" />
        </nav>
      </header>

      {/* Main content */}
      <div className="pt-24 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Page header */}
          <div className="mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Complete Collection
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-6">
              Gallery
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              Explore my complete collection of original oil paintings, from atmospheric seascapes 
              to bold expressionist portraits and vibrant coastal scenes.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm tracking-widest uppercase transition-colors ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPaintings.map((painting) => (
              <button
                key={painting.id}
                onClick={() => setSelectedPainting(painting)}
                className="group text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={painting.image}
                    alt={painting.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                </div>
                <div className="mt-4">
                  <span className="text-xs tracking-[0.2em] uppercase text-accent">
                    {painting.category}
                  </span>
                  <h3 className="font-serif text-xl text-foreground mt-1">
                    {painting.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {painting.year} · {painting.medium}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Empty state */}
          {filteredPaintings.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No paintings found in this category.</p>
            </div>
          )}
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
              <span className="text-xs tracking-[0.2em] uppercase text-accent">
                {selectedPainting.category}
              </span>
              <h3 className="font-serif text-3xl text-foreground mt-2 mb-2">
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
              <Link
                href="#contact"
                className="inline-block mt-8 px-6 py-3 bg-foreground text-background text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors"
              >
                Inquire About This Piece
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
