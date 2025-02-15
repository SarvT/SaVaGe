"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { toast } from "@/components/ui/use-toast"

export default function SvgEditor() {
  const [svgCode, setSvgCode] = useState<string>("")
  const [animationDuration, setAnimationDuration] = useState<number>(1)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.innerHTML = svgCode
    }
  }, [svgCode])

  const handleSvgCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSvgCode(e.target.value)
  }

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        setSvgCode(content)
      }
      reader.readAsText(file)
    }
  }

  const handleSave = () => {
    const blob = new Blob([svgCode], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "svg-wizard-creation.svg"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast({
      title: "SVG Saved",
      description: "Your SVG has been downloaded successfully.",
    })
  }

  const handleAnimate = () => {
    if (svgRef.current) {
      const elements = svgRef.current.querySelectorAll("*")
      elements.forEach((el) => {
        el.setAttribute("style", `transition: all ${animationDuration}s ease-in-out;`)
        setTimeout(() => {
          el.setAttribute("transform", "scale(1.1) rotate(5deg)")
        }, 100)
        setTimeout(() => {
          el.setAttribute("transform", "scale(1) rotate(0deg)")
        }, animationDuration * 1000)
      })
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">SVG Code</h2>
        <Textarea
          value={svgCode}
          onChange={handleSvgCodeChange}
          placeholder="Paste your SVG code here..."
          className="h-64 mb-4"
        />
        <div className="flex gap-4 mb-4">
          <Input type="file" accept=".svg" onChange={handleUpload} />
          <Button onClick={handleSave}>Save SVG</Button>
        </div>
        <div>
          <label htmlFor="animation-duration" className="block mb-2">
            Animation Duration (seconds)
          </label>
          <Slider
            id="animation-duration"
            min={0.1}
            max={5}
            step={0.1}
            value={[animationDuration]}
            onValueChange={(value) => setAnimationDuration(value[0])}
          />
        </div>
        <Button onClick={handleAnimate} className="mt-4">
          Animate SVG
        </Button>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">SVG Preview</h2>
        <div className="border p-4 h-64 overflow-auto">
          <svg ref={svgRef} width="100%" height="100%"></svg>
        </div>
      </div>
    </div>
  )
}

