import { elSalvadorCode } from '~~/utils/el-salvador-code'

export const redirectMap = (maps: string | null, router = useRouter()) => {
  if (maps) {
    const slvCodeValue = Object.values(elSalvadorCode)
    const dep: any[] = slvCodeValue.filter((val: any) => val.municipalities[maps] !== undefined)
    if (dep.length == 1) {
      const municipality = dep[0].municipalities[maps]
      if (useSecureParams(municipality)) {
        const p = dep[0].name.toLowerCase().split(' ').join('-')
        router.push({
          path: `/map/${p}/${municipality.toLowerCase().split(' ').join('-')}`
        })
      }
    }
  }
}