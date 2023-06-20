import { Collection, Model } from "@planetadeleste/vue-mc";
import { Response, Result } from "vue-mc";

import { AuditData } from "./types";

interface Audit extends Model, AuditData {}
class Audit extends Model {}
class AuditCollection extends Collection<Audit> {
    list(): Promise<Response<AuditData[]>>;
}

export { Audit, AuditData, AuditCollection }