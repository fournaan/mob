export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-8 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-serif text-lg text-foreground">
          Mary O'Brien
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  )
}
