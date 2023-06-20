import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import { AuditData } from "@/types";
import Audit from "@/models/Audit";

export default class AuditCollection extends Collection<Audit> {
  model(): typeof Audit {
    return Audit;
  }

  routes(): Record<string, any> {
    return {
      fetch: "audits.index",
      list: "audits.list",
    };
  }

  async list(): Promise<Response<AuditData[]>> {
    return await this.createCustomRequest("list");
  }
}
