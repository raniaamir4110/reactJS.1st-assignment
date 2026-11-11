import React from 'react'

const Hero = () => {
    return (
        <div className="container mt-1 pt-1">
            <div className="col-9 d-flex align-items-center g-5 py-2">
                <div className="col-10 sm:col-8 lg:col-6">
                    <img src="../../images/best selling.jpeg" className="rounded img-thumbnail" width="400" height="450" alt="Bootstrap Themes" loading="lazy"></img>
                </div>

                <div className="col-6">
                    <h1 className="fs-4xl fw-bold fg-emphasis-inverse lh-1 mb-3">Our Best-Selling Bouquet</h1>
                    <p className="fs-lg fw-light">Packed with their favorite treats and wrapped beautifully in soft pink with a golden touch, this sweet surprise is perfect for birthdays, celebrations, or simply making someone’s day a little brighter.</p>
                    <div className="d-grid gap-2 md:d-flex md:justify-content-start">
                        <button className="btn">Shop Now</button>
                    </div>
                </div>
                
                
            </div>
        </div>

    )
}

export default Hero
