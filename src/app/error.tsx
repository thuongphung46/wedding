"use client"; // error.tsx luôn phải dùng client

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error caught by error.tsx:", error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f8f8",
        color: "#333",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          margin: "0 0 20px",
          color: "#ff4d4f",
        }}
      >
        ⚠️ Oops!
      </h1>
      <h2
        style={{
          fontSize: "24px",
          marginBottom: "10px",
        }}
      >
        Đã có lỗi xảy ra
      </h2>
      <p style={{ marginBottom: "30px", color: "#666" }}>
        {error.message || "Vui lòng thử lại sau."}
      </p>
      <button
        onClick={() => reset()}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          background: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Thử lại
      </button>
    </div>
  );
}
