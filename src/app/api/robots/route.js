export async function GET() {
  const robotsContent = `
      User-agent: *
      Allow: /
      Sitemap: https://uxpo.in/sitemap.xml
    `;
  return new Response(robotsContent, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
