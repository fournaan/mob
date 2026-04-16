import { Metadata } from "next"
import { GalleryPageContent } from "@/components/gallery-page-content"

export const metadata: Metadata = {
  title: "Gallery | Mary O'Brien",
  description: "Explore the complete collection of original oil paintings by Mary O'Brien, featuring seascapes, portraits, and coastal scenes.",
}

export default function GalleryPage() {
  return <GalleryPageContent />
}
