import { type NextRequest, NextResponse } from "next/server"

/**
 * @swagger
 * /api/example:
 *   get:
 *     summary: Example GET endpoint
 *     description: A simple example endpoint that returns a greeting message
 *     tags:
 *       - Examples
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Optional name parameter for personalized greeting
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, World!"
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *   post:
 *     summary: Example POST endpoint
 *     description: A simple example endpoint that echoes back the request body
 *     tags:
 *       - Examples
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Hello from client"
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 echo:
 *                   type: string
 *                 received_at:
 *                   type: string
 *                   format: date-time
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get("name") || "World"

  return NextResponse.json({
    message: `Hello, ${name}!`,
    timestamp: new Date().toISOString(),
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    return NextResponse.json({
      echo: body.message || "No message provided",
      received_at: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 })
  }
}
