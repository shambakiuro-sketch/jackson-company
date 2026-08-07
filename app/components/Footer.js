export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} Jackson Construction Co., Inc. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#95a5a6' }}>
          3 Centennial Dr Ste G50, Peabody, MA | (351) 230-0018
        </p>
      </div>
    </footer>
  );
}
