// data/blogs.js - Curated IT Field & Tech Sector Blog Content for Joelx Orbit

const categories = [
  'All',
  'Artificial Intelligence',
  'Cloud & DevOps',
  'Web Development',
  'Cybersecurity',
  'Mobile Development',
  'Data & AI'
];

const blogs = [
  {
    id: 'agentic-ai-enterprise-sdlc-2026',
    slug: 'agentic-ai-enterprise-sdlc-2026',
    title: 'Agentic AI & Autonomous Workflows: How AI Agents are Revolutionizing Modern IT & Software Engineering',
    category: 'Artificial Intelligence',
    icon: 'smart_toy',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    tagColor: 'text-[#f9c591] bg-[#f9c591]/10 border-[#f9c591]/30',
    featured: true,
    date: 'October 16, 2025',
    readTime: '6 min read',
    author: {
      name: 'Joel Roys',
      role: 'Lead Architect & Tech Strategist, Joelx Orbit',
      avatar: '/joelx.png'
    },
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Autonomous agentic AI has moved beyond simple chatbots into core enterprise SDLCs. Discover how multi-agent coordination, self-healing codebases, and reasoning loops are reshaping digital transformation in 2025 and 2026.',
    tags: ['Agentic AI', 'LLMs', 'DevOps Automation', 'Autonomous Systems', 'SDLC'],
    content: `
      <p class="text-lg text-gray-300 leading-relaxed mb-6 font-medium">
        The artificial intelligence landscape has undergone a monumental shift. In previous years, developer tooling centered on conversational generative AI and inline snippet autocompletion. Today, the modern IT enterprise is entering the era of <strong>Agentic AI</strong>—autonomous software agents capable of reasoning, planning multi-step tasks, executing tools, and verifying code execution without constant human handholding.
      </p>

      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4">From Copilots to Autonomous Co-Workers</h3>
      <p class="text-gray-300 leading-relaxed mb-4">
        Traditional LLM assistants were passive: they waited for a prompt, generated text, and terminated. Agentic architectures incorporate memory, environment feedback, and tool calling loops (such as the ReAct paradigm—Reasoning + Acting). When tasked with resolving an incident or delivering a microservice feature, an agentic system breaks down the objective:
      </p>
      <ul class="list-disc pl-6 space-y-2 text-gray-300 mb-6">
        <li><strong>Static Code & Dependency Analysis:</strong> Parsing repositories, tracing symbols, and reading system architecture diagrams.</li>
        <li><strong>Multi-Agent Verification:</strong> A generator agent proposes code changes while a critique agent validates lint rules, unit tests, and performance regressions.</li>
        <li><strong>Continuous Feedback Loops:</strong> If a test fails in the build environment, the agent inspects the stack trace and refactors the implementation iteratively.</li>
      </ul>

      <div class="p-6 rounded-xl bg-[#1a1a1a] border border-[#f9c591]/20 my-6 shadow-inner">
        <h4 class="text-white font-headline text-lg mb-2 flex items-center gap-2">
          <span class="material-symbols-outlined text-[#f9c591]">insights</span> Key IT Sector Metric
        </h4>
        <p class="text-gray-300 text-sm leading-relaxed">
          Gartner forecasts that by 2026, over 40% of enterprise software development workflows will incorporate autonomous agentic systems for repetitive testing, continuous refactoring, and automated cloud incident remediation, saving upwards of 30 hours per engineer each month.
        </p>
      </div>

      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4">How Joelx Orbit Leverages Agentic Engineering</h3>
      <p class="text-gray-300 leading-relaxed mb-4">
        At Joelx Orbit, we harness cutting-edge agentic workflows across our client solutions—from automated regression testing and automated API schema migrations to AI-powered customer concierge systems. By pairing robust human architecture oversight with high-throughput autonomous agents, we deliver mission-critical software faster with higher reliability.
      </p>

      <div class="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
        <span class="seo-pill">Agentic Workflows</span>
        <span class="seo-pill">AI Automation</span>
        <span class="seo-pill">Enterprise SDLC</span>
        <span class="seo-pill">Joelx Orbit Tech</span>
      </div>
    `
  },
  {
    id: 'cloud-native-platform-engineering-2026',
    slug: 'cloud-native-platform-engineering-2026',
    title: 'Cloud-Native Platform Engineering & Edge Runtimes: Beyond Raw Kubernetes',
    category: 'Cloud & DevOps',
    icon: 'cloud_sync',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
    featured: false,
    date: 'October 12, 2025',
    readTime: '5 min read',
    author: {
      name: 'Tech Engineering Desk',
      role: 'Cloud Infrastructure Team, Joelx Orbit',
      avatar: '/joelx.png'
    },
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Enterprises are transitioning from raw Kubernetes complexity toward Internal Developer Platforms (IDPs), micro-VMs, and edge compute nodes. Here is how modern cloud architecture is reducing cognitive overhead and operational costs.',
    tags: ['Cloud Computing', 'Platform Engineering', 'Edge Computing', 'Microservices', 'Kubernetes'],
    content: `
      <p class="text-lg text-gray-300 leading-relaxed mb-6 font-medium">
        For the past decade, container orchestration with Kubernetes was the gold standard for enterprise deployment. However, developer cognitive fatigue and steep operational overhead have forced an industry-wide pivot toward <strong>Platform Engineering</strong> and distributed <strong>Edge Compute</strong>.
      </p>

      <h3 class="text-2xl font-headline italic text-cyan-400 mt-8 mb-4">The Rise of Internal Developer Platforms (IDPs)</h3>
      <p class="text-gray-300 leading-relaxed mb-4">
        Instead of expecting every software engineer to manage YAML manifests, Helm charts, ingress controllers, and secret managers, progressive tech firms deploy golden path portals. Developers can spin up staging databases, preview environments, and secure microservices via single-click declarative commands.
      </p>

      <h3 class="text-2xl font-headline italic text-cyan-400 mt-8 mb-4">Micro-VMs and Sub-Millisecond Edge Runtimes</h3>
      <p class="text-gray-300 leading-relaxed mb-4">
        Modern users expect real-time response times worldwide. Cloud infrastructure is evolving from centralized data center regions to global edge networks powered by technologies like WebAssembly (Wasm) and Firecracker micro-VMs. By routing execution to the nearest geographic edge node:
      </p>
      <ul class="list-disc pl-6 space-y-2 text-gray-300 mb-6">
        <li>Cold start times plunge from 2–5 seconds down to single-digit milliseconds.</li>
        <li>Data residency and GDPR compliance can be guaranteed on a per-request basis.</li>
        <li>Compute costs drop by up to 60% compared to traditional 24/7 idle container clusters.</li>
      </ul>

      <div class="p-6 rounded-xl bg-[#131313] border border-cyan-400/20 my-6">
        <h4 class="text-white font-headline text-lg mb-2">Our Recommendation for Growing Businesses</h4>
        <p class="text-gray-300 text-sm leading-relaxed">
          Avoid over-architecting your initial cloud footprint with heavy orchestrators. Adopt modular serverless and managed edge primitives that scale automatically with zero maintenance overhead.
        </p>
      </div>
    `
  },
  {
    id: 'zero-trust-ai-cybersecurity-trends',
    slug: 'zero-trust-ai-cybersecurity-trends',
    title: 'Zero-Trust Architecture & AI-Driven Threat Hunting in Enterprise Cybersecurity',
    category: 'Cybersecurity',
    icon: 'security',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
    featured: false,
    date: 'October 08, 2025',
    readTime: '7 min read',
    author: {
      name: 'Security Operations Group',
      role: 'Cybersecurity Practice, Joelx Orbit',
      avatar: '/joelx.png'
    },
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Perimeter-based firewalls are obsolete in a decentralized remote workforce. Learn how continuous identity verification, AI-powered anomaly detection, and Zero Trust models safeguard enterprise digital assets.',
    tags: ['Cybersecurity', 'Zero Trust', 'Cloud Security', 'Threat Detection', 'DevSecOps'],
    content: `
      <p class="text-lg text-gray-300 leading-relaxed mb-6 font-medium">
        With distributed teams, multi-cloud deployments, and software supply-chain vulnerabilities on the rise, cybersecurity has transitioned from an IT support checklist to a top boardroom priority. The prevailing mantra of modern defense is simple: <em>"Never trust, always verify."</em>
      </p>

      <h3 class="text-2xl font-headline italic text-emerald-400 mt-8 mb-4">Core Pillars of Zero-Trust Network Access (ZTNA)</h3>
      <p class="text-gray-300 leading-relaxed mb-4">
        Traditional corporate VPNs operated on perimeter security: once inside the network, users enjoyed wide lateral access. Under modern Zero Trust:
      </p>
      <ul class="list-disc pl-6 space-y-2 text-gray-300 mb-6">
        <li><strong>Context-Aware Authentication:</strong> Access to internal systems is re-evaluated per transaction based on device health, IP reputation, biometrics, and behavioral signals.</li>
        <li><strong>Micro-Segmentation:</strong> Application tiers are isolated into granular trust zones, preventing ransomware or malicious actors from moving laterally.</li>
        <li><strong>Least-Privilege Role Assignment:</strong> Ephemeral, short-lived tokens replace hardcoded API keys and permanent database superuser credentials.</li>
      </ul>

      <h3 class="text-2xl font-headline italic text-emerald-400 mt-8 mb-4">AI in Automated Incident Response</h3>
      <p class="text-gray-300 leading-relaxed mb-4">
        Security Operations Centers (SOCs) face alert fatigue, receiving millions of log lines daily. Next-generation Extended Detection and Response (XDR) platforms utilize real-time machine learning models to isolate infected workstations and revoke compromised sessions in under 300 milliseconds.
      </p>
    `
  },
  {
    id: 'full-stack-web-modern-ecosystem-2026',
    slug: 'full-stack-web-modern-ecosystem-2026',
    title: 'The Modern Full-Stack Frontier: TypeScript, Rust Tooling & High-Performance Web',
    category: 'Web Development',
    icon: 'code_blocks',
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    tagColor: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
    featured: false,
    date: 'October 05, 2025',
    readTime: '5 min read',
    author: {
      name: 'Joel Roys',
      role: 'Full-Stack Lead, Joelx Orbit',
      avatar: '/joelx.png'
    },
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Web development tooling has entered a golden age of speed. Rust-powered bundlers, progressive SSR hydration, and typed full-stack APIs are enabling lightning-fast digital experiences with ultra-low latency.',
    tags: ['Web Development', 'TypeScript', 'Rust Tooling', 'SSR', 'Frontend Performance'],
    content: `
      <p class="text-lg text-gray-300 leading-relaxed mb-6 font-medium">
        Web performance is no longer just a technical metric—it directly dictates conversion rates, search engine rankings, and brand perception. The modern web stack has been rebuilt from the ground up for extreme developer productivity and sub-second load times.
      </p>

      <h3 class="text-2xl font-headline italic text-purple-400 mt-8 mb-4">The Rust Revolution in Web Toolchains</h3>
      <p class="text-gray-300 leading-relaxed mb-4">
        Legacy JavaScript-based bundlers and linters are rapidly being superseded by high-performance native engines written in Rust and Go (such as Turbopack, Biome, and SWC). What previously took 45 seconds for a development reload now completes in under 15 milliseconds.
      </p>

      <h3 class="text-2xl font-headline italic text-purple-400 mt-8 mb-4">End-to-End Type Safety</h3>
      <p class="text-gray-300 leading-relaxed mb-4">
        The disconnect between backend databases and client-side interfaces is disappearing. With unified TypeScript contracts, OpenAPI schemas, and server actions, frontend components receive instantaneous compile-time warnings when database schemas evolve, eliminating entire classes of production runtime bugs.
      </p>

      <div class="p-6 rounded-xl bg-[#131313] border border-purple-400/20 my-6">
        <h4 class="text-white font-headline text-lg mb-2">Our Philosophy at Joelx Orbit</h4>
        <p class="text-gray-300 text-sm leading-relaxed">
          We combine bespoke aesthetic design with clean, performance-optimized codebases. Every website and web application we engineer is built for responsive fluid motion, perfect Lighthouse scores, and effortless scalability.
        </p>
      </div>
    `
  },
  {
    id: 'mobile-app-trends-flutter-kmp-2026',
    slug: 'mobile-app-trends-flutter-kmp-2026',
    title: 'Cross-Platform Mobile App Engineering: Flutter vs Kotlin Multiplatform (KMP)',
    category: 'Mobile Development',
    icon: 'phone_iphone',
    gradient: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    tagColor: 'text-[#d2a373] bg-[#d2a373]/10 border-[#d2a373]/30',
    featured: false,
    date: 'September 28, 2025',
    readTime: '6 min read',
    author: {
      name: 'Mobile Engineering Lead',
      role: 'App Development Unit, Joelx Orbit',
      avatar: '/joelx.png'
    },
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Should your enterprise build natively, choose Flutter’s unified canvas, or adopt Kotlin Multiplatform’s shared logic approach? An architectural breakdown of modern cross-platform mobile development.',
    tags: ['Mobile Development', 'Flutter', 'Kotlin Multiplatform', 'iOS', 'Android'],
    content: `
      <p class="text-lg text-gray-300 leading-relaxed mb-6 font-medium">
        Companies can no longer afford to duplicate engineering effort across separate Swift and Kotlin teams for every business feature. The cross-platform mobile ecosystem has matured dramatically, presenting two compelling champions: <strong>Google Flutter</strong> and <strong>JetBrains Kotlin Multiplatform (KMP)</strong>.
      </p>

      <h3 class="text-2xl font-headline italic text-[#d2a373] mt-8 mb-4">Flutter: Pixel-Perfect Brand Consistency</h3>
      <p class="text-gray-300 leading-relaxed mb-4">
        Flutter renders its own widgets via the Impeller rendering engine directly on the GPU. This delivers silky 120Hz animations, fluid gestures, and 100% visual consistency across iOS, Android, web, and desktop from a single codebase. It is ideal for consumer-facing apps, ecommerce storefronts, and fintech dashboards.
      </p>

      <h3 class="text-2xl font-headline italic text-[#d2a373] mt-8 mb-4">Kotlin Multiplatform: Native UI with Shared Core Logic</h3>
      <p class="text-gray-300 leading-relaxed mb-4">
        Unlike frameworks that take over the entire rendering tree, KMP focuses on sharing networking, persistence, offline sync, and business logic while allowing developers to write native SwiftUI on iOS and Jetpack Compose on Android.
      </p>

      <h3 class="text-2xl font-headline italic text-[#d2a373] mt-8 mb-4">Comparison Matrix</h3>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left text-sm text-gray-300 border border-white/10 rounded-lg overflow-hidden">
          <thead class="bg-[#1a1a1a] text-white font-label">
            <tr>
              <th class="p-3 border-b border-white/10">Feature</th>
              <th class="p-3 border-b border-white/10">Flutter</th>
              <th class="p-3 border-b border-white/10">Kotlin Multiplatform (KMP)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 bg-[#131313]">
            <tr>
              <td class="p-3 font-semibold text-white">UI Rendering</td>
              <td class="p-3">Unified custom canvas (Impeller)</td>
              <td class="p-3">Native SwiftUI / Jetpack Compose</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-white">Time-to-Market</td>
              <td class="p-3">Extremely fast (single UI + logic)</td>
              <td class="p-3">Moderate (shared logic + dual UI)</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-white">Platform Integration</td>
              <td class="p-3">Method channels / FFI</td>
              <td class="p-3">Direct zero-overhead interop</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: 'rag-vector-databases-enterprise-data-2026',
    slug: 'rag-vector-databases-enterprise-data-2026',
    title: 'RAG 2.0 & Vector Databases: Architecting Enterprise Knowledge Engines',
    category: 'Data & AI',
    icon: 'database',
    gradient: 'from-rose-500/20 via-red-500/10 to-transparent',
    tagColor: 'text-rose-400 bg-rose-400/10 border-rose-400/30',
    featured: false,
    date: 'September 20, 2025',
    readTime: '5 min read',
    author: {
      name: 'Data Architecture Group',
      role: 'Enterprise Data Solutions, Joelx Orbit',
      avatar: '/joelx.png'
    },
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Fine-tuning LLMs is costly and quickly becomes outdated. Learn how Retrieval-Augmented Generation (RAG 2.0), hybrid search (dense + sparse), and vector indexes are powering proprietary enterprise AI brains.',
    tags: ['Vector Databases', 'RAG', 'Machine Learning', 'Big Data', 'Enterprise AI'],
    content: `
      <p class="text-lg text-gray-300 leading-relaxed mb-6 font-medium">
        While foundation models possess broad general intelligence, they know nothing about your company's proprietary inventory, internal documentation, or customer contracts. The solution powering production enterprise AI is <strong>RAG (Retrieval-Augmented Generation)</strong>.
      </p>

      <h3 class="text-2xl font-headline italic text-rose-400 mt-8 mb-4">Why RAG 2.0 Outperforms Simple Semantic Search</h3>
      <p class="text-gray-300 leading-relaxed mb-4">
        Early naive RAG implementations suffered from hallucinations, missed semantic nuances, and retrieval latency. RAG 2.0 architectures solve this using:
      </p>
      <ul class="list-disc pl-6 space-y-2 text-gray-300 mb-6">
        <li><strong>Hybrid Search:</strong> Combining vector similarity embeddings (dense search) with exact keyword matching (BM25 sparse search) for maximum precision.</li>
        <li><strong>Reranking Models:</strong> Passing top retrieval candidates through specialized cross-encoder rerankers to surface the exact paragraph needed.</li>
        <li><strong>Graph RAG:</strong> Augmenting vector chunks with knowledge graphs that map relationships between entities, people, and business transactions.</li>
      </ul>

      <h3 class="text-2xl font-headline italic text-rose-400 mt-8 mb-4">Choosing the Right Data Engine</h3>
      <p class="text-gray-300 leading-relaxed mb-4">
        Whether adopting extension modules like <code class="text-rose-300 bg-black/40 px-2 py-0.5 rounded">pgvector</code> on existing PostgreSQL instances or deploying dedicated distributed vector engines like Pinecone and Qdrant, enterprise data architects now have production-grade tools to build private AI copilot systems securely.
      </p>
    `
  }
];

module.exports = {
  categories,
  blogs
};
