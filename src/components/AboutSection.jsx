import SectionHeading from './SectionHeading.jsx'

const highlights = [
  {
    number: '01',
    title: 'Alam di lereng Gunung Slamet',
    description:
      'Air terjun, telaga, dan udara sejuk menjadikan kawasan pegunungan tujuan melepas penat.',
  },
  {
    number: '02',
    title: 'Bahasa dan keseharian',
    description:
      'Logat ngapak dan keramahan warganya menjadi bagian dari identitas Banyumas.',
  },
  {
    number: '03',
    title: 'Seni yang terus hidup',
    description:
      'Lengger dan ebeg memperkenalkan ragam kesenian yang tumbuh di tengah masyarakat.',
  },
]

function AboutSection() {
  return (
    <section className="about-section" id="tentang">
      <div className="page-container about-layout">
        <div className="about-intro">
          <SectionHeading
            eyebrow="SEKILAS BANYUMAS"
            title="Dekat di hati, kaya untuk dijelajahi."
          />
          <p>
            Terletak di barat daya Jawa Tengah, Banyumas dikenal dengan
            lanskap di sekitar Gunung Slamet, bahasa ngapak, serta kesenian
            seperti lengger dan ebeg. Alam, budaya, dan kehidupan lokalnya
            menawarkan banyak cara untuk mengenal daerah ini lebih dekat.
          </p>
        </div>
        <div className="highlight-list">
          {highlights.map((highlight) => (
            <article className="highlight-item" key={highlight.number}>
              <span className="highlight-number">{highlight.number}</span>
              <div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
              <span className="highlight-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
