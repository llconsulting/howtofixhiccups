/**
 * Runs on every deploy context, including production.
 * howtofixhiccups.netlify.app and other *.netlify.app hosts stay noindex.
 * howtofixhiccups.com is never rewritten and never noindexed here.
 */
export default async (request, context) => {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  if (!host.endsWith(".netlify.app")) {
    return;
  }

  const response = await context.next();
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex, nofollow");

  const type = headers.get("content-type") || "";
  if (!type.toLowerCase().includes("text/html")) {
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }

  const html = await response.text();
  const next = html.replace(
    /(<meta\s+name=["']robots["']\s+content=["'])index,\s*follow(["']\s*>)/gi,
    "$1noindex, nofollow$2"
  );
  return new Response(next, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
};

export const config = {
  path: "/*"
};
