# NextJS API Testing Environment

A simple NextJS application designed for building and testing APIs. This environment automatically generates Swagger documentation for all your API routes. You might use this to quickly make a webhook, run some custom code from an agentic workflow, Zapier, or similar.

## Features

- 📝 **Interactive API Testing**: Built-in Swagger UI for testing APIs directly in the browser
- 🔄 **Hot Reload**: Changes to API routes are immediately reflected in the documentation
- 📊 **Example APIs**: Includes sample APIs like Reddit Y Combinator feed fetcher

## Getting Started

0. **Clone the repo**
   ```
   git clone git@github.com:0xc00010ff/nextjs-api-hack.git
   cd nextjs-api-hack
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run Development Server**

   ```bash
   npm run dev
   ```

4. **Open Swagger Dashboard**  
   Navigate to `http://localhost:3000` - you'll be automatically redirected to the Swagger documentation at `/test`

## Adding New API Routes

1.  Create a new file in the `app/api/` directory (e.g., `app/api/my-endpoint/route.ts`)

2.  Add JSDoc comments with Swagger annotations:

    ```typescript
    /\*\*

    - @swagger
    - /api/my-endpoint:
    - get:
    -     summary: Description of your endpoint
    -     description: Detailed description
    -     tags:
    -       - YourTag
    -     responses:
    -       200:
    -         description: Success response
      \*/
      export async function GET() {
      return NextResponse.json({ message: "Hello World" });
      }
    ```

3.  The endpoint will automatically appear in the Swagger documentation!

## Example APIs Included

- **`/api/reddit-yc`**: Fetches latest posts from Y Combinator subreddit
- **`/api/health`**: Health check endpoint
- **`/api/example`**: Example GET/POST endpoints with parameters

## Project Structure

```
├── app/
│ ├── api/ # API routes directory
│ │ ├── reddit-yc/ # Example Reddit API
│ │ ├── health/ # Health check API
│ │ └── example/ # Example API with GET/POST
│ ├── test/ # Swagger documentation pages
│ └── layout.tsx # Root layout
├── lib/
│ └── swagger.ts # Swagger configuration
└── README.md
```

## Swagger Documentation

The Swagger documentation is automatically generated from your JSDoc comments. Key features:

- **Interactive Testing**: Test APIs directly from the browser
- **Request/Response Examples**: See example payloads and responses
- **Parameter Documentation**: All query parameters and request bodies are documented
- **Error Handling**: Document different response codes and error scenarios

## Perfect for Agents Integration

This environment is specifically designed for APIs that will be consumed by Agents:

- Test your APIs locally before deploying
- Ensure proper JSON responses
- Validate error handling
- Document all endpoints for team collaboration

## Tips for APIs

1. **Always return JSON**: Agents and automations work best with JSON responses
2. **Use proper HTTP status codes**: 200 for success, 4xx for client errors, 5xx for server errors
3. **Include error messages**: Help users understand what went wrong
