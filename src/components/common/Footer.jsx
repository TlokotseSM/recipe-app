export default function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#333', color: 'white', marginTop: '2rem' }}>
      <p>© {new Date().getFullYear()} Recipe App</p>
    </footer>
  );
}