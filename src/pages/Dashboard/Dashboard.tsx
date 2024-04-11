import React from "react";
import NavBar from "../../components/Navs/NavBar";
import styles from "./dashboard.module.css";
import "../../main.css";
import useWindowDimensions from "../../services/UseWindowDimensions";
import projects from "../../services/GetProjects";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <NavBar />
      <div className={["section", styles.top].join(" ")}>
        <p className="hero semi-bold">
          Welcome back {"{"} RITESH {"}"},
        </p>
      </div>
      <div
        className={`section center ${width > 800 ? "rows" : "columns"}`}
        style={{ gap: "120px" }}
      >
        <div className="columns">
          <p className="semi-bold md-txt" style={{ textAlign: "center" }}>
            Overview
          </p>
          <div className={styles.card}>Financial Stuff Will go Here</div>
        </div>
        <div className="columns">
          <p className="semi-bold md-txt" style={{ textAlign: "center" }}>
            Current Projects
          </p>{" "}
          <div className={styles.card}>
            {projects.slice(0, 4).map((project, index) => (
              <Link
                key={index}
                style={{ textDecoration: "none" }}
                to={`/projects/${project._id}`}
              >
                {" "}
                <div className={[styles.project, "semi-bold"].join(" ")}>
                  <div className="columns" style={{ gap: "10px" }}>
                    {" "}
                    <span className={styles.title}>
                      {project.city}, {project.state}
                    </span>
                    <progress
                      className={styles.progress}
                      value={Math.random() * 100}
                      max="100"
                    />
                  </div>
                </div>
              </Link>
            ))}
            <Link
              to="/projects"
              className={["semi-bold sm-txt center", styles.more].join(" ")}
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
