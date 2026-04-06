export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Amplify Deployment Success 🚀</h1>
      <p>Environment Variable:</p>
      <strong>{process.env.NEXT_PUBLIC_API_URL}</strong>
    </main>
  );
}
