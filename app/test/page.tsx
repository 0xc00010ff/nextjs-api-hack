import { getApiDocs } from "@/lib/swagger"
import ReactSwagger from "./react-swagger"

export default async function ApiDocPage() {
  const spec = await getApiDocs()

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">API Testing Environment</h1>
          <p className="text-gray-600">
            Build and test APIs for your Zapier workflows. All API routes are automatically documented below.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <ReactSwagger spec={spec} />
        </div>
      </div>
    </div>
  )
}
