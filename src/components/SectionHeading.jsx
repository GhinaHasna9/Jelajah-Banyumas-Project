function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = 'left',
  headingId,
}) {
  return (
    <div className={`section-heading section-heading-${alignment}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={headingId}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export default SectionHeading
