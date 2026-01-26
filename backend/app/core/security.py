from typing import Any

import httpx
from jose import jwt

from .config import settings


async def fetch_jwks() -> dict[str, Any]:
    if not settings.okta_issuer:
        raise RuntimeError("OKTA_ISSUER is not configured")

    jwks_url = f"{settings.okta_issuer.rstrip('/')}/v1/keys"
    async with httpx.AsyncClient(timeout=10) as client:
        response = await client.get(jwks_url)
        response.raise_for_status()
        return response.json()


async def verify_token(token: str) -> dict[str, Any]:
    jwks = await fetch_jwks()
    return jwt.decode(
        token,
        jwks,
        algorithms=["RS256"],
        audience=settings.okta_audience,
        issuer=settings.okta_issuer,
    )
