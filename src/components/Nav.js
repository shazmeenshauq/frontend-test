import React from 'react'

export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div class="container py-40">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">YOUR LOGO</a>
                <div class="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">How it works</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Franchise list</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Franchising guide  </a>
                        </li>
                        <li class="nav-item">
                            <a class="btn " href="#" tabindex="-1" aria-disabled="true">Contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
