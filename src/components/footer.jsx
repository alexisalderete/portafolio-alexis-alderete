import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <BsGithub className="h-7 w-7" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-7 w-7" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">© 2025 Programmer's Portfolio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
