/**
 * Sidebar labels on this site mostly repeat their parent's name
 * ("Temperature & Humidity Introduction" under "Temperature & Humidity"),
 * which makes nearly every item wrap to two or three lines. The sidebar
 * shows the label with that prefix removed; everything else (page title,
 * search, pagination, breadcrumbs) still uses the full label.
 *
 * The parent's label reaches each item through React context, provided by
 * the Category wrapper and read by the Link and Category wrappers.
 */
import {createContext} from 'react';

export const ParentLabelContext = createContext<string | undefined>(undefined);

const isWordChar = (c: string) => /[\p{L}\p{N}]/u.test(c);

const normalize = (s: string) =>
  Array.from(s.toLowerCase()).filter(isWordChar).join('');

/**
 * Returns `label` without a leading `parent`, compared letter-for-letter
 * while ignoring case, spacing and punctuation, so "LoRaWAN® Controller
 * (MacSet) Specifications" still matches a parent of
 * "LoRaWAN® Controller(MacSet)". The match must end on a word boundary and
 * leave something behind; otherwise the label is returned unchanged.
 */
export function stripParentPrefix(label: string, parent?: string): string {
  if (!parent) {
    return label;
  }
  const target = normalize(parent);
  if (target.length < 3) {
    return label;
  }

  const chars = Array.from(label);
  let consumed = 0;
  let i = 0;
  while (i < chars.length && consumed < target.length) {
    const c = chars[i]!.toLowerCase();
    if (isWordChar(c)) {
      if (c !== target[consumed]) {
        return label;
      }
      consumed += 1;
    }
    i += 1;
  }
  if (consumed < target.length) {
    return label;
  }
  // "Temp" must not shorten "Temperature": the prefix has to end a word.
  if (i < chars.length && isWordChar(chars[i]!)) {
    return label;
  }

  const rest = chars.slice(i).join('').replace(/^[^\p{L}\p{N}]+/u, '').trim();
  return rest.length >= 2 ? rest : label;
}
