export default interface IMunicipality {
    munname: string,
    department: {
        depname: string,
        isocode: string,
        zone: {
            zonename: string
        }
    },
    depname: string,
    isocode: string
}
