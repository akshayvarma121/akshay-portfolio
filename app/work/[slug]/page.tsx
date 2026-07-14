import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import Nav from "@/components/Nav";
import { caseStudies, work } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const study = caseStudies[resolvedParams.slug];
  if (!study) {
    return {};
  }
  return {
    title: study.title,
    description: study.description,
  };
}

export async function generateStaticParams() {
  return work.projects.map((project) => ({
    slug: project.slug,
  }));
}

function parseInlineMarkdown(text: string): React.ReactNode[] {
  // Support bold text like **text**
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} style={{ color: "var(--text-primary)", fontWeight: "600" }}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderMarkdownBlock(block: string, index: number) {
  const trimmed = block.trim();
  if (!trimmed) return null;

  // Heading 1
  if (trimmed.startsWith("# ")) {
    return (
      <h1
        key={index}
        className="project-title"
        style={{
          fontSize: "32px",
          marginTop: "40px",
          marginBottom: "16px",
          color: "var(--text-primary)",
        }}
      >
        {parseInlineMarkdown(trimmed.slice(2))}
      </h1>
    );
  }
  // Heading 2
  if (trimmed.startsWith("## ")) {
    return (
      <h2
        key={index}
        className="project-title"
        style={{
          fontSize: "20px",
          marginTop: "44px",
          marginBottom: "16px",
          color: "var(--accent)",
          borderBottom: "1px solid var(--border)",
          paddingBottom: "6px",
          letterSpacing: "0.02em",
          fontWeight: "600",
        }}
      >
        {parseInlineMarkdown(trimmed.slice(3))}
      </h2>
    );
  }
  // Heading 3
  if (trimmed.startsWith("### ")) {
    return (
      <h3
        key={index}
        className="project-title"
        style={{
          fontSize: "16px",
          marginTop: "32px",
          marginBottom: "12px",
          color: "var(--text-primary)",
          fontWeight: "600",
        }}
      >
        {parseInlineMarkdown(trimmed.slice(4))}
      </h3>
    );
  }
  // Bullet List
  if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
    const lines = trimmed.split("\n");
    const listItems = lines
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => line.replace(/^[*+-]\s+/, ""));
    return (
      <ul
        key={index}
        style={{
          margin: "16px 0",
          padding: 0,
          listStyleType: "none",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {listItems.map((item, i) => (
          <li
            key={i}
            style={{
              position: "relative",
              paddingLeft: "16px",
              color: "var(--text-primary)",
              lineHeight: "1.8",
              fontFamily: "var(--font-body)",
              fontSize: "15px",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
                fontWeight: "bold",
              }}
            >
              ›
            </span>
            {parseInlineMarkdown(item)}
          </li>
        ))}
      </ul>
    );
  }
  // Code block
  if (trimmed.startsWith("```")) {
    const lines = trimmed.split("\n");
    const code = lines.slice(1, -1).join("\n");
    return (
      <pre
        key={index}
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          padding: "16px",
          borderRadius: "4px",
          overflowX: "auto",
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--code)",
          margin: "24px 0",
        }}
      >
        <code>{code}</code>
      </pre>
    );
  }

  // Fallback to simple paragraph
  return (
    <p
      key={index}
      style={{
        margin: 0,
        color: "var(--text-primary)",
        fontFamily: "var(--font-body)",
        fontSize: "15px",
        lineHeight: "1.8",
      }}
    >
      {parseInlineMarkdown(trimmed)}
    </p>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const study = caseStudies[resolvedParams.slug];

  if (!study) {
    notFound();
  }

  // Find project details from work projects
  const project = work.projects.find((p) => p.slug === resolvedParams.slug);
  const displayTitle = project?.title || resolvedParams.slug;

  return (
    <>
      <Nav />
      <main style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>
        <div
          className="container"
          style={{
            paddingTop: "96px",
            paddingBottom: "96px",
            boxSizing: "border-box",
          }}
        >
          {/* Back link */}
          <div style={{ marginBottom: "32px" }}>
            <a href="/#work" className="project-link" style={{ fontSize: "14px" }}>
              ← Back
            </a>
          </div>

          {/* Project Title and CTA Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "8px",
            }}
          >
            <h1
              className="project-title"
              style={{
                fontSize: "44px",
                margin: 0,
                fontFamily: "var(--font-display)",
                fontWeight: 700,
              }}
            >
              {displayTitle}
            </h1>

            {project?.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-cta-btn"
              >
                {resolvedParams.slug === "studiopos" ? "Visit Kruze Studio →" : "View on GitHub →"}
              </a>
            )}

            {/* @ts-ignore */}
            {project?.liveUrl && (
              <a
                href={(project as any).liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-cta-btn"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--bg)",
                  marginLeft: "12px",
                }}
              >
                Live Demo →
              </a>
            )}
          </div>

          {/* Project Details Grid */}
          {project && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "24px",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                paddingTop: "20px",
                paddingBottom: "20px",
                marginTop: "24px",
                marginBottom: "40px",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Highlight</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--accent)", fontWeight: "600", marginTop: "4px" }}>
                  {project.stat}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>
                  {project.statLabel}
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Stack</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        border: "1px solid var(--border)",
                        padding: "2px 6px",
                        borderRadius: "3px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        color: "var(--text-primary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Role</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-primary)", marginTop: "4px" }}>
                  Creator & Solo Developer
                </div>
              </div>
            </div>
          )}

          {/* Study Body Content */}
          {study.body === "" ? (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                color: "var(--text-muted)",
                margin: 0,
              }}
            >
              Case study coming soon.
            </p>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {study.body
                .replace(/\r\n/g, "\n")
                .split("\n\n")
                .map((block, idx) => renderMarkdownBlock(block, idx))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
