export function hateoas_item(resource, baseUrl) {
  const cleanBaseUrl = baseUrl.replace(/\/$/, '');

  const selfHref = cleanBaseUrl.includes(`/${resource.savingId}`)
    ? cleanBaseUrl
    : `${cleanBaseUrl}/${resource.savingId}`;

  const allHref = cleanBaseUrl.includes(`/${resource.savingId}`)
    ? cleanBaseUrl.substring(0, cleanBaseUrl.lastIndexOf('/'))
    : cleanBaseUrl;

  return {
    ...resource,
    _links: {
      self: { href: selfHref },
      all: { href: allHref },
    },
  };
}

export function hateoas_list(resources, baseUrl) {
  return resources.map((r) => hateoas_item(r, baseUrl));
}
