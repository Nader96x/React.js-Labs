import Btn from "../../SharedUI/Btn/btn";
const About = () => {
  return (
    <div className="row p-4 m-3">
      <div className="col-12 col-md-3">
        <p className="h1 text-center">About Me</p>
      </div>
      <div className="col-12 col-md-9">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div>
          <a class="bg-dark btn btn-outline-light" href="#download">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
