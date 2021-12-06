import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    exports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule
    ]
})
export class MaterialModule { }