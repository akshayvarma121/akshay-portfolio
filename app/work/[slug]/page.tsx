import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

          {/* Project Title */}
          <h1
            className="project-title"
            style={{
              fontSize: "40px",
              margin: "0 0 16px 0",
            }}
          >
            {displayTitle}
          </h1>

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
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                color: "var(--text-primary)",
                lineHeight: "1.8",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {study.body.split("\n\n").map((para, idx) => (
                <p key={idx} style={{ margin: 0 }}>
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
