type TextRecord = Record<string, string>;

export function hasRequiredTextFields<T extends TextRecord>(item: T, fields: Array<keyof T>) {
  return fields.every((field) => item[field].trim().length > 0);
}

export function findEmptyTextFields<T extends TextRecord>(item: T, fields: Array<keyof T>) {
  return fields.filter((field) => item[field].trim().length === 0);
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
