/**
 * Preview HTML pass-through. Keeps primary nav at the three product links
 * even if static HTML later grows a fourth item.
 */
export default async (request, context) => {
  const response = await context.next();
  const type = response.headers.get("content-type") || "";
  if (!type.toLowerCase().includes("text/html")) {
    return response;
  }

  const html = await response.text();
  const next = html.replace(
    /(<nav class="nav" aria-label="Primary">)([\s\S]*?)(<\/nav>)/,
    (_, open, body, close) => {
      const cleaned = String(body)
        .replace(/\s*<!--[\s\S]*?-->/g, "")
        .replace(/\s*<a\b[^>]*href=["']\/privacy\/["'][^>]*>[\s\S]*?<\/a>/gi, "");
      return `${open}${cleaned}${close}`;
    }
  );

  return new Response(next, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
};

export const config = {
  path: "/*"
};
