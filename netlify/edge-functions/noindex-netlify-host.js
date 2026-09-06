/**
 * Host-specific noindex for the Netlify hostname only.
 * howtofixhiccups.netlify.app (and other *.netlify.app hosts) must not be indexed.
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
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
};

export const config = {
  path: "/*"
};
