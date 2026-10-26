import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetail from './components/ItemDetail.jsx'
import HomePage from './components/HomePage.jsx'
import AboutSection from './components/AboutSection.jsx'
import DestinationList from './components/DestinationList.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import PhotoCredits from './components/PhotoCredits.jsx'
import VisitPlanList from './components/VisitPlanList.jsx'
import { initialDestinations } from './data/destinations.js'
import { culinaryHighlights } from './data/culinary.js'
import './App.css'

const catalogItems = [...initialDestinations, ...culinaryHighlights]

function App() {
  const [visitPlans, setVisitPlans] = useState([])

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage destinations={initialDestinations} />}
          />
          <Route
            path="/destinasi"
            element={<DestinationList items={catalogItems} />}
          />
          <Route
            path="/destinasi/:slug"
            element={<ItemDetail items={catalogItems} itemType="wisata" />}
          />
          <Route
            path="/kuliner/:slug"
            element={<ItemDetail items={catalogItems} itemType="kuliner" />}
          />
          <Route path="/tentang" element={<AboutSection />} />
          <Route path="/kredit-foto" element={<PhotoCredits />} />
          <Route
            path="/rencana-kunjungan"
            element={
              <VisitPlanList
                items={initialDestinations}
                plans={visitPlans}
                onAddPlan={(plan) =>
                  setVisitPlans((currentPlans) => [...currentPlans, plan])
                }
                onDeletePlan={(planId) =>
                  setVisitPlans((currentPlans) =>
                    currentPlans.filter((plan) => plan.id !== planId),
                  )
                }
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
