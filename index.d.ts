export type keysType = Record<string, (string|number)>

/**
 * @public
 * @param {string} text string with special words inside [] to replace them
 * @param {keysType} keys object with key and value to be replaced in string
 * @return {string}
*/

export default function stringReplaceKeys (text:string, keys:keysType):string {
  const arrayMatch:Array<string> = Array.from(text.matchAll(/\[([^\][]*)]/g), x => x[1])

  const replace:string = arrayMatch.reduce((previews, currend) => {
    return keys[currend] ? previews.replace(`[${currend}]`, keys[currend]) : previews
  }, text)

  return replace
}
