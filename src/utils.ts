export const with0xPrefix = (str: string): `0x${string}` => (str.startsWith("0x") ? str : `0x${str}`) as `0x${string}`;
