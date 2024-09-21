import NavBar from "@/components/navBar";
import "./globals.css";

export const metadata = {
  title: "UXify",
  description: "Get your business online"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-gray-50`}>
        <header className="bg-gradient-to-tr from-indigo-600 to-purple-700 text-white">
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
