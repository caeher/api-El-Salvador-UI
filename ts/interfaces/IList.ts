export default interface IList  {
    name: string,
    items: {
        name: string,
        key: string,
        url?: string 
        external?: boolean,
        icon?: string,
    }[]
}