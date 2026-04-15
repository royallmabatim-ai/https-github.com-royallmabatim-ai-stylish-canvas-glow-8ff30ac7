import { Phone } from "lucide-react";

const FloatingCallButton = (): JSX.Element => (
  <a
    href="tel:+254734753416"
    className="fixed bottom-6 left-6 z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:scale-110 transition-transform animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    aria-label="Call Boma Mabati at +254 734 753 416"
    title="Call us now"
  >
    <Phone className="h-6 w-6" aria-hidden="true" />
  </a>
);

export default FloatingCallButton;
