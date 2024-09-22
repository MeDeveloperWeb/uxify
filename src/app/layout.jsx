import NavBar from "@/components/navBar";
import "./globals.css";

export const metadata = {
  title: "Crafting Digital Experiences | UXpo - Get Your Business Online",
  description:
    "UXpo helps businesses thrive in the digital world with expert website development services. We create smooth, modern digital experiences tailored to your needs. Get your business online today with UXpo.",
  keywords:
    "website development, digital business solutions, UXpo, online business, digital experiences, business websites, web design, get business online, modern web solutions",
  openGraph: {
    title: "UXpo - Websites & Applications",
    description: "Take your business online with our custom solutions.",
    url: "https://uxpo.in",
    images: [
      {
        url: "https://uxpo.in/poster.png",
        width: 800,
        height: 600,
        alt: "UXpo Banner"
      }
    ]
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UXpo",
  url: "https://uxpo.in",
  logo: "https://uxpo.in/logo.png",
  description:
    "We help businesses go online by creating websites and applications. UXpo helps businesses thrive in the digital world with expert website development services. We create smooth, modern digital experiences tailored to your needs. Get your business online today with UXpo."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gradient-to-br from-indigo-700 to-purple-800`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <header className="text-white">
          <NavBar />
        </header>
        {children}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2024 UXpo. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
