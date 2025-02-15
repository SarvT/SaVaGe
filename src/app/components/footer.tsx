import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p>&copy; 2025 SVG Wizard. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer

