import { BioPattern } from "@/components/bio-pattern";

export default function ContactPage() {
  return (
    <main>
      <section className="section section-contact">
        <BioPattern />
        <div className="container">
          <header className="page-header">
            <h1 className="section-title">Contact</h1>
            <p className="section-intro">
              Book a session, ask about pricing, or say hi. Send a message below or reach out directly.
            </p>
          </header>
          <div className="contact-form-wrap">
            <form className="contact-form" action="#" method="post">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
              <button type="submit" className="btn btn-primary">Send message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
