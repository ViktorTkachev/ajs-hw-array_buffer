import ArrayBufferConverter from '../arraybuffer';
import getBuffer from '../getbuffer';

const converter = new ArrayBufferConverter();

test('should convert an ArrayBuffer to a string', () => {
  const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = getBuffer();
  converter.load(buffer);
  expect(converter.toString()).toEqual(expectedString);
});
