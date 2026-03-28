import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  whatsappMessage: string;
}

const ProductCard = ({ image, title, description, price, whatsappMessage }: ProductCardProps) => {
  const handleQuote = () => {
    const message = encodeURIComponent(`Hello, I am interested in ${whatsappMessage}.`);
    window.open(`https://wa.me/254755949858?text=${message}`, '_blank');
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-primary hover:shadow-glow hover:-translate-y-2 group animate-scale-in">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2 text-primary">{title}</CardTitle>
        <CardDescription className="mb-4">{description}</CardDescription>
        <p className="text-2xl font-bold text-primary">{price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleQuote}
          className="w-full gradient-primary hover:opacity-90 transition-smooth shadow-md hover:shadow-lg hover:scale-105"
        >
          Add to Quote
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
