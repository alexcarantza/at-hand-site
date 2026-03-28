import logo from "./assets/logo.png";
import contractor from "./assets/contractor.jpg";
import delivery from "./assets/delivery.jpg";
import homecheck from "./assets/homecheck.jpg";
import organization from "./assets/organization.jpg";

export default function App() {
  const reasons = [
    {
      title: "Your time, back",
      text: "No more waiting on delivery windows, service calls, or contractor arrivals.",
    },
    {
      title: "Help when you need it",
      text: "Use At Hand as much or as little as you want—no long-term commitments.",
    },
    {
      title: "People you trust in your home",
      text: "Every manager is vetted, background-checked, and selected for professionalism and discretion.",
    },
    {
      title: "It gets easier every time",
      text: "As managers learn your home, things run more smoothly with each visit.",
    },
  ];

  const services = [
    {
      title: "When something needs to happen at home—and you can’t be there",
      text: "We handle contractor visits, installations, and deliveries so things move forward without you rearranging your day.",
      image: contractor,
      rate: "$85/hr",
    },
    {
      title: "Leave town without worrying about what’s happening at home",
      text: "From check-ins to storm prep to package care, your home stays looked after while you’re away.",
      image: homecheck,
      rate: "$75/hr",
    },
    {
      title: "Bring order back to the spaces that quietly create stress",
      text: "Kitchens, closets, pantries, and guest spaces—thoughtfully organized so your home runs smoothly again.",
      image: organization,
      rate: "$90/hr",
    },
    {
      title: "Take the small obligations off your plate",
      text: "Errands, returns, laundry coordination, and everyday logistics—handled.",
      image: delivery,
      rate: "$65/hr",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Tell us what you need help with",
      text: "Share the task, timing, and anything we should know about your home.",
    },
    {
      number: "2",
      title: "We match you with someone you can trust",
      text: "We coordinate reliable, vetted help who can step in when you can’t be there.",
    },
    {
      number: "3",
      title: "Your home is handled—without you having to be there",
      text: "Things get done, your home runs smoothly, and you get your time back.",
    },
  ];

  const fieldStyle = {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "14px",
    padding: "14px 16px",
    borderRadius: "14px",
    border: "1px solid #cfc6b8",
    backgroundColor: "#fffdfa",
    color: "#2f4354",
    fontSize: "16px",
    fontFamily: "Georgia, serif",
  };

  const sectionLabelStyle = {
    fontSize: "13px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#8d7757",
    marginBottom: "10px",
  };

  return (
    <>
      <style>{`
        @keyframes bannerSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-14px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseGlow {
          0% {
            transform: scale(1);
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
          }
          50% {
            transform: scale(1.04);
            box-shadow: 0 14px 30px rgba(212, 176, 122, 0.35);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
          }
        }

        @media (max-width: 900px) {
          .services-grid,
          .why-grid,
          .steps-grid {
            grid-template-columns: 1fr !important;
          }

          .top-banner-inner {
            padding: 20px 18px !important;
          }

          .top-banner-title {
            font-size: 26px !important;
            line-height: 1.2 !important;
          }

          .top-banner-subtitle {
            font-size: 16px !important;
            line-height: 1.5 !important;
          }

          .hero-title {
            font-size: 22px !important;
          }

          .section-title {
            font-size: 28px !important;
          }
        }
      `}</style>

      <div
        style={{
          width: "100%",
          background:
            "linear-gradient(135deg, #2f4354 0%, #3e5568 50%, #2f4354 100%)",
          color: "#fffdfa",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          borderBottom: "1px solid rgba(212, 176, 122, 0.35)",
          animation: "bannerSlideDown 0.6s ease-out",
          boxShadow: "0 10px 24px rgba(0, 0, 0, 0.16)",
        }}
      >
        <div
          className="top-banner-inner"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "22px 24px 24px",
            textAlign: "center",
          }}
        >
          <div
            className="top-banner-title"
            style={{
              fontSize: "34px",
              lineHeight: 1.15,
              fontWeight: "bold",
              marginBottom: "8px",
              letterSpacing: "0.01em",
            }}
          >
            Now Accepting Applications: Founding Household Managers —
            Jacksonville
          </div>

          <div
            className="top-banner-subtitle"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#f3e7d3",
              marginBottom: "8px",
            }}
          >
            Earn $24–$44/hr • Flexibility • Control • Opportunity
          </div>

          <div
            style={{
              fontSize: "15px",
              lineHeight: 1.6,
              color: "#e6d7bf",
              marginBottom: "18px",
            }}
          >
            Independent, vetted professionals matched with discerning households
          </div>

          <a
            href="/managers/apply"
            style={{
              display: "inline-block",
              backgroundColor: "#d4b07a",
              color: "#2f4354",
              padding: "14px 26px",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "15px",
              letterSpacing: "0.5px",
              textDecoration: "none",
              boxShadow: "0 10px 24px rgba(0, 0, 0, 0.18)",
              animation: "pulseGlow 2.5s infinite",
            }}
          >
            Submit Your Application →
          </a>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#f4f0eb",
          minHeight: "100vh",
          color: "#2f4354",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "36px 24px 80px",
          }}
        >
          <header style={{ textAlign: "center", marginBottom: "44px" }}>
            <img
              src={logo}
              alt="At Hand logo"
              style={{
                width: "100%",
                maxWidth: "420px",
                marginBottom: "18px",
              }}
            />

            <h1
              className="hero-title"
              style={{
                fontSize: "28px",
                lineHeight: 1.25,
                margin: "0 auto 12px",
                maxWidth: "760px",
                color: "#2f4354",
                fontWeight: "normal",
              }}
            >
              Get your time back—without lowering your standards at home
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.35,
                margin: "0 auto 12px",
                maxWidth: "760px",
              }}
            >
              We’re home when you can’t be—so you don’t have to be.
            </p>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                maxWidth: "760px",
                margin: "0 auto",
                color: "#526575",
              }}
            >
              At Hand connects you with trusted, vetted home managers who
              handle the things that tie you to your house—from deliveries and
              contractor visits to organization and everyday home logistics.
            </p>
          </header>

          <section style={{ marginBottom: "56px" }}>
            <div style={{ marginBottom: "22px" }}>
              <div style={sectionLabelStyle}>Services</div>

              <h2
                className="section-title"
                style={{
                  fontSize: "34px",
                  margin: 0,
                  color: "#2f4354",
                }}
              >
                Four Ways At Hand Can Help
              </h2>
            </div>

            <div
              className="services-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "22px",
              }}
            >
              {services.map((s) => (
                <div
                  key={s.title}
                  style={{
                    backgroundColor: "#fffdfa",
                    border: "1px solid #ddd3c6",
                    borderRadius: "22px",
                    padding: "22px",
                    boxShadow: "0 10px 24px rgba(47, 67, 84, 0.05)",
                  }}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      objectPosition: "top center",
                      borderRadius: "16px",
                      display: "block",
                      marginBottom: "14px",
                      boxShadow: "0 8px 18px rgba(0, 0, 0, 0.08)",
                    }}
                  />

                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: "24px",
                      color: "#2f4354",
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    style={{
                      margin: "0 0 14px",
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: "#5c6e7c",
                    }}
                  >
                    {s.text}
                  </p>

                  <div
                    style={{
                      display: "inline-block",
                      padding: "8px 14px",
                      borderRadius: "999px",
                      backgroundColor: "#f1e3cd",
                      color: "#2f4354",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {s.rate}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            className="why-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "24px",
              marginBottom: "72px",
            }}
          >
            <div
              style={{
                backgroundColor: "#fffdfa",
                border: "1px solid #ddd3c6",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 10px 24px rgba(47, 67, 84, 0.04)",
              }}
            >
              <div style={sectionLabelStyle}>Why At Hand</div>

              <p
                style={{
                  margin: "0 0 20px",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#5c6e7c",
                }}
              >
                Because not everything at home should require you to be there.
              </p>

              {reasons.map((r) => (
                <div key={r.title} style={{ marginBottom: "20px" }}>
                  <h3
                    style={{
                      margin: "0 0 6px",
                      fontSize: "24px",
                      color: "#2f4354",
                    }}
                  >
                    {r.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      lineHeight: 1.7,
                      color: "#5c6e7c",
                    }}
                  >
                    {r.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                backgroundColor: "#2f4354",
                color: "#f4f0eb",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 10px 24px rgba(47, 67, 84, 0.12)",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#d0b27a",
                  marginBottom: "14px",
                }}
              >
                Launch Pricing
              </div>

              <div
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: "#e7ecef",
                  marginBottom: "18px",
                }}
              >
                Clear, fixed pricing by service type:
              </div>

              <div
                style={{
                  display: "grid",
                  gap: "12px",
                  marginBottom: "18px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    paddingBottom: "10px",
                  }}
                >
                  <span style={{ color: "#e7ecef" }}>Home Checks</span>
                  <strong>$75/hr</strong>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    paddingBottom: "10px",
                  }}
                >
                  <span style={{ color: "#e7ecef" }}>Project Coordination</span>
                  <strong>$85/hr</strong>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    paddingBottom: "10px",
                  }}
                >
                  <span style={{ color: "#e7ecef" }}>Errands & Light Tasks</span>
                  <strong>$65/hr</strong>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <span style={{ color: "#e7ecef" }}>Home Organization</span>
                  <strong>$90/hr</strong>
                </div>
              </div>

              <div
                style={{
                  fontSize: "14px",
                  marginBottom: "12px",
                  color: "#d9e0e5",
                }}
              >
                2-hour minimum
              </div>

              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "#e7ecef",
                }}
              >
                Rush scheduling and top-rated manager upgrades may carry an
                additional fee.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <div style={{ marginBottom: "22px" }}>
              <div style={sectionLabelStyle}>How It Works</div>

              <h2
                className="section-title"
                style={{
                  fontSize: "34px",
                  margin: 0,
                  color: "#2f4354",
                }}
              >
                A simpler way to keep your home handled
              </h2>
            </div>

            <div
              className="steps-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "22px",
              }}
            >
              {steps.map((step) => (
                <div
                  key={step.number}
                  style={{
                    backgroundColor: "#fffdfa",
                    border: "1px solid #ddd3c6",
                    borderRadius: "22px",
                    padding: "24px",
                    boxShadow: "0 10px 24px rgba(47, 67, 84, 0.04)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "999px",
                      backgroundColor: "#2f4354",
                      color: "#fffdfa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      marginBottom: "14px",
                    }}
                  >
                    {step.number}
                  </div>

                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: "22px",
                      color: "#2f4354",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: "#5c6e7c",
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ maxWidth: "620px", margin: "0 auto" }}>
            <div
              style={{
                backgroundColor: "#fffdfa",
                border: "1px solid #ddd3c6",
                borderRadius: "28px",
                padding: "34px",
                boxShadow: "0 10px 24px rgba(47, 67, 84, 0.05)",
              }}
            >
              <div style={sectionLabelStyle}>Early Access</div>

              <h2
                style={{
                  fontSize: "30px",
                  margin: "0 0 12px",
                  color: "#2f4354",
                }}
              >
                Founding Jacksonville Households
              </h2>

              <p
                style={{
                  margin: "0 0 10px",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#5c6e7c",
                }}
              >
                We are inviting a small group of early households in Riverside,
                Avondale, Ortega, and San Marco to help shape the launch of At
                Hand.
              </p>

              <p
                style={{
                  margin: "0 0 24px",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#5c6e7c",
                }}
              >
                Pilot members receive preferred access and priority scheduling
                during our Jacksonville launch.
              </p>

              <form name="waitlist" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="waitlist" />

                <input
                  style={fieldStyle}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />

                <input
                  style={fieldStyle}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />

                <p
                  style={{
                    margin: "-4px 0 16px",
                    fontSize: "13px",
                    color: "#7a6d5d",
                    lineHeight: 1.6,
                  }}
                >
                  No spam — just early access when we launch in your
                  neighborhood.
                </p>

                <input
                  style={fieldStyle}
                  type="text"
                  name="neighborhood"
                  placeholder="Neighborhood"
                />

                <select name="interest" style={fieldStyle} defaultValue="">
                  <option value="" disabled>
                    I am interested as...
                  </option>
                  <option>Homeowner</option>
                  <option>Referral Partner</option>
                  <option>Household Manager</option>
                </select>

                <select name="first_need" style={fieldStyle} defaultValue="">
                  <option value="" disabled>
                    What help would you request first?
                  </option>
                  <option>Contractor access / renovation supervision</option>
                  <option>Package & delivery management</option>
                  <option>House checks while traveling</option>
                  <option>Home organization</option>
                  <option>Laundry / errands</option>
                </select>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "14px",
                    border: "none",
                    backgroundColor: "#2f4354",
                    color: "#fff",
                    fontSize: "16px",
                    cursor: "pointer",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Request Early Access
                </button>

                <div style={{ marginTop: "12px", textAlign: "center" }}>
                  <a
                    href="/managers/apply"
                    style={{
                      display: "inline-block",
                      padding: "14px 22px",
                      borderRadius: "12px",
                      border: "1px solid #2f4354",
                      backgroundColor: "transparent",
                      color: "#2f4354",
                      cursor: "pointer",
                      fontFamily: "Georgia, serif",
                      textDecoration: "none",
                    }}
                  >
                    Become an At Hand Manager
                  </a>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}