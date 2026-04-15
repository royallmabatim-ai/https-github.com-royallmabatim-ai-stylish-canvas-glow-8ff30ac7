import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validation";
import { useQuoteSubmit } from "@/hooks/use-quote-submit";
import { useSeo } from "@/hooks/use-seo";
import { useToast } from "@/components/ui/use-toast";
import heroImg from "@/assets/hero-banner.jpg";

const HeroSection = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      wantCallback: false,
    },
  });

  const { isLoading, isSuccess, error, submit: submitQuote } = useQuoteSubmit();
  const { toast } = useToast();

  useSeo({
    title: "Affordable Mabati Sheets | Boma Mabati",
    description: "Quality roofing sheets at best prices in Kenya. Free delivery. KEBS certified.",
    ogTitle: "Affordable, Durable Mabati Roofing Sheets in Nairobi",
    ogType: "website",
  });

  const onSubmit = async (data: QuoteFormData): Promise<void> => {
    try {
      await submitQuote(data);
      reset();
      toast({
        title: "Quote Submitted!",
        description: "We'll contact you within 2 hours with your personalized quote.",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: error || "Failed to submit quote. Please try again.",
        variant: "destructive",
      });
    }
  };

  const QuoteForm = (): JSX.Element => (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input 
          placeholder="Your Full Name" 
          {...register("name")}
          className="bg-background"
          disabled={isLoading}
          aria-label="Full name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <Input 
          type="email" 
          placeholder="Email Address" 
          {...register("email")}
          className="bg-background"
          disabled={isLoading}
          aria-label="Email address"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <Input 
            type="tel" 
            placeholder="Phone Number" 
            {...register("phone")}
            className="bg-background"
            disabled={isLoading}
            aria-label="Phone number"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <select 
            {...register("productInterest")}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground disabled:opacity-50"
            disabled={isLoading}
            aria-label="Product interest"
          >
            <option value="">Select Product</option>
            <option value="corrugated">Corrugated</option>
            <option value="box-profile">Box Profile</option>
            <option value="colored">Colored</option>
            <option value="tile">Tile</option>
            <option value="vass">Vass</option>
            <option value="euro-z">Euro Z</option>
          </select>
          {errors.productInterest && <p className="text-red-500 text-xs mt-1">{errors.productInterest.message}</p>}
        </div>
      </div>

      <div>
        <Input 
          placeholder="Delivery Location (e.g., Nairobi)" 
          {...register("location")}
          className="bg-background"
          disabled={isLoading}
          aria-label="Delivery location"
        />
        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
      </div>

      <div>
        <Textarea 
          placeholder="Additional Requirements" 
          rows={3} 
          {...register("requirements")}
          className="bg-background"
          disabled={isLoading}
          aria-label="Additional requirements"
        />
        {errors.requirements && <p className="text-red-500 text-xs mt-1">{errors.requirements.message}</p>}
      </div>

      <div className="flex items-center gap-2">
        <Checkbox 
          id="callback" 
          {...register("wantCallback")}
          disabled={isLoading}
          aria-label="Yes, I want to receive a call with my quote"
        />
        <label htmlFor="callback" className="text-sm text-muted-foreground cursor-pointer">
          Yes, I want a callback
        </label>
      </div>

      {error && <p className="text-red-500 text-xs text-center">{error}</p>}
      {isSuccess && <p className="text-green-600 text-xs text-center">Quote submitted successfully!</p>}

      <Button 
        type="submit"
        disabled={isLoading}
        className="w-full bg-secondary text-secondary-foreground font-heading font-semibold hover:bg-secondary/90 text-base py-5"
        aria-busy={isLoading}
      >
        {isLoading ? "Submitting..." : "Get My Free Quote"}
      </Button>
    </form>
  );

  return (
    <section className="relative">
      <div className="relative h-[520px] md:h-[580px]">
        <img
          src={heroImg}
          alt="Affordable durable mabati roofing sheets in Nairobi Kenya"
          className="w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-lg text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-4">
                Affordable, Durable Mabati in Nairobi
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 font-body leading-relaxed">
                We supply high‑quality roofing sheets at the best prices in Kenya. Strong, stylish, and built to last.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#quote-form" className="btn-orange rounded-full text-base px-8 py-3">
                  Request a Quote
                </a>
                <a href="tel:+254734753416" className="rounded-full text-base px-8 py-3 border-2 border-primary-foreground/40 text-primary-foreground font-heading font-semibold hover:bg-primary-foreground/10 transition-colors">
                  Call Now: +254 734 753 416
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form - Desktop overlay */}
      <div id="quote-form" className="absolute top-6 right-4 md:right-8 lg:right-16 xl:right-24 w-[340px] md:w-[380px] bg-background/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 hidden md:block border border-border">
        <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-5">Get a Free Quote</h2>
        <QuoteForm />
      </div>

      {/* Mobile Quote Form */}
      <div className="md:hidden bg-background p-6">
        <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-5">Get a Free Quote</h2>
        <QuoteForm />
      </div>
    </section>
  );
};

export default HeroSection;
