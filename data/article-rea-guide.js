// data/article-rea-guide.js
// Step-by-Step Technical Guide on How to Use REA (Reverse Engineer Anything) for JoelX Orbit

const authorJoel = {
  name: "Joel Roys",
  role: "Lead Architect & Security Engineer, JoelX Orbit",
  avatar: "/joelx.png"
};

const reaGuideArticle = {
  id: "how-to-use-rea-reverse-engineering-guide",
  slug: "how-to-use-rea-reverse-engineering-guide",
  title: "How to Use REA: Step-by-Step Guide to the Reverse Engineer Anything GitHub Tool",
  category: "Cybersecurity",
  icon: "security",
  gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  tagColor: "text-[#34d399] bg-[#34d399]/10 border-[#34d399]/30",
  featured: true,
  date: "November 6, 2026",
  readTime: "18 min read",
  author: authorJoel,
  coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Cybersecurity code auditing, reverse engineering binary disassembly, and AI agent terminal",
  imageSource: "https://unsplash.com",
  imageLicense: "Unsplash License",
  primaryKeyword: "how to use rea",
  excerpt: "Step-by-step tutorial on how to use REA (Reverse Engineer Anything), the trending open-source GitHub tool and Model Context Protocol (MCP) server. Learn how to configure rea-agents with AI assistants, decompile binaries, inspect Electron and web applications, extract API schemas, and execute clean-room feature reconstruction.",
  tags: [
    "how to use rea",
    "REA",
    "Reverse Engineering",
    "morluto/rea",
    "MCP",
    "Cybersecurity",
    "AI Coding Agents",
    "Decompilation",
    "Developer Tools"
  ],
  content: `
    <!-- Executive Overview & Introduction -->
    <section class="mb-12">
      <div class="text-xl text-gray-200 leading-relaxed mb-6 font-medium border-l-4 border-[#34d399] pl-5 italic bg-white/[0.02] py-3 rounded-r-xl">
        Reverse engineering has historically been one of the most intellectually demanding disciplines in computer science—requiring deep mastery of x86/ARM assembly, binary decompilers like Ghidra and IDA Pro, network packet inspectors, and arcane memory debuggers. However, the open-source release of <strong>REA ("Reverse Engineer Anything")</strong> on GitHub (repository: <code>morluto/rea</code>) has revolutionized this workflow by coupling AI coding agents directly to automated reverse engineering toolchains via the <strong>Model Context Protocol (MCP)</strong>.
      </div>

      <p>
        Whether you are analyzing a legacy closed-source binary, debugging an undocumented third-party REST API, inspecting an Electron desktop application, or auditing an Android APK for security vulnerabilities, learning <strong>how to use REA</strong> provides developers with unprecedented forensic visibility.
      </p>

      <p>
        In this step-by-step engineering guide, we examine what REA is, how to set up the <code>rea-agents</code> MCP server with your favorite AI coding assistant (Cursor, Claude Code, Windsurf, or Gemini CLI), and how to execute real-world clean-room reconstruction workflows with complete ethical and technical rigor.
      </p>

      <!-- Key Quick-Facts Box -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div class="p-5 rounded-xl bg-[#131313] border border-white/10">
          <span class="text-xs font-mono text-[#34d399] block mb-1">GitHub Project</span>
          <h4 class="text-white font-bold text-base">morluto/rea</h4>
          <p class="text-gray-400 text-xs mt-1">Open-source reverse engineering framework &amp; MCP server bridging AI models with binary analysis tools.</p>
        </div>
        <div class="p-5 rounded-xl bg-[#131313] border border-white/10">
          <span class="text-xs font-mono text-[#34d399] block mb-1">Quick Start</span>
          <h4 class="text-white font-bold text-base">npx rea-agents@latest setup</h4>
          <p class="text-gray-400 text-xs mt-1">One-command setup wizard that registers REA with Claude, Cursor, and MCP environments.</p>
        </div>
        <div class="p-5 rounded-xl bg-[#131313] border border-white/10">
          <span class="text-xs font-mono text-[#34d399] block mb-1">Target Coverage</span>
          <h4 class="text-white font-bold text-base">Binaries, Web, Apps &amp; APIs</h4>
          <p class="text-gray-400 text-xs mt-1">Supports native ELF/PE/Mach-O binaries, Electron packages, WebAssembly, and mobile APKs.</p>
        </div>
      </div>
    </section>

    <!-- Architecture & How REA Works -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">memory</span>
        What is REA and How Does It Work?
      </h3>
      <p>
        Unlike naive AI scripts that attempt to hallucinate code from vague descriptions, <strong>REA is an evidence-driven forensic orchestrator</strong>. It acts as a standardized bridge between an AI reasoning engine and battle-tested local disassemblers, network proxies, decompilers, and dynamic instrumentation harnesses.
      </p>

      <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 my-6 text-sm">
        <h4 class="text-white font-bold text-base mb-3 font-body">The REA Operational Pipeline</h4>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold shrink-0">Phase 1</span>
            <div>
              <strong class="text-white block font-body">Target Artifact Ingestion</strong>
              <span class="text-gray-400">REA points at a local binary, compiled <code>.asar</code> Electron package, APK archive, or live browser network stream.</span>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono text-xs font-bold shrink-0">Phase 2</span>
            <div>
              <strong class="text-white block font-body">Tool Execution &amp; Structured Evidence Extraction</strong>
              <span class="text-gray-400">The MCP server invokes specialized CLI utilities (Ghidra headless, Rizin/Radare2, strings, jadx, or DevTools protocols) to extract symbol tables, function signatures, imported libraries, and network schemas.</span>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold shrink-0">Phase 3</span>
            <div>
              <strong class="text-white block font-body">AI Agent Reasoning &amp; Context Assembly</strong>
              <span class="text-gray-400">The extracted disassembly or network traces are presented to the AI agent in structured JSON/text schemas, allowing the model to decipher the core algorithms without drowning in raw assembly dumps.</span>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold shrink-0">Phase 4</span>
            <div>
              <strong class="text-white block font-body">Clean-Room Synthesis &amp; Test Suite Generation</strong>
              <span class="text-gray-400">The agent generates a clean, modern reimplementation (in TypeScript, Python, Go, or Rust) along with comprehensive automated unit tests matching the reverse-engineered specification.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prerequisites & System Requirements -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">checklist</span>
        Prerequisites &amp; System Setup
      </h3>
      <p>
        Before installing REA, verify that your development machine satisfies the following prerequisites:
      </p>

      <ul class="list-disc ml-5 space-y-2 text-gray-300 text-sm">
        <li><strong>Node.js:</strong> Version 20.x, 22.x LTS, or newer with <code>npm</code> and <code>npx</code> available in your system <code>PATH</code>.</li>
        <li><strong>AI Coding Client:</strong> Cursor IDE, Claude Desktop, Claude Code CLI, Windsurf, or Gemini CLI with Model Context Protocol (MCP) support enabled.</li>
        <li><strong>Optional Analysis Engines:</strong>
          <ul class="list-circle ml-5 mt-1 space-y-1 text-gray-400 text-xs">
            <li>For native binaries: <code>objdump</code>, <code>strings</code>, <code>gdb</code>, or a headless installation of Ghidra / Rizin.</li>
            <li>For Android applications: <code>jadx</code> or <code>apktool</code>.</li>
            <li>For web/Electron apps: <code>asar</code> CLI (<code>npm install -g @electron/asar</code>).</li>
          </ul>
        </li>
      </ul>
    </section>

    <!-- Step 1: Installation & Setup -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">download</span>
        Step 1: Installing and Configuring REA
      </h3>
      <p>
        The creators of <code>morluto/rea</code> provide an automated onboarding script distributed through npm as <code>rea-agents</code>. Run the setup script in your terminal:
      </p>

      <pre><code class="language-bash"># Run the official REA onboarding wizard
npx rea-agents@latest setup</code></pre>

      <p>
        The interactive installer performs the following automated actions:
      </p>
      <ol class="list-decimal ml-5 space-y-2 text-gray-300 text-sm">
        <li>Detects your installed AI assistants (e.g., Claude Desktop, Cursor, Windsurf).</li>
        <li>Verifies presence of Node.js and system inspection dependencies.</li>
        <li>Updates or proposes the JSON configuration file to register the REA MCP server.</li>
      </ol>

      <div class="p-6 rounded-2xl bg-white/[0.03] border border-white/10 my-6">
        <h4 class="text-white font-bold text-base mb-2 flex items-center gap-2">
          <span class="material-symbols-outlined text-[#34d399]">settings</span>
          Manual MCP Configuration (Claude Desktop &amp; Cursor)
        </h4>
        <p class="text-gray-300 text-sm mb-3">
          If you prefer configuring your MCP client manually, add the <code>rea-agents</code> server entry to your configuration file (e.g., <code>claude_desktop_config.json</code> or <code>.cursor/mcp.json</code>):
        </p>
        <pre class="mb-0"><code class="language-json">{
  "mcpServers": {
    "rea": {
      "command": "npx",
      "args": ["-y", "rea-agents@latest", "server"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}</code></pre>
      </div>

      <p>
        Restart your AI coding assistant. You should see <code>rea</code> appear in your active MCP tools list with functions such as <code>rea_inspect_binary</code>, <code>rea_extract_strings</code>, <code>rea_trace_network</code>, and <code>rea_decompile_function</code>.
      </p>
    </section>

    <!-- Step 2: The Core Workflow -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">terminal</span>
        Step 2: How to Prompt Your AI Agent with REA
      </h3>
      <p>
        Once REA is hooked into your agent environment, you interact with it directly through natural language instructions. The key to successful reverse engineering with REA is <strong>hypothesis-driven prompting</strong>. Instead of saying *"copy this app,"* prompt the agent with specific investigative targets:
      </p>

      <pre><code class="language-markdown"># Example Prompt for Agent in Cursor / Claude Code:
"Use REA to inspect the target binary located at ./bin/payment_calculator.
1. Extract all string literals and symbol tables.
2. Identify the core algorithm calculating interest rates.
3. Decompile the calculate_tax() routine and explain its inputs and outputs.
4. Reimplement this logic in modern TypeScript with 100% test coverage."</code></pre>
    </section>

    <!-- Step 3: Real-World Use Case 1 - Electron & Web Apps -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">web</span>
        Step 3: Reverse Engineering an Electron Desktop App
      </h3>
      <p>
        A substantial portion of modern desktop applications (including Slack, Discord, VS Code, and internal enterprise dashboards) are packaged using Electron. When you need to understand how an application communicates with its backend or handles local caching, REA provides an automated workflow:
      </p>

      <div class="space-y-4 my-6">
        <div class="p-4 rounded-xl bg-[#131313] border border-white/5">
          <strong class="text-white block text-sm mb-1 font-body">1. Unpack the Archive</strong>
          <p class="text-gray-400 text-xs">REA automatically extracts the compiled <code>app.asar</code> bundle into a clean inspection workspace:</p>
          <pre class="my-2"><code class="language-bash">npx @electron/asar extract ./app.asar ./unpacked_app</code></pre>
        </div>

        <div class="p-4 rounded-xl bg-[#131313] border border-white/5">
          <strong class="text-white block text-sm mb-1 font-body">2. Search for Route &amp; State Handlers</strong>
          <p class="text-gray-400 text-xs">Prompt your agent: <em>"Find all WebSocket message types and REST endpoints defined in ./unpacked_app/dist/main.js."</em> REA scans the minified bundle, identifies bundle chunks, and reconstructs the API payload schemas.</p>
        </div>

        <div class="p-4 rounded-xl bg-[#131313] border border-white/5">
          <strong class="text-white block text-sm mb-1 font-body">3. Reconstruct Type Definitions</strong>
          <p class="text-gray-400 text-xs">REA extracts the observed payloads into TypeScript interfaces, saving hours of manual Wireshark packet inspection:</p>
          <pre class="my-2"><code class="language-typescript">// Generated by AI Agent using REA evidence
export interface DeviceTelemetryPayload {
  deviceId: string;
  firmwareVersion: string;
  batteryStatus: number;
  timestampUtc: number;
}</code></pre>
        </div>
      </div>
    </section>

    <!-- Step 4: Real-World Use Case 2 - Native Binaries -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">code</span>
        Step 4: Reverse Engineering Native C/C++ &amp; Go Binaries
      </h3>
      <p>
        When examining compiled native binaries (such as proprietary CLI tools or device drivers), REA invokes disassembly tools and translates the machine code into human-readable pseudocode:
      </p>

      <pre><code class="language-bash"># The AI Agent invokes REA tools under the hood:
# 1. Inspect binary file headers
rea_inspect_binary --file ./tools/auth_verifier

# 2. Extract ASCII and UTF-16 string constants
rea_extract_strings --min-length 6 --file ./tools/auth_verifier

# 3. Disassemble the validation subroutine
rea_decompile_function --symbol verify_license_key --file ./tools/auth_verifier</code></pre>

      <p>
        The AI agent synthesizes the disassembled assembly instructions:
      </p>

      <pre><code class="language-c">// Disassembled pseudocode extracted via REA &amp; Ghidra Bridge
bool verify_license_key(char *input_key) {
    if (strlen(input_key) != 19) return false;
    
    // Check checksum algorithm: sum of ASCII values mod 97 == 42
    int sum = 0;
    for (int i = 0; i &lt; 19; i++) {
        if (input_key[i] != '-') {
            sum += (int)input_key[i];
        }
    }
    return (sum % 97) == 42;
}</code></pre>

      <p>
        With the algorithm identified through empirical evidence, you can create compliant documentation, write a license validation service, or build automated regression tests.
      </p>
    </section>

    <!-- Step 5: Clean-Room Software Engineering -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">verified</span>
        Step 5: Clean-Room Feature Reconstruction Methodology
      </h3>
      <p>
        In enterprise software development, copying proprietary source code directly can trigger severe intellectual property infringement claims. <strong>Clean-room design</strong> (also known as the Chinese wall technique) is the industry standard legal defense:
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div class="p-5 rounded-xl bg-[#131313] border border-white/5">
          <span class="text-xs font-mono text-amber-400 block mb-1">Dirty Room (Analysis Team)</span>
          <h4 class="text-white font-bold text-base">Specification &amp; Protocol Extraction</h4>
          <p class="text-gray-400 text-xs mt-2">The engineer uses REA to inspect the binary, understand the data format, and write an abstract functional specification document without exporting proprietary code.</p>
        </div>
        <div class="p-5 rounded-xl bg-[#131313] border border-white/5">
          <span class="text-xs font-mono text-emerald-400 block mb-1">Clean Room (Implementation Team)</span>
          <h4 class="text-white font-bold text-base">Independent Reimplementation</h4>
          <p class="text-gray-400 text-xs mt-2">A separate developer (or AI prompt session) takes <em>only</em> the functional specification and writes a fresh, original implementation with comprehensive tests from scratch.</p>
        </div>
      </div>
    </section>

    <!-- Ethical & Legal Compliance -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">gavel</span>
        Legal &amp; Ethical Considerations
      </h3>
      <p>
        Reverse engineering is protected under various legal doctrines (such as interoperability exceptions under EU Directive 2009/24/EC and Section 1201(f) of the US DMCA), provided it is performed for legitimate technical purposes:
      </p>

      <div class="p-5 rounded-xl bg-[#131313] border border-white/10 my-6">
        <h4 class="text-white font-bold text-base mb-2">Permitted vs. Prohibited Use Cases</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mt-3">
          <div>
            <span class="text-emerald-400 font-bold block mb-1">Permitted Engineering Uses:</span>
            <ul class="text-gray-300 space-y-1 list-disc ml-4">
              <li>Building interoperable bridges and data converters.</li>
              <li>Security vulnerability research and defensive patch auditing.</li>
              <li>Recovering lost specifications for legacy enterprise systems.</li>
              <li>Auditing third-party libraries for privacy leaks and telemetry.</li>
            </ul>
          </div>
          <div>
            <span class="text-rose-400 font-bold block mb-1">Prohibited &amp; High-Risk Uses:</span>
            <ul class="text-gray-300 space-y-1 list-disc ml-4">
              <li>Circumventing digital rights management (DRM) or anti-piracy gates.</li>
              <li>Copying and commercializing proprietary copyrighted algorithms directly.</li>
              <li>Extracting hardcoded cryptographic keys to compromise live infrastructure.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO FAQ Section -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">help_outline</span>
        Frequently Asked Questions: How to Use REA
      </h3>

      <div class="space-y-4 my-6">
        <div class="p-5 rounded-xl bg-[#131313] border border-white/5">
          <h4 class="text-white font-bold text-base mb-2">What is the difference between REA and Ghidra?</h4>
          <p class="text-gray-300 text-sm">Ghidra is a standalone GUI software reverse engineering framework created by the NSA. REA is an AI orchestration layer and MCP server that connects Ghidra and CLI tools to modern AI coding agents like Cursor and Claude, allowing natural language queries and automated synthesis.</p>
        </div>

        <div class="p-5 rounded-xl bg-[#131313] border border-white/5">
          <h4 class="text-white font-bold text-base mb-2">Can REA run offline on a local machine?</h4>
          <p class="text-gray-300 text-sm">Yes. The <code>rea-agents</code> MCP server runs completely locally on your machine via Node.js. If you connect it to an offline LLM (such as Llama 3 or DeepSeek running via Ollama), your binary files and analysis data never leave your local environment.</p>
        </div>

        <div class="p-5 rounded-xl bg-[#131313] border border-white/5">
          <h4 class="text-white font-bold text-base mb-2">Which operating systems are supported?</h4>
          <p class="text-gray-300 text-sm">REA supports macOS, Linux, and Windows (via PowerShell or WSL). Ensure that Node.js 20+ is installed in your operating system path.</p>
        </div>
      </div>
    </section>

    <!-- Conclusion & Architecture Summary -->
    <section class="mb-12 border-t border-white/10 pt-8">
      <h3 class="text-2xl font-headline italic text-white mb-4">Conclusion: Supercharging Engineering Workflows with REA</h3>
      <p class="text-gray-300 leading-relaxed text-base mb-6">
        The emergence of tools like <code>morluto/rea</code> marks a pivotal moment in developer productivity. By combining rigorous static analysis and decompilation with the contextual reasoning of AI coding agents, developers can understand complex legacy codebases, verify security postures, and build interoperable systems in a fraction of the traditional time.
      </p>

      <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-transparent border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="text-white font-bold text-lg">Need Enterprise Software Architecture &amp; Security Auditing?</h4>
          <p class="text-gray-300 text-sm mt-1">Our engineering team at JoelX Orbit builds resilient cloud software, performs technical code audits, and designs enterprise APIs.</p>
        </div>
        <a href="/quote" class="px-6 py-3 rounded-full bg-[#f9c591] text-[#0e0e0e] font-label font-bold text-sm tracking-wide hover:bg-[#c99668] transition-colors shrink-0 shadow-lg">
          Consult Our Engineers
        </a>
      </div>
    </section>
  `
};

module.exports = reaGuideArticle;

