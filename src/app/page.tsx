
"use client";

import { useEffect, useState } from "react";
import {
  House,
  Compass,
  Utensils,
  Images,
  MapPin,
  ArrowUpRight,
  ArrowDown,
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Menu,
  X,
  Heart,
  Users,
  CalendarDays,
  Expand,
  Star,
} from "lucide-react";

const navItems = [
  { label: "Discover", href: "#discover" },
  { label: "The Menu", href: "#menu" },
  { label: "Our Space", href: "#space" },
  { label: "Events", href: "#events" },
  { label: "The Experience", href: "#experience" },
  { label: "Find Us", href: "#visit" },
];

const foodItems = [
  {
    name: "Chinese Veg Sizzlers",
    type: "PLATTERS",
    category: "Platters",
    price: 400,
    description: "A hearty portion of Gobi Manchurian served with veg fried rice and noodles.",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Chinese Chicken Sizzler",
    type: "PLATTERS",
    category: "Platters",
    price: 460,
    description: "Savor flavorful oyster chicken served with chicken noodles, fried rice, and perfectly fried eggs on top.",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Chicken Steak",
    type: "PLATTERS",
    category: "Platters",
    price: 420,
    description: "Tender, juicy chicken steak served with creamy mashed potatoes and steamed seasonal vegetables. Choice of Sauce: Mushroom, Peppercorn, or Garlic Sauce.",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Chicken Fillet Alakin",
    type: "PLATTERS",
    category: "Platters",
    price: 480,
    description: "Crispy fried chicken fillet served with creamy mashed potatoes and lightly seasoned boiled wedges.",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Continental Chicken Platter",
    type: "PLATTERS",
    category: "Platters",
    price: 520,
    description: "Served with pesto rice, creamy mashed potatoes, and a side of steamed seasonal veggies.",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Davidoff Coffee",
    type: "HOT BREW",
    category: "Hot Brew",
    price: 80,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Espresso",
    type: "HOT BREW",
    category: "Hot Brew",
    price: 90,
    description: "Double Shot",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Cappuccino",
    type: "HOT BREW",
    category: "Hot Brew",
    price: 90,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Caffe Latte",
    type: "HOT BREW",
    category: "Hot Brew",
    price: 120,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Mocha",
    type: "HOT BREW",
    category: "Hot Brew",
    price: 140,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Cold Coffee",
    type: "COLD BREW",
    category: "Cold Brew",
    price: 80,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Iced Lemon Tea",
    type: "COLD BREW",
    category: "Cold Brew",
    price: 90,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Iced Espresso",
    type: "COLD BREW",
    category: "Cold Brew",
    price: 100,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Apple Mint Tea",
    type: "COLD BREW",
    category: "Cold Brew",
    price: 100,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Iced Mocha",
    type: "COLD BREW",
    category: "Cold Brew",
    price: 150,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Cold Coffee with Ice Cream",
    type: "COLD BREW",
    category: "Cold Brew",
    price: 120,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Affogato",
    type: "COLD BREW",
    category: "Cold Brew",
    price: 140,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Fruit Salad",
    type: "DESSERTS",
    category: "Desserts",
    price: 100,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Fruit Salad with Ice Cream",
    type: "DESSERTS",
    category: "Desserts",
    price: 150,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Crepes with Ice Cream",
    type: "DESSERTS",
    category: "Desserts",
    price: 160,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Gulab Jamun with Ice Cream",
    type: "DESSERTS",
    category: "Desserts",
    price: 150,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
  {
    name: "Sizzling Brownie",
    type: "DESSERTS",
    category: "Desserts",
    price: 200,
    description: "",
    image: null,
    ingredients: [],
    protein: "",
    calories: "",
    carbs: "",
    fat: "",
    allergens: "",
  },
];

const galleryItems = [
  {
    image: "cafe-exterior-evening.webp",
    title: "The Bridge After Dark",
    description: "A look at the café exterior as the evening lights come on.",
  },
  {
    image: "cafe-outdoor-seating.webp",
    title: "Open-Air Seating",
    description: "Outdoor tables surrounded by greenery.",
  },
  {
    image: "cafe-interior-feature-wall.webp",
    title: "A Corner to Unwind",
    description: "A warm interior seating corner at The Bridge.",
  },
  {
    image: "cafe-entrance.webp",
    title: "A Warm Welcome",
    description: "The entrance and garden approach.",
  },
  {
    image: "cafe-sign-evening.webp",
    title: "The Bridge Sign",
    description: "The café frontage illuminated in the evening.",
  },
  {
    image: "cafe-interior-seating.webp",
    title: "Inside The Café",
    description: "A view of the indoor seating area.",
  },
  {
    image: "cafe-bookshelf.webp",
    title: "Little Details",
    description: "A closer look at the café's bookshelf corner.",
  },
  {
    image: "coffee-and-momos.webp",
    title: "Coffee & Company",
    description: "A coffee-and-momos spread from the café.",
  },
];

const photo = (filename: string) => `/images/cafe/${filename}`;

const foodGalleryItems = foodItems.filter((food) => food.image);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFood, setSelectedFood] =
    useState<(typeof foodItems)[number] | null>(null);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [activeFoodGallery, setActiveFoodGallery] = useState<number | null>(null);
  const [isNavbarCompact, setIsNavbarCompact] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const delay = prefersReducedMotion ? 250 : 1100;
    const preloaderTimer = window.setTimeout(() => {
      setIsPreloading(false);
    }, delay);

    return () => window.clearTimeout(preloaderTimer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveGallery(null);
        setActiveFoodGallery(null);
      }

      if (activeGallery !== null && event.key === "ArrowRight") {
        setActiveGallery((current) =>
          current === null ? null : (current + 1) % galleryItems.length
        );
      }

      if (activeGallery !== null && event.key === "ArrowLeft") {
        setActiveGallery((current) =>
          current === null
            ? null
            : (current - 1 + galleryItems.length) % galleryItems.length
        );
      }

      if (activeFoodGallery !== null && event.key === "ArrowRight") {
        setActiveFoodGallery((current) =>
          current === null ? null : (current + 1) % foodGalleryItems.length
        );
      }

      if (activeFoodGallery !== null && event.key === "ArrowLeft") {
        setActiveFoodGallery((current) =>
          current === null
            ? null
            : (current - 1 + foodGalleryItems.length) % foodGalleryItems.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGallery, activeFoodGallery, foodGalleryItems.length]);

  useEffect(() => {
    const updateNavbar = () => {
      const scrollY = window.scrollY;
      setIsNavbarCompact(scrollY > 36);
      document.documentElement.style.setProperty(
        "--hero-parallax",
        `${Math.min(scrollY * 0.16, 90)}px`
      );
    };
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    const sectionIds = ["home", "discover", "menu", "space", "events", "experience", "visit"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    const revealElements = document.querySelectorAll(
      ".section, .signature-section, .quote-section, .food-card, .gallery-card, .review-grid article"
    );

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    revealElements.forEach((element) => {
      element.classList.add("scroll-reveal");
      revealObserver.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", updateNavbar);
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [menuSearch, setMenuSearch] = useState("");
  const [showAllMenu, setShowAllMenu] = useState(false);

  const categories = [
    "All",
    ...Array.from(new Set(foodItems.map((food) => food.category))),
  ];

  

  const filteredFoodItems = foodItems.filter((food) => {
    const matchesCategory =
      activeCategory === "All" || food.category === activeCategory;

  const matchesSearch =
    food.name.toLowerCase().includes(menuSearch.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const isDefaultMenuView =
    activeCategory === "All" && menuSearch.trim() === "";

  const visibleFoodItems =
    isDefaultMenuView && !showAllMenu
      ? filteredFoodItems.slice(0, 8)
      : filteredFoodItems;


  return (
    <main>
      {isPreloading && (
        <div className="site-preloader" role="status" aria-label="Loading The Bridge">
          <div className="preloader-mark">
            <Sparkles size={30} strokeWidth={1.4} />
          </div>
          <div className="preloader-brand">THE BRIDGE.</div>
          <div className="preloader-subtitle">RESTO CAFE · MAYANNUR</div>
          <div className="preloader-line">
            <span />
          </div>
        </div>
      )}

      <nav className={`navbar ${isNavbarCompact ? "navbar-compact" : ""}`}>
        <a href="#home" className="brand">
          <span className="brand-symbol">
            <Sparkles size={29} strokeWidth={1.4} />
          </span>
          <span>
            THE BRIDGE.
            <small>RESTO CAFE · MAYANNUR</small>
          </span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#visit" className="nav-cta">
          Visit The Cafe <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={activeSection === item.href.slice(1) ? "active" : ""}
              >
                {item.label} <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}

      <section className="hero" id="home">
        <div className="hero-overlay" />

        {/* Lightweight decorative leaves — hidden from assistive technology */}
        <div className="falling-leaves" aria-hidden="true">
          <span className="falling-leaf falling-leaf-1" />
          <span className="falling-leaf falling-leaf-2" />
          <span className="falling-leaf falling-leaf-3" />
          <span className="falling-leaf falling-leaf-4" />
        </div>

        <div className="hero-content">
          <span className="hero-location">MAYANNUR · OTTAPALAM</span>
          <span className="eyebrow">A LITTLE ESCAPE IN MAYANNUR</span>

          <h1>
            Beyond the
            <br />
            <em>Ordinary.</em>
          </h1>

          <p>
            A place for slow evenings, delicious cravings
            and conversations that last a little longer.
            Discover the café experience at The Bridge.
          </p>

          <div className="hero-actions">
            <a href="#menu" className="button button-light">
              Explore The Menu <ArrowUpRight size={17} />
            </a>

            <a href="#space" className="button button-outline">
              Explore Our Space <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span><i>01</i> GOOD FOOD</span>
          <span><i>02</i> OPEN-AIR AMBIENCE</span>
          <span><i>03</i> GOOD COMPANY</span>
          <span><i>04</i> MAYANNUR</span>
        </div>
        <a className="hero-scroll-cue" href="#discover" aria-label="Scroll to discover">
          <span>SCROLL TO DISCOVER</span>
          <b><ArrowDown size={16} aria-hidden="true" /></b>
        </a>
      </section>

      {/* INTRODUCTION */}

      <section className="intro section" id="discover">
        <div className="intro-image">
          <img
            src={photo("cafe-interior-seating.webp")}
            alt="The Bridge Resto Cafe interior seating"
          />
          <span className="image-label">A MOMENT AWAY FROM THE ORDINARY</span>
        </div>

        <div className="intro-content">
          <span className="eyebrow">THE STORY OF THE BRIDGE</span>

          <h2>
            A Little Escape,
            <br />
            <em>Close to Home.</em>
          </h2>

          <p>
            Near the beautiful surroundings of Mayannoor
            Bridge in Ottapalam, The Bridge Resto Cafe
            brings together the comfort of casual dining,
            a broad café-style menu and a relaxed,
            greenery-oriented atmosphere.
          </p>

          <p>
            Whether it is an evening with friends, a
            family outing or simply a craving for something
            delicious, it is a place to slow down, enjoy
            good food and make time for each other.
          </p>

          <a href="#space" className="text-link">
            Explore The Atmosphere <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* MENU */}

      <section className="menu-section section" id="menu">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A COLLECTION OF CRAVINGS</span>
            <h2>
              Crafted for Every <em>Craving.</em>
            </h2>
          </div>
          <span className="section-note">THE CAFÉ MENU EXPERIENCE</span>
        </div>

        <div className="menu-controls">
      <div className="menu-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`menu-filter ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

  <div className="menu-search">
    <Search size={17} aria-hidden="true" />
    <input
      type="search"
      placeholder="Find your favourite..."
      value={menuSearch}
      onChange={(e) => setMenuSearch(e.target.value)}
      aria-label="Search menu"
    />
  </div>
</div>

        <div className="menu-price-grid">
           {visibleFoodItems.map((food) => (
            <button
              type="button"
              className="menu-price-item"
              key={food.name}
              onClick={() => setSelectedFood(food)}
            >
              <span className="menu-price-copy">
                <strong>{food.name}</strong>
                {food.description && <small>{food.description}</small>}
              </span>
              <span className="menu-price-value">₹{food.price}/-</span>
              <span className="menu-item-arrow" aria-hidden="true">
                <ArrowUpRight size={16} />
              </span>
            </button>
          ))}
        </div>

        {isDefaultMenuView && filteredFoodItems.length > 8 && (
          <button
            type="button"
            className="menu-see-more"
            onClick={() => setShowAllMenu((current) => !current)}
            aria-expanded={showAllMenu}
          >
            {showAllMenu ? "SHOW LESS ↑" : "SEE FULL MENU ↓"}
          </button>
        )}

        {filteredFoodItems.length === 0 && (
          <p className="menu-empty">
            No dishes found. Try another search.
          </p>
        )}

        <p className="demo-note">
          Menu and prices shown from the menu shared for this website preview.
          Please confirm current availability and prices with the café.
        </p>
      </section>

            {/* SIGNATURE EXPERIENCE */}

      <section className="signature-section">
        <div className="signature-image">
          <img
            src={photo("coffee-and-momos.webp")}
            alt="Coffee and momos served at The Bridge Resto Cafe"
          />
          <div className="signature-image-caption">
            <span>THE BRIDGE</span>
            <span> A MOMENT TO YOURSELF </span>
          </div>
        </div>

        <div className="signature-content">
          <span className="eyebrow">SOMETHING FOR EVERY MOOD</span>

          <h2>
            A Little Sip.
            <br />
            <em>A Lot of Joy.</em>
          </h2>

          <p>
            From a refreshing juice to your favourite shake,
            discover little moments of happiness in every sip.
            Take a break, catch up with friends and stay a little longer.
          </p>

          <div className="signature-highlights">
            <div>
              <span>01</span>
              <h3>Refreshing Drinks</h3>
            </div>
            <div>
              <span>02</span>
              <h3>Rich & Creamy Shakes</h3>
            </div>
            <div>
              <span>03</span>
              <h3>Coffee Moments</h3>
            </div>
          </div>

          <a href="#visit" className="text-link">
            Discover The Experience <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* CINEMATIC GALLERY */}

      <section className="space-section section" id="space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A CLOSER LOOK AT THE EXPERIENCE</span>
            <h2>
              Moments Worth <em>Staying For.</em>
            </h2>
          </div>
          <span className="section-note">
            EXPLORE THE SPACE <ArrowUpRight size={14} aria-hidden="true" />
          </span>
        </div>

        <div className="cinematic-gallery">
          {galleryItems.map((item, index) => (
            <button
              type="button"
              className={`gallery-card gallery-card-${index + 1}`}
              key={item.title}
              onClick={() => setActiveGallery(index)}
              aria-label={`View ${item.title}`}
            >
              <img
                src={photo(item.image)}
                alt={item.title}
                loading="lazy"
              />

              <span className="gallery-index">0{index + 1}</span>

              <div className="gallery-card-content">
                <span>THE BRIDGE EXPERIENCE</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <span className="gallery-expand" aria-hidden="true">
                <Expand size={17} />
              </span>
            </button>
          ))}
        </div>

        <p className="demo-note">
          Photographs supplied for The Bridge Resto Cafe. Menu photography
          will be expanded when additional dish photos are available.
        </p>
      </section>

            {/* EVENTS & CELEBRATIONS */}

      <section className="events-section section" id="events">

        <div className="section-heading">
          <div>
            <span className="eyebrow">
              MAKE EVERY MOMENT SPECIAL
            </span>

            <h2>
              Celebrate Life&apos;s
              <br />
              <em>Beautiful Moments.</em>
            </h2>
          </div>

          <span className="section-note">
            YOUR MOMENT · OUR SPACE
          </span>
        </div>

        <p className="events-intro">
          From intimate celebrations to special gatherings,
          make your memorable moments even more meaningful
          at The Bridge Resto Cafe.
        </p>

        <div className="events-grid">

          <article className="event-card">
            <div className="event-number">01</div>
            <div className="event-icon"><CalendarDays size={25} strokeWidth={1.5} /></div>

            <span>CELEBRATE TOGETHER</span>

            <h3>Birthday Celebrations</h3>

            <p>
              Celebrate another beautiful year with
              your favourite people.
            </p>

            <a href="#event-enquiry">
              PLAN A CELEBRATION <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>

          <article className="event-card">
            <div className="event-number">02</div>
            <div className="event-icon"><Heart size={25} strokeWidth={1.5} /></div>

            <span>BEGIN SOMETHING BEAUTIFUL</span>

            <h3>Engagement Functions</h3>

            <p>
              Make your special occasion memorable
              with an intimate gathering.
            </p>

            <a href="#event-enquiry">
              PLAN YOUR EVENT <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>

          <article className="event-card">
            <div className="event-number">03</div>
            <div className="event-icon"><Users size={25} strokeWidth={1.5} /></div>

            <span>TIME WITH YOUR PEOPLE</span>

            <h3>Family Gatherings</h3>

            <p>
              Bring everyone together for food,
              conversations and special moments.
            </p>

            <a href="#event-enquiry">
              ENQUIRE NOW <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>

          <article className="event-card">
            <div className="event-number">04</div>
            <div className="event-icon"><Sparkles size={25} strokeWidth={1.5} /></div>

            <span>YOUR MOMENT, YOUR WAY</span>

            <h3>Private Events</h3>

            <p>
              Tell us about your occasion and
              enquire about hosting it at The Bridge.
            </p>

            <a href="#event-enquiry">
              DISCUSS YOUR EVENT <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>

        </div>

        <div className="event-enquiry" id="event-enquiry">

          <div>
            <span className="eyebrow">
              LET&apos;S MAKE IT SPECIAL
            </span>

            <h3>
              Have an occasion
              <br />
              <em>coming up?</em>
            </h3>

            <p>
              Share your plans with us and enquire
              about availability and arrangements.
            </p>
          </div>

          <a
            href="https://wa.me/918921387774?text=Hello%20The%20Bridge%2C%20I%20would%20like%20to%20enquire%20about%20hosting%20an%20event."
            target="_blank"
            rel="noreferrer"
            className="button button-light"
          >
            ENQUIRE ON WHATSAPP <ArrowUpRight size={15} aria-hidden="true" />
          </a>

        </div>

        <p className="demo-note">
          Event types, availability and arrangements are subject
          to confirmation by The Bridge Resto Cafe.
        </p>

      </section>

      {/* EXPERIENCE */}

      <section className="quote-section" id="experience">
        <span className="eyebrow">THE BRIDGE EXPERIENCE</span>
        <h2>
          More Than Just a Meal.
          <br />
          <em>It&apos;s Time Well Spent.</em>
        </h2>
        <a href="#visit" className="button button-light">
          Find Your Way Here <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </section>

      {/* REVIEWS */}

      <section className="reviews-section section">
        <span className="eyebrow">THE LITTLE THINGS PEOPLE LOVE</span>
        <h2>
          Loved for the <em>Experience.</em>
        </h2>

        <div className="review-grid">
          <article>
            <span className="customer-highlight-label">
              <Star size={13} aria-hidden="true" /> CUSTOMER HIGHLIGHT
            </span>
            <h3>The Atmosphere</h3>
            <p>
              The greenery, relaxed surroundings and
              enjoyable evening atmosphere are recurring
              highlights in customer feedback.
            </p>
          </article>

          <article>
            <span className="customer-highlight-label">
              <Star size={13} aria-hidden="true" /> CUSTOMER HIGHLIGHT
            </span>
            <h3>The Food</h3>
            <p>
              Momos, pasta, salads, burgers and café
              beverages are among the food choices
              mentioned by diners.
            </p>
          </article>

          <article>
            <span className="customer-highlight-label">
              <Star size={13} aria-hidden="true" /> CUSTOMER HIGHLIGHT
            </span>
            <h3>The Experience</h3>
            <p>
              A casual place for friends and families
              to share meals, conversations and time together.
            </p>
          </article>
        </div>

        <p className="demo-note">
          Editorial summaries of third-party reviews,
          not direct customer quotations or independently
          verified testimonials.
        </p>
      </section>

      {/* LOCATION */}

      <section className="visit-section section" id="visit">
        <div>
          <span className="eyebrow">YOUR NEXT CAFÉ STOP</span>
          <h2>
            Find Your Way
            <br />
            to <em>The Bridge.</em>
          </h2>

          <p>
            Just around Mayannoor Bridge, Mayannur,
            Ottapalam, Kerala. Bring your favourite people
            and make time for a good café experience.
          </p>

          <div className="hero-actions">
            <a
              className="button button-light"
              href="https://www.google.com/maps/search/?api=1&query=The+Bridge+Resto+Cafe+Mayannur"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions <ArrowUpRight size={15} aria-hidden="true" />
            </a>

            <a
              className="button button-outline"
              href="https://wa.me/918921387774"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="visit-details">
          <span>LOCATION</span>
          <h3>The Bridge Resto Cafe</h3>
          <p>Near Mayannoor Bridge, Mayannur, Ottapalam, Kerala.</p>

          <hr />

          <span>PHONE</span>
          <p>+91 89213 87774</p>

          <hr />

          <span>GOOD TO KNOW</span>
          <p>
            Casual café dining · Food & beverages ·
            Friends & family gatherings
          </p>
        </div>
      </section>

            {/* CINEMATIC GALLERY LIGHTBOX */}

      {activeGallery !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Café photo gallery"
          onClick={() => setActiveGallery(null)}
        >
          <button
            type="button"
            className="gallery-close"
            onClick={() => setActiveGallery(null)}
            aria-label="Close gallery"
          >
            <X size={23} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="gallery-arrow gallery-prev"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              setActiveGallery(
                (activeGallery - 1 + galleryItems.length) % galleryItems.length
              );
            }}
          >
            <ChevronLeft size={27} aria-hidden="true" />
          </button>

          <div
            className="gallery-viewer"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={photo(galleryItems[activeGallery].image)}
              alt={galleryItems[activeGallery].title}
            />

            <div className="gallery-viewer-caption">
              <span>
                0{activeGallery + 1} / 0{galleryItems.length}
              </span>
              <h2>{galleryItems[activeGallery].title}</h2>
              <p>{galleryItems[activeGallery].description}</p>
            </div>
          </div>

          <button
            type="button"
            className="gallery-arrow gallery-next"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              setActiveGallery((activeGallery + 1) % galleryItems.length);
            }}
          >
            <ChevronRight size={27} aria-hidden="true" />
          </button>
        </div>
      )}

      {/* FULLSCREEN FOOD PHOTO VIEWER */}

      {activeFoodGallery !== null && (
        <div
          className="gallery-lightbox food-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Food photo gallery"
          onClick={() => setActiveFoodGallery(null)}
        >
          <button
            type="button"
            className="gallery-close"
            onClick={() => setActiveFoodGallery(null)}
            aria-label="Close food gallery"
          >
            <X size={23} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="gallery-arrow gallery-prev"
            aria-label="Previous food photo"
            onClick={(event) => {
              event.stopPropagation();
              setActiveFoodGallery(
                (activeFoodGallery - 1 + foodGalleryItems.length) % foodGalleryItems.length
              );
            }}
          >
            <ChevronLeft size={27} aria-hidden="true" />
          </button>

          <div
            className="gallery-viewer"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={photo(foodGalleryItems[activeFoodGallery].image!)}
              alt={foodGalleryItems[activeFoodGallery].name}
            />
            <div className="gallery-viewer-caption">
              <span>
                0{activeFoodGallery + 1} / 0{foodGalleryItems.length} · MENU COLLECTION
              </span>
              <h2>{foodGalleryItems[activeFoodGallery].name}</h2>
              <p>{foodGalleryItems[activeFoodGallery].description}</p>
            </div>
          </div>

          <button
            type="button"
            className="gallery-arrow gallery-next"
            aria-label="Next food photo"
            onClick={(event) => {
              event.stopPropagation();
              setActiveFoodGallery((activeFoodGallery + 1) % foodGalleryItems.length);
            }}
          >
            <ChevronRight size={27} aria-hidden="true" />
          </button>
        </div>
      )}

      {/* FOOD DETAILS MODAL */}

      {selectedFood && (
        <div
          className="food-modal-backdrop"
          onClick={() => setSelectedFood(null)}
        >
          <div
            className="food-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="food-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="food-modal-close"
              onClick={() => setSelectedFood(null)}
              aria-label="Close food details"
            >
              <X size={21} aria-hidden="true" />
            </button>

            <div className="food-modal-image">
              {selectedFood.image ? (
                <img
                  src={photo(selectedFood.image)}
                  alt={selectedFood.name}
                />
              ) : (
                <div className="food-image-unavailable modal-image-unavailable">
                  <span>PHOTO COMING SOON</span>
                </div>
              )}
              <span>{selectedFood.type}</span>
            </div>

            <div className="food-modal-content">
              <span className="eyebrow">THE BRIDGE · MENU</span>
              <h2 id="food-modal-title">{selectedFood.name}</h2>
              <p className="food-modal-description">
                {selectedFood.description || "A selection from The Bridge Resto Cafe menu."}
              </p>
              <div className="food-modal-divider" />
              <div className="food-modal-price-row">
                <span>MENU PRICE</span>
                <strong>₹{selectedFood.price}/-</strong>
              </div>
              <p className="food-modal-note">
                Menu details and prices are based on the menu shared for this preview.
                Please confirm availability with the café.
              </p>
              <button
                className="food-modal-action"
                onClick={() => setSelectedFood(null)}
              >
                BACK TO MENU
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav className="mobile-bottom-nav" aria-label="Quick navigation">
        {[
          { label: "Home", href: "#home", icon: House },
          { label: "Discover", href: "#discover", icon: Compass },
          { label: "Menu", href: "#menu", icon: Utensils },
          { label: "Gallery", href: "#space", icon: Images },
          { label: "Visit", href: "#visit", icon: MapPin },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
              <small>{item.label}</small>
            </a>
          );
        })}
      </nav>

      {/* FOOTER */}

      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-symbol">
            <Sparkles size={29} strokeWidth={1.4} />
          </span>
          <span>
            THE BRIDGE.
            <small>RESTO CAFE · MAYANNUR</small>
          </span>
        </a>

        <div className="footer-links">
          <a href="#discover">Discover</a>
          <a href="#menu">Menu</a>
          <a href="#space">Our Space</a>
          <a href="#visit">Find Us</a>
        </div>

        <span>© 2026 · CONCEPT WEBSITE DEMO</span>
      </footer>
    </main>
  );
}
