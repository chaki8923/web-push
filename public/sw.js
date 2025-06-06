self.addEventListener('push', e => {
    const data = e.data?.json() ?? {title:'No payload', body:''};
    e.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: 'https://fav.farm/🌐'
      })
    );
  });
  