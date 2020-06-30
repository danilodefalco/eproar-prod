import { Injectable } from "@angular/core";
import { Area } from '../models/area.model';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class AreaService {

    private collection: string = 'area';

    constructor(
        private db: AngularFireDatabase
    ) { }

    async insert(area: Area): Promise<string> {
        const result = await this.db.list(this.collection).push(area);
        return result.key;
    }

    async update(area: Area, key: string) {
        await this.db.list(this.collection).update(key, area);
    }

    getById(id) {
        const ref = this.db.database.ref(this.collection)
        return ref.child(id);
    }

    getAllByEmail(email) {
        return this.db
            .list(this.collection, a => a
                .orderByChild('email')
                .equalTo(email))
            .snapshotChanges();
    }

    getAll() {
        return this.db.list(this.collection)
            .snapshotChanges();
    }

    delete(key: string) {
        this.db.object(`${this.collection}/${key}`).remove();
    }
}