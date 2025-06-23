import { FooterClient } from "./[client-footer]"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FooterClient />
        <div className="wrap-foot">
          <p className="foter-copy">
            Made with ❤️ by Alexandru Cercel ©2025
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
