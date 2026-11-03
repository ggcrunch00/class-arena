# 배포 페이지와 비슷한 보안 규칙(CSP)을 걸고 game/ 폴더를 띄운다(로컬 점검용)
import http.server, functools, sys, os
CSP = ("default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://unpkg.com; "
       "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com data:; "
       "img-src 'self' data: blob:; connect-src 'self'; media-src 'self' data: blob:; worker-src 'self' blob:")
class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Content-Security-Policy", CSP)
        self.send_header("Cache-Control", "no-store")
        super().end_headers()
    def log_message(self, *a): pass
port = int(sys.argv[1]) if len(sys.argv) > 1 else 8130
http.server.ThreadingHTTPServer(("127.0.0.1", port), functools.partial(H, directory=os.path.join(os.path.dirname(__file__), "..", "game"))).serve_forever()
