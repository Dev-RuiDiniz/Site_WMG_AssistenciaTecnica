export function hasRequiredTextFields<T extends object, K extends keyof T>(item: T, fields: K[]) {
  return fields.every((field) => String(item[field] ?? '').trim().length > 0);
}

export function findEmptyTextFields<T extends object, K extends keyof T>(item: T, fields: K[]) {
  return fields.filter((field) => String(item[field] ?? '').trim().length === 0);
}

export function hasUniqueSlugs(items: Array<{ slug: string }>) {
  const slugs = items.map((item) => item.slug);
  return new Set(slugs).size === slugs.length;
}

export function findDuplicateSlugs(items: Array<{ slug: string }>) {
  const seen = new Set<string>();
  const duplicated = new Set<string>();

  for (const item of items) {
    if (seen.has(item.slug)) {
      duplicated.add(item.slug);
    }

    seen.add(item.slug);
  }

  return Array.from(duplicated);
}
