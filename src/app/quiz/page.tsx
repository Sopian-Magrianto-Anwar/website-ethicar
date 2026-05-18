import QuizSystem from "@/components/QuizSystem";

export default function QuizPage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '90vh', paddingBottom: '60px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Quiz Etika Berkendara</h1>
          <p style={{ color: '#94a3b8' }}>Uji pemahaman teori Anda tentang keselamatan jalan raya.</p>
        </div>
        <QuizSystem />
      </div>
    </div>
  );
}
