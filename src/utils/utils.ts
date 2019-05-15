
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}


/**Capitalizes only first letter of a given string */
export function capitalizeFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
