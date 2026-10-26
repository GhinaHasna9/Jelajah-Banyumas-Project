function VisitPlanCard({ plan, onDelete }) {
  const formattedDate = new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${plan.visitDate}T00:00:00`))

  return (
    <article className="visit-plan-card">
      <div className="visit-plan-card-content">
        <h3>{plan.name}</h3>
        <p>
          <span>Destinasi</span>
          {plan.destinationName}
        </p>
        <p>
          <span>Tanggal kunjungan</span>
          {formattedDate}
        </p>
      </div>
      <button
        className="button button-secondary visit-plan-delete"
        type="button"
        onClick={() => onDelete(plan.id)}
        aria-label={`Hapus rencana ${plan.name}`}
      >
        Hapus
      </button>
    </article>
  )
}

export default VisitPlanCard
