// Lítill aðskilinn hjálparhluti: afleiða lykilorðs, ekki hreint lykilorð.
// Heimild: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveBits
async function hashPassword(password, salt) {
  var encoder = new TextEncoder();
  var key = await crypto.subtle.importKey(
    'raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits']
  );
  var settings = {
    name: 'PBKDF2', salt: encoder.encode(salt), iterations: 100000, hash: 'SHA-256'
  };
  var bits = await crypto.subtle.deriveBits(settings, key, 256);
  return Array.from(new Uint8Array(bits)).join('-');
}
