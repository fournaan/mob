import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-27%20at%2001.51.12-q6udMmdgNI7BTMtaBXrumj3VnBUAYI.jpeg"
        alt="Atmospheric seascape painting by Mary O'Brien"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Seascape Artist
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground tracking-tight text-balance">
          Mary O&apos;Brien
        </h1>
        <p className="mt-6 max-w-xl font-serif text-lg md:text-xl text-muted-foreground italic">
          Capturing the raw power and haunting beauty of stormy seas
        </p>
        
        <a
          href="#gallery"
          className="mt-12 inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors duration-300"
        >
          View Collection
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
