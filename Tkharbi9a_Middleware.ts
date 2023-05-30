import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request) {
  if (cookies().get('token') != undefined) {
    const role: Role | undefined = cookies().get('role')?.value;
    if (role == 'Publisher') {
      return NextResponse.next();
    } else {
      return NextResponse.rewrite(new URL('/', 'http://localhost:3000/'));
    }
  } else {
    return NextResponse.rewrite(
      new URL('/', 'http://localhost:3000/'),
    );
  }
}

// Supports both a single string value or an array of matchers
export const config = {
  matcher: ['/admin/:path*'],
};