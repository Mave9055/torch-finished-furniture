import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Flame, Hammer, Leaf } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Design Philosophy: Rustic Premium
 * - Warm, earthy color palette (burnt orange, charcoal, cream)
 * - Serif typography (Playfair Display for headlines, Lora for body)
 * - Generous whitespace and asymmetric layouts
 * - Emphasis on craftsmanship and authenticity
 * - Minimal fluff, direct and honest copy
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    itemType: "",
    dimensions: "",
    message: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.itemType) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Request submitted! We'll be in touch within 48 hours.");
    setFormData({ name: "", email: "", itemType: "", dimensions: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold font-serif text-primary">Hand-Forged</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#process" className="hover:text-primary transition">
              Process
            </a>
            <a href="#products" className="hover:text-primary transition">
              Products
            </a>
            <a href="#custom" className="hover:text-primary transition">
              Custom Build
            </a>
            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
          {/* Hero Image */}
          <div className="relative h-96 lg:h-auto order-1 lg:order-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031429359/3fbYeme7dA5XL3T3fQBHw7/hero-torch-wood-JuCtPkuSosaJYrsR9V6ekU.webp"
              alt="Torch-finished wood grain detail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 py-12 lg:py-0 order-2 lg:order-1 bg-background">
            <div className="max-w-lg">
              <p className="text-primary font-semibold tracking-wide mb-4">HANDCRAFTED IN CLARKSVILLE, AR</p>
              <h1 className="mb-6 leading-tight">Hand-Forged Furniture, Built for Life.</h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We build solid wood furniture with a timeless, torch-finished (shou sugi ban) style. Each piece is crafted by hand to be the last you'll ever need to buy.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="#custom">Request Custom Build</a>
                </Button>
                <Button size="lg" variant="outline">
                  <a href="#products">View Products</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold tracking-wide mb-4">THE CRAFT</p>
            <h2 className="mb-6">The Art of the Flame: Our Shou Sugi Ban Process</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just build furniture; we forge it. Our process is rooted in the ancient Japanese technique of <em>shou sugi ban</em>, where wood is preserved and finished by charring it with a torch. This creates a stunning, unique grain and makes the wood more durable and resistant to fire and pests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground">
                  <Leaf className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Select the Wood</h3>
                <p className="text-muted-foreground">We start with hand-picked, solid wood, chosen for its strength and character.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground">
                  <Flame className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Torch Finish</h3>
                <p className="text-muted-foreground">Each piece is carefully torched to bring out the natural grain and create a protective char layer.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground">
                  <Hammer className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Hand-Rubbed Seal</h3>
                <p className="text-muted-foreground">We finish with a hand-rubbed, all-natural oil to seal the wood and give it a subtle, honest sheen.</p>
              </div>
            </div>
          </div>

          {/* Process Image */}
          <div className="mt-16 rounded-lg overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031429359/3fbYeme7dA5XL3T3fQBHw7/artisan-workspace-6KQKUvsdrkWXQXB4zDUaAm.webp"
              alt="Torch-finishing process"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-semibold tracking-wide mb-4">STANDARD COLLECTION</p>
            <h2 className="mb-6">Our Standard Collection</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              While most of our work is custom, we offer a few standard pieces that are always in demand. All prices are for local pickup in Clarksville, AR. Shipping is available for smaller items.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-16">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left font-semibold">Item</th>
                  <th className="px-6 py-4 text-right font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/30 transition">
                  <td className="px-6 py-4">Coasters (Set of 4)</td>
                  <td className="px-6 py-4 text-right">$20</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition">
                  <td className="px-6 py-4">Candle Holders</td>
                  <td className="px-6 py-4 text-right">$30+</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition">
                  <td className="px-6 py-4">Key Racks</td>
                  <td className="px-6 py-4 text-right">$45+</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition">
                  <td className="px-6 py-4">End Tables</td>
                  <td className="px-6 py-4 text-right">$180+</td>
                </tr>
                <tr className="hover:bg-muted/30 transition">
                  <td className="px-6 py-4">Coffee Tables</td>
                  <td className="px-6 py-4 text-right">$250+</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Product Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031429359/3fbYeme7dA5XL3T3fQBHw7/product-collection-FDYQCZbDYRmTHqHVgfNfNe.webp"
              alt="Product collection"
              className="w-full h-80 object-cover rounded-lg"
            />
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031429359/3fbYeme7dA5XL3T3fQBHw7/coffee-table-showcase-ExabvbN7Gvjbxs2oqk7yae.webp"
              alt="Coffee table showcase"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#custom">Request a Custom Build</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Order Form Section */}
      <section id="custom" className="py-20 bg-muted/30">
        <div className="container max-w-2xl">
          <div className="mb-12">
            <p className="text-primary font-semibold tracking-wide mb-4">CUSTOM BUILDS</p>
            <h2 className="mb-6">Have an Idea? Let's Build It.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in custom builds. If you have a specific size, style, or piece of furniture in mind, we'd love to hear from you. Fill out the form below, and we'll get back to you within 48 hours to discuss your project.
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="pt-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="itemType">Item Type *</Label>
                    <Input
                      id="itemType"
                      name="itemType"
                      value={formData.itemType}
                      onChange={handleFormChange}
                      placeholder="e.g., Coffee Table, Bookshelf"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dimensions">Dimensions</Label>
                    <Input
                      id="dimensions"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleFormChange}
                      placeholder="L x W x H (inches)"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell us about your project, style preferences, or any special requests..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-primary font-semibold tracking-wide mb-4">GET IN TOUCH</p>
            <h2 className="mb-6">We're Here to Help</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a small shop, and we like it that way. For general inquiries or to schedule a time to see our work in person, please reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:contact@handforged.com" className="text-primary hover:underline">
                contact@handforged.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+15015551234" className="text-primary hover:underline">
                (501) 555-1234
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Clarksville, AR<br />By appointment only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-primary" />
              <p className="font-semibold">Hand-Forged Furniture</p>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 Hand-Forged Furniture. All rights reserved.</p>
            <p className="text-sm text-muted-foreground">Clarksville, Arkansas</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
