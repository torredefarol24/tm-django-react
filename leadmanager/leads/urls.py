from rest_framework import routers
from .api import LeadsViewset

router = routers.DefaultRouter()
router.register("api/leads", LeadsViewset, 'leads')

urlpatterns = router.urls