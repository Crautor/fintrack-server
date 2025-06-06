export function hateoas_item(resource, baseUrl) {
  const cleanBaseUrl = baseUrl.replace(/\/$/, '');

  const selfHref = cleanBaseUrl.includes(`/${resource.categoryId}`)
    ? cleanBaseUrl
    : `${cleanBaseUrl}/${resource.categoryId}`;

  const allHref = cleanBaseUrl.includes(`/${resource.categoryId}`)
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
