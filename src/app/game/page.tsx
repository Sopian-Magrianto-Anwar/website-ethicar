import MiniGame from "@/components/MiniGame";

export default function GamePage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '90vh', paddingBottom: '60px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Game Simulasi AI</h1>
          <p style={{ color: '#94a3b8' }}>Hadapi situasi jalanan secara langsung dan ambil keputusan cepat.</p>
        </div>
        <MiniGame />
      </div>
    </div>
  );
}
