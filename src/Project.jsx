import React, { useEffect, useState } from "react";
import { getProjects } from "./service/api";

function Project() {
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
      console.log("project", projects);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section id="projects">
        <hr />
        <h2 className="head text-center mt-4 fs-1 fw-bold overflow-hidden">
          Projects
        </h2>
        {projects.length != 0 ? (
          <div
            className="d-flex"
            style={{
              overflowX: "auto",
              width: "100%",
              margin: "auto",
            }}
          >
            {projects.map((item) => (
              <div
                className="m-2 project-card"
                style={{ width: "400px", flex: "0 0 auto" }}
                key={item.id}
              >
                <div className="card h-100">
                  <img
                    src={item.screenshot}
                    className="img-fluid card-img-top"
                    alt={item.projectName}
                  />
                  <div className="card-body">
                    <h5 className="card-title overflow-hidden">
                      {item.projectName}
                    </h5>
                    <p className="card-text">{item.description}</p>
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#ffffff" }}
                    >
                      <button
                        type="button"
                        className="prj-btn d-flex align-items-center btn btn-dark"
                      >
                        Visit Site
                        <i
                          className="ps-1 fa-solid fa-link"
                          style={{ color: "#ffffff" }}
                        ></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              width: "100%",
              height:'250px',
            }}
          >
            <img src="/image/loading.gif" alt="" />
            <p>Loading Projects For You...</p>
          </div>
        )}
      </section>
    </>
  );
}

export default Project;
