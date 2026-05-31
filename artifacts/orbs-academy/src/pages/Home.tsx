import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Play,
  Briefcase,
  MonitorSmartphone,
  Figma,
  Code2,
  BarChart3,
  Target,
  Users,
  Compass,
  ArrowRight,
  ChevronDown
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

// Animation Variants
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

export default function Home() {
  const { toast } = useToast();

  const handleApplyClick = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "A member of our team will reach out to you with next steps.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating CTA */}
      <motion.button
        onClick={handleApplyClick}
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

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="absolute inset-0 bg-glow-blue opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              Launch Your Digital Career With The Right Skills, Mentorship, and Support System
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
            >
              Learn a high-demand digital skill, work on practical projects, receive expert mentorship, and follow a proven roadmap designed to help you become job-ready.
            </motion.p>
            <motion.div variants={fadeInUp} className="space-y-3">
              {["Choose Your Career Path", "Learn Through Practical Projects", "Get Mentorship & Career Guidance", "Follow A Remote Work Roadmap"].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={scaleIn}>
              <Button 
                onClick={handleApplyClick}
                size="lg" 
                className="bg-primary hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-md"
                data-testid="button-hero-cta"
              >
                Join The Training <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              {/* Abstract Tech Graphic */}
              <div className="w-full h-full relative glass-card rounded-2xl border border-white/10 p-8 flex flex-col justify-between">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-4 mt-12">
                  <div className="h-2 w-1/3 bg-white/20 rounded" />
                  <div className="h-2 w-2/3 bg-white/10 rounded" />
                  <div className="h-2 w-1/2 bg-white/10 rounded" />
                </div>
                <div className="mt-12 flex justify-end">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Outcome Section */}
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
            {[
              "Learn a valuable digital skill",
              "Build practical experience",
              "Access mentorship",
              "Receive career guidance",
              "Learn remote work strategies",
              "Stay accountable until completion"
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card p-6 rounded-xl flex items-start gap-4">
                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                <span className="text-lg font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. VSL Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-orange opacity-30 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
            className="text-3xl lg:text-4xl font-bold mb-12"
          >
            Watch How The Orbs Academy Career Accelerator Works
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="aspect-video glass-card rounded-2xl relative group cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,107,0,0.5)]">
                <Play className="w-8 h-8 text-white ml-2" fill="currentColor" />
              </div>
              <p className="text-lg font-medium text-white/90">Program Overview Video</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Video Testimonials */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
            className="text-3xl lg:text-4xl font-bold mb-16 text-center"
          >
            Hear From Our Students
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="aspect-video glass-card rounded-2xl relative flex flex-col justify-end p-6 cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="relative z-10 bg-black/40 backdrop-blur-sm p-4 rounded-lg inline-block self-start mt-auto">
                  <p className="font-bold text-lg">Student Name</p>
                  <p className="text-sm text-primary">From zero to job-ready in 90 days</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Career Paths */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Choose Your Learning Path</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
          >
            {[
              { icon: Briefcase, title: "Digital Marketing", desc: "Master SEO, paid ads, and growth strategies." },
              { icon: MonitorSmartphone, title: "Social Media Management", desc: "Build engaged communities and brand presence." },
              { icon: Figma, title: "Product Design (UI/UX)", desc: "Design beautiful, intuitive digital experiences." },
              { icon: Code2, title: "Software Development", desc: "Build functional and scalable applications." },
              { icon: BarChart3, title: "Data Analysis", desc: "Extract insights to drive business decisions." }
            ].map((path, i) => {
              const Icon = path.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="glass-card p-8 rounded-xl flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{path.title}</h3>
                  <p className="text-muted-foreground">{path.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 6. Why Orbs Is Different */}
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
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="glass-card p-8 rounded-2xl text-center flex flex-col items-center"
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

      {/* 7. Mentorship Curriculum */}
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

      {/* 8. Student Gallery */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
            className="text-3xl lg:text-4xl font-bold mb-16 text-center"
          >
            Join A Growing Community Of Learners Taking Action
          </motion.h2>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[200, 300, 250, 400, 250, 300, 200, 350].map((height, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="glass-card rounded-xl overflow-hidden relative group break-inside-avoid"
                style={{ height: `${height}px` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Orbs Academy Student</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
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

      {/* 10. Final CTA */}
      <section className="py-32 relative text-center">
        <div className="absolute inset-0 bg-glow-blue opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold mb-8 leading-tight"
          >
            Your Future Will Be Determined By The Skills You Build Today
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
            className="text-xl text-muted-foreground mb-12"
          >
            Stop waiting for the perfect moment. Start preparing for your next career move.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={scaleIn}>
            <Button 
              onClick={handleApplyClick}
              size="lg" 
              className="bg-primary hover:bg-orange-600 text-white px-10 py-7 text-lg rounded-md"
            >
              Join The Training
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 11. Application Section */}
      <section id="apply" className="py-24 bg-card border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Apply For The Orbs Academy Training Program</h2>
            <p className="text-muted-foreground">
              Fill in your details below and a member of our team will reach out to you with next steps.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: false }} variants={scaleIn}
          >
            <form onSubmit={handleFormSubmit} className="glass-card p-8 md:p-12 rounded-2xl space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input required placeholder="John Doe" className="bg-background/50 border-white/10 focus:border-primary focus:ring-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input required type="email" placeholder="john@example.com" className="bg-background/50 border-white/10 focus:border-primary focus:ring-primary" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input required type="tel" placeholder="+1 (555) 000-0000" className="bg-background/50 border-white/10 focus:border-primary focus:ring-primary" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Select Your Preferred Learning Track</label>
                <Select required>
                  <SelectTrigger className="bg-background/50 border-white/10 focus:ring-primary">
                    <SelectValue placeholder="Select a track" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                    <SelectItem value="social-media">Social Media Management</SelectItem>
                    <SelectItem value="ui-ux">Product Design (UI/UX)</SelectItem>
                    <SelectItem value="software">Software Development</SelectItem>
                    <SelectItem value="data">Data Analysis</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">How did you hear about us?</label>
                <Select required>
                  <SelectTrigger className="bg-background/50 border-white/10 focus:ring-primary">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="google">Google Search</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-orange-600 text-white py-6 text-lg mt-8">
                Submit My Application
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Orbs Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Sub-component for FAQ items
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
