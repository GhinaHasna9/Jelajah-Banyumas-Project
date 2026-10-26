import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import VisitPlanCard from './VisitPlanCard.jsx'

function getLocalDateString() {
  const date = new Date()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

function VisitPlanList({ items, plans, onAddPlan, onDeletePlan }) {
  const [planName, setPlanName] = useState('')
  const [destinationId, setDestinationId] = useState('')
  const [visitDate, setVisitDate] = useState('')
  const [errors, setErrors] = useState({})
  const today = getLocalDateString()

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    const selectedDestination = items.find(
      (item) => item.id === destinationId,
    )

    if (!planName.trim()) {
      nextErrors.planName = 'Nama rencana kunjungan wajib diisi.'
    }
    if (!selectedDestination) {
      nextErrors.destinationId = 'Pilih destinasi wisata.'
    }
    if (!visitDate) {
      nextErrors.visitDate = 'Tanggal kunjungan wajib diisi.'
    } else if (visitDate < today) {
      nextErrors.visitDate = 'Tanggal kunjungan tidak boleh sebelum hari ini.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    onAddPlan({
      id: globalThis.crypto.randomUUID(),
      name: planName.trim(),
      destinationName: selectedDestination.name,
      visitDate,
    })
    setPlanName('')
    setDestinationId('')
    setVisitDate('')
  }

  function handleFieldChange(field, setter) {
    return (event) => {
      setter(event.target.value)
      setErrors((currentErrors) => {
        const nextErrors = { ...currentErrors }
        delete nextErrors[field]
        return nextErrors
      })
    }
  }

  return (
    <section className="visit-plan-form-section">
      <div className="page-container">
        <div className="visit-plan-form-heading">
          <SectionHeading
            eyebrow="PERJALANAN PILIHANMU"
            title="Rencanakan kunjungan"
            description="Buat rencana perjalanan dengan memilih destinasi wisata dan tanggal kunjungan."
          />
        </div>

        <form className="visit-plan-form" onSubmit={handleSubmit} noValidate>
          {Object.keys(errors).length > 0 && (
            <div className="form-error-summary" role="alert">
              Lengkapi atau perbaiki isian yang ditandai.
            </div>
          )}

          <div className="visit-plan-fields">
            <div className="form-field">
              <label htmlFor="planName">Nama rencana kunjungan</label>
              <input
                className="form-control"
                id="planName"
                name="planName"
                type="text"
                value={planName}
                onChange={handleFieldChange('planName', setPlanName)}
                aria-invalid={Boolean(errors.planName)}
                aria-describedby={errors.planName ? 'planName-error' : undefined}
                required
              />
              {errors.planName && (
                <p className="field-error" id="planName-error">
                  {errors.planName}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="planDestination">Destinasi wisata</label>
              <select
                className="form-control"
                id="planDestination"
                name="destinationId"
                value={destinationId}
                onChange={handleFieldChange('destinationId', setDestinationId)}
                aria-invalid={Boolean(errors.destinationId)}
                aria-describedby={
                  errors.destinationId ? 'planDestination-error' : undefined
                }
                required
              >
                <option value="">Pilih destinasi</option>
                {items.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              {errors.destinationId && (
                <p className="field-error" id="planDestination-error">
                  {errors.destinationId}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="planVisitDate">Tanggal kunjungan</label>
              <input
                className="form-control"
                id="planVisitDate"
                name="visitDate"
                type="date"
                min={today}
                value={visitDate}
                onChange={handleFieldChange('visitDate', setVisitDate)}
                aria-invalid={Boolean(errors.visitDate)}
                aria-describedby={
                  errors.visitDate ? 'planVisitDate-error' : undefined
                }
                required
              />
              {errors.visitDate && (
                <p className="field-error" id="planVisitDate-error">
                  {errors.visitDate}
                </p>
              )}
            </div>
          </div>

          <div className="visit-plan-form-actions">
            <button className="button button-primary" type="submit">
              Tambah Rencana <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>

        <section
          className="visit-plan-list"
          aria-labelledby="visit-plan-list-title"
          aria-live="polite"
        >
          <div className="visit-plan-list-heading">
            <SectionHeading
              eyebrow="RENCANA PERJALANAN"
              title="Daftar Rencana Kunjungan"
              headingId="visit-plan-list-title"
            />
          </div>

          {plans.length === 0 ? (
            <p className="visit-plan-empty">
              Belum ada data rencana kunjungan
            </p>
          ) : (
            <div className="visit-plan-cards">
              {plans.map((plan) => (
                <VisitPlanCard
                  key={plan.id}
                  plan={plan}
                  onDelete={onDeletePlan}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  )
}

export default VisitPlanList
