from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadsSerializer

class LeadsViewset(viewsets.ModelViewSet):
    # queryset = Lead.objects.all()
    permission_classes = [
        # permissions.AllowAny
        permissions.IsAuthenticated
    ]
    serializer_class = LeadsSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)