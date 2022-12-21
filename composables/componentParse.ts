import {pascalCase} from 'scule'

export const useComponentParse = (name: string) : string => {
    name = name.split(' ').join('-')
    return pascalCase<string>(name)
}