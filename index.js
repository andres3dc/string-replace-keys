'use strict'

/**
 * @public
 * @param {string} text string with special words inside [] to replace them
 * @param keys object with key and value to be replaced in string
 * @return {string}
*/

export default function stringReplaceKeys (text, keys) {
  const arrayMatch= Array.from(text.matchAll(/\[([^\][]*)]/g), x => x[1])

  const replace = arrayMatch.reduce((previews, currend) => {
    return keys[currend] ? previews.replace(`[${currend}]`, keys[currend]) : previews
  }, text)

  return replace
}
