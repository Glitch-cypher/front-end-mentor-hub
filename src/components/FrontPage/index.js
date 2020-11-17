import "./FrontPage.css";
function FrontPage() {
  return (
    <div className="front-page-content">
      <h1 className="front-page-title">
        Welcome to the School of Code bootcamp progress tracker!🚀
      </h1>

      <h2 className="front-page-student-title">
        <span className="highlight-word">Mentees:</span> Buckle up for an
        incredible journey of intensive learning.
      </h2>
      <h2 className="front-page-mentor-title">
        <span className="highlight-word">Mentors: </span>Your help will help
        change your mentee's life!{" "}
      </h2>
      <div className="front-page-paragraphs">
        <p>
          We have created this handy little tool to make sure mentors and
          mentees get the most out of their 30 minute phone calls each week. We
          know how busy our mentors are with their jobs and understand it can be
          hard to keep with the rapid pace of the bootcamp and what the mentees
          have learnt!
        </p>
        <p>
          We have listed each week where you can both review the curriculum for
          that week, a challenge to help master those skills, a section for
          Mentees to post projects or git repos for specific feedback and a
          section for Mentors to leave feedback, handy resources, and anything
          else you think is useful!
        </p>
        <p>
          You can still use Slack to communicate and plan your calls, but we
          hope you’ll find this tool incredibly useful for keeping track of the
          learnings and mentee progression.
        </p>
      </div>
      <p>
        <span className="front-page-text-style">Mentors,</span> you will be able
        to keep track of what your mentee is learning and what projects they
        need help with. Each week we have listed the curriculum and an
        additional challenge to help our mentees master the topics covered. Your
        mentee will post any specific help they require on either personal
        projects and tasks from the week. You will have a box to give feedback
        and advice. By seeing exactly what we are covering, we hope you will be
        able to have an effective telephone session by having prior knowledge of
        where your mentee is.
      </p>
      <p>
        <span className="front-page-text-style">Mentees,</span> you have the
        opportunity to get the most out of your mentor by taking control of your
        development. Each week we have listed what you’ll be covering. You can
        submit projects or questions you would like your mentor to specifically
        look over.
      </p>
    </div>
  );
}
export default FrontPage;
