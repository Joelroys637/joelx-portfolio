// data/article-rag-deployment.js
// Complete Step-by-Step Guide to Building and Deploying a Production RAG Model for JoelX Orbit

const authorJoel = {
  name: "Joel Roys",
  role: "Lead Architect & Security Engineer, JoelX Orbit",
  avatar: "/joelx.png"
};

const ragDeploymentArticle = {
  id: "step-by-step-rag-model-creation-deployment-guide",
  slug: "step-by-step-rag-model-creation-deployment-guide",
  title: "Step-by-Step Guide to Building and Deploying a Production RAG Model: From Document Chunking to Cloud API",
  category: "Artificial Intelligence",
  icon: "psychology",
  gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
  tagColor: "text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/30",
  featured: true,
  date: "November 6, 2026",
  readTime: "19 min read",
  author: authorJoel,
  coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "RAG architecture diagram, vector database embeddings, and artificial intelligence model deployment pipeline",
  imageSource: "https://unsplash.com",
  imageLicense: "Unsplash License",
  primaryKeyword: "RAG Model Creation and Deployment",
  excerpt: "Comprehensive engineering tutorial on building and deploying a production-ready Retrieval-Augmented Generation (RAG) system from scratch. Master document parsing, dense vector embeddings, hybrid semantic retrieval, reranking, FastAPI microservice orchestration, Docker containerization, and cloud deployment with continuous evaluation.",
  tags: [
    "RAG",
    "Artificial Intelligence",
    "Vector Database",
    "Python",
    "FastAPI",
    "Docker",
    "LangChain",
    "LLM Deployment",
    "ChromaDB",
    "DevOps"
  ],
  content: `
    <!-- Executive Overview & Architecture Introduction -->
    <section class="mb-12">
      <div class="text-xl text-gray-200 leading-relaxed mb-6 font-medium border-l-4 border-[#a78bfa] pl-5 italic bg-white/[0.02] py-3 rounded-r-xl">
        While Large Language Models (LLMs) demonstrate extraordinary reasoning and linguistic capabilities, their internal parametric memory remains frozen at their pre-training cutoff date. Furthermore, base models lack access to proprietary enterprise knowledge and frequently hallucinate plausible-sounding falsehoods when asked about private domain data. <strong>Retrieval-Augmented Generation (RAG)</strong> solves this limitation by dynamically coupling a dense vector retrieval engine with a generative LLM, grounding every response in verifiable, fresh documentation.
      </div>

      <p>
        Building a toy RAG prototype in a Jupyter notebook takes 20 lines of code. However, engineering a <strong>production-grade RAG system</strong> capable of sub-second response times, multi-tenant security isolation, zero hallucination rates, and scalable cloud deployment requires a disciplined end-to-end software architecture.
      </p>

      <p>
        In this step-by-step engineering handbook, we will design, code, containerize, and deploy a robust RAG service from absolute scratch using <strong>Python, LangChain, ChromaDB, Sentence-Transformers, FastAPI, and Docker</strong>.
      </p>

      <!-- Key Architecture Metrics Box -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div class="p-5 rounded-xl bg-[#131313] border border-white/10">
          <span class="text-xs font-mono text-[#a78bfa] block mb-1">Architecture</span>
          <h4 class="text-white font-bold text-base">Hybrid Dense-Sparse RAG</h4>
          <p class="text-gray-400 text-xs mt-1">Dense vector cosine search coupled with Cross-Encoder re-ranking for ultra-precise retrieval.</p>
        </div>
        <div class="p-5 rounded-xl bg-[#131313] border border-white/10">
          <span class="text-xs font-mono text-[#a78bfa] block mb-1">API Throughput</span>
          <h4 class="text-white font-bold text-base">Asynchronous FastAPI</h4>
          <p class="text-gray-400 text-xs mt-1">High-concurrency REST endpoints supporting streaming responses and chunked ingestion.</p>
        </div>
        <div class="p-5 rounded-xl bg-[#131313] border border-white/10">
          <span class="text-xs font-mono text-[#a78bfa] block mb-1">Deployment Stack</span>
          <h4 class="text-white font-bold text-base">Docker + Cloud Infrastructure</h4>
          <p class="text-gray-400 text-xs mt-1">Multi-stage container builds with volume-backed persistence ready for ECS, Railway, or VPS.</p>
        </div>
      </div>
    </section>

    <!-- RAG Lifecycle Diagram -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">account_tree</span>
        The 3-Tier Production RAG Architecture
      </h3>
      <p>
        Before writing any code, it is essential to visualize the complete data pipeline. A resilient production RAG system separates into three autonomous stages:
      </p>

      <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 my-6 text-sm">
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <span class="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold shrink-0">Stage 1</span>
            <div>
              <strong class="text-white block font-body">Ingestion &amp; Vector Indexing (Offline/Batch or Event-Driven)</strong>
              <span class="text-gray-400">Raw documents (PDF, Markdown, JSON, HTML) &rarr; Text Extraction &rarr; Recursive Semantic Chunking &rarr; Dense Embedding Generation &rarr; Vector Index Storage with Metadata.</span>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-xs font-bold shrink-0">Stage 2</span>
            <div>
              <strong class="text-white block font-body">Semantic Retrieval &amp; Cross-Encoder Re-Ranking (Real-Time Query)</strong>
              <span class="text-gray-400">User Query &rarr; Query Embedding &rarr; HNSW Cosine Search (Top-K Candidates) &rarr; Cross-Encoder Scoring &rarr; Context Window Optimization.</span>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold shrink-0">Stage 3</span>
            <div>
              <strong class="text-white block font-body">Grounded Generation &amp; Guardrailed Inference (Real-Time Response)</strong>
              <span class="text-gray-400">Contextual Prompt Synthesis &rarr; Strict System Instructions &rarr; LLM Inference &rarr; Source Citation Extraction &rarr; Client Streaming Output.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Step 1: Environment Setup -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">terminal</span>
        Step 1: Setting Up the Python Engineering Environment
      </h3>
      <p>
        Create an isolated Python 3.11+ environment and install the verified core dependencies. We will use <strong>LangChain</strong> for modular orchestration, <strong>ChromaDB</strong> as an embedded vector database, <strong>sentence-transformers</strong> for lightweight high-speed local embeddings, and <strong>FastAPI</strong> for our microservice layer.
      </p>

      <pre><code># Create and activate a clean virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: .\\venv\\Scripts\\activate

# Install essential RAG packages
pip install --upgrade pip
pip install \\
    langchain==0.2.14 \\
    langchain-community==0.2.12 \\
    chromadb==0.5.5 \\
    sentence-transformers==3.0.1 \\
    pypdf==4.3.1 \\
    fastapi==0.112.1 \\
    uvicorn[standard]==0.30.6 \\
    pydantic==2.8.2 \\
    python-multipart==0.0.9</code></pre>

      <p>
        Organize your production project structure to maintain strict separation of concerns:
      </p>

      <pre><code>rag-production-service/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI endpoints and lifecycle events
│   ├── config.py            # Environment settings and hyperparameters
│   ├── ingestion.py         # Document parsing and chunking logic
│   ├── vectorstore.py       # ChromaDB initialization and indexing
│   ├── retriever.py         # Semantic search and re-ranking pipeline
│   └── generator.py         # Prompt engineering and LLM inference
├── data/
│   └── sample_docs/         # Source enterprise documents (PDF/MD/TXT)
├── vector_db_data/          # Persistent ChromaDB storage directory
├── Dockerfile               # Production multi-stage container build
├── docker-compose.yml       # Containerized service orchestration
├── requirements.txt         # Pinned production dependencies
└── .env                     # Sensitive API keys and environment variables</code></pre>
    </section>

    <!-- Step 2: Document Ingestion & Chunking -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">content_cut</span>
        Step 2: Document Ingestion &amp; Context-Aware Semantic Chunking
      </h3>
      <p>
        The single most common reason production RAG pipelines fail is poor chunking. If chunks are too small (e.g., 100 characters), semantic context is fractured. If chunks are too large (e.g., 3,000 characters), embedding vectors become diluted with background noise, causing retrieval accuracy to plummet.
      </p>

      <p>
        We employ a <strong>RecursiveCharacterTextSplitter</strong> configured with a chunk size of <strong>750 tokens</strong> and an overlap of <strong>100 tokens</strong>, respecting natural paragraph and sentence boundaries while injecting document metadata into every fragment.
      </p>

      <pre><code class="language-python"># app/ingestion.py
import os
from typing import List
from langchain_community.document_loaders import PyPDFLoader, TextLoader, DirectoryLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.documents import Document

def load_documents_from_directory(dir_path: str) -> List[Document]:
    """
    Ingests all PDF, Markdown, and Text files from a target directory
    while automatically attaching file metadata.
    """
    documents = []
    if not os.path.exists(dir_path):
        os.makedirs(dir_path, exist_ok=True)
        return documents

    for filename in os.listdir(dir_path):
        filepath = os.path.join(dir_path, filename)
        if filename.endswith(".pdf"):
            loader = PyPDFLoader(filepath)
            documents.extend(loader.load())
        elif filename.endswith((".txt", ".md")):
            loader = TextLoader(filepath, encoding="utf-8")
            documents.extend(loader.load())
            
    print(f"[Ingestion] Loaded {len(documents)} raw document pages/files.")
    return documents

def chunk_documents(documents: List[Document], chunk_size: int = 750, chunk_overlap: int = 100) -> List[Document]:
    """
    Recursively splits raw text into semantically cohesive passages.
    Preserves document source paths and line markers in metadata.
    """
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        separators=["\\n\\n", "\\n", " ", ""],
        length_function=len
    )
    
    chunked_docs = splitter.split_documents(documents)
    
    # Enrich metadata with unique chunk identifiers
    for idx, doc in enumerate(chunked_docs):
        doc.metadata["chunk_id"] = f"{doc.metadata.get('source', 'unknown')}_part_{idx}"
        
    print(f"[Chunking] Generated {len(chunked_docs)} semantic passages.")
    return chunked_docs</code></pre>
    </section>

    <!-- Step 3: Embeddings & Vector Store -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">database</span>
        Step 3: Dense Vector Embeddings &amp; Persistent ChromaDB Indexing
      </h3>
      <p>
        Next, we transform textual passages into dense numerical vectors that capture semantic meaning. We use the open-source <code>all-MiniLM-L6-v2</code> embedding model from Sentence-Transformers. It generates 384-dimensional dense vectors with remarkable cosine separation, sub-15ms inference latency on standard CPUs, and zero third-party API costs.
      </p>

      <pre><code class="language-python"># app/vectorstore.py
import os
from typing import List
import chromadb
from chromadb.config import Settings
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.documents import Document

CHROMA_PERSIST_DIR = os.getenv("CHROMA_PERSIST_DIR", "./vector_db_data")
COLLECTION_NAME = "enterprise_knowledge_base"

def get_embedding_function():
    """
    Instantiates an ultra-fast, local embedding model.
    Runs efficiently on standard server CPUs without requiring dedicated GPUs.
    """
    return HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2",
        model_kwargs={"device": "cpu"},
        encode_kwargs={"normalize_embeddings": True}
    )

def initialize_vector_store() -> Chroma:
    """
    Connects to the persistent ChromaDB database on disk.
    """
    os.makedirs(CHROMA_PERSIST_DIR, exist_ok=True)
    embeddings = get_embedding_function()
    
    vectorstore = Chroma(
        collection_name=COLLECTION_NAME,
        embedding_function=embeddings,
        persist_directory=CHROMA_PERSIST_DIR
    )
    return vectorstore

def index_chunks(vectorstore: Chroma, chunks: List[Document]) -> int:
    """
    Upserts chunked passages into ChromaDB with HNSW vector indexing.
    """
    if not chunks:
        return 0
    
    ids = [chunk.metadata["chunk_id"] for chunk in chunks]
    vectorstore.add_documents(documents=chunks, ids=ids)
    print(f"[VectorStore] Successfully indexed {len(chunks)} chunks into ChromaDB.")
    return len(chunks)</code></pre>
    </section>

    <!-- Step 4: Hybrid Semantic Retrieval & Reranking -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">manage_search</span>
        Step 4: Hybrid Semantic Retrieval &amp; Cross-Encoder Re-Ranking
      </h3>
      <p>
        Standard vector search retrieves the top-K nearest neighbors based purely on cosine distance. However, cosine similarity can return passages that share general topical keywords but lack the exact factual answer.
      </p>
      <p>
        In production, we implement a <strong>two-stage retrieval pipeline</strong>:
      </p>
      <ol>
        <li><strong>Coarse Retrieval:</strong> ChromaDB retrieves the top 10 candidate chunks via approximate nearest neighbor (ANN) search.</li>
        <li><strong>Cross-Encoder Re-Ranking:</strong> A secondary cross-encoder model jointly encodes the query and each candidate passage, scoring their factual relevance to select the top 3 highest-quality contexts.</li>
      </ol>

      <pre><code class="language-python"># app/retriever.py
from typing import List, Tuple
from langchain_core.documents import Document
from langchain_community.vectorstores import Chroma
from sentence_transformers import CrossEncoder

class AdvancedRAGRetriever:
    def __init__(self, vectorstore: Chroma):
        self.vectorstore = vectorstore
        # Load high-accuracy cross-encoder for semantic reranking
        self.reranker = CrossEncoder("cross-encoder/ms-marco-MiniLM-L-6-v2")

    def retrieve(self, query: str, top_k: int = 3, initial_candidates: int = 10) -> List[Tuple[Document, float]]:
        """
        Retrieves top candidate chunks and reranks them using joint cross-attention.
        """
        # 1. First-Stage Retrieval: Vector Cosine Similarity
        candidate_docs = self.vectorstore.similarity_search(query, k=initial_candidates)
        
        if not candidate_docs:
            return []

        # 2. Second-Stage Scoring: Cross-Encoder Evaluation
        query_passage_pairs = [[query, doc.page_content] for doc in candidate_docs]
        rerank_scores = self.reranker.predict(query_passage_pairs)

        # 3. Pair documents with their reranker score and sort descending
        scored_docs = list(zip(candidate_docs, rerank_scores))
        scored_docs.sort(key=lambda x: x[1], reverse=True)

        # 4. Return top-K most relevant contexts
        top_results = scored_docs[:top_k]
        return top_results</code></pre>
    </section>

    <!-- Step 5: Generator & Prompt Guardrails -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">psychology</span>
        Step 5: Generator Orchestration &amp; Hallucination Guardrails
      </h3>
      <p>
        The prompt template is the firewall of your generative system. If a prompt is ambiguous, the LLM will fall back on its pre-trained assumptions and invent facts. We design an immutable system prompt enforcing three strict business rules:
      </p>
      <ul>
        <li><strong>Grounding:</strong> Answer only using the explicitly provided reference context.</li>
        <li><strong>Fallback:</strong> If the retrieved passages do not contain the answer, state clearly: <em>"The provided enterprise documentation does not contain sufficient information to answer this question."</em></li>
        <li><strong>Attribution:</strong> Explicitly cite the document source and section for every claim.</li>
      </ul>

      <pre><code class="language-python"># app/generator.py
import os
from typing import List, Tuple
from langchain_core.documents import Document

def format_context_with_citations(scored_docs: List[Tuple[Document, float]]) -> str:
    """
    Structures retrieved passages into formatted markdown blocks with source tags.
    """
    context_blocks = []
    for doc, score in scored_docs:
        source_name = os.path.basename(doc.metadata.get("source", "Unknown Document"))
        chunk_id = doc.metadata.get("chunk_id", "N/A")
        context_blocks.append(
            f"--- SOURCE: {source_name} | CHUNK: {chunk_id} (Relevance Score: {score:.2f}) ---\\n"
            f"{doc.page_content.strip()}\\n"
        )
    return "\\n".join(context_blocks)

def build_grounded_prompt(query: str, context_text: str) -> str:
    """
    Assembles the final, hardened system prompt.
    """
    prompt = f"""You are JoelX Orbit's Enterprise AI Knowledge Assistant.
Answer the user's question with utmost technical accuracy, strictly adhering to the provided documentation below.

BUSINESS CONSTRAINTS:
1. ONLY utilize facts mentioned in the reference context.
2. If the context does not contain the answer, say: 'I cannot answer this question based on the verified documentation provided.' Do NOT extrapolate or fabricate facts.
3. Include brackets referencing the source document (e.g. [source: handbook.pdf]) for any key technical specification you mention.

=== VERIFIED REFERENCE CONTEXT ===
{context_text}
==================================

USER QUESTION:
{query}

FINAL DETAILED ANSWER:"""
    return prompt</code></pre>
    </section>

    <!-- Step 6: FastAPI Production Microservice -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">api</span>
        Step 6: Building the Production REST API with FastAPI
      </h3>
      <p>
        We encapsulate the entire RAG pipeline inside a high-throughput, asynchronous <strong>FastAPI</strong> microservice with Pydantic request validation, error boundaries, and health check probes.
      </p>

      <pre><code class="language-python"># app/main.py
from fastapi import FastAPI, HTTPException, UploadFile, File, BackgroundTasks
from pydantic import BaseModel, Field
from typing import List, Optional
import os
import shutil

from app.vectorstore import initialize_vector_store, index_chunks
from app.ingestion import load_documents_from_directory, chunk_documents
from app.retriever import AdvancedRAGRetriever
from app.generator import format_context_with_citations, build_grounded_prompt

app = FastAPI(
    title="JoelX Orbit Enterprise RAG API",
    description="Production-grade Retrieval-Augmented Generation Microservice",
    version="1.0.0"
)

# Global runtime state
vectorstore = initialize_vector_store()
retriever = AdvancedRAGRetriever(vectorstore)

class QueryRequest(BaseModel):
    query: str = Field(..., min_length=3, max_length=500, example="What are the deployment steps for our API?")
    top_k: Optional[int] = Field(default=3, ge=1, le=10)

class SourceCitation(BaseModel):
    source: str
    relevance_score: float
    snippet: str

class QueryResponse(BaseModel):
    query: str
    answer: str
    citations: List[SourceCitation]
    latency_ms: float

@app.get("/health", tags=["Monitoring"])
async def health_check():
    """Kubernetes / Cloud Readiness & Liveness Probe."""
    return {"status": "healthy", "service": "rag-engine", "collection": "enterprise_knowledge_base"}

@app.post("/api/v1/query", response_model=QueryResponse, tags=["Inference"])
async def query_rag(request: QueryRequest):
    """
    Executes hybrid retrieval, reranking, and generation on the knowledge base.
    """
    import time
    start_time = time.time()
    
    try:
        # Retrieve and rerank top contexts
        top_docs = retriever.retrieve(request.query, top_k=request.top_k)
        
        if not top_docs:
            return QueryResponse(
                query=request.query,
                answer="No relevant documentation found in the knowledge base.",
                citations=[],
                latency_ms=round((time.time() - start_time) * 1000, 2)
            )

        context_str = format_context_with_citations(top_docs)
        prompt = build_grounded_prompt(request.query, context_str)
        
        # Here we mock or execute your preferred LLM call (e.g. Gemini, OpenAI, or local Ollama)
        simulated_llm_response = (
            f"Based on your enterprise documents, the system operates on a multi-stage architecture. "
            f"Refer to the cited sources below for comprehensive parameters."
        )

        citations = [
            SourceCitation(
                source=os.path.basename(doc.metadata.get("source", "doc")),
                relevance_score=round(score, 3),
                snippet=doc.page_content[:150] + "..."
            )
            for doc, score in top_docs
        ]

        total_time = round((time.time() - start_time) * 1000, 2)
        return QueryResponse(
            query=request.query,
            answer=simulated_llm_response,
            citations=citations,
            latency_ms=total_time
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"RAG Inference Error: {str(e)}")

@app.post("/api/v1/ingest", tags=["Data Pipeline"])
async def upload_and_ingest(file: UploadFile = File(...)):
    """
    Dynamically uploads a new document, parses, chunks, and indexes it into ChromaDB.
    """
    upload_dir = "./data/sample_docs"
    os.makedirs(upload_dir, exist_ok=True)
    file_location = os.path.join(upload_dir, file.filename)
    
    with open(file_location, "wb+") as file_object:
        shutil.copyfileobj(file.file, file_object)

    raw_docs = load_documents_from_directory(upload_dir)
    chunks = chunk_documents(raw_docs)
    indexed_count = index_chunks(vectorstore, chunks)

    return {
        "status": "success",
        "filename": file.filename,
        "indexed_chunks": indexed_count
    }</code></pre>
    </section>

    <!-- Step 7: Containerization & Cloud Deployment -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">deployed_code</span>
        Step 7: Production Containerization with Docker &amp; Cloud Deployment
      </h3>
      <p>
        To ensure your RAG microservice runs identically in local staging, AWS ECS, Google Cloud Run, or on a dedicated VPS, we package it inside an optimized, multi-stage <strong>Dockerfile</strong> that runs under an unprivileged user for security compliance.
      </p>

      <pre><code class="language-dockerfile"># Dockerfile - Multi-Stage Production Build
FROM python:3.11-slim AS builder

WORKDIR /app

# Install build tools for native compilation
RUN apt-get update && apt-get install -y --no-install-recommends \\
    build-essential \\
    curl \\
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

# Final Runtime Stage
FROM python:3.11-slim AS runner

WORKDIR /app

# Create unprivileged application user
RUN groupadd -g 1001 appgroup && \\
    useradd -u 1001 -g appgroup -s /bin/bash appuser

# Copy installed Python packages from builder
COPY --from=builder /root/.local /home/appuser/.local
ENV PATH=/home/appuser/.local/bin:$PATH

# Copy application code
COPY --chown=appuser:appgroup . /app

# Ensure storage directories exist with proper write permissions
RUN mkdir -p /app/vector_db_data /app/data/sample_docs && \\
    chown -R appuser:appgroup /app

USER appuser

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \\
  CMD curl -f http://localhost:8000/health || exit 1

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "2"]</code></pre>

      <p>
        Next, define a <code>docker-compose.yml</code> file to manage data volumes, environment variables, and automated service restarts:
      </p>

      <pre><code class="language-yaml">version: '3.8'

services:
  rag-engine:
    build: .
    container_name: joelx_rag_engine
    restart: unless-stopped
    ports:
      - "8000:8000"
    environment:
      - CHROMA_PERSIST_DIR=/app/vector_db_data
      - PYTHONUNBUFFERED=1
    volumes:
      # Persistent vector database storage on host disk
      - ./vector_db_data:/app/vector_db_data
      - ./data/sample_docs:/app/data/sample_docs
    deploy:
      resources:
        limits:
          memory: 4G
          cpus: '2.0'</code></pre>

      <div class="p-6 rounded-2xl bg-white/[0.03] border border-white/10 my-6">
        <h4 class="text-white font-bold text-lg mb-2 flex items-center gap-2">
          <span class="material-symbols-outlined text-[#f9c591]">cloud_done</span>
          Deploying to Production Clouds (AWS / VPS / Render)
        </h4>
        <p class="text-gray-300 text-sm mb-3">
          Execute this two-step deployment workflow to spin up the containerized microservice:
        </p>
        <pre class="mb-0"><code># 1. Build and launch container in detached mode
docker-compose up -d --build

# 2. Verify health and query API
curl http://localhost:8000/health
curl -X POST http://localhost:8000/api/v1/query \\
     -H "Content-Type: application/json" \\
     -d '{"query": "How do we initialize the vector store?", "top_k": 3}'</code></pre>
      </div>
    </section>

    <!-- Step 8: Evaluation & Hardening -->
    <section class="mb-14">
      <h3 class="text-2xl font-headline italic text-[#f9c591] mt-8 mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl">verified_user</span>
        Step 8: Continuous RAG Evaluation (RAGAS) &amp; Security Hardening
      </h3>
      <p>
        Deploying the code is only half the battle. In production, models degrade as documentation evolves. To prevent regression, integrate automated evaluation using the <strong>RAGAS (Retrieval Augmented Generation Assessment)</strong> framework:
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div class="p-4 rounded-xl bg-[#131313] border border-white/5">
          <strong class="text-emerald-400 block text-sm mb-1 font-mono">Context Precision</strong>
          <p class="text-gray-400 text-xs">Measures whether all ground-truth relevant passages are ranked at the top of the context window.</p>
        </div>
        <div class="p-4 rounded-xl bg-[#131313] border border-white/5">
          <strong class="text-cyan-400 block text-sm mb-1 font-mono">Faithfulness</strong>
          <p class="text-gray-400 text-xs">Measures the ratio of claims in the generated response that can be mathematically traced back to the retrieved text.</p>
        </div>
        <div class="p-4 rounded-xl bg-[#131313] border border-white/5">
          <strong class="text-amber-400 block text-sm mb-1 font-mono">Answer Relevance</strong>
          <p class="text-gray-400 text-xs">Ensures the generated text addresses the user's explicit question without extraneous tangents.</p>
        </div>
      </div>

      <div class="p-5 rounded-xl bg-[#131313] border border-white/10 my-6">
        <h4 class="text-white font-bold text-base mb-2">Production Security Checklist</h4>
        <ul class="text-xs text-gray-300 space-y-1.5 list-disc ml-4">
          <li><strong>Document Sanitization:</strong> Strip malicious prompt injection tokens (e.g. <code>Ignore previous instructions</code>) during ingestion.</li>
          <li><strong>Role-Based Access Control (RBAC):</strong> Tag all chunks with tenant IDs and filter vector search with <code>where={"tenant_id": user_tenant}</code>.</li>
          <li><strong>Rate Limiting:</strong> Enforce strict per-IP token quotas on <code>/api/v1/query</code> to mitigate denial-of-wallet (DoW) attacks.</li>
          <li><strong>Persistent Snapshotting:</strong> Automate regular backups of <code>vector_db_data</code> to encrypted S3/GCS buckets.</li>
        </ul>
      </div>
    </section>

    <!-- Conclusion & Architecture Summary -->
    <section class="mb-12 border-t border-white/10 pt-8">
      <h3 class="text-2xl font-headline italic text-white mb-4">Summary: The Production RAG Advantage</h3>
      <p class="text-gray-300 leading-relaxed text-base mb-6">
        By transitioning from naive similarity matching to a <strong>two-stage hybrid retrieval pipeline</strong> with recursive chunking, persistent ChromaDB indexing, cross-encoder re-ranking, and containerized FastAPI orchestration, your AI applications achieve enterprise-grade reliability with guaranteed data sovereignty.
      </p>

      <div class="p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-transparent border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="text-white font-bold text-lg">Looking to Build Custom Enterprise AI or Cloud Solutions?</h4>
          <p class="text-gray-300 text-sm mt-1">Our engineering team at JoelX Orbit builds resilient web platforms, RAG architectures, and custom automation tools.</p>
        </div>
        <a href="/quote" class="px-6 py-3 rounded-full bg-[#f9c591] text-[#0e0e0e] font-label font-bold text-sm tracking-wide hover:bg-[#c99668] transition-colors shrink-0 shadow-lg">
          Request a Consultation
        </a>
      </div>
    </section>
  `
};

module.exports = ragDeploymentArticle;

