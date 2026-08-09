export default function AboutPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col gap-section-gap">
      {/* Mission */}
      <section className="flex flex-col gap-6 max-w-3xl">
        <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">
          Our Mission
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
          Making the out-of-school crisis local, visible, and actionable.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Pakistan has an estimated 25.2 million children out of school —
          one of the highest out-of-school populations in the world. Roll
          Call exists to take that national number and make it real at the
          province and district level, so parents, teachers, and community
          workers can act on it, not just read about it.
        </p>
      </section>

      {/* What we do */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-white border border-surface-variant rounded-lg p-6 flex flex-col gap-3">
          <span className="material-symbols-outlined text-primary-container text-3xl">
            bar_chart
          </span>
          <h3 className="font-headline-md text-headline-md text-primary">
            Show the real numbers
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Every province-level figure on this site is sourced from UNICEF
            Pakistan and the Pakistan Bureau of Statistics — not estimates
            we made up.
          </p>
        </div>
        <div className="bg-white border border-surface-variant rounded-lg p-6 flex flex-col gap-3">
          <span className="material-symbols-outlined text-primary-container text-3xl">
            school
          </span>
          <h3 className="font-headline-md text-headline-md text-primary">
            Point to nearby schools
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            The Lookup tool helps you find schools by district, so a family
            has a concrete next step, not just a statistic.
          </p>
        </div>
        <div className="bg-white border border-surface-variant rounded-lg p-6 flex flex-col gap-3">
          <span className="material-symbols-outlined text-primary-container text-3xl">
            flag
          </span>
          <h3 className="font-headline-md text-headline-md text-primary">
            Flag a child
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Know a specific out-of-school child? Flag them for follow-up —
            no login required, takes under a minute.
          </p>
        </div>
      </section>

      {/* Data Methodology */}
      <section
        id="methodology"
        className="bg-surface-container-low border border-surface-container-highest rounded-lg p-8 flex flex-col gap-4"
      >
        <h2 className="font-headline-lg text-headline-lg text-primary">
          Data Methodology
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          <strong className="text-primary">Province-level figures</strong>{" "}
          (total out-of-school children, out-of-school rate, school-age
          population) are sourced from UNICEF Pakistan&apos;s Education
          overview (2026) and the Pakistan Bureau of Statistics HIES
          2024–25. These are verified, cited figures.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant">
          <strong className="text-primary">
            District notes and school listings
          </strong>{" "}
          are illustrative placeholders for this MVP. Production use would
          require district-level EMIS (Education Management Information
          System) data, which this project does not yet integrate.
        </p>
      </section>

      {/* Privacy */}
      <section className="flex flex-col gap-4 max-w-3xl">
        <h2 className="font-headline-lg text-headline-lg text-primary">
          Privacy Policy
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          When you flag a child, your note is stored with the district you
          selected and a timestamp. It is not linked to any account or
          identity. Submissions are not publicly readable — they exist so
          that a local contact can follow up.
        </p>
      </section>

      {/* Contact */}
      <section className="flex flex-col gap-4 max-w-3xl">
        <h2 className="font-headline-lg text-headline-lg text-primary">
          Contact Support
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Built for AI Seekho — Assignment 4. For questions about this
          project, reach out through the GitHub repository.
        </p>
      </section>
    </div>
  );
}   