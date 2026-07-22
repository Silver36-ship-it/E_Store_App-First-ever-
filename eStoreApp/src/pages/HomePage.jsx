import homePics from "../image/HomePagePics2.png";
import { useGetAllProductsQuery } from "../features/product/ProductApi";
import ProductCard from "../components/ProductCard";
import { Mail, Sparkles, ArrowUpRight } from "lucide-react";
import image1 from "../image/browseByStyle1.png";
import image2 from "../image/browseByStyle2.png";
import image3 from "../image/browseByStyle3.png";
import image4 from "../image/browseByStyle4.png";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

const BrowseByStyleimages = [
  {
    label: "Beauty",
    category: "beauty",
    image: image1,
  },
  {
    label: "Fragrances",
    category: "fragrances",
    image: image2,
  },
  {
    label: "Furniture",
    category: "furniture",
    image: image3,
  },
  {
    label: "Groceries",
    category: "groceries",
    image: image4,
  },
];

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    comment:
      "I'm blown away by the quality and style of the clothes i received from Silver.co. From casual wear to elegant dresses, every piece i've bought has exceeded my expectations. ",
  },
  {
    name: "Alex K.",
    rating: 4,
    comment:
      "Finding clothes that align with my personal style used to be a challenge until i discovered Silver.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    rating: 5,
    comment:
      "As someone who is always on the lookout for unique fashion pieces,I'm thrilled to have stumbled upon Silver.co. The Selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];
const HomePage = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();
  if (isLoading) return <p>Loading page...</p>;
  if (error) return <p>Error occured</p>;
  console.log(data.products);

  const newArrivals = data?.products?.slice(0, 4);
  const topSelling = data?.products?.slice(5, 9);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-white px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-fuchsia-600 mb-6">
                <Sparkles className="w-4 h-4" /> Curated for your vibe
              </div>
              <h2 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight">
                FIND CLOTHES
                <br />
                THAT MATCHES
                <br />
                YOUR STYLE
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed">
                Browse through our diverse range of maticulously crafted
                garments,designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Link
                to="#new-arrivals"
                className="juicy-button inline-flex items-center gap-3 gradient-ink text-white px-8 py-4 rounded-full font-bold"
              >
                Shop the drop <ArrowUpRight className="w-5 h-5" />
              </Link>

              <div className="flex gap-8 mt-12 flex-wrap">
                <div>
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-gray-600 text-sm">Curated brands</div>
                </div>
                <div className="border-l pl-8">
                  <div className="text-3xl font-bold">2,000+</div>
                  <div className="text-gray-600 text-sm">
                    High Quality Products
                  </div>
                </div>
                <div className="border-l pl-8">
                  <div className="text-3xl font-bold">30,000+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[28rem] flex items-center justify-center">
              <div className="absolute w-72 h-72 rounded-full bg-fuchsia-300/40 blur-3xl" />
              <div className="glass-card relative rounded-[2.5rem] h-[30rem] w-full max-w-md overflow-hidden flex items-end justify-center">
                <img
                  src={homePics}
                  alt="Fashion models"
                  className="relative z-10 max-w-none w-[145%] object-contain translate-y-10"
                />
                <span className="absolute top-7 right-7 z-20 rounded-full bg-white/75 px-4 py-2 text-sm font-bold shadow-lg">
                  #FreshFits
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-ink text-white py-8 relative ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap gap-8">
            {brands.map((brand) => (
              <div key={brand} className="text-2xl font-bold">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="new-arrivals"
        className="container mx-auto px-4 py-20 relative"
      >
        <p className="text-center text-fuchsia-500 text-sm font-bold uppercase tracking-[.2em] mb-3">
          Just landed
        </p>
        <h2 className="section-heading font-bold text-center mb-12">
          NEW ARRIVALS
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="glass-card px-12 py-3 rounded-full font-semibold hover:bg-white transition">
            View All
          </button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <p className="text-center text-fuchsia-500 text-sm font-bold uppercase tracking-[.2em] mb-3">
          Most loved
        </p>
        <h2 className="section-heading font-bold text-center mb-12">
          TOP SELLING
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {topSelling.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="glass-card px-12 py-3 rounded-full font-semibold hover:bg-white transition">
            View All
          </button>
        </div>
      </section>

      <section
        id="styles"
        className="glass-card rounded-[2.5rem] p-8 lg:p-16 container mx-auto px-4 py-16"
      >
        <div className="p-8 lg:p-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            BROWSE BY DRESS STYLE
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {BrowseByStyleimages.map((item) => (
            <Link
              key={item.category}
              to={`/category/${item.category}`}
              className="relative h-80 rounded-xl overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent p-6 flex items-end">
                <span className="text-white text-2xl font-bold">
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="reviews" className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-heading font-bold">OUR HAPPY CUSTOMERS</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="glass-card rounded-3xl p-7">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-1xl font-bold">{review.name}</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="gradient-ink text-white rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold max-w-md">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="w-full lg:w-auto space-y-4">
            <div className="flex items-center bg-white rounded-full px-6 py-3 gap-3">
              <Mail className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent outline-none text-black w-full lg:w-64"
              />
            </div>
            <button className="w-full bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
