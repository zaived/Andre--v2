import Image from "next/image";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="client-container"></div>
        <div className="bio-container">
          <div className="native">
            <p>
              A NATIVE SAN FRANCISCAN
              <span className="ecd">EXECUTIVE CREATIVE DIRECTOR</span>, WRITING
              MY HEART <br /> OUT SINCE 2009....
            </p>
          </div>
          <div className="pos-container">
            <p>
              current executive creative director at <a href="#">grey nyc</a>
            </p>
            <p>
              ADWEEK <a href="#">Creative Top 100</a>
            </p>
          </div>
          <div className="main-bio">
            <p>
              let's tell stories that move people and make people think, whether
              that's through a 30s spot, a <br /> documentary on YT or a tea
              cup. <br /> put culture first, people first, historically excluded
              people first <br /> built environments where everyone can be heard
              <br /> this is the most exciting time in the history of ads,
              because today, ads can be anything. <br /> where a story is told
              is less important than why or how. <br /> this is going to be fun
              in the end. if it is not fun, its not the end. <br /> because we
              are talking to people and people will always surprise you.
            </p>
          </div>
          <div className="hello">
            <p>Say hello at andrewwritescopy@gmail.com</p>
            <p>
              <span className="red">
                <a href="#">linkedin.com/andreggray</a>
              </span>
              +
              <span className="red">
                <a href="#">@andreggray</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
