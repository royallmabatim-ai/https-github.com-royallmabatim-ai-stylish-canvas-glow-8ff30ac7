import { MessageCircle } from "lucide-react";

const WhatsAppButton = (): JSX.Element => (
  <a
    href="https://wa.me/254734753416"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] text-primary-foreground rounded-full p-4 shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
    aria-label="Chat with us on WhatsApp"
    title="Message us on WhatsApp"
  >
    <MessageCircle className="h-6 w-6" aria-hidden="true" />
  </a>
);

export default WhatsAppButton;
