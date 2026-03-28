import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, CreditCard, CheckCircle } from "lucide-react";

const DeliveryPayment = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Delivery & Payment</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We make it easy to get your construction materials — fast, secure, and hassle-free.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-primary transition-all duration-300">
            <CardHeader>
              <Truck className="h-10 w-10 text-primary mb-2" />
              <CardTitle className="text-primary">Delivery Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Same-day delivery</strong> within Athi River & Nairobi (orders before 10 AM)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Next-day delivery</strong> across major towns in Kenya</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Bulk orders delivered directly to site with offloading support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Real-time tracking and delivery updates via WhatsApp</span>
                </li>
              </ul>
              <p className="mt-4 text-sm italic text-primary font-medium">
                *Free Delivery For Bulky Goods
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-primary transition-all duration-300">
            <CardHeader>
              <CreditCard className="h-10 w-10 text-primary mb-2" />
              <CardTitle className="text-primary">Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>M-Pesa Paybill</strong> (Business Number: Available on request)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Bank Transfer (Equity, KCB, Co-op Bank)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Cash on delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Invoice & LPO support for contractors and institutions</span>
                </li>
              </ul>
              <p className="mt-4 text-sm italic text-muted-foreground">
                All payments are secure and verified before dispatch.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="gradient-primary hover:opacity-90 transition-smooth shadow-md">
            <a href="#contact">Request Delivery Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPayment;
