"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Mail, Leaf, ShoppingCart } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="mediumLarge"
      background="none"
      cardStyle="soft-shadow"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="FreshMart Grocery"
          navItems={[
            { name: "Shop", id: "products" },
            { name: "Categories", id: "categories" },
            { name: "Weekly Deals", id: "specials" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Open Daily 7AM - 10PM"
          bottomRightText="hello@freshmart.local"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="FreshMart"
          description="Your neighborhood grocery destination for fresh, local, and organic products. Weekly specials on seasonal produce and premium meats."
          buttons={[
            { text: "Shop Now", href: "#products" },
            { text: "View Weekly Deals", href: "#specials" }
          ]}
          slides={[
            { imageSrc: "http://img.b2bpic.net/free-photo/woman-supermarket-beautiful-young-woman-shopping-supermarket-buying-fresh-organic-vegetables_169016-3365.jpg", imageAlt: "grocery store fresh produce seasonal sale farmers market organic vegetables" }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Featured Products"
          description="Fresh, carefully selected items from local and trusted suppliers"
          tag="New Arrivals"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
          products={[
            {
              id: "1",              name: "Organic Red Apples",              price: "$4.99/lb",              variant: "Fresh • Organic • Local",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-bunch-tasty-looking-red-apples_181624-32229.jpg",              imageAlt: "Fresh organic red apples"
            },
            {
              id: "2",              name: "Fresh Broccoli Crown",              price: "$3.49",              variant: "Organic • Locally Grown",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-green-broccoli-ripe-fresh_140725-13488.jpg",              imageAlt: "Fresh green broccoli"
            },
            {
              id: "3",              name: "Premium Salmon Fillet",              price: "$12.99/lb",              variant: "Wild Caught • Fresh",              imageSrc: "http://img.b2bpic.net/free-photo/pieces-raw-steak-from-fresh-salmon-lying-ice-counter_169016-36752.jpg",              imageAlt: "Fresh salmon fillet"
            },
            {
              id: "4",              name: "Organic Whole Milk",              price: "$5.49",              variant: "Non-GMO • Farm Fresh • 1L",              imageSrc: "http://img.b2bpic.net/free-photo/dairy-products_114579-8756.jpg",              imageAlt: "Fresh organic milk"
            },
            {
              id: "5",              name: "Artisan Sourdough Bread",              price: "$6.99",              variant: "Baked Daily • Local Bakery",              imageSrc: "http://img.b2bpic.net/free-photo/fresh-bread-wooden-spoon-old-wooden-background_169016-3149.jpg",              imageAlt: "Fresh sourdough bread"
            },
            {
              id: "6",              name: "Fresh Orange Juice",              price: "$4.99",              variant: "Cold Pressed • No Added Sugar • 1L",              imageSrc: "http://img.b2bpic.net/free-photo/fresh-juicy-orange-fruit-set-green-nature_1150-17509.jpg",              imageAlt: "Fresh orange juice"
            }
          ]}
        />
      </div>

      <div id="categories" data-section="categories">
        <FeatureCardTwentySix
          title="Shop by Category"
          description="Browse our complete selection of grocery departments"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              title: "Fruits & Vegetables",              description: "Fresh organic produce delivered daily from local farms",              imageSrc: "http://img.b2bpic.net/free-photo/baskets-with-exotic-fruits-supermarket-showcase_169016-36902.jpg",              imageAlt: "Fresh fruits and vegetables",              buttonIcon: ShoppingCart
            },
            {
              title: "Dairy & Eggs",              description: "Premium local and organic dairy products, fresh eggs",              imageSrc: "http://img.b2bpic.net/free-photo/dairy-products_114579-8756.jpg",              imageAlt: "Dairy products",              buttonIcon: ShoppingCart
            },
            {
              title: "Meat & Seafood",              description: "Premium cuts, wild-caught fish, sustainable sourcing",              imageSrc: "http://img.b2bpic.net/free-photo/shop-workers-posing-counter_7502-4771.jpg",              imageAlt: "Fresh meat and seafood",              buttonIcon: ShoppingCart
            },
            {
              title: "Bakery",              description: "Fresh baked goods made daily by our local bakers",              imageSrc: "http://img.b2bpic.net/free-photo/modern-bakery-shop-with-assortment-bread-shelf_169016-37564.jpg",              imageAlt: "Fresh bakery items",              buttonIcon: ShoppingCart
            },
            {
              title: "Beverages",              description: "Organic juices, craft coffee, tea, and refreshing drinks",              imageSrc: "http://img.b2bpic.net/free-photo/meal-different-food-table-dinner-lunch_132075-14557.jpg",              imageAlt: "Beverage selection",              buttonIcon: ShoppingCart
            },
            {
              title: "Snacks & Pantry",              description: "Healthy snacks, organic staples, specialty items",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-cereal-bars-with-almonds-cranberries_23-2148562784.jpg",              imageAlt: "Snacks and pantry items",              buttonIcon: ShoppingCart
            }
          ]}
        />
      </div>

      <div id="specials" data-section="specials">
        <MetricCardEleven
          title="Weekly Specials & Deals"
          description="Amazing discounts on your favorite fresh items this week"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "1",              value: "30% OFF",              title: "Organic Produce",              description: "All organic fruits and vegetables this week",              imageSrc: "http://img.b2bpic.net/free-vector/autumn-sale-banners_23-2147888500.jpg",              imageAlt: "sale banner discount promotion special offer seasonal sale"
            },
            {
              id: "2",              value: "Buy 2 Get 1",              title: "Local Dairy",              description: "Free item on all local dairy products",              imageSrc: "http://img.b2bpic.net/free-vector/autumn-sale-banners_23-2147888500.jpg",              imageAlt: "sale banner discount promotion special offer seasonal sale"
            },
            {
              id: "3",              value: "$3.99/lb",              title: "Premium Salmon",              description: "Wild-caught salmon special pricing",              imageSrc: "http://img.b2bpic.net/free-vector/autumn-sale-banners_23-2147888500.jpg",              imageAlt: "sale banner discount promotion special offer seasonal sale"
            },
            {
              id: "4",              value: "$4.99",              title: "Fresh Bread",              description: "Artisan baked goods daily special",              imageSrc: "http://img.b2bpic.net/free-vector/autumn-sale-banners_23-2147888500.jpg",              imageAlt: "sale banner discount promotion special offer seasonal sale"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="Our Story"
          tagIcon={Leaf}
          title="Bringing Fresh Quality to Your Community"
          description="FreshMart Grocery was founded on a simple belief: every family deserves access to the freshest, highest-quality food at fair prices. We partner directly with local farmers and sustainable suppliers to bring you produce picked at peak ripeness, meats sourced responsibly, and baked goods made fresh daily. For over 15 years, we've been your trusted neighborhood grocer, committed to supporting our community and promoting healthy, sustainable living."
          metrics={[
            { value: "15+", title: "Years Serving Our Community" },
            { value: "100%", title: "Local Farmer Partnerships" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/vegan-shop-client-buys-organic-food_482257-76719.jpg"
          imageAlt="FreshMart Grocery store interior"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Subscribe to Weekly Updates & Specials"
          description="Get exclusive deals, recipes, and updates about new local products delivered to your inbox every week."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime. Your data is secure with us."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Shop",              items: [
                { label: "Fresh Produce", href: "#categories" },
                { label: "Dairy & Eggs", href: "#categories" },
                { label: "Meat & Seafood", href: "#categories" },
                { label: "Bakery", href: "#categories" },
                { label: "Weekly Specials", href: "#specials" }
              ]
            },
            {
              title: "Store Info",              items: [
                { label: "Hours: Mon-Sun 7AM-10PM", href: "#" },
                { label: "Location: 123 Main Street", href: "#" },
                { label: "Phone: (555) 123-4567", href: "#" },
                { label: "Email: info@freshmart.local", href: "#" },
                { label: "About Us", href: "#about" }
              ]
            },
            {
              title: "Follow Us",              items: [
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "Newsletter", href: "#contact" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
          copyrightText="© 2025 FreshMart Grocery. Supporting Local, Delivering Fresh."
        />
      </div>
    </ThemeProvider>
  );
}
