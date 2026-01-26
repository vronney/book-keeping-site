from fastapi import APIRouter, Depends

from ..core.deps import get_current_user

router = APIRouter()


@router.get("/profile")
async def profile(user: dict = Depends(get_current_user)) -> dict:
    return {
        "sub": user.get("sub"),
        "email": user.get("email"),
        "name": user.get("name")
    }
