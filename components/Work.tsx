import { work } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="section-padding" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        {/* Eyebrow */}
        <div className="section-eyebrow">{work.eyebrow}</div>

        {/* Project List */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {work.projects.map((project, idx) => {
            // Note that href in content.ts is:
            // "https://kruze.space" for StudioPOS
            // "https://github.com/akshayvarma/kachra-seth" for Kachra Seth
            // The view link should go to /work/[slug] as requested in Step 3/4.
            // Let's check if the slug is used to route to /work/[slug].
            // The prompt says: "Below the title+tags row on the left: a small 'View project →' link... pointing to /work/studiopos and /work/kachra-seth respectively."
            // So we construct the internal path: `/work/${project.slug}`
            const caseStudyUrl = `/work/${project.slug}`;

            return (
              <div key={project.title}>
                <div
                  className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start"
                  style={{ width: "100%" }}
                >
                  {/* Left details */}
                  <div style={{ flex: 1, maxWidth: "520px" }}>
                    <h2 className="project-title" style={{ fontSize: "28px" }}>
                      {project.title}
                    </h2>

                    {/* Stack Tags */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginTop: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            border: "1px solid var(--border)",
                            padding: "2px 8px",
                            borderRadius: "3px",
                            fontFamily: "var(--font-mono)",
                            fontSize: "11px",
                            color: "var(--text-muted)",
                            lineHeight: "1.2",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <div style={{ marginBottom: "16px" }}>
                      <a href={caseStudyUrl} className="project-link">
                        View project →
                      </a>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "15px",
                        color: "var(--text-muted)",
                        lineHeight: "1.7",
                        margin: 0,
                        marginTop: "12px",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Right Stat Block */}
                  <div className="flex flex-col text-left md:text-right md:min-w-[200px] mt-2 md:mt-0">
                    <div className="stat-number">{project.stat}</div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        marginTop: "4px",
                      }}
                    >
                      {project.statLabel}
                    </div>
                  </div>
                </div>

                {/* Separator between projects */}
                {idx < work.projects.length - 1 && (
                  <hr
                    style={{
                      border: "none",
                      borderTop: "1px solid var(--border)",
                      margin: "48px 0",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
