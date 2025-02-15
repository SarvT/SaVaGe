import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to SVG Wizard</h1>
        <p className="text-xl mb-8">Create, edit, and animate SVGs with ease using our interactive editor.</p>
        <Link href="/editor" passHref>
          <Button size="lg">Get Started</Button>
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Create SVGs</h3>
            <p>Design your own SVGs from scratch using our intuitive tools.</p>
          </div>
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Edit Existing SVGs</h3>
            <p>Upload and modify your existing SVG files with ease.</p>
          </div>
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Animate SVGs</h3>
            <p>Bring your SVGs to life with our animation tools.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

