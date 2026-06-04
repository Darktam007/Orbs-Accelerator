import React, { useState, useEffect } from "react";
import logoSrc from "@assets/Group_87_1780493231216.png";
import img1 from "@assets/6_1780491081997.png";
import img2 from "@assets/7_1780491082091.png";
import img3 from "@assets/8_1780491082171.png";
import img4 from "@assets/9_1780491082234.png";
import img5 from "@assets/4_1780491082306.png";
import img6 from "@assets/5_1780491082383.png";
import img7 from "@assets/3_1780491082477.png";
import img8 from "@assets/11_1780491082545.png";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Briefcase,
  MonitorSmartphone,
  Figma,
  Code2,
  BarChart3,
  Target,
  Users,
  Compass,
  ArrowRight,
  ChevronDown,
  Clock,
  AlertTriangle
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const STORAGE_KEY = "orbs_eb_expiry";
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

function useCountdown() {
  const getOrCreateExpiry = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const val = parseInt(stored, 10);
      if (!isNaN(val) && val > Date.now()) return val;
    }
    const expiry = Date.now() + WINDOW_MS;
    localStorage.setItem(STORAGE_KEY, String(expiry));
    return expiry;
  };

  const [expiry] = useState<number>(getOrCreateExpiry);
  const [remaining, setRemaining] = useState(() => Math.max(0, expiry - Date.now()));

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, expiry - Date.now()));
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [expiry]);

  const hours = Math.floor(remaining / 3_600_000);
  const minutes = Math.floor((remaining % 3_600_000) / 60_000);
  const seconds = Math.floor((remaining % 60_000) / 1_000);
  const pad = (n: number) => String(n).padStart(2, "0");
  const expired = remaining === 0;

  return { hours, minutes, seconds, pad, expired };
}

