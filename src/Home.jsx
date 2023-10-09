import React, { useEffect } from 'react';
import simpleParallax from 'simple-parallax-js';

function Home() {
    useEffect(() => {
        // Your code for parallax effect using simpleParallax
        var image = document.getElementsByClassName('parallax');
        new simpleParallax(image, {
          scale: 1.5
        });
      }, []);
  return (
    <section id="home">
        <div className="row d-flex" style={{ height: 'fit-content' }}>
          {/* right column with personal information */}
          <div className="col-12 col-md-4" style={{ height: 'fit-content' }}>
            <div className="col-12 rounded bio">
              <p style={{ color: '#e50914' }} className="hey ms-5 mb-0">
                Hey!
              </p>
              <p   className="name ms-5 mb-0">
                I'm <span style={{ color: '#EEB92D' }}>Athul</span>
              </p>
              <div className="photo px-5 pb-3">
                <img className="rounded img-fluid" src="./image/IMG_20230715_154229_906.jpg" alt="" />
              </div>
              <div className="px-5 pb-4">
                <h3 style={{ overflow: 'hidden',}} className="fs-3 fw-bold">
                  About Me
                </h3>
                <p>
                  Graduate of computer science. Intend to build a career with leading corporate of hi-tech environment
                  with committed & dedicated people, which will help me to explore myself fully and realize my true
                  potential.
                </p>
              </div>
            </div>
          </div>

          {/* left column with skills,hobbies,nav-bar */}
             <div className="col-12 col-md-8 mt-5 order-md-first" style={{ height: 'fit-content' }}>
      {/* skills */}
      <div className="ps-3">
        <h3 className='head' style={{ overflow: 'hidden', fontSize: '40px', fontWeight: 700 }}>Skills</h3>
        <div className="row">
          <div className="col-sm-5">
            <div className="skill-item d-flex align-items-center">
              <i className="fs-1 fa-brands fa-html5 pe-1"  ></i> Html
            </div>
          </div>
          <div className="col-sm-5">
            <div className="skill-item d-flex align-items-center">
            <i className="icon fs-1 fa-brands fa-css3-alt pe-1"  ></i> CSS
            </div>
          </div>
          <div className="col-sm-5">
            <div className="skill-item d-flex align-items-center">
            <i className="icon fs-1 fa-brands fa-js pe-1"  ></i> JavaScript
            </div>
          </div>
          <div className="col-sm-5">
            <div className="skill-item d-flex align-items-center">
            <i class="icon pe-1 fs-2 fi fi-brands-photoshop"></i> Adobe Photoshop
            </div>
          </div>
          <div className="col-sm-5">
            <div className="skill-item d-flex align-items-center">
            <i className="icon fs-1 fa-brands fa-react pe-1"  ></i> React JS
            </div>
          </div>
          <div className="col-sm-5">
            <div className="skill-item d-flex align-items-center">
            <i className="icon fs-2 fa-brands fa-bootstrap pe-1"  ></i> Bootstrap
            </div>
          </div>
          <div className="col-sm-5">
            <div className="skill-item d-flex align-items-center">
            <i className="icon fs-2 fa-solid fa-people-group pe-1"  ></i> Team Management
            </div>
          </div>
          <div className="col-sm-5">
            <div className="skill-item d-flex align-items-center">
            <i className="ps-1 icon fs-2 fa-solid fa-hourglass-start pe-1"  ></i> Time Management
            </div>
          </div>

         
        </div>
        <hr />
        {/* hobbies */}
        <h3 className='head' style={{ overflow: 'hidden', fontSize: '40px', fontWeight: 700 }}>Hobbies</h3>
        <div className="row mb-2">
          <div className="col-sm-5">
            <div className="skill-item d-flex align-items-center">
              <i className="icon fs-2 pe-2 fa-solid fa-swatchbook"  ></i> Illustration
            </div>
            <div className="skill-item d-flex align-items-center">
              <i className="icon fs-2 pe-2 fa-solid fa-code"  ></i> Coding
            </div>
          </div>
          {/* Add other hobby items here */}
        </div>
      </div>
      <hr />
      {/* nav-bar */}
      <div className="mx-3">
        <div className="p-0 container align-items-center justify-content-center">
          <nav className="navbar rounded m-0 p-0">
            <div className="container justify-content-center">
              <span className="navbar-text d-flex flex-row">
                <a className="pe-3 text-light" style={{ textDecoration: 'none', fontWeight: 600 }} href="#projects">
                  Projects
                </a>
                <a className="pe-3 text-light" style={{ textDecoration: 'none', fontWeight: 600 }} href="#resume">
                  Resume
                </a>
                <a className="pe-3 text-light" style={{ textDecoration: 'none', fontWeight: 600 }} href="#resume">
                  Contact
                </a>
              </span>
            </div>
          </nav>
        </div>
        <div style={{ overflowY: 'hidden', height: '200px', backgroundColor: '#000000' }} className="rounded mt-2">
          <img style={{ backgroundSize: 'cover' }} src="./image/para2.jpeg" className="parallax img-fluid" alt="image" />
          {/* Your additional content goes here */}
        </div>
      </div>
    </div>
        </div>
      </section>
  )
}

export default Home