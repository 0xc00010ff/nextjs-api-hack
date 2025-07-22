import { type NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/reddit-yc:
 *   get:
 *     summary: Get Y Combinator posts from Reddit
 *     description: Fetches the latest posts from the Y Combinator subreddit (r/ycombinator) and returns them as JSON
 *     tags:
 *       - Reddit
 *     responses:
 *       200:
 *         description: Successfully retrieved Y Combinator posts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: "Check this out!"
 *                 url:
 *                   type: string
 *                   example: "https://www.reddit.com/r/ycombinator/comments/1234567890"
 *       500:
 *         description: Error fetching data from Reddit
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to fetch Reddit data"
 */
export async function GET(request: NextRequest) {
  try {
    // Fetch data from Reddit's Y Combinator subreddit
    const response = await fetch("https://www.reddit.com/r/ycombinator.json");

    if (!response.ok) {
      throw new Error(`Reddit API responded with status: ${response.status}`);
    }

    const data = await response.json();
    const posts = data.data.children.map((post: any) => ({
      title: post.data.title,
      url: post.data.url,
    }));

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching Reddit data:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch Reddit data",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
