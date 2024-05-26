import Profile from "containers/pages/Profile/Profile";
import { useRouter } from "next/router";
import React from "react";

export default function HistoryPage() {
  const router = useRouter();
  const { query } = router;
  const userId = query.userId as string;

  return <Profile userId={userId} />;
}
