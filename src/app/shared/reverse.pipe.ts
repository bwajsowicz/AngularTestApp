import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'reverse'
})


export class ReversePipe implements PipeTransform
{
    transform(value: string) : string{
        return Array.from(value).reverse().join('');
    }
}