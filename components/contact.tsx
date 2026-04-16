import React from "react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Get in Touch
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8">
          Contact
        </h2>
        <div className="space-y-6 text-muted-foreground max-w-xl">
          <p>
            For inquiries about commissions, exhibitions, or available works, please get in touch by email.
          </p>

          <div className="space-y-4 pt-4">
            <div>
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-1">
                Email
              </p>
              <a
                href="mailto:studio@maryobrien.art"
                className="text-foreground hover:text-accent transition-colors"
              >
                studio@maryobrien.art
              </a>
            </div>
            <div>
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-1">
                Studio Location
              </p>
              <p className="text-foreground">West Cork, Ireland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
