import "./About.css";

function About() {
  return (
    <div className="about-container">
        <h2 className="about-head">About Us</h2>
        <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Introduction about application
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This is the application to manipulate your text.</strong> It can be used to convert your text into Upper-Case , Lower-Case and in Capitalised form. It can also be useful to scan your text and scaned text can be convert into <code>voice form.</code>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            About oursef
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            We have a developer team to make great websites that people will love. Our developer team is greatly a proficient choice for someone who want to grow their company and to maximize the productivity of the company. We are the <strong>Revolution of the world.</strong><code> Believe us , make themself.</code>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            About clients
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>We have national and international clients.</strong> We believed that our services to our clients would be the immulsive results for the growth of their company. We are passionate and known by our work. And Our work will greatly impact the productivity of the business of the company.
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
