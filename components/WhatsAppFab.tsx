"use client";
import { whatsAppUrl } from "@/lib/whatsapp";

/**
 * Floating WhatsApp Action Button — fixed bottom-left corner.
 * Visible on all screen sizes (sits above the mobile action bar on small screens).
 */
export default function WhatsAppFab() {
  return (
    <a
      href={whatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-20 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 md:bottom-6 md:left-6 md:h-16 md:w-16"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* WhatsApp SVG icon — official brand mark */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 fill-white md:h-8 md:w-8"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.468 2.027 7.768L0 32l8.437-2.013A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.773-1.847l-.485-.287-5.01 1.196 1.224-4.874-.316-.5A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.969 13.333 13.333S23.364 29.333 16 29.333zm7.313-9.88c-.4-.2-2.368-1.168-2.736-1.302-.368-.133-.636-.2-.904.2-.267.4-1.034 1.302-1.268 1.568-.233.267-.467.3-.867.1-.4-.2-1.69-.624-3.22-1.987-1.19-1.062-1.994-2.374-2.228-2.774-.233-.4-.025-.616.176-.815.18-.179.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.904-2.18-1.237-2.985-.326-.784-.657-.677-.904-.69-.233-.013-.5-.016-.767-.016-.267 0-.7.1-1.067.5-.367.4-1.4 1.368-1.4 3.334 0 1.966 1.434 3.866 1.634 4.133.2.267 2.822 4.308 6.836 6.04.955.412 1.7.658 2.282.843.958.305 1.832.262 2.522.159.77-.115 2.368-.968 2.702-1.903.333-.934.333-1.735.233-1.903-.1-.167-.367-.267-.767-.467z" />
      </svg>

      {/* Ripple pulse ring */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full opacity-40 group-hover:animate-ping"
        style={{ backgroundColor: "#25D366" }}
      />
    </a>
  );
}
