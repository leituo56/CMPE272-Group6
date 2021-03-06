from django.conf.urls import patterns, include, url
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'SocialNwk.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'', include('Photographer.urls', namespace='photo')),
    url(r'^admin/', include(admin.site.urls)),
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)   # This line only work in DEBUG mode

urlpatterns += patterns('',
    url(r'^api-auth/', include('rest_framework.urls',namespace='rest_framework')),
)
