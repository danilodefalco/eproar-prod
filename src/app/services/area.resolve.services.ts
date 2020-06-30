import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Area } from '../models/area.model';
import { AreaService } from './area.service';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class AreaResolveService implements Resolve<Area>{

    constructor(
        private areaService: AreaService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const result = this.areaService
            .getById(route.params['id'])
            .once('value')
            .then((a) => {
                const data = a.val() as Area;
                const id = a.key;
                return { id, ...data };
            });

        return result;
    }
}