import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function ManagerApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sectionLabel = {
    fontSize: "12px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#8d7757",
    marginBottom: "10px",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "14px",
    border: "1px solid #d8cec1",
    backgroundColor: "#fffdfa",
    color: "#2f4354",
    fontSize: "16px",
    fontFamily: "Georgia, serif",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    color: "#5c6e7c",
    marginBottom: "8px",
  };

  const cardStyle = {
    backgroundColor: "#fffdfa",
    border: "1px solid #ddd3c6",
    borderRadius: "24px",
    padding: "28px",
    boxShadow: "0 10px 24px rgba(47, 67, 84, 0.05)",
  };

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f4f0eb", color: "#2f4354", fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "36px 24px 80px" }}>

        <Link to="/" style={{ display: "inline-block", marginBottom: "24px", textDecoration: "none", color: "#2f4354" }}>
          ← Back to home
        </Link>

        <header style={{ textAlign: "center", marginBottom: "40px" }}>
          <img src={logo} alt="At Hand" style={{ maxWidth: "300px", marginBottom: "20px" }} />
          <div style={sectionLabel}>At Hand Managers</div>
          <h1 style={{ fontSize: "40px", marginBottom: "12px", fontWeight: "normal" }}>
            Apply to become an At Hand manager
          </h1>
          <p style={{ color: "#5c6e7c", fontSize: "18px" }}>
            Tell us about your experience and strengths. Accepted applicants will complete a background check and build a profile.
          </p>
        </header>

        {submitted && (
          <div style={{ ...cardStyle, backgroundColor: "#f7fbf7" }}>
            Application received. We’ll review and follow up shortly.
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>

          <div style={cardStyle}>
            <form name="manager-application" method="POST" data-netlify="true" onSubmit={handleSubmit}>

              <input type="hidden" name="form-name" value="manager-application" />

              <label style={labelStyle}>Full name</label>
              <input name="full_name" style={inputStyle} required />

              <label style={labelStyle}>Email</label>
              <input name="email" type="email" style={inputStyle} required />

              <label style={labelStyle}>Phone</label>
              <input name="phone" style={inputStyle} required />

              <label style={labelStyle}>Area</label>
              <input name="area" style={inputStyle} />

              <label style={labelStyle}>Headline</label>
              <input name="headline" style={inputStyle} />

              <label style={labelStyle}>Bio</label>
              <textarea name="bio" style={{ ...inputStyle, minHeight: "120px" }} />

              <label style={labelStyle}>Experience</label>
              <textarea name="experience" style={{ ...inputStyle, minHeight: "120px" }} />

              <label style={labelStyle}>Strengths</label>
              <textarea name="strengths" style={{ ...inputStyle, minHeight: "100px" }} />

              <label style={labelStyle}>Tasks you want to do</label>
              <div>
                <label><input type="checkbox" name="task_home_checks" /> Home checks</label><br />
                <label><input type="checkbox" name="task_deliveries" /> Deliveries</label><br />
                <label><input type="checkbox" name="task_organization" /> Organization</label><br />
                <label><input type="checkbox" name="task_errands" /> Errands</label>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  marginTop: "20px",
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#2f4354",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>

          <div style={cardStyle}>
            <h2>What happens next</h2>
            <ul>
              <li>We review your application</li>
              <li>We accept or decline based on fit</li>
              <li>Accepted managers complete background check</li>
              <li>You get listed on the platform</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}