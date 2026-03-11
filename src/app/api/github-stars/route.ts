export async function GET(req: Request) {
  // Temporary: return a static count to avoid failing when a repo name changes.
  return Response.json({ stars: 0 });
}
