"use client";

import { useQuery } from "@tanstack/react-query";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

async function fetchHealth() {
  const response = await fetch(`${apiBaseUrl}/health`);
  if (!response.ok) {
    throw new Error("Health check failed");
  }
  return response.json() as Promise<{ status: string }>;
}

export default function HealthBadge() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["health"],
    queryFn: fetchHealth,
    retry: 1,
    refetchOnWindowFocus: false
  });

  if (isLoading) {
    return <span className="text-xs text-slate-400">Checking API…</span>;
  }

  if (isError) {
    return <span className="text-xs text-amber-200">API offline</span>;
  }

  return <span className="text-xs text-emerald-200">API {data?.status ?? "ready"}</span>;
}
