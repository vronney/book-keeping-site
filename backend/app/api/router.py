from fastapi import APIRouter

from .health import router as health_router
from .profile import router as profile_router

router = APIRouter()
router.include_router(health_router)
router.include_router(profile_router, prefix="/secure", tags=["secure"])
