// FloatingDock.jsx
import { Home, Github, Linkedin, FileText } from "lucide-react";

export default function FloatingDock() {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 
                    flex items-center gap-4 bg-white shadow-lg rounded-full px-6 py-3
                    border border-gray-200 z-50"
    >
      <a href="#home" className="p-2 hover:text-blue-600 transition">
        <Home size={22} />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        className="p-2 hover:text-blue-600 transition"
      >
        <Github size={22} />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        className="p-2 hover:text-blue-600 transition"
      >
        <Linkedin size={22} />
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        className="p-2 hover:text-blue-600 transition"
      >
        <FileText size={22} />
      </a>
    </div>
  );
}
