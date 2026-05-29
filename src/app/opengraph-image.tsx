import { ImageResponse } from "next/og";
import { logoBase64 } from "./logo-base64";

export const alt = "Ground Zero Siłownia Niemodlin";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function og() {


  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#080808",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "40px",
        }}
      >
        {/* Background Grid Accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.5,
          }}
        />

        {/* Ambient Glows */}
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(0, 102, 255, 0.25) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(0, 168, 255, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Main Card Content */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
            zIndex: 10,
          }}
        >
          {/* Logo container */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.02)",
              border: "2px solid rgba(0, 102, 255, 0.3)",
              borderRadius: "24px",
              padding: "24px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoBase64}
              alt="Logo"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Text Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Tagline Badge */}
            <div
              style={{
                display: "flex",
                background: "rgba(0, 102, 255, 0.1)",
                border: "1px solid rgba(0, 102, 255, 0.4)",
                borderRadius: "8px",
                padding: "6px 14px",
                marginBottom: "15px",
                alignSelf: "flex-start",
              }}
            >
              <span
                style={{
                  color: "#00A8FF",
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                }}
              >
                Nowoczesne Centrum Treningowe
              </span>
            </div>

            {/* Brand Title */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "sans-serif",
                fontWeight: "900",
                textTransform: "uppercase",
                lineHeight: "1",
              }}
            >
              <span
                style={{
                  fontSize: "72px",
                  color: "#FFFFFF",
                  letterSpacing: "1px",
                  fontStyle: "italic",
                }}
              >
                GROUND ZERO
              </span>
              <span
                style={{
                  fontSize: "36px",
                  color: "#0066FF",
                  letterSpacing: "3px",
                  marginTop: "8px",
                  fontStyle: "italic",
                }}
              >
                SIŁOWNIA NIEMODLIN
              </span>
            </div>

            {/* Description */}
            <span
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "20px",
                marginTop: "25px",
                maxWidth: "550px",
                lineHeight: "1.5",
                fontFamily: "sans-serif",
              }}
            >
              Ponad 300 m² profesjonalnego sprzętu, strefa wellness i sauna. Bezkompromisowa atmosfera. Zero sieciówek, zero wymówek.
            </span>
          </div>
        </div>

        {/* Decorative corner tag */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            display: "flex",
            color: "rgba(255, 255, 255, 0.3)",
            fontSize: "16px",
            fontWeight: "600",
            letterSpacing: "1px",
            fontFamily: "sans-serif",
          }}
        >
          groundzero-niemodlin.pl
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
