export default async function DashboardPage() {
  // Giả lập delay fetch API
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>Dashboard</h1>
      <p>Chào mừng bạn đến với trang Dashboard 🚀</p>
    </div>
  );
}
