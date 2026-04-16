"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8">
              Contact
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                For inquiries about commissions, exhibitions, or available works, 
                please reach out using the form or contact details below.
              </p>
              
              <div className="space-y-4 pt-6">
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
                  <p className="text-foreground">
                    West Cork, Ireland
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 pt-6">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            {formSubmitted ? (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <p className="font-serif text-2xl text-foreground mb-2">Thank you</p>
                  <p className="text-muted-foreground">
                    Your message has been sent. I will respond within 48 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <FieldGroup>
                  <Field>
                    <FieldLabel className="text-sm tracking-widest uppercase text-muted-foreground">
                      Name
                    </FieldLabel>
                    <Input 
                      type="text"
                      required
                      className="bg-card border-border focus:border-accent"
                    />
                  </Field>
                  
                  <Field>
                    <FieldLabel className="text-sm tracking-widest uppercase text-muted-foreground">
                      Email
                    </FieldLabel>
                    <Input 
                      type="email"
                      required
                      className="bg-card border-border focus:border-accent"
                    />
                  </Field>
                  
                  <Field>
                    <FieldLabel className="text-sm tracking-widest uppercase text-muted-foreground">
                      Phone Number
                    </FieldLabel>
                    <Input 
                      type="tel"
                      className="bg-card border-border focus:border-accent"
                      placeholder="Optional"
                    />
                  </Field>
                  
                  <Field>
                    <FieldLabel className="text-sm tracking-widest uppercase text-muted-foreground">
                      Subject
                    </FieldLabel>
                    <Input 
                      type="text"
                      required
                      className="bg-card border-border focus:border-accent"
                    />
                  </Field>
                  
                  <Field>
                    <FieldLabel className="text-sm tracking-widest uppercase text-muted-foreground">
                      Message
                    </FieldLabel>
                    <Textarea 
                      rows={5}
                      required
                      className="bg-card border-border focus:border-accent resize-none"
                    />
                  </Field>
                </FieldGroup>
                
                <Button 
                  type="submit"
                  className="w-full bg-foreground text-background hover:bg-foreground/90 tracking-widest uppercase text-sm py-6"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
