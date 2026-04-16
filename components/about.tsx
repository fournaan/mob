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
                My work explores the dramatic interplay between light and darkness, 
                from moody atmospheric seascapes to bold expressionist portraits. 
                I am drawn to moments where emotion transcends the ordinary.
              </p>
              <p>
                Working primarily in oils, I seek to convey not just the visual spectacle 
                of my subjects, but their emotional resonance—the awe of turbulent seas, 
                the complexity of human expression, and the warmth of Mediterranean light.
              </p>
              <p>
                Whether painting on windswept coastlines or in my studio, 
                each piece begins with careful observation and a deep connection 
                to the subject. These moments of presence inform the atmospheric 
                depth and authentic emotion that define my work.
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
