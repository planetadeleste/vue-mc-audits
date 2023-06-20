import { UserData } from "@planetadeleste/vue-mc-shopaholic";

export interface AuditData {
  id: number;
  user_type: string;
  user_id: number;
  event: string;
  auditable_type: string;
  auditable_id: number;
  old_values: Record<string, any>;
  new_values: Record<string, any>;
  url: string;
  ip_address: string;
  user_agent: string;
  tags: string;
  created_at: string;
  updated_at: string;
  user: UserData;
}
