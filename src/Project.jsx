import React from 'react'

function Project() {
  return (
    <>
    <section id="projects">
        <hr />
        <h2 className="head text-center mt-4 fs-1 fw-bold overflow-hidden">Projects</h2>
        <div className="mt-3 mx-2 row row-cols-1 row-cols-md-3 g-4">
          {/* chatify */}
        <div className="col">
            <div className="card h-100">
              <img src="./image/chatify.png" className="img-fluid card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title overflow-hidden">Chatify-ChatApp</h5>
                <p className="card-text d-flex align-items-center">
                <i className="icon fa-brands fs-2 fa-react"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-html5"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"  ></i>
                    <i className="icon fa-brands ps-1 fs-2 fa-bootstrap"  ></i>
                    <i className="icon fab ps-1 fs-2 me-2 fa-node-js"></i>
                    <img width="30" src="https://img.icons8.com/color/240/000000/material-ui.png" alt="material-ui"/>
                    <img src="https://cdnlogo.com/logos/m/30/mongodb-icon.svg" width={42} alt="mongoDB" />
                  </p>
                 <a href="https://chatify-brown.vercel.app/" target="_blank" style={{ textDecoration: 'none', color: '#ffffff' }}>
                  <button type="button" className="prj-btn d-flex align-items-center btn btn-dark">
                    Visit Site<i className="ps-1 fa-solid fa-link" style={{ color: '#ffffff' }}></i></button></a>
              </div>
            </div>
          </div>
          {/* beki */}
          <div className="col">
            <div className="card h-100">
              <img src="./image/beki.png" className="img-fluid card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title overflow-hidden">Nike webpage Clone</h5>
                <p className="card-text">
                  <i className="icon fa-brands ps-1 fs-2 fa-html5"  ></i>
                  <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"  ></i>
                  <i className="icon fa-brands ps-1 fs-2 fa-bootstrap"  ></i></p>
                <a href="https://athulsn10.github.io/Beki-parallax/" target="_blank" style={{ textDecoration: 'none', color: '#ffffff' }}>
                  <button type="button" className="prj-btn d-flex align-items-center btn btn-dark">
                    Visit Site<i className="ps-1 fa-solid fa-link" style={{ color: '#ffffff' }}></i></button></a>
              </div>
            </div>
          </div>
          {/* thought app */}
          <div className="col">
            <div className="card h-100">
              <img src="./image/enigma.png" className="img-fluid card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title overflow-hidden">Anonymous Thoughts</h5>
                <p className="card-text d-flex">
                <i className="icon fa-brands fs-2 fa-react"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-html5"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"  ></i>
                    <i className="icon fa-brands ps-1 pe-1 fs-2 fa-bootstrap"  ></i>
                    <img width="30" src="https://img.icons8.com/color/240/000000/material-ui.png" alt="material-ui"/></p>
                  <a href="https://enigma-doc-app.vercel.app/" target="_blank" style={{ textDecoration: 'none', color: '#ffffff' }}>
                  <button type="button" className="prj-btn d-flex align-items-center btn btn-dark">
                    Visit Site<i className="ps-1 fa-solid fa-link" style={{ color: '#ffffff' }}></i></button></a>
              </div>
            </div>
          </div>
          {/* contact manager */}
          <div className="col">
            <div className="card h-100">
              <img src="./image/contact-manager.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title overflow-hidden">Contact Manager-CRUD</h5>
                <p className="card-text d-flex">
                    <i className="icon fa-brands fs-2 fa-react"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-html5"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"  ></i>
                    <i className="icon fa-brands ps-1 fs-2 fa-bootstrap"  ></i>
                </p>
                <a href="https://contact-manager-crud.vercel.app/" target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: '#ffffff'}}><button type="button" className="d-flex align-items-center prj-btn btn btn-dark">Visit Site<i className="ps-1 fa-solid fa-link" style={{color: '#ffffff'}}></i></button></a>
              </div>
            </div>
          </div>
          {/* netflix */}
          <div className="col">
          <div className="card h-100">
            <img src="./image/netflix.png" className="img-fluid card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title overflow-hidden">Netflix Clone</h5>
              <p className="card-text">
                    <i className="icon fa-brands fs-2 fa-react"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-html5"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"  ></i>
                    <i className="icon fa-brands ps-1 fs-2 fa-js"  ></i>
                    <i className="icon fa-brands ps-1 fs-2 fa-bootstrap"  ></i>
              </p>
              <a href="https://netflix-clone-reactjs-athul.netlify.app/" target="_blank" style={{textDecoration: 'none', color: '#ffffff'}}><button type="button" className="d-flex align-items-center prj-btn btn btn-dark">Visit Site<i className="ps-1 fa-solid fa-link" style={{color: '#ffffff'}}></i></button></a>
            </div>
          </div>
        </div>
        {/* google translate */}
        <div className="col">
          <div className="card h-100">
            <img src="./image/google-translate.png" className="img-fluid card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title overflow-hidden">Google Translate Clone</h5>
              <p className="card-text">
                   <i className="icon fa-brands fs-2 fa-react"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-html5"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"  ></i>
                    <i className="icon fa-brands ps-1 fs-2 fa-js"  ></i>
                    <i className="icon fa-brands ps-1 fs-2 fa-bootstrap"  ></i>
              </p>
              <a href="https://google-translate-clone-reactjs.netlify.app" target="_blank" style={{textDecoration: 'none', color: '#ffffff'}}><button type="button" className="d-flex align-items-center prj-btn btn btn-dark">Visit Site<i className="ps-1 fa-solid fa-link" style={{color: '#ffffff'}}></i></button></a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="./image/simpleIntrest.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title overflow-hidden">Simple Interest Calculator</h5>
              <p className="card-text">
                <i className="icon fa-brands fs-2 fa-react"  ></i> 
                <i className="icon fa-brands ps-1 fs-2 fa-html5"  ></i> 
                <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"  ></i>
                <i className="icon fa-brands ps-1 fs-2 fa-js"  ></i>
                <i className="icon fa-brands ps-1 fs-2 fa-bootstrap"  ></i>
              </p>
              <a href="https://zingy-crisp-897e3a.netlify.app" target="_blank" style={{textDecoration: 'none', color: '#ffffff'}}><button type="button" className="d-flex align-items-center prj-btn btn btn-dark">Visit Site<i className="ps-1 fa-solid fa-link" style={{color: '#ffffff'}}></i></button></a>
            </div>
          </div>
        </div>
        {/* simple calculator */}
        <div className="col">
          <div className="card h-100">
            <img src="./image/calculator.png" className="img-fluid card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title overflow-hidden">Simple Calculator</h5>
              <p className="card-text">
                    <i className="icon fa-brands ps-1 fs-2 fa-html5"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"  ></i>
                    <i className="icon fa-brands ps-1 fs-2 fa-js"  ></i>
                    <i className="icon fa-brands ps-1 fs-2 fa-bootstrap"  ></i>
              </p>
              <a href="https://athulsn10.github.io/simple-calculator/" target="_blank" style={{textDecoration: 'none', color: '#ffffff'}}><button type="button" className="d-flex align-items-center prj-btn btn btn-dark">Visit Site<i className="ps-1 fa-solid fa-link" style={{color: '#ffffff'}}></i></button></a>
            </div>
          </div>
        </div>
        {/* weather App */}
        <div className="col">
          <div className="card h-100">
            <img src="./image/weather.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title overflow-hidden">Weather App</h5>
              <p className="card-text">
                  <i className="icon fa-brands ps-1 fs-2 fa-html5"  ></i> 
                  <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"  ></i>
                  <i className="icon fa-brands ps-1 fs-2 fa-js"  ></i>
                  <i className="icon fa-brands ps-1 fs-2 fa-bootstrap"  ></i>
              </p>
              <a href="https://splendid-piroshki-7b86a9.netlify.app" target="_blank" style={{textDecoration: 'none', color: '#ffffff'}}><button type="button" className="d-flex align-items-center prj-btn btn btn-dark">Visit Site<i className="ps-1 fa-solid fa-link" style={{color: '#ffffff'}}></i></button></a>
            </div>
          </div>
        </div>
        {/* login signup page */}
        <div className="col">
          <div className="card h-100">
            <img src="./image/login.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title overflow-hidden">Login Signup page</h5>
              <p className="card-text">
                    <i className="icon fa-brands ps-1 fs-2 fa-html5"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"  ></i>
                    <i className="icon fa-brands ps-1 fs-2 fa-js"  ></i>
              </p>
              <a href="https://athulsn10.github.io/Login-signup-Page-Html-css-js/" target="_blank" style={{textDecoration: 'none', color: '#ffffff'}}><button type="button" className="d-flex prj-btn align-items-center btn btn-dark">Visit Site<i className="ps-1 fa-solid fa-link" style={{color: '#ffffff'}}></i></button></a>
            </div>
          </div>
        </div>
        {/* keep notes */}
        <div className="col">
            <div className="card h-100">
              <img src="./image/keep-notes.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title overflow-hidden">Keep Notes</h5>
                <p className="card-text">
                    <i className="icon fa-brands fs-2 fa-react"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-html5"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"  ></i>
                    <i className="icon fa-brands ps-1 fs-2 fa-js"  ></i>
                    <i className="icon fa-brands ps-1 fs-2 fa-bootstrap"  ></i>
                </p>
                <a href="https://keep-notes-react-athul.netlify.app" target="_blank" style={{textDecoration: 'none', color: '#ffffff'}}><button type="button" className="d-flex align-items-center prj-btn btn btn-dark">Visit Site<i className="ps-1 fa-solid fa-link" style={{color: '#ffffff'}}></i></button></a>
              </div>
            </div>
          </div>
          {/* foot cart */}
          <div className="col">
            <div className="card h-100">
              <img src="./image/edavazhi.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title overflow-hidden">Food Cart</h5>
                <p className="card-text">
                    <i className="icon fa-brands ps-1 fs-2 fa-html5"></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"  ></i>
                </p>
                <a href="https://glistening-pithivier-1714db.netlify.app" target="_blank" style={{textDecoration: 'none', color: '#ffffff'}}><button type="button" className="d-flex align-items-center prj-btn btn btn-dark">Visit Site<i className="ps-1 fa-solid fa-link" style={{color: '#ffffff'}}></i></button></a>
              </div>
            </div>
          </div>
          {/* donations */}
          <div className="col">
            <div className="card h-100">
              <img src="./image/donation.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title overflow-hidden">Mockup</h5>
                <p className="card-text">
                    <i className="icon fa-brands ps-1 fs-2 fa-html5"  ></i> 
                    <i className="icon fa-brands ps-1 fs-2 fa-css3-alt"  ></i>
                    <i className="icon fa-brands ps-1 fs-2 fa-bootstrap"  ></i>
                </p>
                <a href="https://effervescent-cuchufli-117f3f.netlify.app" target="_blank" style={{textDecoration: 'none', color: '#ffffff'}}><button type="button" className="d-flex align-items-center prj-btn btn btn-dark">Visit Site<i className="ps-1 fa-solid fa-link" style={{color: '#ffffff'}}></i></button></a>
              </div>
            </div>
          </div>
          {/* Repeat similar blocks for other projects */}
        </div>
      </section>
    </>
  )
}

export default Project