// app/not-found.tsx
export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        color: "#333",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "crimson",
        }}
      >
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>
        Xin lỗi, trang bạn tìm không tồn tại.
      </p>
    </div>
  );
}
