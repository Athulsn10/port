import React from 'react'

function Other() {
  return (
    <>
    <section id="other">
        <hr />
        <h2 className="head text-center mt-4 fs-1 fw-bold overflow-hidden">Other Projects</h2>
      <div className="mt-3 mx-1 row row-cols-1 row-cols-sm-2 g-4">
        {/* Project 1 */}
        <div className="col">
          <div className="card">
            <img src="./image/FINAL COVER copy.jpg" className="img-fluid card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title overflow-hidden">Ezperanza College Magazine</h5>
              <p className="card-text d-flex align-items-center">
               <i class="icon mt-2 pe-1 fs-2 fi fi-brands-photoshop"></i>
                <i className="icon fa-brands ps-1 fs-2 fa-windows"  ></i>
              </p>
              <a href="https://online.fliphtml5.com/lthbi/yhjb/" target="_blank" style={{ textDecoration: 'none', color: '#ffffff' }}>
                <button type="button" className="d-flex align-items-center btn btn-dark">
                  Click Here
                  <i className="icon ps-1 fa-solid fa-link"></i>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col">
          <div className="card">
            <img src="./image/MAGAZINE CONCEPT tst04.png" className="img-fluid card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title overflow-hidden">Face Magazine</h5>
              <p className="card-text d-flex align-items-center">
              <i class="icon mt-2 pe-1 fs-2 fi fi-brands-photoshop"></i>
                <i className="icon fa-brands ps-1 fs-2 fa-windows"  ></i>
              </p>
              <a href="https://online.fliphtml5.com/lthbi/xegh/" target="_blank" style={{ textDecoration: 'none', color: '#ffffff' }}>
                <button type="button" className="d-flex align-items-center btn btn-dark">
                  Click Here
                  <i className="icon ps-1 fa-solid fa-link" ></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Other