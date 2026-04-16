export const paintings = [
  {
    id: 1,
    title: "Distant Horizon",
    year: "2025",
    medium: "Acrylic on canvas",
    dimensions: '36" × 48"',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-27%20at%2001.51.12-q6udMmdgNI7BTMtaBXrumj3VnBUAYI.jpeg",
    description: "An atmospheric seascape capturing the misty boundary between sea and sky, with soft blues and greens merging into infinite distance.",
    category: "Seascape",
  },
  {
    id: 2,
    title: "Portrait in Light and Shadow",
    year: "2025",
    medium: "Acrylic on canvas",
    dimensions: '24" × 30"',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-16%20at%2007.50.15-aOHVmNrq7DYA5GGxJUc9P9p110uzjT.jpeg",
    description: "A bold expressionist portrait exploring the duality of human nature through dramatic contrasts of warm and cool tones.",
    category: "Portrait",
  },
  {
    id: 3,
    title: "Mediterranean Coast",
    year: "2025",
    medium: "Acrylic on canvas",
    dimensions: '40" × 50"',
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-07%20at%2023.05.22-LJywJ95NsHObf4kO3AWLpGViNpfPLP.jpeg",
    description: "A vibrant coastal village scene where golden storm clouds give way to clear blue skies, with sailboats dotting the turquoise waters.",
    category: "Coastal",
  },
]

export type Painting = typeof paintings[0]
