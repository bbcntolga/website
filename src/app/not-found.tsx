export const dynamic = 'force-static'

import { redirect } from 'next/navigation';

export default function NotFound() {
  redirect("/");
}