export default function Home() {
  const { toast } = useToast();

  const handleScrollToEarlyBird = () => {
    document.getElementById("early-bird")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Sticky Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-3" style={{ background: "rgba(5,11,26,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-3">
          <img src={logoSrc} alt="Orbs Academy" className="h-9 w-auto" />
          <span className="font-bold text-lg tracking-tight text-white hidden sm:block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Orbs Academy</span>
        </div>
        <motion.button
          onClick={handleScrollToEarlyBird}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-primary hover:bg-orange-600 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors shadow-md"
        >
          Enroll Now
        </motion.button>
      </header>

      {/* Floating CTA */}
      <motion.button
        onClick={handleScrollToEarlyBird}
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white font-medium py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
        data-testid="button-floating-cta"
      >
        🚀 Join The Training
      </motion.button>

      <HeroSection onCtaClick={handleScrollToEarlyBird} />
      <OutcomeSection />
      <EarlyBirdSection />
      <MidPageCta onCtaClick={handleScrollToEarlyBird} />
      <VideoTestimonials />
      <CareerPaths />
      <WhyOrbsIsDifferent />
      <MentorshipCurriculum />
      <StudentGallery onCtaClick={handleScrollToEarlyBird} />
      <FAQSection />
      <FinalCta onCtaClick={handleScrollToEarlyBird} />
      <LateRegistration />

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Orbs Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}

// --- Section 1: Hero ---
function HeroSection({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 text-center">
      <div className="absolute inset-0 bg-glow-orange opacity-20 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="space-y-8 flex flex-col items-center"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-[#FF6B00]"
          >
            Launch Your Digital Career With The Right Skills, Mentorship, and Support System
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl"
          >
            Learn a high-demand digital skill, work on practical projects, receive expert mentorship, and follow a proven roadmap designed to help you become job-ready.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl mt-8"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/NJlFkSqC7fU" 
              title="Orbs Academy Overview" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
          </motion.div>

          <motion.div variants={scaleIn} className="pt-6">
            <Button 
              onClick={onCtaClick}
              size="lg" 
              className="bg-primary hover:bg-orange-600 text-white px-10 py-7 text-lg rounded-md font-bold"
            >
              Secure Your Spot — ₦15,000 Early Bird
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 2: Outcome ---
function OutcomeSection() {
  const cards = [
    "Learn a valuable digital skill",
    "Build practical experience",
    "Access mentorship",
    "Receive career guidance",
    "Learn remote work strategies",
    "Stay accountable until completion"
  ];

  return (
    <section className="py-24 bg-card relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">This Is More Than A Training Program</h2>
          <p className="text-muted-foreground text-lg">
            Success requires more than just watching videos. It requires skills, guidance, and consistency.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((benefit, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp} 
              className="bg-[#0D1B2E] border-l-4 border-orange-500 p-6 rounded-r-xl rounded-l-sm flex items-start gap-4 shadow-md"
            >
              <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
              <span className="text-lg font-bold">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 3: Early Bird ---
function EarlyBirdSection() {
  const [readiness, setReadiness] = useState<"yes" | "no" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { toast } = useToast();
  const { hours, minutes, seconds, pad, expired } = useCountdown();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (readiness !== "yes") return;

    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mojzaybg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        window.location.href = "https://wa.me/message/PZJDMTLVNKRVB1";
      } else {
        const errorData = await response.json();
        setErrorMsg(errorData?.error || "Oops! There was a problem submitting your form");
      }
    } catch (err) {
      setErrorMsg("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="early-bird" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-glow-orange opacity-40 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
          className="text-center mb-12"
        >
          <div className="inline-block text-primary uppercase tracking-widest font-bold mb-6">Early Bird Access</div>

          {/* Countdown timer */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
            className="inline-flex flex-col items-center mb-8"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              {expired ? "⚠️ Early Bird window has closed" : "⏱ This offer closes in"}
            </p>
            {expired ? (
              <div className="rounded-xl px-8 py-4 text-orange-300 font-bold text-lg" style={{ background: "#1a0a00", border: "1px solid rgba(255,107,0,0.4)" }}>
                Early Bird window expired — see Late Registration below
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {[{ label: "HRS", value: pad(hours) }, { label: "MIN", value: pad(minutes) }, { label: "SEC", value: pad(seconds) }].map(({ label, value }, i) => (
                  <React.Fragment key={label}>
                    {i > 0 && <span className="text-3xl font-bold text-primary/60 mb-4">:</span>}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center text-3xl md:text-4xl font-bold text-white tabular-nums"
                        style={{ background: "linear-gradient(135deg, #0f1f38, #0d1a30)", border: "1.5px solid rgba(255,107,0,0.5)", boxShadow: "0 0 20px rgba(255,107,0,0.12)" }}
                      >
                        {value}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">{label}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            )}
          </motion.div>

          <div className="text-6xl md:text-7xl font-bold text-primary mb-4">₦15,000</div>
          <div className="text-lg text-muted-foreground font-medium mb-8">One-Time Payment • Limited Availability</div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-medium mb-12 flex-wrap">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Mentorship</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Remote Work Strategy</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Accountability System</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Career Track Access</div>
          </div>
          
          <hr className="border-white/10 w-full mb-12" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={scaleIn}>
          <form onSubmit={handleSubmit} className="rounded-2xl space-y-6 p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0f1f38 0%, #0d1a30 100%)", border: "1.5px solid rgba(255,107,0,0.45)", boxShadow: "0 0 48px rgba(255,107,0,0.12), 0 8px 40px rgba(0,0,0,0.5)" }}>
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input name="name" required placeholder="John Doe" className="bg-[#07111F] border-white/15 focus:border-primary focus:ring-1 focus:ring-primary/50" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input name="email" required type="email" placeholder="john@example.com" className="bg-[#07111F] border-white/15 focus:border-primary focus:ring-1 focus:ring-primary/50" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <Input name="phone" required type="tel" placeholder="+234 000 0000 000" className="bg-[#07111F] border-white/15 focus:border-primary focus:ring-1 focus:ring-primary/50" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Select Your Preferred Learning Track</label>
              <Select name="track" required>
                <SelectTrigger className="bg-[#07111F] border-white/15 focus:ring-primary">
                  <SelectValue placeholder="Select a track" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                  <SelectItem value="Social Media Management">Social Media Management</SelectItem>
                  <SelectItem value="Product Design (UI/UX)">Product Design (UI/UX)</SelectItem>
                  <SelectItem value="Software Development">Software Development</SelectItem>
                  <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">How did you hear about us?</label>
              <Select name="source" required>
                <SelectTrigger className="bg-[#07111F] border-white/15 focus:ring-primary">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Social Media">Social Media</SelectItem>
                  <SelectItem value="Referral">Referral</SelectItem>
                  <SelectItem value="Google Search">Google Search</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4 border-t border-white/10">
              <label className="text-sm font-bold mb-4 block">Are you ready to complete payment immediately?</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setReadiness("yes")}
                  className={`flex-1 py-3 rounded-full border transition-all ${readiness === 'yes' ? 'bg-primary text-white border-primary' : 'bg-transparent border-white/20 text-muted-foreground hover:border-white/40'}`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setReadiness("no")}
                  className={`flex-1 py-3 rounded-full border transition-all ${readiness === 'no' ? 'bg-white/10 text-white border-white/30' : 'bg-transparent border-white/20 text-muted-foreground hover:border-white/40'}`}
                >
                  No
                </button>
              </div>
            </div>

            {readiness === "no" && (
              <div className="p-5 bg-orange-950/30 border border-orange-500/50 rounded-xl flex items-start gap-3 mt-4">
                <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-orange-200 space-y-2">
                  <p className="font-semibold text-orange-300">No problem — your 24-hour window is running!</p>
                  <p>The countdown timer above shows exactly how much time you have left. Use it — secure your ₦15,000 Early Bird spot by registering your interest now, then complete payment before the timer hits zero.</p>
                  <p>Once the 24-hour window closes, the price rises to <strong className="text-white">₦150,000</strong>. Don't let it slip.</p>
                  <a
                    href="https://tally.so/r/EkDj0r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-1 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/50 text-orange-200 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-all"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    Reserve my 24-hour window now →
                  </a>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="p-3 bg-red-500/20 border border-red-500 rounded text-red-200 text-sm">
                {errorMsg}
              </div>
            )}

            {readiness === "yes" && (
              <>
                <div className="p-5 rounded-xl mt-2" style={{ background: "linear-gradient(135deg, #0a1f0a 0%, #061406 100%)", border: "1.5px solid rgba(34,197,94,0.4)", boxShadow: "0 0 20px rgba(34,197,94,0.06)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-green-400 text-lg">📲</span>
                    <span className="text-green-300 font-bold text-sm uppercase tracking-wide">What happens next</span>
                  </div>
                  <p className="text-sm text-green-200/90 leading-relaxed mb-3">
                    The moment you click the button below, you'll be taken directly to our <strong className="text-white">Orbs Academy customer service line on WhatsApp</strong> to complete your payment immediately.
                  </p>
                  <p className="text-sm text-green-200/80 leading-relaxed mb-1">Simply send this message:</p>
                  <div className="rounded-lg px-4 py-3 mt-1 text-sm font-mono text-white" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(34,197,94,0.25)" }}>
                    "Hi, I'm <em className="text-green-300">[Your Name]</em> and I want to make payment"
                  </div>
                  <p className="text-xs text-green-200/60 mt-3">Our team will respond instantly with payment instructions. Follow the steps and your spot is secured. ✅</p>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-orange-600 text-white py-6 text-lg mt-4 font-bold">
                  {isSubmitting ? "Submitting..." : "Secure My Spot → WhatsApp Payment"}
                </Button>
              </>
            )}
          </form>

          <div className="mt-8 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,107,0,0.3)", background: "#0a1628" }}>
            <div className="flex items-center gap-3 px-6 py-4 border-b border-orange-500/20">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-bold text-white">24-Hour Payment Window</span>
            </div>
            <div className="px-6 py-5 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                After submitting your application, payment instructions will be delivered via WhatsApp. You have <strong className="text-white">24 hours</strong> to complete payment. Failure to pay within 24 hours will result in your Early Bird spot being reassigned — you will be moved to the <strong className="text-orange-400">₦150,000 Late Registration tier</strong>.
              </p>
              <a
                href="https://tally.so/r/EkDj0r"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/40 hover:border-orange-500/70 text-orange-300 hover:text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200"
              >
                <Clock className="w-4 h-4" />
                I need a 24-hour window — register here
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

// --- Mid-Page Price Anchor ---
function MidPageCta({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="bg-[#0D1B2E] border-y border-white/5 py-8 border-l-4 border-l-orange-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl md:text-2xl font-bold">
          Early Bird Price: <span className="text-primary">₦15,000</span> <span className="text-muted-foreground text-base md:text-xl font-normal ml-2">| After: <span className="line-through">₦150,000</span></span> <span className="ml-2 text-sm bg-primary/20 text-primary border border-primary/40 rounded-full px-3 py-0.5 font-bold">90% OFF</span>
        </div>
        <Button onClick={onCtaClick} size="lg" className="bg-primary hover:bg-orange-600 text-white px-8 font-bold">
          Secure Your Spot
        </Button>
      </div>
    </section>
  );
}

// --- Section 4: Video Testimonials ---
function VideoTestimonials() {
  return (
    <>
    <section className="py-24 bg-card/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
          className="text-3xl lg:text-4xl font-bold mb-16 text-center"
        >
          Hear From Our Students
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-[360px] aspect-[9/16] glass-card rounded-2xl overflow-hidden shadow-2xl p-2 pb-4"
          >
            <iframe 
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/GjcTvLCzu7Q" 
              title="Student Testimonial 1" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
            <div className="mt-4 text-center">
              <p className="font-bold text-lg">Student Name</p>
              <p className="text-sm text-primary">From zero to job-ready in 90 days</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-[360px] aspect-[9/16] glass-card rounded-2xl overflow-hidden shadow-2xl p-2 pb-4"
          >
            <iframe 
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/HUosO1hdzDs" 
              title="Student Testimonial 2" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
            <div className="mt-4 text-center">
              <p className="font-bold text-lg">Student Name</p>
              <p className="text-sm text-primary">From zero to job-ready in 90 days</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Post-Testimonial CTA block */}
    <PostTestimonialCta />
  </>
  );
}

function PostTestimonialCta() {
  const scrollToEarlyBird = () => document.getElementById("early-bird")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="py-16 px-6" style={{ background: "linear-gradient(180deg, #07111F 0%, #0d1a2e 100%)" }}>
      <div className="max-w-2xl mx-auto text-center space-y-6">
        {/* Primary — full attention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
          className="rounded-2xl p-8 space-y-4"
          style={{ background: "linear-gradient(135deg, #0f1f38, #0d1a30)", border: "1.5px solid rgba(255,107,0,0.5)", boxShadow: "0 0 40px rgba(255,107,0,0.1)" }}
        >
          <div className="text-xs uppercase tracking-widest text-primary font-bold">Early Bird Price</div>
          <div className="text-5xl font-bold text-primary">₦15,000</div>
          <p className="text-muted-foreground text-sm">One-Time Payment &bull; Limited Spots Available</p>
          <Button
            onClick={scrollToEarlyBird}
            size="lg"
            className="w-full bg-primary hover:bg-orange-600 text-white py-6 text-lg font-bold rounded-xl mt-2"
          >
            Secure Your Early Bird Spot
          </Button>
        </motion.div>

        {/* Secondary — small nudge, low visual weight */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="text-xs text-muted-foreground mb-2">Not ready to pay right now?</p>
          <a
            href="https://tally.so/r/EkDj0r"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-orange-400/70 hover:text-orange-300 underline underline-offset-2 transition-colors"
          >
            Register for the 24-hour payment window instead &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 5: Career Paths ---
function CareerPaths() {
  const paths = [
    { icon: Briefcase, title: "Digital Marketing", desc: "Master SEO, paid ads, and growth strategies.", color: "#FF6B00", ring: "hover:border-[#FF6B00] hover:shadow-[0_0_15px_rgba(255,107,0,0.3)]" },
    { icon: MonitorSmartphone, title: "Social Media Management", desc: "Build engaged communities and brand presence.", color: "#38BDF8", ring: "hover:border-[#38BDF8] hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]" },
    { icon: Figma, title: "Product Design (UI/UX)", desc: "Design beautiful, intuitive digital experiences.", color: "#A78BFA", ring: "hover:border-[#A78BFA] hover:shadow-[0_0_15px_rgba(167,139,250,0.3)]" },
    { icon: Code2, title: "Software Development", desc: "Build functional and scalable applications.", color: "#2DD4BF", ring: "hover:border-[#2DD4BF] hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]" },
    { icon: BarChart3, title: "Data Analysis", desc: "Extract insights to drive business decisions.", color: "#4ADE80", ring: "hover:border-[#4ADE80] hover:shadow-[0_0_15px_rgba(74,222,128,0.3)]" }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Choose Your Learning Path</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-6"
        >
          {paths.map((path, i) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="glass-card p-8 rounded-xl flex flex-col items-start w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300"
                style={{ border: `1px solid ${path.color}60` }}
                onMouseEnter={e => (e.currentTarget.style.border = `1px solid ${path.color}`)}
                onMouseLeave={e => (e.currentTarget.style.border = `1px solid ${path.color}60`)}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-white/5"
                  style={{ border: `1px solid ${path.color}60` }}
                >
                  <Icon className="w-6 h-6" style={{ color: path.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{path.title}</h3>
                <p className="text-muted-foreground">{path.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 6: Why Orbs Is Different ---
function WhyOrbsIsDifferent() {
  return (
    <section className="py-24 bg-card/80">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Most Training Programs Teach Skills. We Help You Build A Career.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Mentorship", icon: Users },
            { title: "Remote Work Strategy", icon: Compass },
            { title: "Accountability System", icon: Target }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="glass-card p-8 rounded-2xl text-center flex flex-col items-center border border-orange-500/40 hover:border-orange-500/80 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- Section 7: Mentorship Curriculum ---
function MentorshipCurriculum() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
          className="text-3xl lg:text-4xl font-bold mb-12 text-center"
        >
          What You'll Learn Inside The Mentorship Program
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {[
            "Career Positioning",
            "Portfolio Development",
            "LinkedIn Optimization",
            "Personal Branding",
            "Remote Work Strategy",
            "Productivity Systems",
            "Accountability Frameworks"
          ].map((topic, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="glass-card p-6 rounded-lg flex items-center gap-4 border border-white/5"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">{i + 1}</span>
              </div>
              <span className="text-lg font-medium">{topic}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 8: Student Gallery ---
function StudentGallery({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
          className="text-3xl lg:text-4xl font-bold mb-16 text-center"
        >
          Join A Growing Community Of Learners Taking Action
        </motion.h2>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-16">
          {[img1, img2, img3, img4, img5, img6, img7, img8].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden relative group break-inside-avoid cursor-pointer"
            >
              <img
                src={src}
                alt="Orbs Academy Student"
                className="w-full h-auto object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Ready to join them?</h3>
          <Button onClick={onCtaClick} size="lg" className="bg-primary hover:bg-orange-600 text-white px-8 py-6 font-bold text-lg">
            Join Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 9: FAQ ---
function FAQSection() {
  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
        className="text-3xl lg:text-4xl font-bold mb-12 text-center"
      >
        What Would You Like To Know
      </motion.h2>

      <div className="space-y-4">
        {[
          { q: "What is Orbs Academy?", a: "We are a career transformation accelerator designed to help you acquire high-demand digital skills and land remote work." },
          { q: "Who is this program designed for?", a: "Anyone looking to transition into a digital career, upskill, or land remote work opportunities globally." },
          { q: "Do I need prior experience to join?", a: "No prior experience is necessary. Our roadmaps are designed to take you from beginner to job-ready." },
          { q: "How long does the program take to complete?", a: "The timeline varies based on your chosen path and dedication, but most complete the core training in 3-6 months." },
          { q: "What career paths are available?", a: "Digital Marketing, Social Media Management, Product Design (UI/UX), Software Development, and Data Analysis." },
          { q: "Will I receive a certificate upon completion?", a: "Yes, you will receive a verified certificate, but more importantly, a portfolio that proves your skills." },
          { q: "How does the mentorship work?", a: "You'll have access to experienced professionals for guidance, portfolio reviews, and career advice." },
          { q: "Can I learn remotely from anywhere?", a: "Yes, the program is 100% remote and flexible to your schedule." },
          { q: "What happens after I complete the program?", a: "We guide you through job hunting, interview preparation, and navigating the remote work landscape." },
          { q: "How do I apply?", a: "Fill out the application form at the bottom of this page, and our team will contact you." }
        ].map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }: { question: string, answer: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.1 }}
      className={`glass-card rounded-lg overflow-hidden border transition-colors ${isOpen ? 'border-primary/50' : 'border-white/5'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className={`font-medium ${isOpen ? 'text-primary' : ''}`}>{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-4 text-muted-foreground">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

// --- Section 10: Final CTA ---
function FinalCta({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="py-32 relative text-center border-t border-white/5 bg-background">
      <div className="absolute inset-0 bg-glow-blue opacity-30 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
          className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          Your Future Will Be Determined By The Skills You Build Today
        </motion.h2>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp} className="mb-10">
          <div className="text-5xl md:text-6xl font-bold text-primary mb-3">₦15,000</div>
          <p className="text-xl text-muted-foreground">
            Stop waiting. The Early Bird price closes soon.
          </p>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={scaleIn} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={onCtaClick}
            size="lg" 
            className="bg-primary hover:bg-orange-600 text-white px-8 py-6 text-lg font-bold"
          >
            Secure Your Spot — ₦15,000
          </Button>
          <Button 
            onClick={onCtaClick}
            size="lg" 
            variant="outline"
            className="bg-transparent border-white/20 hover:bg-white/5 text-white px-8 py-6 text-lg font-bold"
          >
            Join Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 11: Late Registration ---
function LateRegistration() {
  return (
    <section className="py-24 bg-card/40 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
          className="glass-card p-10 md:p-14 rounded-2xl border border-white/10"
        >
          <h2 className="text-3xl font-bold mb-6">Missed The Early Bird Offer?</h2>

          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-2xl text-muted-foreground line-through font-medium">₦150,000</span>
          </div>
          <div className="text-5xl font-bold text-white mb-2">₦150,000</div>
          <div className="text-sm text-muted-foreground mb-6">Standard Registration Price</div>
          
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            The Early Bird offer was reserved for the first 50 people ready to pay within 24 hours — at a <strong className="text-white">90% discount</strong>. That window has closed. You can still join Orbs Academy at the standard price.
          </p>
          
          <div className="p-4 bg-red-950/20 border border-red-900/30 rounded-lg inline-block mb-10">
            <p className="text-sm text-red-200/80 font-medium">⚠️ The ₦15,000 Early Bird window is now closed for you.</p>
          </div>

          <div>
            <Button 
              asChild
              size="lg" 
              className="bg-white hover:bg-gray-200 text-black px-10 py-6 text-lg font-bold"
            >
              <a href="https://tally.so/r/5Bv6l6" target="_blank" rel="noopener noreferrer">
                Register at ₦150,000
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
