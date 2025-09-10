import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Core Pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PhysicsSelectionPage from "./pages/PhysicsSelectionPage";
import ChemistrySelectionPage from "./pages/ChemistrySelectionPage";
import BiologySelectionPage from "./pages/BiologySelectionPage";

// Physics Experiments
import PendulumPage from "./pages/PendulumPage";
import OhmsLawPage from "./pages/OhmsLawPage";
import ProjectileMotionPage from "./pages/ProjectileMotionPage";
import LensSimulationPage from "./pages/LensSimulationPage";

// Chemistry Experiments
import AcidBasePage from "./pages/AcidBasePage";
import TitrationPage from "./pages/TitrationPage";
import ReactionRatePage from "./pages/ReactionRatePage";
import ElectrolysisPage from "./pages/ElectrolysisPage";

// Biology Experiments
import PhotosynthesisPage from "./pages/PhotosynthesisPage";
import EnzymeActivityPage from "./pages/EnzymeActivityPage";
import CellDivisionPage from "./pages/CellDivisionPage";
import RespirationPage from "./pages/RespirationPage";

// Optional Test Animation
import TestAnimation from "./pages/TestAnimation";

// Chatbot (added)
import Chatbot from "./components/Chatbot";

export default function App() {
    return (
        <>
            <Routes>
                {/* Login */}
                <Route path="/" element={<LoginPage />} />

                {/* Home */}
                <Route path="/home" element={<HomePage />} />

                {/* Subject Selection */}
                <Route path="/physics" element={<PhysicsSelectionPage />} />
                <Route path="/chemistry" element={<ChemistrySelectionPage />} />
                <Route path="/biology" element={<BiologySelectionPage />} />

                {/* Physics Experiments */}
                <Route path="/physics/pendulum" element={<PendulumPage />} />
                <Route path="/physics/ohmslaw" element={<OhmsLawPage />} />
                <Route path="/physics/projectile" element={<ProjectileMotionPage />} />
                <Route path="/physics/lens" element={<LensSimulationPage />} />

                {/* Chemistry Experiments */}
                <Route path="/chemistry/acidbase" element={<AcidBasePage />} />
                <Route path="/chemistry/titration" element={<TitrationPage />} />
                <Route path="/chemistry/reactionrate" element={<ReactionRatePage />} />
                <Route path="/chemistry/electrolysis" element={<ElectrolysisPage />} />

                {/* Biology Experiments */}
                <Route path="/biology/photosynthesis" element={<PhotosynthesisPage />} />
                <Route path="/biology/enzyme" element={<EnzymeActivityPage />} />
                <Route path="/biology/celldivision" element={<CellDivisionPage />} />
                <Route path="/biology/respiration" element={<RespirationPage />} />

                {/* Optional test animation */}
                <Route path="/test" element={<TestAnimation />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            {/* Floating Chatbot (visible on all pages) */}
            <Chatbot />
        </>
    );
}
