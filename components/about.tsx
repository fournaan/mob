import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-card">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              About the Artist
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8">
              Finding Beauty in Every Moment
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Mary grew up in Skibbereen, West Cork, one of five children in a creative 
                and close-knit family. She studied Commerce at University College Cork 
                and later pursued legal studies at King&apos;s Inns, Dublin.
              </p>
              <p>
                Throughout her life, Mary has been drawn to the seaside, finding endless 
                inspiration in the wild beauty of the Irish coastline. The dramatic interplay 
                of light on water, the power of the Atlantic, and the ever-changing moods 
                of the sea inform her artistic vision.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm">
              <Image
                src="/images/artist-portrait.jpg"
                alt="Mary O'Brien - Artist portrait"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            
            <div className="border-l border-border pl-6">
              <p className="font-serif text-2xl text-foreground italic">
                &ldquo;Every painting is a conversation between light and shadow, between what we see and what we feel.&rdquo;
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-3xl font-serif text-foreground">20+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Creating</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-foreground">150+</p>
                <p className="text-sm text-muted-foreground mt-1">Original Works</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-foreground">40+</p>
                <p className="text-sm text-muted-foreground mt-1">Exhibitions</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-foreground">12</p>
                <p className="text-sm text-muted-foreground mt-1">Countries Collected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
