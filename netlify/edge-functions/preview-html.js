export default async (request, context) => {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  const html = await response.text();
  const marker = 'aria-label="Primary"';
  const start = html.indexOf(marker);
  if (start === -1) {
    return new Response(html, response);
  }

  const open = html.lastIndexOf("<nav", start);
  const close = html.indexOf("</nav>", start);
  if (open === -1 || close === -1) {
    return new Response(html, response);
  }

  const end = close + "</nav>".length;
  const nav = html.slice(open, end);
  const bodyStart = nav.indexOf(">") + 1;
  const bodyEnd = nav.lastIndexOf("</nav>");
  let body = nav.slice(bodyStart, bodyEnd);
  body = body.replace(/<!--[\s\S]*?-->/g, "");
  body = body.replace(/<a\b[^>]*href=["']\/privacy\/?["'][^>]*>[\s\S]*?<\/a>/gi, "");
  const next = html.slice(0, open) + nav.slice(0, bodyStart) + body + nav.slice(bodyEnd) + html.slice(end);
  return new Response(next, response);
};

export const config = {
  path: "/*",
};
