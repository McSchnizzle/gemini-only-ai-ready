# Website Task List: Vital Enterprises (AISupportPDX.com)

Based on the strategic documentation, here is the roadmap for building the Vital Enterprises landing page.

## Phase 1: Project Setup & Configuration
- [ ] **Initialize Project**: Set up a new React project (using Vite or Next.js) with TypeScript.
- [ ] **Install Dependencies**: Install Tailwind CSS, Lucide React (for icons), and any necessary routing libraries.
- [ ] **Configure Tailwind**:
    - [ ] Set up the "Cascadia Cybernetics" color palette:
        - Primary: `#2F4F4F` (Cascadia Green/Deep Forest)
        - Secondary: `#708090` (Mist Grey/Slate)
        - Accent: `#FFBF00` (Signal Amber)
        - Background: `#F8FAFC` (Off-White)
    - [ ] Configure fonts: 'Montserrat' (Headers), 'Inter' (Body).

## Phase 2: Core UI Components
- [ ] **Navbar**:
    - [ ] Logo (Left).
    - [ ] Navigation Links: Services, Pricing, About.
    - [ ] CTA Button: "Free Consult" (Right, Signal Amber).
- [ ] **Hero Section**:
    - [ ] Background: Image container for "Foggy Forest + Neural Network".
    - [ ] Headline: "Is Your Business Ready for 2026: The Year of AI?"
    - [ ] Sub-headline: "Secure, practical AI solutions for Portland's regional economy..."
    - [ ] Primary CTA: "Claim Your Free Dec 2025 Strategy Session" (or "Get Free Audit").
    - [ ] Secondary CTA: "View Hardware".
    - [ ] Countdown Timer: Banner counting down to Jan 1st, 2026.
- [ ] **Features Section (Grid Layout)**:
    - [ ] Card 1: "24/7 Voice Agents" (Icon: Robot).
    - [ ] Card 2: "On-Prem Security" (Icon: Server/Shield).
    - [ ] Card 3: "AEO & GEO Ranking" (Icon: Graph/Search).
    - [ ] *Note: Use glassmorphism effect on cards.*
- [ ] **Hardware Spotlight Section**:
    - [ ] Split layout: Image (Left) vs Text (Right).
    - [ ] Content: Nvidia DGX Spark details ("The Power of the Cloud, On Your Desk...").
    - [ ] Price Badge: "$10k Package".
- [ ] **Pricing/Services Section**:
    - [ ] Subscription Card: "$500-$1000/mo".
    - [ ] Hardware Card: "$10k One-Time".
- [ ] **About/Footer Section**:
    - [ ] Text: "Built for the real economy...".
    - [ ] Links: Privacy Policy, Terms.
    - [ ] Badge: "Made in Portland, OR".

## Phase 3: Interactivity & Functionality
- [ ] **Lead Capture Modal**:
    - [ ] Trigger: Clicking "Claim Free Strategy Session" or "Get Free Audit".
    - [ ] Fields: Name, Company Name, Email, Phone.
- [ ] **Chat Widget**:
    - [ ] Add a Floating Action Button (FAB) as a placeholder for the future AI agent.
- [ ] **Responsiveness**:
    - [ ] Ensure mobile-first adaptation (stacking grids, readable text).

## Phase 4: Polish & Deployment
- [ ] **SEO/AEO Tags**: Add initial meta tags relevant to "Portland AI Consultancy".
- [ ] **Deployment**: Build and deploy (target platform: Vercel/Netlify or Replit as per doc).
