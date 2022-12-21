export default interface ITeam {
    name: string,
    occupation: string,
    image: string,
    nickname?: string,
    socialLinks?: [
        {
            name: string,
            url: string,
            icon?: string,
            key?: string            
        }
    ]
}