import NavBar from "@/components/navBar";
import "./globals.css";

export const metadata = {
  title: "UXify",
  description: "Get your business online"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gradient-to-br from-indigo-700 to-purple-800`}
      >
        <header className="text-white">
          <NavBar />
        </header>
        {children}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2024 UXify. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
