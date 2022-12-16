export default interface IMunicipality {
    munname: string,
    departament: {
        depname: string,
        isocode: string,
        zone: {
            zonename: string
        }
    }
}