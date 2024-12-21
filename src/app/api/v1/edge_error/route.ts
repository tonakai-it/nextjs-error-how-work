import { type NextRequest } from "next/server";

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const mode = req.nextUrl.searchParams.get('mode');
  switch(mode) {
    case 'console':
      console.error('console error log.')
      return Response.json({
        'message': 'Seccessfully console error'
      });
      break;
    case 'throw-new-error':
      throw new Error('Edge runtime error');
      return Response.json({
        'message': 'Seccessfully throwing error'
      });
      break;
    default:
      break;
  }
}