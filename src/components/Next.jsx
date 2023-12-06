import React from "react";
import { Link } from "react-router-dom";

function Next() {
  return (
    <section id="whatsnext">
      <h1>What's Next</h1>
      <p>
        Now that my training course is complete and my internship is done, I'm
        currently working on some new projects and testing new techs.
      </p>
      <p>
        I'm developing a multi-screen app dedicated to the music video
        blindtests for an association I'm a member of,{" "}
        <Link target="_blank" to="https://www.feteduclip.com">
          La Fête du Clip
        </Link>
        , so I'm getting started with Electron and Node File System.
      </p>
      <p>
        I'm also thinking of a project to try Next.js and improve my backend
        skills. More to come about that !
      </p>
      <p>
        I'm also looking for a job, so if you're interested, you can contact me
        (check out the dedicated section of this portfolio) !
      </p>
    </section>
  );
}

export default Next;
