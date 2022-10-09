// /<reference types="react" />

declare module 'Layout/Layout' {
  const Layout: React.ComponentType<{children: any, lang?: string}>

  export default Layout
}

declare module 'ListData/ListCharacters' {
  const ListCharacters: React.ComponentType<{lang?: string}>

  export default ListCharacters
}

declare module 'Languages/ListLanguages' {

  const ListLanguages: React.ComponentType<{
    languages: string[],
    getValueSelected?:( value: string ) => void }>

  export default ListLanguages
}
