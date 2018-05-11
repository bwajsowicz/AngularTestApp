import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'pm-availability',
    templateUrl: './availability.component.html',
    styleUrls: ['./availability.component.css']
})

export class AvailabilityComponent implements OnChanges{
    @Input() availability: number;
    boxWidth: number;
    ngOnChanges(): void {
        this.boxWidth = this.availability * 86/5;
    }
}