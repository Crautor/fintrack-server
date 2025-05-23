export function hateoas_item(resource, baseUrl) {
  const selfHref = baseUrl.includes(`/${resource.expenseId}`) ? baseUrl : `${baseUrl}/${resource.expenseId}`;

  const allHref = baseUrl.includes(`/${resource.expenseId}`) ? baseUrl.substring(0, baseUrl.lastIndexOf('/')) : baseUrl;

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
