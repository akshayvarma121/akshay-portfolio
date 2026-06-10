import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        {/* Eyebrow */}
        <div className="section-eyebrow">{about.eyebrow}</div>

        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          {/* Left bio column */}
          <div style={{ flex: 1, maxWidth: "500px" }}>
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
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx} style={{ margin: 0 }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Currently status block */}
            <div
              style={{
                marginTop: "32px",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--text-muted)",
                lineHeight: "1.8",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <span>currently building  →  </span>
                <span style={{ color: "var(--text-primary)" }}>{about.currently.building}</span>
              </div>
              <div>
                <span>currently reading   →  </span>
                <span style={{ color: "var(--text-primary)" }}>{about.currently.reading}</span>
              </div>
            </div>
          </div>

          {/* Right avatar column */}
          {about.avatar && (
            <div
              style={{
                minWidth: "160px",
                maxWidth: "200px",
                width: "100%",
              }}
              className="mt-4 md:mt-0"
            >
              <img
                src={about.avatar}
                alt="Akshay Varma"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  filter: "grayscale(100%)",
                  opacity: 0.85,
                  transition: "filter 200ms ease, opacity 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "none";
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.style.opacity = "0.85";
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
