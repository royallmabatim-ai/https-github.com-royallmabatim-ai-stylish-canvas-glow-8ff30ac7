import { MessageCircle, Phone } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/254755949858", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+254755949858", "_self");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={handleCall}
        className="bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-glow"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </button>
      <button
        onClick={handleWhatsApp}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
