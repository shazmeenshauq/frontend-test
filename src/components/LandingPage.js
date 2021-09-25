import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import List from './List'
import MallsSection from './MallsSection'
import Team from './Team'
import CardsGrid from './CardsGrid'
import StepsCards from './StepsCards'
import Banner2 from './Banner2'
import SuccessStories from './SuccessStories'
import GuranteeCard from './GuranteeCard'
import CallSection from './CallSection'
import Footer from './Footer'
import ExtraSection from './ExtraSection'


export default function LandingPage() {
    return (
        <div className="">
            <Nav />
            <Banner />
            <ExtraSection />
            <List />
            <MallsSection />
            <Team />
            <CardsGrid />
            <StepsCards />
            <Banner2 />
            <SuccessStories />
            <GuranteeCard />
            <CallSection />
            <Footer />

        </div>
    )
}
