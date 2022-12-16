export default interface IDepartament {
    depname: string,
    isocode: string,
    zone: {
        zonename: string
    },
    muns: {
        munname: string
    }[]
}